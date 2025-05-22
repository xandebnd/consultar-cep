// hooks/useCepSearch.ts
import { useState } from "react";
import { type Address, addressSchema } from "../interfaces/Address";

export function useCepSearch() {
	const [address, setAddress] = useState<Address | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const search = async (cep: string) => {
		setLoading(true);
		setError("");
		setAddress(null);

		try {
			const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
			const data = await res.json();

			const parsed = addressSchema.safeParse(data);
			if (!parsed.success) {
				setError("Erro ao validar os dados do endereço.");
				return;
			}

			if (parsed.data.erro) {
				setError("CEP não encontrado.");
				return;
			}

			setAddress(parsed.data);
		} catch {
			setError("Erro ao consultar o CEP.");
		} finally {
			setLoading(false);
		}
	};

	return { address, loading, error, search };
}
