import { skills } from "./content";

export function Skills() {
  return (
    <section className="px-4 py-[clamp(7rem,11vw,11rem)] sm:px-6 md:px-[6vw]" id="habilidades">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <p className="m-0 text-xs font-bold tracking-[0.16em] text-gold uppercase">Uma entrega, quatro camadas</p>
          <div>
            <h2 className="m-0 max-w-[15ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-normal tracking-[-0.055em]">Full stack é conectar as decisões.</h2>
            <p className="mt-7 max-w-[68ch] text-lg leading-relaxed text-[#aaa49a]">A interface informa o contrato da API; o contrato organiza os dados; a infraestrutura garante que tudo continue operando.</p>
          </div>
        </div>

        <div className="mt-[clamp(4rem,8vw,7rem)] border-t border-gold/35">
          {skills.map((group, index) => (
            <article className="group grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 border-b border-gold/35 py-8 transition-colors hover:bg-gold/[0.035] sm:grid-cols-[4rem_0.9fr_1.1fr] sm:items-center sm:px-4 lg:grid-cols-[5rem_0.85fr_1.15fr_1fr]" key={group.layer}>
              <span className="font-serif text-xl text-gold">0{index + 1}</span>
              <div>
                <p className="m-0 text-[0.65rem] font-bold tracking-[0.14em] text-gold uppercase">{group.layer}</p>
                <h3 className="mt-2 max-w-[18ch] font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-tight font-normal">{group.title}</h3>
              </div>
              <p className="col-start-2 m-0 text-sm leading-relaxed text-[#aaa49a] sm:col-start-auto lg:col-span-2">{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
