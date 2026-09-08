import {
  Eye,
  Feather,
  Flower2,
  Heart,
  PenTool,
  Sparkles,
  Wand2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { procedimentos, whatsappLink } from "@/config/site";
import { Reveal } from "../Reveal";

const icones: Record<string, LucideIcon> = {
  Sparkles,
  Feather,
  Heart,
  Eye,
  PenTool,
  Wand2,
  Flower2,
};

export function Procedimentos() {
  return (
    <section id="procedimentos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Procedimentos
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Cuidados pensados para os seus traços
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Cada procedimento é indicado após avaliação individual. Converse com a equipe
            para entender qual atendimento faz sentido para você.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {procedimentos.map((p, i) => {
            const Icone = icones[p.icone] ?? Sparkles;
            return (
              <Reveal key={p.nome} delay={i * 70}>
                <article className="card-soft group flex h-full flex-col rounded-sm p-8 transition-all duration-500 hover:-translate-y-1">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand text-gold">
                    <Icone size={19} strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl leading-snug text-foreground">{p.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.descricao}
                  </p>
                  <a
                    href={whatsappLink(
                      `Olá! Vi no site o procedimento ${p.nome} e gostaria de receber mais informações.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground transition-colors duration-300 hover:text-gold"
                    aria-label={`Quero saber mais sobre ${p.nome}`}
                  >
                    Quero saber mais
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
