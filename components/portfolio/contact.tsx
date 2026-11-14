import Image from "next/image";

const channels = [
  {
    label: "E-mail",
    value: "daviriossoir@gmail.com",
    href: "mailto:daviriossoir@gmail.com",
    icon: "/tech/email.svg",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "davi-rios-soir-ivad",
    href: "https://www.linkedin.com/in/davi-rios-soir-ivad/",
    icon: "/tech/linkedin.svg",
    external: true,
  },
  {
    label: "GitHub",
    value: "DaviRios",
    href: "https://github.com/DaviRios",
    icon: "/tech/github.svg",
    external: true,
  },
] as const;

export function Contact() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-[clamp(8rem,15vw,15rem)] sm:px-6 md:px-[6vw]" id="contato">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(216,173,79,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(216,173,79,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]" aria-hidden="true" />
        <span className="pointer-events-none absolute right-[-0.03em] bottom-[-0.38em] select-none font-serif text-[clamp(16rem,45vw,46rem)] leading-none text-gold/[0.035]" aria-hidden="true">D</span>
        <span className="pointer-events-none absolute top-1/3 left-1/2 size-72 -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[100px]" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1500px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold uppercase before:h-px before:w-10 before:bg-gold">Próximo sistema</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <h2 className="m-0 max-w-[15ch] font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.88] font-normal tracking-[-0.06em]">Vamos tirar a próxima ideia do diagrama.</h2>
            <p className="max-w-[32rem] text-lg leading-relaxed text-[#bcb5aa] lg:pb-3">Para conversar sobre produtos full stack, APIs, modernização de interfaces ou infraestrutura como código.</p>
          </div>

          <div className="mt-[clamp(4rem,8vw,7rem)] grid grid-cols-1 gap-4 md:grid-cols-3">
            {channels.map((channel, index) => (
              <a className="group relative min-h-52 overflow-hidden border border-gold/25 bg-white/[0.025] p-6 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-gold/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href={channel.href} key={channel.label} target={channel.external ? "_blank" : undefined} rel={channel.external ? "noreferrer" : undefined}>
                <span className="absolute top-2 right-4 font-serif text-7xl leading-none text-gold/[0.045]" aria-hidden="true">0{index + 1}</span>
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center border border-gold/25 bg-black/25">
                      <Image className="logo-gold size-6 object-contain" src={channel.icon} alt="" width={24} height={24} />
                    </span>
                    <span className="text-xl text-gold transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
                  </div>
                  <div>
                    <p className="m-0 text-[0.65rem] font-bold tracking-[0.15em] text-gold uppercase">{channel.label}</p>
                    <p className="mt-2 break-words font-serif text-[clamp(1.15rem,2.1vw,1.75rem)] leading-tight text-paper">{channel.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <p className="mt-10 text-center text-[0.66rem] font-bold tracking-[0.14em] text-soft uppercase">Campinas, SP <span className="px-3 text-gold">◆</span> Curitiba, PR <span className="px-3 text-gold">◆</span> Português & Inglês</p>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-gold/25 px-4 py-6 text-[0.65rem] tracking-[0.11em] text-soft uppercase sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-[6vw]">
        <span>© 2026 Davi Rios · Full Stack Software Engineer</span>
        <a className="transition-colors hover:text-gold-light focus-visible:text-gold-light" href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
