import clinicaImg from "@/assets/clinica.jpg";
import { Reveal } from "../Reveal";

export function Sobre() {
  return (
    <section id="clinica" className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          {/* Substituir por fotografia real da clínica ou da profissional */}
          <img
            src={clinicaImg}
            loading="lazy"
            width={1408}
            height={1056}
            alt="Ambiente da clínica com decoração clara, iluminação suave e detalhes em dourado"
            className="h-full w-full rounded-sm object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow flex items-center gap-3">
            <span className="gold-rule" />A clínica
          </span>
          <h2 className="mt-6 text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Beleza natural, cuidado e confiança
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Na Clínica Le Blanc Concept, cada atendimento é realizado de maneira
            individualizada. Antes de qualquer procedimento, são consideradas as
            características, necessidades e expectativas de cada pessoa. Nosso propósito é
            realçar a beleza que já existe, com delicadeza, segurança e atenção aos
            detalhes.
          </p>

          {/* CAMPOS EDITÁVEIS: preencher somente com informações confirmadas pela clínica. */}
          <dl className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              "Adicionar aqui o tempo de atuação confirmado pela clínica.",
              "Adicionar aqui as especializações confirmadas.",
              "Adicionar aqui as certificações confirmadas.",
              "Adicionar aqui o registro profissional confirmado.",
            ].map((texto) => (
              <div key={texto} className="border-l border-gold/40 pl-4">
                <dt className="eyebrow">Campo editável</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {texto}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
