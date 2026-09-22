# Portfólio — Davi Rios

Portfólio profissional construído com Next.js, React, TypeScript e Tailwind CSS,
preparado para publicação na Vercel.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- PostCSS

## Desenvolvimento

Requisitos:

- Node.js 22 ou superior
- npm

Instale as dependências e inicie o projeto:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar a versão de produção:

```bash
npm run build
npm start
```

## Estrutura

```text
app/
  globals.css   Estilos globais e Tailwind CSS
  layout.tsx    Metadados e layout principal
  page.tsx      Conteúdo do portfólio
public/
  favicon.svg
  marca-davi-rios.png
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
```

## Tailwind CSS

O projeto usa Tailwind CSS v4 através do plugin oficial para PostCSS. A importação
fica em `app/globals.css`:

```css
@import "tailwindcss";
```

O restante da identidade visual também é mantido nesse arquivo, sem temas ou
camadas de estilo externas.

## Publicação na Vercel

A Vercel detecta o Next.js automaticamente. Use:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: padrão automático do Next.js

Não é necessário configurar `vercel.json`.
