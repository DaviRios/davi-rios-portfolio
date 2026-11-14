import Image from "next/image";

const metadata = [
  ["Formação", "Análise e Desenvolvimento de Sistemas · FATEC"],
  ["Base técnica", "Firmware e sistemas embarcados"],
  ["Idiomas", "Português nativo · Inglês avançado"],
] as const;

export function Profile() {
  return (
    <section className="bg-[#0d0c0b] px-4 py-[clamp(7rem,11vw,11rem)] sm:px-6 md:px-[6vw]">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:gap-[8vw]">
        <figure className="relative m-0 overflow-hidden border border-gold/45 p-2 after:pointer-events-none after:absolute after:inset-[1.15rem] after:border after:border-gold/55 after:content-['']">
          <Image className="block aspect-square h-auto w-full object-cover saturate-[0.82] transition duration-700 hover:saturate-100" src="/card.png" alt="Cartão preto e dourado da marca Davi Rios com monograma D" width={1086} height={1049} sizes="(min-width: 1024px) 40vw, 88vw" />
        </figure>

        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold uppercase before:h-px before:w-10 before:bg-gold">Por trás dos sistemas</p>
          <h2 className="m-0 max-w-[14ch] font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] font-normal tracking-[-0.055em]">Rigor de firmware. Visão de produto.</h2>
          <p className="mt-8 max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-[#bcb5aa]">Minha trajetória começou em sistemas embarcados, onde cada ciclo, byte e falha importa. Hoje levo o mesmo cuidado para experiências web, APIs, dados e operação em nuvem.</p>

          <dl className="mt-12 border-t border-gold/35">
            {metadata.map(([label, value]) => (
              <div className="grid grid-cols-1 gap-1 border-b border-gold/35 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6" key={label}>
                <dt className="text-[0.65rem] font-bold tracking-[0.13em] text-gold uppercase">{label}</dt>
                <dd className="m-0 text-sm text-[#d4cec3]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
