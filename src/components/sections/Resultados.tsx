import { Maximize2 } from "lucide-react";
import naturalLips from "@/assets/results/natural-lips.png.asset.json";
import nanobrows from "@/assets/results/nanobrows.png.asset.json";
import nanolips from "@/assets/results/nanolips.png.asset.json";
import nanoeyes from "@/assets/results/nanoeyes.png.asset.json";
import nanobrowsNatural from "@/assets/results/nanobrows-natural.png.asset.json";
import olhosSobrancelhas from "@/assets/results/olhos-sobrancelhas.png.asset.json";
import { Reveal } from "../Reveal";

const resultados = [
  {
    imagem: naturalLips.url,
    titulo: "Natural Lips",
    alt: "Resultado real de Natural Lips em diferentes ângulos",
  },
  {
    imagem: nanobrows.url,
    titulo: "Nanobrows",
    alt: "Resultado real de Nanobrows com fios delicados e naturais",
  },
  {
    imagem: nanolips.url,
    titulo: "Nanolips",
    alt: "Resultado real de Nanolips em quatro ângulos",
  },
  {
    imagem: nanoeyes.url,
    titulo: "Nanoeyes",
    alt: "Resultado real de Nanoeyes em quatro ângulos",
  },
  {
    imagem: nanobrowsNatural.url,
    titulo: "Nanobrows",
    alt: "Resultado real de Nanobrows com acabamento natural",
  },
  {
    imagem: olhosSobrancelhas.url,
    titulo: "Olhos & sobrancelhas",
    alt: "Seleção de resultados reais em olhos e sobrancelhas",
  },
] as const;

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

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {resultados.map((resultado, i) => (
            <Reveal key={`${resultado.titulo}-${i}`} delay={i * 60}>
              <a
                href={resultado.imagem}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ampliar resultado: ${resultado.titulo}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <img
                  src={resultado.imagem}
                  alt={resultado.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-primary/90 via-primary/55 to-transparent px-4 pb-4 pt-16 text-primary-foreground sm:px-5 sm:pb-5">
                  <span className="font-display text-lg leading-none sm:text-2xl">
                    {resultado.titulo}
                  </span>
                  <Maximize2
                    size={17}
                    strokeWidth={1.5}
                    className="shrink-0 opacity-80"
                    aria-hidden="true"
                  />
                </span>
              </a>
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
