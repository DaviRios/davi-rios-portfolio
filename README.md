# Portfólio — Davi Rios

Portfólio full stack de Davi Rios, construído com Next.js, React, TypeScript e
Tailwind CSS e preparado para publicação na Vercel.

O projeto usa uma experiência one page com um explorador interativo de cases.
Em vez de esconder os projetos em um carrossel, todos permanecem visíveis em um
menu acessível por mouse e teclado, com problema, decisão de engenharia, stack,
links públicos e prévias reais dos produtos.

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
  page.tsx      Composição da one page
components/
  portfolio/
    content.ts      Dados de projetos, experiência e stack
    projects.tsx    Explorador interativo dos cases
    hero.tsx        Apresentação full stack e indicadores
    experience.tsx  Experiência profissional
    skills.tsx      Mapa das quatro camadas da entrega
    profile.tsx     Perfil e identidade visual
    contact.tsx     Contato e rodapé
public/
  favicon.svg
  card.png
  projects/         Prévias dos projetos públicos
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

A maior parte do layout usa utilities diretamente nos componentes. O arquivo
global mantém somente tokens da marca, estilos-base e keyframes compartilhados.
O efeito metálico do monograma fica isolado em um CSS Module.

## Projetos apresentados

- Orvian — CMS full stack com React, Fastify, PostgreSQL, Prisma e Nx;
- Kraft/OpenStates — sincronização de API externa, cache relacional e React;
- site institucional da Dra. Danielle Godoy — Astro, React, Tailwind e Zod;
- serviço de notificações em Node.js, AWS, ECS, Jenkins e Terraform;
- aplicações corporativas React com arquitetura modular;
- VM completa na AWS provisionada com Terraform.

## Publicação na Vercel

A Vercel detecta o Next.js automaticamente. Use:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: padrão automático do Next.js

Não é necessário configurar `vercel.json`.
