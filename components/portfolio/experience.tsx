import { experience } from "./content";

export function Experience() {
  return (
    <section className="bg-[#eee8dc] px-4 py-[clamp(7rem,11vw,11rem)] text-[#11100e] sm:px-6 md:px-[6vw]" id="experiencia">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <p className="m-0 text-xs font-bold tracking-[0.16em] text-[#806020] uppercase">Experiência em produção</p>
          <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-normal tracking-[-0.055em]">Do firmware ao produto conectado.</h2>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] grid grid-cols-1 border-t border-[#11100e]/30 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="border-b border-[#11100e]/25 py-10 lg:border-r lg:border-b-0 lg:pr-[5vw]">
            <strong className="block font-serif text-[clamp(5rem,12vw,11rem)] leading-none font-normal tracking-[-0.07em] text-[#806020]">87%</strong>
            <p className="mt-4 max-w-80 text-sm leading-relaxed text-[#514d45]">de redução no tempo de um fluxo interno: de aproximadamente 15 para 2 segundos.</p>
          </div>

          <div>
            {experience.map((role) => (
              <article className="grid grid-cols-1 gap-4 border-b border-[#11100e]/25 py-9 lg:grid-cols-[0.36fr_0.64fr] lg:gap-[4vw] lg:pl-[5vw]" key={`${role.company}-${role.period}`}>
                <div>
                  <p className="m-0 font-serif text-xl text-[#806020]">{role.period}</p>
                  <p className="mt-2 text-[0.65rem] font-bold tracking-[0.13em] text-[#5d594f] uppercase">{role.context}</p>
                  <h3 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.8rem)] leading-tight font-normal">{role.company}</h3>
                </div>
                <div>
                  <p className="m-0 max-w-[66ch] text-[1.05rem] leading-relaxed">{role.summary}</p>
                  <ul className="mt-5 list-none space-y-2 p-0 text-sm leading-relaxed text-[#5d594f]">
                    {role.details.map((detail) => <li className="flex gap-3 before:text-[#806020] before:content-['—']" key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
