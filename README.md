# Consultar CEP

Aplicação web para consulta de endereços a partir do CEP, desenvolvida com Next.js, React, TypeScript e TailwindCSS.

## Funcionalidades

- Consulta de informações de endereço a partir do CEP digitado
- Validação de CEP (apenas números, 8 dígitos)
- Exibição de logradouro, bairro, cidade e estado
- Feedback visual para erros e carregamento
- Interface moderna e responsiva

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) para validação de dados
- [React Hook Form](https://react-hook-form.com/) para gerenciamento de formulários
- [Shadcn](https://ui.shadcn.com/) para componentes de design

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/consultar-cep.git
   cd consultar-cep
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## Estrutura de Pastas

```
src/
  app/
    _components/
    page.tsx
  hooks/
    useCepSearch.ts
  interfaces/
    Address.ts
```

## Observações

- O projeto utiliza a API pública [ViaCEP](https://viacep.com.br/) para buscar os dados dos endereços.
- Para produção, recomenda-se tratar limites de requisições e possíveis indisponibilidades da API.

## Licença

Este projeto está sob a licença MIT.
