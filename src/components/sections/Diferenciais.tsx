import { HandHeart, Leaf, ShieldCheck, Sofa } from "lucide-react";
import { Reveal } from "../Reveal";

const itens = [
  {
    icone: HandHeart,
    titulo: "Atendimento personalizado",
    texto:
      "Cada procedimento começa com uma avaliação das características e objetivos da cliente.",
  },
  {
    icone: Leaf,
    titulo: "Resultados naturais",
    texto:
      "O planejamento busca valorizar os traços sem retirar a identidade e a expressão individual.",
  },
  {
    icone: ShieldCheck,
    titulo: "Segurança e cuidado",
    texto:
      "Procedimentos conduzidos com atenção, responsabilidade e respeito às necessidades de cada pessoa.",
  },
  {
    icone: Sofa,
    titulo: "Ambiente acolhedor",
    texto:
      "Um espaço preparado para proporcionar conforto, privacidade e tranquilidade.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Diferenciais
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Um cuidado que começa na escuta
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {itens.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 90}>
              <div className="border-t border-gold/40 pt-7">
                <item.icone size={22} strokeWidth={1.3} className="text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl text-foreground">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
