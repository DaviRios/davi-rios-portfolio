export type ProjectVisual = "orvian" | "danielle" | "data" | "events" | "modules" | "cloud";

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  proof: string;
  stack: readonly string[];
  visual: ProjectVisual;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: readonly Project[] = [
  {
    id: "orvian",
    index: "01",
    title: "Orvian",
    category: "Produto autoral · Full stack CMS",
    summary:
      "Um sistema editorial completo: painel React, API modular, persistência relacional e mídia preparada para armazenamento compatível com S3.",
    challenge:
      "Organizar muitos domínios de conteúdo sem transformar o backend em um bloco acoplado ou fragilizar o fluxo editorial.",
    solution:
      "Monorepo Nx com contratos Zod compartilhados, API Fastify, frontend React e PostgreSQL via Prisma. Autenticação usa access token curto e refresh token rotativo.",
    proof: "RBAC ADMIN/EDITOR · soft delete · OpenAPI · Docker · adaptadores local/S3",
    stack: ["React", "Fastify", "TypeScript", "PostgreSQL", "Prisma", "Nx", "Docker"],
    visual: "orvian",
    image: "/projects/orvian-dashboard.png",
    imageAlt: "Tela de acesso do painel editorial Orvian",
    liveUrl: "https://orvian-demo.onrender.com/",
    repoUrl: "https://github.com/DaviRios/Orvian",
  },
  {
    id: "kraft",
    index: "02",
    title: "Kraft / OpenStates",
    category: "Case técnico · Full stack data sync",
    summary:
      "Aplicação que sincroniza dados políticos da OpenStates, persiste um cache relacional e oferece consulta por estado e partido em uma interface React.",
    challenge:
      "Consumir uma API paginada e sujeita a cota sem transferir latência e instabilidade para toda interação do usuário.",
    solution:
      "Fastify controla a sincronização, Prisma faz upsert no PostgreSQL e o frontend consulta apenas o cache. Novas sincronizações respeitam validade de sete dias e concorrência.",
    proof: "51 jurisdições · cache de 7 dias · upsert idempotente · contrato OpenAPI",
    stack: ["React", "Fastify", "Prisma", "PostgreSQL", "TanStack Query", "Docker"],
    visual: "data",
    repoUrl: "https://github.com/DaviRios/KraftWorks-Challenge",
  },
  {
    id: "danielle",
    index: "03",
    title: "Dra. Danielle Godoy",
    category: "Produto digital · Site institucional",
    summary:
      "Experiência editorial para oncologia e hematologia veterinária, construída para comunicar temas delicados com clareza, acolhimento e performance.",
    challenge:
      "Transformar conteúdo médico-veterinário em uma jornada acessível, rápida e simples de manter sem enviar JavaScript desnecessário.",
    solution:
      "Astro gera páginas estáticas; React aparece apenas na experiência interativa de feedbacks. Dados centralizados passam por validação Zod e o pipeline publica na Vercel.",
    proof: "Astro SSG · React island · imagens responsivas · Vitest/Biome · CI/CD",
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "Zod", "Vercel"],
    visual: "danielle",
    image: "/projects/danielle-site.png",
    imageAlt: "Página inicial do site da Dra. Danielle Godoy",
    liveUrl: "https://doutora-onco-hemato.vercel.app/",
    repoUrl: "https://github.com/DaviRios/DrDanielleHematoOnco",
  },
  {
    id: "notifications",
    index: "04",
    title: "Serviço de notificações",
    category: "Projeto profissional · Backend & cloud",
    summary:
      "Serviço Node.js preparado para operar na AWS com entrega conteinerizada, infraestrutura versionada e pipeline contínuo.",
    challenge:
      "Centralizar notificações e tornar a operação repetível entre ambientes, do código ao provisionamento.",
    solution:
      "Responsabilidades de domínio, entrega e infraestrutura separadas, com execução no ECS e recursos descritos em Terraform.",
    proof: "Node.js · ECS · Jenkins · Terraform · infraestrutura reproduzível",
    stack: ["Node.js", "AWS", "ECS", "Jenkins", "Terraform"],
    visual: "events",
  },
  {
    id: "corporate",
    index: "05",
    title: "Aplicações corporativas",
    category: "Projeto profissional · Arquitetura modular",
    summary:
      "Interfaces React de longa duração, organizadas por domínio para manter evolução, testes e colaboração previsíveis.",
    challenge:
      "Escalar fluxos de negócio sem transformar o produto em um frontend monolítico e difícil de evoluir.",
    solution:
      "Módulos guiados por domínio, contratos compartilhados e fronteiras claras entre funcionalidades e componentes comuns.",
    proof: "React · TypeScript · NX · organização por domínio",
    stack: ["React", "TypeScript", "NX Monorepo", "Arquitetura modular"],
    visual: "modules",
  },
  {
    id: "terraform-vm",
    index: "06",
    title: "VM completa na AWS",
    category: "Infraestrutura como código",
    summary:
      "Provisionamento reproduzível de uma máquina virtual e de sua base de rede e segurança usando Terraform.",
    challenge:
      "Substituir configuração manual por infraestrutura auditável, parametrizada e replicável entre ambientes.",
    solution:
      "Recursos declarativos para rede, regras de acesso, instância e outputs, com composição pronta para reuso.",
    proof: "VPC · security groups · EC2 · variáveis · outputs",
    stack: ["Terraform", "AWS", "EC2", "VPC", "IaC"],
    visual: "cloud",
  },
];

