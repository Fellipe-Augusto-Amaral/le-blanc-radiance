import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { site } from "@/config/site";

const titulo = "Termos de Uso | Le Blanc Concept";
const descricao =
  "Condições de uso do site institucional da Clínica Le Blanc Concept, em Curitiba – PR.";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: Termos,
});

function Termos() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-6">
          <Link to="/" aria-label="Voltar para a página inicial">
            <Logo />
          </Link>
          <Link to="/" className="text-xs tracking-[0.18em] uppercase text-muted-foreground hover:text-gold">
            Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-4xl text-foreground">Termos de Uso</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl text-foreground">Finalidade do site</h2>
            <p className="mt-3">
              Este site tem caráter informativo e apresenta os procedimentos e o
              atendimento da {site.nome}. O conteúdo não substitui uma avaliação
              profissional presencial.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Informações sobre procedimentos</h2>
            <p className="mt-3">
              As descrições são gerais. Indicações, cuidados e possíveis
              contraindicações são definidos individualmente durante a avaliação. Os
              resultados podem variar de pessoa para pessoa.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Agendamentos</h2>
            <p className="mt-3">
              Solicitações enviadas pelo site ou pelo WhatsApp não confirmam
              automaticamente um horário. A confirmação é feita pela equipe da clínica.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Propriedade do conteúdo</h2>
            <p className="mt-3">
              Textos, imagens e demais elementos deste site pertencem à clínica ou são
              utilizados mediante autorização, sendo vedada a reprodução sem permissão.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Contato</h2>
            <p className="mt-3">
              Dúvidas sobre estes termos podem ser enviadas pelo WhatsApp{" "}
              {site.whatsappExibicao}.
            </p>
          </div>
          <p className="border-t border-border pt-6 text-xs">
            Modelo inicial sujeito a revisão e aprovação da clínica antes da publicação
            definitiva.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
