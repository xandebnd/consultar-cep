import { z } from "zod";

export const addressSchema = z.object({
	cep: z.string(),
	logradouro: z.string().optional(),
	complemento: z.string().optional(),
	bairro: z.string().optional(),
	localidade: z.string().optional(),
	uf: z.string().optional(),
	ibge: z.string().optional(),
	gia: z.string().optional(),
	ddd: z.string().optional(),
	siafi: z.string().optional(),
	regiao: z.string().optional(),
	erro: z.boolean().optional(),
});

export type Address = z.infer<typeof addressSchema>;
