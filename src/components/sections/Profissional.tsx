import avaliacaoImg from "@/assets/avaliacao.jpg";
import { mensagemPadrao, site, whatsappLink } from "@/config/site";
import { Reveal } from "../Reveal";

const camposEditaveis = [
  "Adicionar aqui a formação acadêmica confirmada da Dra. Ângela Collet.",
  "Adicionar aqui as especializações confirmadas.",
  "Adicionar aqui a experiência profissional confirmada.",
  "Adicionar aqui o registro profissional confirmado.",
];

export function Profissional() {
  return (
    <section id="profissional" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal>
          {/* Substituir por fotografia real da Dra. Ângela Collet */}
          <img
            src={avaliacaoImg}
            loading="lazy"
            width={1200}
            height={1504}
            alt="Profissional de estética realizando avaliação facial em uma cliente"
            className="h-[28rem] w-full rounded-sm object-cover shadow-[var(--shadow-soft)] lg:h-[34rem]"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />A profissional
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Conheça a {site.profissional}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Profissional associada à Clínica Le Blanc Concept, com atendimento voltado à
            estética facial avançada, harmonização e nanopigmentação. A apresentação
            completa será publicada após confirmação das informações.
          </p>

          <ul className="mt-9 space-y-4">
            {camposEditaveis.map((texto) => (
              <li
                key={texto}
                className="rounded-sm border border-dashed border-gold/40 bg-background p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {texto}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(mensagemPadrao)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
          >
            Agendar avaliação
          </a>
        </Reveal>
      </div>
    </section>
  );
}
