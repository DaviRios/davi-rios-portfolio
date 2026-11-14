import { experience } from "./content";

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#eee8dc] px-4 py-[clamp(7rem,11vw,11rem)] text-[#11100e] sm:px-6 md:px-[6vw]" id="experiencia">
      <span className="pointer-events-none absolute top-8 right-[-0.05em] select-none font-serif text-[clamp(7rem,18vw,18rem)] leading-none text-[#806020]/[0.055]" aria-hidden="true">05—26</span>
      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
          <div>
            <p className="m-0 text-xs font-bold tracking-[0.16em] text-[#806020] uppercase">Experiência em produção</p>
            <p className="mt-5 max-w-72 text-sm leading-relaxed text-[#5d594f]">Cinco anos atravessando hardware, serviços, produto e nuvem.</p>
          </div>
          <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-normal tracking-[-0.055em]">Onde engenharia encontrou contexto real.</h2>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] grid grid-cols-1 gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-[6vw]">
          <aside className="self-start lg:sticky lg:top-28">
            <div className="relative overflow-hidden border border-[#806020]/25 bg-white/35 p-7 backdrop-blur-sm">
              <span className="absolute -top-16 -right-16 size-44 rounded-full bg-[#c49a3f]/15 blur-3xl" aria-hidden="true" />
              <strong className="relative block font-serif text-[clamp(5rem,12vw,10rem)] leading-[0.78] font-normal tracking-[-0.075em] text-[#806020]">87%</strong>
              <p className="relative mt-6 max-w-72 text-sm leading-relaxed text-[#514d45]">menos tempo em um fluxo interno: de aproximadamente 15 para 2 segundos.</p>
              <div className="relative mt-8 flex items-center gap-3 border-t border-[#806020]/20 pt-5 text-[0.64rem] font-bold tracking-[0.13em] text-[#806020] uppercase">
                <span className="size-2 animate-pulse rounded-full bg-[#806020] motion-reduce:animate-none" />
                impacto mensurável
              </div>
            </div>
          </aside>

          <div className="relative before:absolute before:top-0 before:bottom-0 before:left-[1.95rem] before:w-px before:bg-[#806020]/25 sm:before:left-[2.45rem]">
            {experience.map((role, index) => (
              <article className="reveal-on-view group relative mb-6 grid grid-cols-[4rem_1fr] gap-4 last:mb-0 sm:grid-cols-[5rem_1fr] sm:gap-6" key={`${role.company}-${role.period}`}>
                <div className="relative z-10 grid size-16 place-items-center rounded-full border border-[#806020]/35 bg-[#eee8dc] font-serif text-xl text-[#806020] transition duration-300 group-hover:scale-105 group-hover:bg-[#806020] group-hover:text-[#eee8dc] sm:size-20">{role.mark}</div>

                <div className="relative overflow-hidden border border-[#11100e]/15 bg-white/45 p-[clamp(1.35rem,4vw,3rem)] backdrop-blur-sm transition duration-500 group-hover:-translate-y-1 group-hover:bg-white/65">
                  <span className="absolute top-0 right-0 font-serif text-[clamp(4rem,10vw,8rem)] leading-none text-[#806020]/[0.055]" aria-hidden="true">0{index + 1}</span>
                  <header className="relative flex flex-col gap-5 border-b border-[#11100e]/15 pb-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="m-0 text-[0.68rem] font-extrabold tracking-[0.16em] text-[#806020] uppercase">{role.wordmark}</p>
                      <h3 className="mt-3 font-serif text-[clamp(1.8rem,3.6vw,3.4rem)] leading-none font-normal">{role.system}</h3>
                    </div>
                    <div className="sm:text-right">
                      <p className="m-0 font-serif text-xl text-[#806020]">{role.period}</p>
                      <p className="mt-1 text-[0.62rem] font-bold tracking-[0.12em] text-[#5d594f] uppercase">{role.context}</p>
                    </div>
                  </header>

                  <p className="relative mt-7 max-w-[68ch] text-[1.04rem] leading-relaxed">{role.summary}</p>
                  <ul className="relative mt-5 list-none space-y-2 p-0 text-sm leading-relaxed text-[#5d594f]">
                    {role.details.map((detail) => <li className="flex gap-3 before:text-[#806020] before:content-['—']" key={detail}>{detail}</li>)}
                  </ul>
                  <div className="relative mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#11100e]/10 pt-5 text-[0.64rem] font-bold tracking-[0.1em] text-[#6e5625] uppercase">
                    {role.technologies.map((technology) => <span className="before:mr-2 before:content-['◆']" key={technology}>{technology}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
