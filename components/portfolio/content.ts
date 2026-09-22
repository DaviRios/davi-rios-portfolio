export const projects = [
  {
    index: "01",
    eyebrow: "Backend · Cloud · DevOps",
    title: "Serviço de notificações",
    summary:
      "Serviço Node.js preparado para operar na AWS com entrega conteinerizada, infraestrutura versionada e pipeline contínuo.",
    challenge: "Centralizar notificações e tornar a operação repetível entre ambientes.",
    decision: "Separar domínio, entrega e infraestrutura em responsabilidades claras.",
    delivery: "Deploy no ECS, pipeline Jenkins e recursos AWS descritos em Terraform.",
    stack: ["Node.js", "AWS", "ECS", "Jenkins", "Terraform"],
  },
  {
    index: "02",
    eyebrow: "Frontend · Arquitetura",
    title: "Aplicações corporativas modulares",
    summary:
      "Interfaces React de longa duração, organizadas por domínios para manter evolução, testes e colaboração previsíveis.",
    challenge: "Escalar funcionalidades sem transformar o produto em um bloco acoplado.",
    decision: "Arquitetura modular guiada por domínio, contratos e responsabilidades.",
    delivery: "Fluxos corporativos consistentes com React e TypeScript.",
    stack: ["React", "TypeScript", "Arquitetura modular"],
  },
  {
    index: "03",
    eyebrow: "Full stack · APIs",
    title: "Desafio OpenStates completo",
    summary:
      "Solução full stack cobrindo API, persistência, interface e ambiente conteinerizado em um fluxo coeso.",
    challenge: "Conectar experiência de uso, regras de negócio e dados em uma entrega completa.",
    decision: "Contratos de API claros e uma camada de dados isolada com Prisma.",
    delivery: "API Fastify, PostgreSQL, cliente React e execução com Docker.",
    stack: ["Fastify", "Prisma", "PostgreSQL", "React", "Docker"],
  },
  {
    index: "04",
    eyebrow: "Infraestrutura como código",
    title: "VM completa na AWS com Terraform",
    summary:
      "Provisionamento reproduzível de uma máquina virtual e de sua base de rede e segurança usando infraestrutura como código.",
    challenge: "Substituir configuração manual por uma infraestrutura auditável e replicável.",
    decision: "Recursos declarativos, parâmetros explícitos e composição reutilizável.",
    delivery: "Instância, rede, regras de acesso e outputs organizados em Terraform.",
    stack: ["Terraform", "AWS", "EC2", "IaC"],
  },
] as const;

export const experience = [
  {
    period: "2026",
    company: "Ilegra",
    context: "Time interno",
    summary:
      "Backend Java e Spring Boot para automações internas de RH, Financeiro, Marketing e Segurança.",
    details: [
      "APIs REST e evolução de sistemas em produção",
      "Correções, documentação técnica e decisões de arquitetura",
      "Code reviews e colaboração multidisciplinar",
    ],
  },
  {
    period: "2025",
    company: "Ilegra",
    context: "Cliente John Deere",
    summary:
      "Backend Node.js, TypeScript e NestJS para o sistema de pagamentos do produto See & Spray.",
    details: [
      "Integrações entre serviços e manutenção evolutiva",
      "AWS, Docker, Terraform e pipelines de CI/CD",
      "Resolução de problemas em produção e discussões técnicas",
    ],
  },
  {
    period: "2022 — 2025",
    company: "FITec",
    context: "Firmware e sistemas embarcados",
    summary:
      "Desenvolvimento de firmware para telecomunicações, energia, TI e automação industrial.",
    details: [
      "Integração de microcontroladores e comunicação entre dispositivos",
      "Otimização de desempenho, estabilidade e consumo de recursos",
      "Testes automatizados em projetos de agronegócio, saúde e indústria",
    ],
  },
] as const;

export const skills = [
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Fastify", "Java", "Spring Boot", "APIs REST"],
  },
  {
    title: "Cloud & entrega",
    items: ["AWS", "ECS", "Docker", "Terraform", "Jenkins", "GitHub Actions"],
  },
  {
    title: "Frontend & arquitetura",
    items: ["React", "TypeScript", "JavaScript", "NX Monorepo", "Arquitetura modular"],
  },
  {
    title: "Dados & qualidade",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Jest", "Code Review"],
  },
] as const;
