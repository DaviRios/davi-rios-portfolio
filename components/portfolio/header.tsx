const navigation = [
  ["Projetos", "#cases"],
  ["Experiência", "#experiencia"],
  ["Stack", "#habilidades"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex min-h-[68px] items-center justify-between border-b border-gold/25 bg-ink/[0.88] px-4 backdrop-blur-xl sm:px-6 md:min-h-[78px] md:px-[5vw]">
      <a className="group inline-flex items-center gap-3" href="#inicio" aria-label="Davi Rios — início">
        <span className="grid size-10 place-items-center rounded-full border border-gold font-serif text-[1.4rem] text-gold-light transition-transform duration-300 group-hover:rotate-[-8deg]">
          D
        </span>
        <span className="leading-none">
          <strong className="block font-serif text-base font-medium">Davi Rios</strong>
          <small className="mt-1 block text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase">
            Full Stack Engineer
          </small>
        </span>
      </a>

      <nav className="flex items-center gap-4 text-xs text-[#d0c9bd] sm:gap-6 md:gap-[clamp(1.2rem,3vw,2.8rem)] md:text-sm" aria-label="Navegação principal">
        {navigation.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={`${href === "#cases" || href === "#contato" ? "block" : "hidden md:block"} transition-colors duration-200 hover:text-gold-light focus-visible:text-gold-light focus-visible:outline-none`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
