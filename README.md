This is a Boilerplate make with [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Documentation

#### Commit rules

    1. [conventionalcommits](https://www.conventionalcommits.org/en/v1.0.0/)
    2. {OPTIONAL BUT it makes me happy :green_heart: }: [gitmoji](https://gitmoji.dev/)

#### Add translations

    1. Go to folder public/lang langName.json
    2. Go to src/providers/lang/Provider.tsx
    3. Then add import lang json file
    4. Then add lang object to message const.

#### Initial meta data page

    1. Go to src/appConfig.ts and edit

#### Add WEB3 EVM Chain

    1. Go to src/providers/web3/chain.ts
    2. Add Custom main and testnet chain

## Code styles rules cross IDEs

#### For visual studio code

###### Install

```http
  prettier and eslint plugins to editor
```

## Authors

- [@werdnajoc](https://github.com/werdnajoc)
