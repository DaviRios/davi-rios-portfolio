import styles from "./medallion.module.css";
import { Eyebrow } from "./ui";

const facts = [
  ["05", "anos construindo software"],
  ["04", "cases em destaque"],
  ["BR", "Campinas · Curitiba"],
] as const;

function Medallion() {
  return (
    <div
      className={`${styles.seal} relative row-start-1 grid aspect-square w-[min(54vw,260px)] place-items-center justify-self-center lg:row-start-auto lg:w-[clamp(230px,27vw,390px)]`}
      aria-label="Monograma D de Davi Rios"
    >
      <span
        className={`${styles.outer} absolute inset-0 rounded-full border border-[#8c6829]`}
        aria-hidden="true"
      />
      <span
        className={`${styles.letter} relative font-serif text-[clamp(7rem,15vw,12rem)] leading-none text-[#17110a]`}
      >
        D
      </span>
      <span
        className={`${styles.glint} absolute top-[37%] -right-[1%] size-4 bg-[#fff5c5]`}
        aria-hidden="true"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative m-2.5 grid min-h-[calc(100svh-72px)] grid-cols-1 grid-rows-[auto_auto_auto] items-center gap-12 overflow-hidden border border-gold-dark px-[1.35rem] pt-[3.6rem] pb-[1.2rem] before:pointer-events-none before:absolute before:inset-2 before:border before:border-gold/40 md:m-[1.35rem] md:min-h-[calc(100svh-84px)] md:px-[clamp(1.5rem,6vw,7rem)] md:pt-[clamp(4rem,8vw,7.5rem)] md:pb-[2.2rem] lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.8fr)] lg:grid-rows-[1fr_auto] lg:gap-x-[6vw]"
      id="inicio"
    >
      <div className="relative z-10 row-start-2 max-w-[880px] lg:row-start-auto">
        <Eyebrow>Backend · Cloud · Produto</Eyebrow>
        <h1 className="mb-6 max-w-[15ch] font-serif text-[clamp(3rem,15vw,4.5rem)] leading-[0.88] font-normal tracking-[-0.055em] md:text-[clamp(3.25rem,7.4vw,7.8rem)]">
          Engenharia que transforma
          <span className="block text-gold-light italic">complexidade em confiança.</span>
        </h1>
        <p className="max-w-[640px] text-[clamp(1.05rem,1.45vw,1.28rem)] text-[#bcb5aa]">
          Sou Davi Rios, engenheiro de software com 5 anos de experiência entre sistemas
          embarcados e aplicações backend em produção.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            className="border border-gold bg-gold px-5 py-3 text-[0.82rem] font-extrabold tracking-[0.1em] text-ink uppercase transition-colors duration-200 hover:bg-transparent hover:text-gold-light focus-visible:bg-transparent focus-visible:text-gold-light focus-visible:outline-none"
            href="#cases"
          >
            Explorar cases
          </a>
          <a
            className="border-b border-gold/55 text-[0.92rem] text-[#ddd6ca] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            href="#contato"
          >
            Falar comigo <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <Medallion />

      <dl className="relative z-10 row-start-3 grid w-full grid-cols-1 border-t border-gold/30 lg:col-span-2 lg:row-start-auto lg:grid-cols-3">
        {facts.map(([value, label]) => (
          <div
            key={value}
            className="grid grid-cols-[auto_1fr] items-center gap-3 border-b border-gold/20 px-[clamp(0.8rem,2vw,2rem)] pt-5 pb-4 last:border-b-0 lg:border-r lg:border-b-0 lg:pb-0 lg:last:border-r-0"
          >
            <dt className="font-serif text-[2.1rem] text-gold-light">{value}</dt>
            <dd className="m-0 max-w-48 text-[0.78rem] leading-[1.35] tracking-[0.08em] text-soft uppercase">
              {label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
