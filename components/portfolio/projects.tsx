import { projects } from "./content";
import { SectionHeading } from "./ui";

export function Projects() {
  return (
    <section className="px-4 py-24 md:px-[6vw] md:py-[clamp(6rem,10vw,10rem)]" id="cases">
      <SectionHeading eyebrow="Trabalho selecionado">
        Projetos que unem código, arquitetura e operação.
      </SectionHeading>

      <div className="grid grid-cols-1 border-t border-l border-gold/40 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="flex min-h-[390px] flex-col border-r border-b border-gold/40 bg-[linear-gradient(145deg,rgba(255,255,255,0.025),transparent_45%)] p-[clamp(1.5rem,4vw,3.5rem)] sm:min-h-[440px]"
            key={project.index}
          >
            <div className="mb-12 flex items-start justify-between gap-6 sm:mb-20">
              <span className="font-serif text-2xl text-gold-light">{project.index}</span>
              <p className="m-0 max-w-[17rem] text-right text-[0.72rem] font-bold tracking-[0.14em] text-soft uppercase">
                {project.eyebrow}
              </p>
            </div>

            <h3 className="m-0 max-w-[14ch] font-serif text-[clamp(2rem,4vw,3.6rem)] leading-[0.98] font-normal tracking-[-0.035em]">
              {project.title}
            </h3>
            <p className="mt-6 max-w-[62ch] text-[0.98rem] text-[#bcb5aa]">
              {project.summary}
            </p>

            <dl className="mt-10 space-y-4">
              {[
                ["Desafio", project.challenge],
                ["Decisão", project.decision],
                ["Entrega", project.delivery],
              ].map(([label, value]) => (
                <div
                  className="grid grid-cols-1 gap-1 border-t border-gold/15 pt-3 sm:grid-cols-[5rem_1fr] sm:gap-4"
                  key={label}
                >
                  <dt className="text-[0.68rem] font-bold tracking-[0.13em] text-gold uppercase">
                    {label}
                  </dt>
                  <dd className="m-0 text-sm leading-relaxed text-[#bcb5aa]">{value}</dd>
                </div>
              ))}
            </dl>

            <ul
              className="mt-auto flex list-none flex-wrap gap-x-4 gap-y-2 pt-10 text-[0.72rem] font-bold tracking-[0.08em] text-gold-light uppercase"
              aria-label={`Tecnologias de ${project.title}`}
            >
              {project.stack.map((item) => (
                <li className="before:mr-1.5 before:text-gold before:content-['·']" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
