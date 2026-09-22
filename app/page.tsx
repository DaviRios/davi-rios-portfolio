const projects = [
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
];

const experience = [
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
];

const skills = [
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
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Davi Rios — início">
          <span className="brand-mark">D</span>
          <span className="brand-copy">
            <strong>Davi Rios</strong>
            <small>Software Engineer</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#cases">Cases</a>
          <a href="#experiencia">Experiência</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="kicker">Backend · Cloud · Produto</p>
          <h1>
            Engenharia que transforma
            <span>complexidade em confiança.</span>
          </h1>
          <p className="hero-intro">
            Sou Davi Rios, engenheiro de software com 5 anos de experiência entre
            sistemas embarcados e aplicações backend em produção.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#cases">
              Explorar cases
            </a>
            <a className="text-action" href="#contato">
              Falar comigo <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-seal" aria-label="Monograma D de Davi Rios">
          <span className="seal-orbit seal-orbit-outer" />
          <span className="seal-orbit seal-orbit-inner" />
          <span className="seal-letter">D</span>
          <span className="seal-glint" />
        </div>

        <dl className="hero-facts">
          <div>
            <dt>05</dt>
            <dd>anos construindo software</dd>
          </div>
          <div>
            <dt>04</dt>
            <dd>cases em destaque</dd>
          </div>
          <div>
            <dt>BR</dt>
            <dd>Campinas · Curitiba</dd>
          </div>
        </dl>
      </section>

      <section className="cases-preview" id="cases">
        <div className="section-heading">
          <p className="kicker">Trabalho selecionado</p>
          <h2>Projetos que unem código, arquitetura e operação.</h2>
        </div>

        <div className="case-grid">
          {projects.map((project) => (
            <article className="case-card" key={project.index}>
              <div className="case-topline">
                <span>{project.index}</span>
                <p>{project.eyebrow}</p>
              </div>
              <h3>{project.title}</h3>
              <p className="case-description">{project.summary}</p>
              <dl className="case-notes">
                <div>
                  <dt>Desafio</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt>Decisão</dt>
                  <dd>{project.decision}</dd>
                </div>
                <div>
                  <dt>Entrega</dt>
                  <dd>{project.delivery}</dd>
                </div>
              </dl>
              <ul aria-label={`Tecnologias de ${project.title}`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experiencia">
        <div className="section-heading">
          <p className="kicker">Experiência</p>
          <h2>Da camada de hardware aos serviços em nuvem.</h2>
        </div>

        <div className="timeline">
          {experience.map((role) => (
            <article className="timeline-row" key={`${role.company}-${role.period}`}>
              <p className="timeline-period">{role.period}</p>
              <div className="timeline-role">
                <p>{role.context}</p>
                <h3>{role.company}</h3>
              </div>
              <div className="timeline-detail">
                <p>{role.summary}</p>
                <ul>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="skills-intro">
          <p className="kicker">Habilidades</p>
          <h2>Amplitude técnica com atenção ao ciclo completo.</h2>
          <p>
            Experiência prática em backend, interfaces corporativas, dados,
            infraestrutura como código e entrega contínua.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((group, index) => (
            <article key={group.title}>
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <figure className="brand-photo">
          <img
            src="/marca-davi-rios.png"
            alt="Cartão preto e dourado da marca Davi Rios com monograma D"
            width="745"
            height="993"
          />
          <figcaption>Identidade pessoal · Preto fosco e ouro</figcaption>
        </figure>

        <div className="profile-copy">
          <p className="kicker">Perfil</p>
          <h2>Precisão técnica. Visão de produto. Responsabilidade em produção.</h2>
          <p>
            Minha trajetória começou com firmware e sistemas embarcados, onde cada
            recurso conta. Hoje aplico o mesmo rigor à construção e evolução de APIs,
            integrações e sistemas corporativos.
          </p>
          <dl className="profile-meta">
            <div>
              <dt>Formação</dt>
              <dd>Análise e Desenvolvimento de Sistemas · FATEC</dd>
            </div>
            <div>
              <dt>Base técnica</dt>
              <dd>Colégio Técnico Unicamp Campinas</dd>
            </div>
            <div>
              <dt>Idiomas</dt>
              <dd>Português nativo · Inglês avançado</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <p className="kicker">Contato</p>
        <p className="contact-index" aria-hidden="true">D / 05</p>
        <h2>Vamos construir software que permanece confiável no mundo real.</h2>
        <div className="contact-links">
          <a href="mailto:daviriossoir@gmail.com">daviriossoir@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/davi-rios-soir-ivad/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Davi Rios</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
