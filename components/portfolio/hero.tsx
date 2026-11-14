import styles from "./medallion.module.css";

const facts = [
  ["5 anos", "construindo software"],
  ["87%", "menos tempo em fluxo interno"],
  ["6", "sistemas selecionados"],
] as const;

const stack = ["React", "Node.js", "Fastify", "Java", "PostgreSQL", "AWS", "Docker", "Terraform"];

function Medallion() {
  return (
    <div
      className={`${styles.seal} relative grid aspect-square w-[min(58vw,270px)] place-items-center justify-self-center lg:w-[clamp(260px,27vw,410px)]`}
      aria-label="Monograma D de Davi Rios"
    >
      <span className={`${styles.outer} absolute inset-0 rounded-full border border-[#8c6829]`} aria-hidden="true" />
      <span className={`${styles.inner} absolute inset-[12%] rounded-full border border-[#4a2e08]/85`} aria-hidden="true" />
      <span className={`${styles.letter} relative font-serif text-[clamp(7rem,16vw,12rem)] leading-none text-[#17110a]`}>D</span>
      <span className={`${styles.glint} absolute top-[37%] -right-[1%] size-4 bg-[#fff5c5]`} aria-hidden="true" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-[clamp(4rem,8vw,8rem)] sm:px-6 md:px-[6vw]" id="inicio">
      <span className="pointer-events-none absolute top-[-4rem] right-[-0.08em] select-none font-serif text-[clamp(16rem,42vw,44rem)] leading-none text-gold/[0.035]" aria-hidden="true">
        D
      </span>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-[6vw]">
        <div className="relative z-10 animate-[rise_.8s_ease-out_both]">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold uppercase before:h-px before:w-10 before:bg-gold">
            Full stack · Produto · Cloud
          </p>
          <h1 className="m-0 max-w-[12ch] font-serif text-[clamp(2.4rem,10.5vw,9.4rem)] leading-[0.82] font-normal tracking-[-0.065em]">
            Da interface à
            <span className="block text-gold-light italic">infraestrutura.</span>
          </h1>
          <p className="mt-8 max-w-[650px] text-[clamp(1.05rem,1.55vw,1.35rem)] leading-relaxed text-[#c9c2b7]">
            Construo produtos digitais ponta a ponta: experiências em React e Astro,
            APIs Node.js e Java, dados relacionais e entrega com AWS, Docker e Terraform.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a className="group inline-flex items-center gap-5 bg-gold px-5 py-3.5 text-xs font-extrabold tracking-[0.12em] text-ink uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#cases">
              Explorar sistemas <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a className="border-b border-gold/70 pb-1 text-sm text-[#eee8dd] transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="#contato">
              Conversar sobre um projeto
            </a>
          </div>
        </div>

        <div className="relative animate-[rise_.8s_.18s_ease-out_both]">
          <Medallion />
          <p className="mx-auto mt-7 max-w-[24rem] text-center text-xs tracking-[0.14em] text-soft uppercase">
            Campinas, SP <span className="px-2 text-gold">↔</span> Curitiba, PR
          </p>
        </div>
      </div>

      <dl className="relative mx-auto mt-[clamp(5rem,10vw,9rem)] grid max-w-[1500px] grid-cols-1 border-t border-gold/30 sm:grid-cols-3">
        {facts.map(([value, label], index) => (
          <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-gold/25 px-3 py-5 sm:border-r sm:border-b-0 sm:px-6 sm:last:border-r-0" key={value}>
            <dt className="font-serif text-[clamp(1.8rem,3vw,3rem)] text-gold-light">{value}</dt>
            <dd className="m-0 max-w-40 text-[0.68rem] leading-[1.35] tracking-[0.1em] text-soft uppercase">{label}</dd>
            <span className="sr-only">Indicador {index + 1}</span>
          </div>
        ))}
      </dl>

      <div className="relative mt-6 overflow-hidden border-y border-gold/15 py-4" aria-label="Tecnologias principais">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-8 text-[0.7rem] font-bold tracking-[0.16em] text-[#8f897f] uppercase motion-reduce:animate-none">
          {[...stack, ...stack].map((item, index) => (
            <span className="flex items-center gap-8 after:text-gold after:content-['◆']" key={`${item}-${index}`} aria-hidden={index >= stack.length}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