export const experience = [
  {
    mark: "IL",
    wordmark: "ilegra",
    system: "CMS & sistemas internos",
    period: "2025 — 2026",
    company: "Ilegra",
    context: "Produtos internos",
    summary:
      "Desenvolvimento de sistemas corporativos, incluindo um CMS criado do zero e automações para áreas internas.",
    details: [
      "Redução do lançamento de horas de aproximadamente 15 para 2 segundos",
      "Correções, novas funcionalidades e redesign para diferentes departamentos",
      "Backend Java/Spring Boot, documentação e decisões de arquitetura",
    ],
    technologies: ["Java", "Spring Boot", "React", "TypeScript"],
  },
  {
    mark: "JD",
    wordmark: "ilegra × John Deere",
    system: "Pagamentos & integrações",
    period: "2025",
    company: "Ilegra · John Deere",
    context: "Produto See & Spray",
    summary:
      "Serviços backend em Node.js, TypeScript e NestJS para funcionalidades financeiras de um produto conectado ao agronegócio.",
    details: [
      "Mensageria, integrações entre serviços e evolução de APIs REST",
      "AWS, Docker, Terraform e Jenkins no ciclo de entrega",
      "Correções em produção e colaboração técnica multidisciplinar",
    ],
    technologies: ["Node.js", "NestJS", "AWS", "Terraform", "Jenkins"],
  },
  {
    mark: "FT",
    wordmark: "FITec",
    system: "Firmware & embedded",
    period: "2022 — 2025",
    company: "FITec",
    context: "Sistemas embarcados",
    summary:
      "Firmware e integrações com microcontroladores para telecomunicações, energia e automação industrial.",
    details: [
      "Comunicação entre dispositivos e integração de hardware",
      "Otimização de desempenho, estabilidade e uso de recursos",
      "Testes automatizados em equipes multidisciplinares",
    ],
    technologies: ["C/C++", "Microcontroladores", "Testes", "Hardware"],
  },
] as const;

export const skills = [
  {
    layer: "Experiência",
    title: "Interfaces que explicam o produto",
    items: ["React", "Astro", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    layer: "Serviços",
    title: "APIs que sustentam a regra de negócio",
    items: ["Node.js", "Fastify", "NestJS", "Java", "Spring Boot", "REST"],
  },
  {
    layer: "Dados",
    title: "Contratos e persistência previsíveis",
    items: ["PostgreSQL", "Prisma", "MySQL", "MongoDB", "Zod", "OpenAPI"],
  },
  {
    layer: "Operação",
    title: "Entrega reproduzível em produção",
    items: ["AWS", "ECS", "Docker", "Terraform", "Jenkins", "CI/CD"],
  },
] as const;
