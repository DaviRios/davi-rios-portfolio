export function Contact() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-[clamp(8rem,15vw,15rem)] sm:px-6 md:px-[6vw]" id="contato">
        <span className="pointer-events-none absolute right-[-0.03em] bottom-[-0.38em] select-none font-serif text-[clamp(16rem,45vw,46rem)] leading-none text-gold/[0.035]" aria-hidden="true">D</span>
        <div className="relative mx-auto max-w-[1500px]">
          <p className="mb-7 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-gold uppercase before:h-px before:w-10 before:bg-gold">Próximo sistema</p>
          <h2 className="m-0 max-w-[16ch] font-serif text-[clamp(3.2rem,8vw,8rem)] leading-[0.88] font-normal tracking-[-0.06em]">Tem um produto que precisa sair do diagrama?</h2>
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-[#bcb5aa]">Posso ajudar a conectar interface, API, dados e entrega em uma solução que faça sentido do primeiro commit à produção.</p>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a className="group inline-flex items-center gap-6 bg-gold px-5 py-4 text-xs font-extrabold tracking-[0.12em] text-ink uppercase transition-colors hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="mailto:daviriossoir@gmail.com">
              daviriossoir@gmail.com <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a className="border-b border-gold/70 pb-1 text-sm transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="https://www.linkedin.com/in/davi-rios-soir-ivad/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="border-b border-gold/70 pb-1 text-sm transition-colors hover:text-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold" href="https://github.com/DaviRios" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-gold/25 px-4 py-6 text-[0.65rem] tracking-[0.11em] text-soft uppercase sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-[6vw]">
        <span>© 2026 Davi Rios · Full Stack Software Engineer</span>
        <a className="transition-colors hover:text-gold-light focus-visible:text-gold-light" href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </>
  );
}
