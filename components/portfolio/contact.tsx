import { Eyebrow } from "./ui";

export function Contact() {
  return (
    <>
      <section
        className="relative overflow-hidden px-4 py-24 md:px-[6vw] md:py-[clamp(7rem,12vw,12rem)]"
        id="contato"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 44%, rgb(216 173 79 / 12%), transparent 20rem)",
        }}
      >
        <Eyebrow>Contato</Eyebrow>
        <h2 className="relative m-0 max-w-[19ch] font-serif text-[clamp(2.7rem,7vw,7rem)] leading-[0.96] font-normal tracking-[-0.05em]">
          Vamos construir software que permanece confiável no mundo real.
        </h2>
        <div className="relative mt-14 flex flex-col items-start gap-5 text-lg sm:flex-row sm:flex-wrap sm:gap-10">
          <a
            className="border-b border-gold pb-1 transition-colors hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
            href="mailto:daviriossoir@gmail.com"
          >
            daviriossoir@gmail.com
          </a>
          <a
            className="border-b border-gold pb-1 transition-colors hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
            href="https://www.linkedin.com/in/davi-rios-soir-ivad/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-gold/30 px-4 py-6 text-xs tracking-[0.08em] text-soft uppercase sm:flex-row sm:items-center sm:justify-between md:px-[6vw]">
        <span>© 2026 Davi Rios</span>
        <a className="hover:text-gold-light focus-visible:text-gold-light" href="#inicio">
          Voltar ao topo ↑
        </a>
      </footer>
    </>
  );
}
