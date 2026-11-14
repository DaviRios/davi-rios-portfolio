import Image from "next/image";

const principles = [
  ["01", "Clareza antes de abstração", "Arquitetura deve reduzir o custo de entender e mudar o sistema."],
  ["02", "Produto antes de vaidade técnica", "A decisão certa resolve o problema com o menor atrito sustentável."],
  ["03", "Produção faz parte do código", "Observabilidade, segurança e entrega entram na conversa desde o início."],
] as const;

export function Profile() {
  return (
    <section className="relative overflow-hidden bg-[#0d0c0b] px-4 py-[clamp(7rem,11vw,11rem)] sm:px-6 md:px-[6vw]" id="sobre">
      <div className="pointer-events-none absolute top-1/2 right-[-12rem] size-[34rem] -translate-y-1/2 rounded-full border border-gold/10" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/2 right-[-7rem] size-[24rem] -translate-y-1/2 rounded-full border border-gold/10" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-[8vw]">
        <div className="relative mx-auto w-full max-w-[650px]">
          <div className="absolute -top-6 -left-6 z-10 grid size-20 place-items-center rounded-full border border-gold bg-ink/80 font-serif text-4xl text-gold-light backdrop-blur-md sm:size-24" aria-hidden="true">D</div>
          <figure className="group relative m-0 overflow-hidden border border-gold/45 bg-black/30 p-2 after:pointer-events-none after:absolute after:inset-[1.15rem] after:border after:border-gold/45 after:content-['']">
            <Image className="block aspect-square h-auto w-full object-cover saturate-[0.78] transition duration-700 group-hover:scale-[1.015] group-hover:saturate-100" src="/card.png" alt="Cartão preto e dourado da marca Davi Rios com monograma D" width={1086} height={1049} sizes="(min-width: 1024px) 42vw, 88vw" />
            <figcaption className="absolute right-5 bottom-5 left-5 z-10 flex items-center justify-between border border-gold/25 bg-ink/70 px-4 py-3 text-[0.62rem] font-bold tracking-[0.13em] text-gold uppercase backdrop-blur-xl">
              <span>Identidade pessoal</span><span>Preto · Ouro</span>
            </figcaption>
          </figure>
          <div className="absolute -right-3 -bottom-7 z-10 max-w-52 border border-gold/25 bg-[#171512]/85 p-4 backdrop-blur-xl sm:-right-8 sm:max-w-60">
            <p className="m-0 font-serif text-2xl text-gold-light">5 anos</p>
            <p className="mt-1 text-[0.65rem] leading-relaxed tracking-[0.08em] text-soft uppercase">entre hardware, backend e produto</p>
          </div>
        </div>

        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold uppercase before:h-px before:w-10 before:bg-gold">Sobre Davi</p>
          <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] font-normal tracking-[-0.055em]">Rigor de firmware. Visão de produto.</h2>
          <p className="mt-8 max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-[#d0c9bd]">Minha trajetória começou em sistemas embarcados, onde cada ciclo, byte e falha importa. Hoje levo o mesmo cuidado para experiências web, APIs, dados e operação em nuvem.</p>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-[#938d84]">Formado em Análise e Desenvolvimento de Sistemas pela FATEC, trabalho entre Campinas e Curitiba, em português ou inglês.</p>

          <div className="mt-12 border-t border-gold/30">
            {principles.map(([index, title, description]) => (
              <article className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-gold/30 py-6 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:items-baseline sm:gap-6" key={index}>
                <span className="font-serif text-lg text-gold">{index}</span>
                <h3 className="m-0 font-serif text-[clamp(1.3rem,2.4vw,2rem)] leading-tight font-normal transition-colors group-hover:text-gold-light">{title}</h3>
                <p className="col-start-2 m-0 text-sm leading-relaxed text-soft sm:col-start-auto">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
