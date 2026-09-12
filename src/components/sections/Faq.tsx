import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "../Reveal";

export const perguntas = [
  {
    q: "É necessário fazer uma avaliação antes do procedimento?",
    a: "Sim. A avaliação permite compreender as características, necessidades e expectativas de cada pessoa e indicar o atendimento mais apropriado.",
  },
  {
    q: "Como faço para agendar?",
    a: "O agendamento pode ser solicitado pelo WhatsApp. A equipe informará os horários disponíveis e as orientações necessárias.",
  },
  {
    q: "Onde fica a clínica?",
    a: "A Clínica Le Blanc Concept está localizada na Rua Vinte e Quatro de Maio, 2027, Rebouças, Curitiba – PR, 80220-060.",
  },
  {
    q: "Os resultados são iguais para todas as pessoas?",
    a: "Não. Os resultados podem variar de acordo com as características individuais e com o procedimento realizado.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Entre em contato pelo WhatsApp para consultar as condições e formas de pagamento disponíveis.",
  },
  {
    q: "Existem contraindicações?",
    a: "Cada procedimento possui orientações e possíveis contraindicações. Por isso, a avaliação profissional é fundamental antes da realização.",
  },
];

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Dúvidas frequentes
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="divide-y divide-border border-y border-border">
            {perguntas.map((item, i) => {
              const isOpen = aberto === i;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setAberto(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-sans text-base text-foreground">{item.q}</span>
                      <Plus
                        size={18}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-gold transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                  </h3>
                  <div
                    id={`faq-${i}`}
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
