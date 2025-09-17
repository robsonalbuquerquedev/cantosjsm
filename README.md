# CantosJSM

**CantosJSM** é um banco de cantos litúrgicos colaborativo, desenvolvido com **Next.js** e integrado ao **Firebase Realtime Database**. Permite adicionar, buscar e listar músicas com seus respectivos tons e letras.

## Tecnologias

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

## Instalação

Clone o repositório:

```bash
git clone https://github.com/robsonalbuquerquedev/cantosjsm.git
cd cantosjsm
```

Instale as dependências:

```bash
npm install
# ou
yarn
# ou
pnpm install
```

```bash
Crie um arquivo .env.local na raiz do projeto com suas credenciais do Firebase:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project_id-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Executando o projeto

Para rodar em desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra http://localhost:3000 no navegador.

## Funcionalidades

- Adicionar músicas com título, tom e letra.
- Buscar músicas na base interna.
- Listagem de músicas com filtros.
- Modal de edição e exclusão de músicas.
- Fundo visual agradável e responsivo com overlay para legibilidade.

## Deploy

O projeto pode ser facilmente hospedado no Vercel. Basta seguir a documentação oficial: [Deploy Next.js na Vercel](https://nextjs.org/docs/app/getting-started/deploying)

## Contribuição

Contribuições são bem-vindas!
Basta abrir uma issue ou pull request com melhorias, correções ou novas funcionalidades.

Licença

[MIT License](LICENSE).
