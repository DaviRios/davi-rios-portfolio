import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function Eyebrow({ children, dark = false, className = "" }: EyebrowProps) {
  return (
    <p
      className={`mb-5 text-xs font-bold tracking-[0.18em] uppercase ${
        dark ? "text-[#806020]" : "text-gold"
      } ${className}`}
    >
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  children: ReactNode;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, children, dark = false }: SectionHeadingProps) {
  return (
    <div className="mb-14 grid grid-cols-1 gap-[4vw] md:grid-cols-[minmax(180px,0.45fr)_1fr]">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2 className="m-0 max-w-[17ch] font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none font-normal tracking-[-0.045em]">
        {children}
      </h2>
    </div>
  );
}
