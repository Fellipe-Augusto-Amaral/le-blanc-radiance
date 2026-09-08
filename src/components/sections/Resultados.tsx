import { ImagePlus } from "lucide-react";
import { Reveal } from "../Reveal";

export function Resultados() {
  return (
    <section id="resultados" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />
            Resultados
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Resultados que respeitam a sua beleza
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Cada resultado é único e pode variar de acordo com as características
            individuais e o procedimento realizado.
          </p>
        </Reveal>

        {/* Espaços reservados: substituir por fotografias reais de antes e depois. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n, i) => (
            <Reveal key={n} delay={i * 60}>
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-gold/40 bg-sand/60 p-6 text-center">
                <ImagePlus size={22} strokeWidth={1.2} className="text-gold" aria-hidden="true" />
                <p className="text-sm text-muted-foreground">
                  Espaço reservado para foto real de antes e depois
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          As imagens devem ser publicadas somente com autorização das clientes. Os
          resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </section>
  );
}
