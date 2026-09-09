import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { site } from "@/config/site";

const titulo = "Política de Privacidade | Le Blanc Concept";
const descricao =
  "Saiba como a Clínica Le Blanc Concept trata os dados pessoais enviados pelo site, em conformidade com a LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacidade" }],
  }),
  component: Privacidade,
});

function Privacidade() {
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
        <h1 className="text-4xl text-foreground">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta política descreve como a {site.nome} trata os dados pessoais informados
            por meio deste site, em conformidade com a Lei Geral de Proteção de Dados
            (Lei nº 13.709/2018).
          </p>
          <div>
            <h2 className="text-xl text-foreground">Dados coletados</h2>
            <p className="mt-3">
              Coletamos apenas os dados que você informa voluntariamente no formulário de
              contato: nome, telefone, procedimento de interesse, melhor período para
              contato e mensagem.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Finalidade do tratamento</h2>
            <p className="mt-3">
              Os dados são utilizados exclusivamente para responder à sua solicitação,
              informar sobre procedimentos e organizar o agendamento de avaliação.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Compartilhamento</h2>
            <p className="mt-3">
              Não vendemos nem compartilhamos seus dados com terceiros para finalidades
              publicitárias. O envio do formulário direciona a mensagem ao WhatsApp da
              clínica, aplicando-se também as políticas do próprio aplicativo.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Consentimento</h2>
            <p className="mt-3">
              O envio do formulário depende do seu consentimento expresso, que pode ser
              revogado a qualquer momento por meio dos nossos canais de contato.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-foreground">Seus direitos</h2>
            <p className="mt-3">
              Você pode solicitar a confirmação, o acesso, a correção ou a exclusão dos
              seus dados pelo WhatsApp {site.whatsappExibicao}.
            </p>
          </div>
          <p className="border-t border-border pt-6 text-xs">
            Este texto é um modelo inicial e deve ser revisado e aprovado pela clínica,
            incluindo o responsável pelo tratamento dos dados e o prazo de
            armazenamento, antes da publicação definitiva.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
