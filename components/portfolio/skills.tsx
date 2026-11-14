import Image from "next/image";
import { skills } from "./content";

const technologyLogos = [
  [
    ["React", "/tech/react.svg"],
    ["Astro", "/tech/astro.svg"],
    ["TypeScript", "/tech/typescript.svg"],
    ["Tailwind", "/tech/tailwindcss.svg"],
  ],
  [
    ["Node.js", "/tech/nodejs.svg"],
    ["Fastify", "/tech/fastify.svg"],
    ["Spring", "/tech/springboot.svg"],
    ["OpenJDK", "/tech/openjdk.svg"],
  ],
  [
    ["PostgreSQL", "/tech/postgresql.svg"],
    ["Prisma", "/tech/prisma.svg"],
    ["MongoDB", "/tech/mongodb.svg"],
    ["MySQL", "/tech/mysql.svg"],
  ],
  [
    ["AWS", "/tech/aws.svg"],
    ["Docker", "/tech/docker.svg"],
    ["Terraform", "/tech/terraform.svg"],
    ["Jenkins", "/tech/jenkins.svg"],
  ],
] as const;

export function Skills() {
  return (
    <section className="relative overflow-hidden px-4 py-[clamp(7rem,11vw,11rem)] sm:px-6 md:px-[6vw]" id="habilidades">
      <div className="pointer-events-none absolute top-[18%] left-[-10rem] size-[28rem] rounded-full bg-gold/[0.055] blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
          <div>
            <p className="m-0 text-xs font-bold tracking-[0.16em] text-gold uppercase">Painel de instrumentos</p>
            <p className="mt-5 max-w-72 text-sm leading-relaxed text-soft">Tecnologias são meios. O valor está na conexão entre as camadas.</p>
          </div>
          <h2 className="m-0 max-w-[15ch] font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.9] font-normal tracking-[-0.055em]">Uma stack que trabalha como sistema.</h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px bg-gold/20 p-px sm:grid-cols-4" aria-label="Fluxo full stack">
          {skills.map((group, index) => (
            <div className="relative bg-ink px-4 py-5 text-center before:absolute before:top-1/2 before:-right-2 before:z-10 before:hidden before:text-gold before:content-['→'] sm:before:block sm:last:before:hidden" key={group.layer}>
              <span className="text-[0.62rem] font-bold tracking-[0.14em] text-gold uppercase">0{index + 1}</span>
              <strong className="mt-1 block font-serif text-lg font-normal">{group.layer}</strong>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {skills.map((group, index) => (
            <article className="reveal-on-view group relative overflow-hidden border border-gold/25 bg-white/[0.025] p-[clamp(1.4rem,4vw,3rem)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-gold/55 hover:bg-white/[0.045]" key={group.layer}>
              <span className="absolute -top-14 -right-8 font-serif text-[10rem] leading-none text-gold/[0.035]" aria-hidden="true">0{index + 1}</span>
              <header className="relative border-b border-gold/20 pb-6">
                <p className="m-0 text-[0.66rem] font-bold tracking-[0.15em] text-gold uppercase">{group.layer}</p>
                <h3 className="mt-3 max-w-[18ch] font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] leading-[1.02] font-normal">{group.title}</h3>
              </header>

              <div className="relative mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {technologyLogos[index].map(([name, icon]) => (
                  <div className="flex min-h-28 flex-col items-center justify-center gap-3 border border-gold/15 bg-black/25 p-3 text-center transition duration-300 hover:border-gold/50 hover:bg-gold/[0.07]" key={name}>
                    <Image className="logo-gold h-8 w-10 object-contain" src={icon} alt="" width={40} height={32} />
                    <span className="text-[0.62rem] font-bold tracking-[0.09em] text-[#d8d1c5] uppercase">{name}</span>
                  </div>
                ))}
              </div>

              <p className="relative mt-7 text-sm leading-relaxed text-[#aaa49a]">{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
