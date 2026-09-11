import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Procedimentos } from "@/components/sections/Procedimentos";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Resultados } from "@/components/sections/Resultados";
import { Profissional } from "@/components/sections/Profissional";
import { Faq, perguntas } from "@/components/sections/Faq";
import { ChamadaAgendamento } from "@/components/sections/ChamadaAgendamento";
import { Contato } from "@/components/sections/Contato";
import { site } from "@/config/site";

const titulo = "Le Blanc Concept | Estética Facial Avançada em Curitiba";
const descricao =
  "Conheça a Clínica Le Blanc Concept em Curitiba. Harmonização facial, Nanobrows, Nanolips, Nanoeyes, micropigmentação e cuidados faciais personalizados.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: site.nome,
          description: descricao,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua 24 de Maio, 2027",
            addressLocality: "Curitiba",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          telephone: "+5541987035188",
          sameAs: [site.instagramUrl],
          areaServed: "Curitiba, PR",
          makesOffer: [
            "Harmonização facial",
            "Nanobrows",
            "Nanolips",
            "Nanoeyes",
            "Micropigmentação",
            "Remoção de micropigmentação a laser",
            "Estética facial avançada",
          ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: perguntas.map((p) => ({
            "@type": "Question",
            name: p.q,
            acceptedAnswer: { "@type": "Answer", text: p.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Procedimentos />
        <Diferenciais />
        <Resultados />
        <Profissional />
        <Faq />
        <ChamadaAgendamento />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
