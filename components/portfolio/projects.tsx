"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { projects, type Project, type ProjectVisual } from "./content";

const visualNodes: Record<Exclude<ProjectVisual, "orvian" | "danielle">, readonly string[]> = {
  data: ["OpenStates", "Fastify API", "PostgreSQL", "React query"],
  events: ["Evento", "Node service", "AWS ECS", "Entrega"],
  modules: ["Domínio A", "Domínio B", "Contratos", "UI compartilhada"],
  cloud: ["VPC", "Security group", "EC2", "Outputs"],
};

function ArchitectureVisual({ kind }: { kind: Exclude<ProjectVisual, "orvian" | "danielle"> }) {
  return (
    <div className="relative grid min-h-[300px] place-items-center overflow-hidden bg-[#11100e] p-6 sm:min-h-[390px] sm:p-10">
      <span className="absolute inset-x-[10%] top-1/2 h-px bg-gold/30" aria-hidden="true" />
      <span className="absolute top-[12%] bottom-[12%] left-1/2 w-px bg-gold/15" aria-hidden="true" />
      <div className="relative grid w-full max-w-[670px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {visualNodes[kind].map((node, index) => (
          <div className="group relative flex min-h-28 flex-col justify-between border border-gold/35 bg-ink p-4 transition duration-300 hover:-translate-y-1 hover:border-gold sm:min-h-36" key={node}>
            <span className="text-[0.62rem] font-bold tracking-[0.14em] text-gold uppercase">0{index + 1}</span>
            <strong className="max-w-[10ch] font-serif text-[clamp(1.15rem,2vw,1.65rem)] leading-tight font-normal text-paper">{node}</strong>
            {index < visualNodes[kind].length - 1 && (
              <span className="absolute top-1/2 -right-[1.05rem] z-10 hidden -translate-y-1/2 text-gold sm:block" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="group relative aspect-[16/9] overflow-hidden bg-[#12110f]">
        <Image
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.025]"
          src={project.image}
          alt={project.imageAlt ?? ""}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority={project.id === "orvian"}
        />
        <span className="pointer-events-none absolute inset-0 border border-white/10" aria-hidden="true" />
      </div>
    );
  }

  return <ArchitectureVisual kind={project.visual as Exclude<ProjectVisual, "orvian" | "danielle">} />;
}

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) {
    return <p className="mt-8 text-xs tracking-[0.1em] text-soft uppercase">Case profissional · detalhes preservados</p>;
  }

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {project.liveUrl && (
        <a className="inline-flex items-center gap-4 bg-paper px-4 py-3 text-xs font-extrabold tracking-[0.1em] text-ink uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href={project.liveUrl} target="_blank" rel="noreferrer">
          Ver projeto <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.repoUrl && (
        <a className="inline-flex items-center gap-4 border border-gold/55 px-4 py-3 text-xs font-bold tracking-[0.1em] text-gold-light uppercase transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href={project.repoUrl} target="_blank" rel="noreferrer">
          Código no GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = projects.find((project) => project.id === activeId) ?? projects[0];

  function selectFromKeyboard(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();
    const last = projects.length - 1;
    const next = event.key === "Home"
      ? 0
      : event.key === "End"
        ? last
        : event.key === "ArrowDown" || event.key === "ArrowRight"
          ? (index + 1) % projects.length
          : (index - 1 + projects.length) % projects.length;

    setActiveId(projects[next].id);
    buttons.current[next]?.focus();
  }

  return (
    <section className="px-4 py-[clamp(7rem,12vw,12rem)] sm:px-6 md:px-[6vw]" id="cases">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-[clamp(4rem,8vw,7rem)] grid grid-cols-1 gap-7 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
          <p className="m-0 text-xs font-bold tracking-[0.16em] text-gold uppercase">Sistemas selecionados</p>
          <div>
            <h2 className="m-0 max-w-[16ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-normal tracking-[-0.055em]">Projetos vistos por dentro.</h2>
            <p className="mt-7 max-w-[68ch] text-lg leading-relaxed text-[#bcb5aa]">Escolha um sistema para ver problema, arquitetura e entrega. Os cases públicos abrem o produto e o código; os profissionais preservam o contexto confidencial.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-y border-gold/30 lg:grid-cols-[minmax(250px,0.62fr)_minmax(0,1.38fr)]">
          <div className="grid grid-cols-2 border-b border-gold/30 lg:block lg:border-r lg:border-b-0" role="tablist" aria-label="Projetos selecionados" aria-orientation="vertical">
            {projects.map((project, index) => {
              const active = project.id === selected.id;
              return (
                <button
                  className={`group relative min-h-28 border-r border-b border-gold/20 p-4 text-left transition-colors last:border-b-0 even:border-r-0 hover:bg-gold/[0.06] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-gold lg:min-h-24 lg:border-r-0 lg:p-5 ${active ? "bg-gold text-ink hover:bg-gold" : "bg-transparent text-paper"}`}
                  key={project.id}
                  id={`project-tab-${project.id}`}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`project-panel-${project.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setActiveId(project.id)}
                  onKeyDown={(event) => selectFromKeyboard(event, index)}
                  ref={(element) => { buttons.current[index] = element; }}
                  type="button"
                >
                  <span className={`block text-[0.62rem] font-bold tracking-[0.14em] uppercase ${active ? "text-ink/65" : "text-gold"}`}>{project.index} · {project.category.split(" · ")[0]}</span>
                  <span className="mt-2 block font-serif text-[clamp(1rem,2vw,1.4rem)] leading-tight">{project.title}</span>
                  <span className={`absolute right-4 bottom-4 transition-transform group-hover:translate-x-1 ${active ? "opacity-100" : "opacity-40"}`} aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>

          <article className="min-w-0 animate-[project-enter_.45s_ease-out_both] bg-[#0b0b0a]" id={`project-panel-${selected.id}`} key={selected.id} role="tabpanel" aria-labelledby={`project-tab-${selected.id}`} tabIndex={0}>
            <ProjectPreview project={selected} />
            <div className="p-[clamp(1.5rem,5vw,4.5rem)]">
              <p className="m-0 text-xs font-bold tracking-[0.16em] text-gold uppercase">{selected.category}</p>
              <h3 className="mt-4 max-w-[14ch] font-serif text-[clamp(2.7rem,6vw,6.5rem)] leading-[0.88] font-normal tracking-[-0.055em]">{selected.title}</h3>
              <p className="mt-7 max-w-[72ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed text-[#d5cec2]">{selected.summary}</p>

              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-gold/25 pt-8 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Problema</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#aaa49a]">{selected.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-[0.14em] text-gold uppercase">Decisão de engenharia</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#aaa49a]">{selected.solution}</p>
                </div>
              </div>

              <p className="mt-8 border-l-2 border-gold bg-gold/[0.055] px-5 py-4 font-serif text-[clamp(1.05rem,2vw,1.45rem)] text-gold-light">{selected.proof}</p>
              <ul className="mt-8 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-[0.68rem] font-bold tracking-[0.11em] text-[#c5beb2] uppercase" aria-label={`Tecnologias de ${selected.title}`}>
                {selected.stack.map((item) => <li className="before:mr-2 before:text-gold before:content-['◆']" key={item}>{item}</li>)}
              </ul>
              <ProjectLinks project={selected} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
