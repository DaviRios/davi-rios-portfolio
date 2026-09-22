import { skills } from "./content";
import { Eyebrow } from "./ui";

export function Skills() {
  return (
    <section
      className="grid grid-cols-1 gap-16 px-4 py-24 md:px-[6vw] md:py-[clamp(6rem,10vw,10rem)] lg:grid-cols-[minmax(260px,0.75fr)_1.25fr] lg:gap-[8vw]"
      id="habilidades"
    >
      <div className="self-start lg:sticky lg:top-28">
        <Eyebrow>Habilidades</Eyebrow>
        <h2 className="m-0 max-w-[12ch] font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none font-normal tracking-[-0.045em]">
          Amplitude técnica com atenção ao ciclo completo.
        </h2>
        <p className="mt-8 max-w-[52ch] text-[#aaa49a]">
          Experiência prática em backend, interfaces corporativas, dados, infraestrutura
          como código e entrega contínua.
        </p>
      </div>

      <div className="border-t border-gold/35">
        {skills.map((group, index) => (
          <article
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 border-b border-gold/35 py-8 sm:grid-cols-[3.5rem_0.7fr_1fr] sm:items-baseline sm:gap-5"
            key={group.title}
          >
            <span className="font-serif text-lg text-gold">0{index + 1}</span>
            <h3 className="m-0 font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-normal">
              {group.title}
            </h3>
            <p className="col-start-2 m-0 text-sm leading-relaxed text-[#aaa49a] sm:col-start-auto">
              {group.items.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
