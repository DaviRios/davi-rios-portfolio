export function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-[72px] items-center justify-between border-b border-gold/30 bg-ink/85 px-5 backdrop-blur-2xl md:min-h-[84px] md:px-[5vw]">
      <a className="inline-flex items-center gap-3.5" href="#inicio" aria-label="Davi Rios — início">
        <span className="grid size-10 place-items-center rounded-full border border-gold font-serif text-[1.4rem] text-gold-light">
          D
        </span>
        <span className="grid leading-[1.12]">
          <strong className="font-serif text-base font-medium">Davi Rios</strong>
          <small className="text-xs font-bold tracking-[0.18em] text-gold uppercase">
            Software Engineer
          </small>
        </span>
      </a>

      <nav className="hidden items-center gap-[clamp(1.1rem,3vw,2.6rem)] text-sm text-[#cac3b7] md:flex" aria-label="Navegação principal">
        {[
          ["Cases", "#cases"],
          ["Experiência", "#experiencia"],
          ["Habilidades", "#habilidades"],
          ["Contato", "#contato"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="transition-colors duration-200 hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
