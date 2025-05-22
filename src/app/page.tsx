"use client";

import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../app/_components/ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCepSearch } from "../hooks/useCepSearch";
import AddressItem from "./_components/address-item";
import { Button } from "./_components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "./_components/ui/form";
import { Input } from "./_components/ui/input";

const formSchema = z.object({
  cep: z.string().regex(/^\d{8}$/, "CEP inválido"),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cep: "",
    },
  });

  const { address, loading, error, search } = useCepSearch();

  const onSubmit = async ({ cep }: z.infer<typeof formSchema>) => {
    await search(cep);
    form.reset();
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      <Card className="w-full max-w-md p-6 mx-auto border rounded-2xl shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-blue-700 mb-1">
            Consulte o CEP
          </CardTitle>
          <p className="text-gray-500 text-sm">
            Digite o CEP desejado para buscar informações.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">CEP:</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o CEP (somente números)"
                        maxLength={8}
                        className="border-2 border-blue-200 focus:border-blue-500 rounded-lg px-4 py-2 text-lg transition text-black"
                        {...field}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, "");
                          if (value.length > 5) {
                            value = value.replace(/^(\d{5})(\d)/, "$1-$2");
                          }
                          field.onChange(value.replace("-", ""));
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
                disabled={loading}
              >
                {loading ? "Consultando..." : "Consultar"}
              </Button>
              {!error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </form>
          </Form>
        </CardContent>

        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        {address && (
          <CardFooter className="flex flex-col gap-3 mt-2 p-4 bg-blue-50 border border-blue-200 rounded-xl shadow-inner animate-fade-in">
            <AddressItem>
              Logradouro:{" "}
              <span className="font-normal">
                {address.logradouro || (
                  <span className="text-gray-400">Não informado</span>
                )}
              </span>
            </AddressItem>
            <AddressItem>
              Bairro:{" "}
              <span className="font-normal">
                {address.bairro || (
                  <span className="text-gray-400">Não informado</span>
                )}
              </span>
            </AddressItem>
            <AddressItem>
              Cidade:{" "}
              <span className="font-normal">
                {address.localidade || (
                  <span className="text-gray-400">Não informado</span>
                )}
              </span>
            </AddressItem>
            <AddressItem>
              Estado:{" "}
              <span className="font-normal">
                {address.uf || (
                  <span className="text-gray-400">Não informado</span>
                )}
              </span>
            </AddressItem>
          </CardFooter>
        )}
      </Card>
    </main>
  );
}
