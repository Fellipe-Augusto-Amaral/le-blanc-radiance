import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { procedimentos, whatsappLink } from "@/config/site";

const periodos = ["Manhã", "Tarde", "Noite", "Qualquer horário"];

type Erros = Partial<Record<"nome" | "telefone" | "consentimento", string>>;

export function Formulario() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [consentimento, setConsentimento] = useState(false);
  const [erros, setErros] = useState<Erros>({});

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const novos: Erros = {};
    const nomeLimpo = nome.trim().slice(0, 100);
    const telLimpo = telefone.trim().slice(0, 20);

    if (nomeLimpo.length < 2) novos.nome = "Informe o seu nome.";
    if (telLimpo.replace(/\D/g, "").length < 10)
      novos.telefone = "Informe um telefone válido com DDD.";
    if (!consentimento)
      novos.consentimento = "É necessário concordar com a Política de Privacidade.";

    setErros(novos);
    if (Object.keys(novos).length > 0) return;

    const texto = [
      `Olá! Meu nome é ${nomeLimpo} e gostaria de solicitar contato pelo site.`,
      `Telefone: ${telLimpo}`,
      procedimento ? `Procedimento de interesse: ${procedimento}` : null,
      periodo ? `Melhor período para contato: ${periodo}` : null,
      mensagem.trim() ? `Mensagem: ${mensagem.trim().slice(0, 1000)}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
  }

  const campo =
    "mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:ring-1 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} noValidate className="card-soft rounded-sm p-7 sm:p-9">
      <h3 className="text-2xl text-foreground">Solicitar contato</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Preencha os campos e a mensagem será encaminhada para o nosso WhatsApp.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="nome" className="eyebrow">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            value={nome}
            maxLength={100}
            onChange={(e) => setNome(e.target.value)}
            aria-invalid={!!erros.nome}
            className={campo}
            placeholder="Seu nome"
          />
          {erros.nome && <p className="mt-2 text-xs text-destructive">{erros.nome}</p>}
        </div>

        <div>
          <label htmlFor="telefone" className="eyebrow">
            Telefone
          </label>
          <input
            id="telefone"
            name="telefone"
            inputMode="tel"
            value={telefone}
            maxLength={20}
            onChange={(e) => setTelefone(e.target.value)}
            aria-invalid={!!erros.telefone}
            className={campo}
            placeholder="(41) 90000-0000"
          />
          {erros.telefone && (
            <p className="mt-2 text-xs text-destructive">{erros.telefone}</p>
          )}
        </div>

        <div>
          <label htmlFor="procedimento" className="eyebrow">
            Procedimento de interesse
          </label>
          <select
            id="procedimento"
            name="procedimento"
            value={procedimento}
            onChange={(e) => setProcedimento(e.target.value)}
            className={campo}
          >
            <option value="">Selecione</option>
            {procedimentos.map((p) => (
              <option key={p.nome} value={p.nome}>
                {p.nome}
              </option>
            ))}
            <option value="Ainda não sei">Ainda não sei</option>
          </select>
        </div>

        <div>
          <label htmlFor="periodo" className="eyebrow">
            Melhor período para contato
          </label>
          <select
            id="periodo"
            name="periodo"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            className={campo}
          >
            <option value="">Selecione</option>
            {periodos.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="eyebrow">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            maxLength={1000}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className={campo}
            placeholder="Conte um pouco sobre o que você procura"
          />
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consentimento"
          type="checkbox"
          checked={consentimento}
          onChange={(e) => setConsentimento(e.target.checked)}
          aria-invalid={!!erros.consentimento}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]"
        />
        <label htmlFor="consentimento" className="text-xs leading-relaxed text-muted-foreground">
          Autorizo o contato e o tratamento dos meus dados pessoais para atendimento,
          conforme a{" "}
          <Link to="/privacidade" className="text-gold underline underline-offset-4">
            Política de Privacidade
          </Link>
          . (obrigatório)
        </label>
      </div>
      {erros.consentimento && (
        <p className="mt-2 text-xs text-destructive">{erros.consentimento}</p>
      )}

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-primary px-8 py-4 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-colors duration-300 hover:bg-primary/90"
      >
        Solicitar contato
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Aviso de privacidade: os dados informados são utilizados apenas para retorno do
        contato solicitado e não são compartilhados com terceiros para outras
        finalidades. Ao enviar, você será direcionada ao WhatsApp com a mensagem pronta.
      </p>
    </form>
  );
}
