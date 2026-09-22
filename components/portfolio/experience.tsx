import { experience } from "./content";
import { SectionHeading } from "./ui";

export function Experience() {
  return (
    <section
      className="bg-[#efeadf] px-4 py-24 text-[#11100e] md:px-[6vw] md:py-[clamp(6rem,10vw,10rem)]"
      id="experiencia"
    >
      <SectionHeading eyebrow="Experiência" dark>
        Da camada de hardware aos serviços em nuvem.
      </SectionHeading>

      <div className="border-t border-[#11100e]/25">
        {experience.map((role) => (
          <article
            className="grid grid-cols-1 gap-4 border-b border-[#11100e]/25 py-10 md:grid-cols-[0.45fr_1fr] md:gap-[3vw] lg:grid-cols-[0.5fr_0.75fr_1.5fr]"
            key={`${role.company}-${role.period}`}
          >
            <p className="m-0 font-serif text-[clamp(1.5rem,2.6vw,2.4rem)] text-[#806020]">
              {role.period}
            </p>
            <div>
              <p className="mb-2 text-[0.68rem] font-bold tracking-[0.13em] text-[#5d594f] uppercase">
                {role.context}
              </p>
              <h3 className="m-0 font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-normal">
                {role.company}
              </h3>
            </div>
            <div className="md:col-start-2 lg:col-start-auto">
              <p className="m-0 max-w-[66ch] text-lg leading-relaxed">{role.summary}</p>
              <ul className="mt-5 list-none space-y-2 p-0 text-sm text-[#5d594f]">
                {role.details.map((detail) => (
                  <li className="flex gap-3 before:text-[#806020] before:content-['—']" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
