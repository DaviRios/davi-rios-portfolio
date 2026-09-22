import Image from "next/image";
import { Eyebrow } from "./ui";

const metadata = [
  ["Formação", "Análise e Desenvolvimento de Sistemas · FATEC"],
  ["Base técnica", "Colégio Técnico Unicamp Campinas"],
  ["Idiomas", "Português nativo · Inglês avançado"],
] as const;

export function Profile() {
  return (
    <section className="grid grid-cols-1 gap-14 bg-[#0d0c0b] px-4 py-24 md:px-[6vw] md:py-[clamp(6rem,10vw,10rem)] lg:grid-cols-[0.72fr_1fr] lg:items-center lg:gap-[8vw]">
      <figure className="relative m-0 border border-gold/50 p-2 after:pointer-events-none after:absolute after:inset-[1.15rem] after:border after:border-gold/60 after:content-['']">
        <Image
          className="block aspect-[4/4] h-auto w-full object-cover saturate-[0.8]"
          src="/card.png"
          alt="Cartão preto e dourado da marca Davi Rios com monograma D"
          width={745}
          height={993}
          sizes="(min-width: 1024px) 40vw, 88vw"
        />
      </figure>

      <div>
        <Eyebrow>Perfil</Eyebrow>
        <h2 className="m-0 max-w-[15ch] font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none font-normal tracking-[-0.045em]">
          Precisão técnica. Visão de produto. Responsabilidade em produção.
        </h2>
        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-[#bcb5aa]">
          Minha trajetória começou com firmware e sistemas embarcados, onde cada recurso
          conta. Hoje aplico o mesmo rigor à construção e evolução de APIs, integrações e
          sistemas corporativos.
        </p>

        <dl className="mt-12 border-t border-gold/35">
          {metadata.map(([label, value]) => (
            <div
              className="grid grid-cols-1 gap-1 border-b border-gold/35 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6"
              key={label}
            >
              <dt className="text-[0.68rem] font-bold tracking-[0.12em] text-gold uppercase">
                {label}
              </dt>
              <dd className="m-0 text-sm text-[#d4cec3]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
