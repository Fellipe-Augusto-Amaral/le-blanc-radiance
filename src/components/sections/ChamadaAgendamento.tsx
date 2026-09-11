import { mensagemPadrao, whatsappLink } from "@/config/site";
import { Reveal } from "../Reveal";

export function ChamadaAgendamento() {
  return (
    <section className="bg-nude/70 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center lg:px-10">
        <Reveal>
          <h2 className="text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Descubra o cuidado ideal para valorizar a sua beleza
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Converse com a equipe da Le Blanc Concept e solicite uma avaliação
            personalizada.
          </p>
          <a
            href={whatsappLink(mensagemPadrao)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-primary mt-9"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
