import Image from "next/image";

export default function BentoBox() {
  return (
    <article
      className="w-full min-w-0 max-w-3xl mx-auto border-2 border-primary-container flex flex-col md:grid md:grid-cols-12 z-10 bg-[#224225]"
      aria-label="Mota Labs — apresentação"
    >
      {/* Top Logo Row (Cols 1-12) */}
      <div className="min-w-0 md:col-span-12 border-b-2 border-primary-container flex justify-start items-stretch">
        <a
          href="/"
          className="relative box-border flex h-24 w-28 min-h-24 min-w-[7rem] shrink-0 flex-col gap-0 overflow-hidden border-r-2 border-primary-container p-0 outline-offset-4"
          aria-label="Mota Labs — início"
        >
          <span className="relative block h-full min-h-0 min-w-0 w-full flex-1">
            <Image
              src="/logo-2.svg"
              alt="Mota Labs"
              fill
              className="object-cover object-center"
              style={{ color: "rgba(243, 121, 122, 1)" }}
              sizes="112px"
              priority
            />
          </span>
        </a>
      </div>

      {/* Manifesto Block (Cols 1-6, Rows 2-3) */}
      <section
        className="min-w-0 md:col-span-6 md:row-span-3 md:row-start-2 border-b-2 md:border-r-2 border-primary-container p-6 md:p-12 flex flex-col justify-between gap-8"
        aria-labelledby="titulo-manifesto"
      >
        <h1
          id="titulo-manifesto"
          className="min-w-0 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
        >
          SOFTWARE COM
          <br />
          ACABAMENTO
          <br />
          HUMANO
        </h1>
        <div className="flex min-w-0 w-full flex-col gap-4">
          <p className="min-w-0 font-body text-body md:text-body-lg text-on-surface normal-case [overflow-wrap:break-word] text-pretty">
            Desenvolvemos software com foco em estabilidade, clareza e uso contínuo.
          </p>
          <p className="min-w-0 font-body text-body md:text-body-lg text-on-surface normal-case [overflow-wrap:break-word] text-pretty">
            Cada detalhe é construído com atenção e refinado com o tempo.
          </p>
        </div>
      </section>

      {/* Services Block (Cols 7-12, Row 2) */}
      <section
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-2 border-b-2 border-primary-container p-8 group hover:bg-primary-container/20 transition-none cursor-default flex flex-col justify-between"
        aria-labelledby="titulo-servicos"
      >
        <div className="mb-6 flex min-w-0 items-start justify-between gap-3">
          <h3
            id="titulo-servicos"
            className="min-w-0 flex-1 font-display text-section font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            O QUE FAZEMOS
          </h3>
          <Image
            src="/icones/o-que-fazemos.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />
        </div>
        <p className="min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
          Aplicativos próprios, testados no uso real. Evolução contínua guiada por quem utiliza. Inclui o app Serpentime na App Store.
        </p>
      </section>

      {/* Privacy Block (Cols 7-9, Row 3) — fundo verde, rosa a 20% só na lavagem (camada) */}
      <section
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-3 border-b-2 border-primary-container bg-[linear-gradient(rgba(243,121,122,0.2),rgba(243,121,122,0.2)),#224225] transition-none cursor-default p-8 flex flex-col justify-between"
        aria-labelledby="titulo-privacidade"
      >
        <div className="mb-4 flex min-w-0 items-start justify-between gap-3">
          <h3
            id="titulo-privacidade"
            className="min-w-0 flex-1 font-display text-section font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            PRIVACIDADE
          </h3>
          <Image
            src="/icones/privacidade.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />
        </div>
        <p className="mt-auto min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
          Dados tratados apenas quando necessário. Não vendemos informações.
        </p>
      </section>

      {/* Contact Block (Cols 10-12, Row 3) */}
      <a
        href="mailto:contato@motalabs.com.br"
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-4 border-b-2 border-primary-container p-6 group hover:bg-primary-container/20 transition-none cursor-pointer flex flex-col justify-between no-underline"
        aria-labelledby="titulo-contato"
        aria-describedby="email-contato prazo-resposta"
      >
        <div className="mb-4 flex min-w-0 items-start justify-between gap-3">
          <h3
            id="titulo-contato"
            className="min-w-0 flex-1 font-display text-section font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            CONTATO
          </h3>
          <Image
            src="/icones/contato.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 shrink-0 object-contain"
            aria-hidden
          />
        </div>
        <div className="mt-auto min-w-0">
          <p
            id="email-contato"
            className="min-w-0 font-label text-label text-on-surface uppercase hyphens-none [overflow-wrap:anywhere]"
          >
            contato@motalabs.com.br
          </p>
          <p
            id="prazo-resposta"
            className="mt-2 min-w-0 font-label text-caption text-on-surface/60 uppercase [overflow-wrap:break-word] text-pretty"
          >
            <abbr title="Prazo médio de resposta a e-mails" className="cursor-help decoration-primary-container underline decoration-dotted underline-offset-2">
              SLA
            </abbr>
            : 2 A 3 DIAS
          </p>
        </div>
      </a>

      {/* Footer Row (Col 1-12) */}
      <footer className="min-w-0 md:col-span-12 md:row-start-5 p-6 md:px-12 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 font-meta text-meta text-primary uppercase bg-[#224225]">
        <p className="min-w-0 text-center md:text-left [overflow-wrap:break-word] text-pretty">
          © 2026 MOTA LABS LTDA. TODOS OS DIREITOS RESERVADOS.
        </p>
        <a
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white underline underline-offset-2 break-words text-center md:text-left"
          aria-label="Abrir a App Store numa nova janela"
        >
          VER NA APP STORE
        </a>
      </footer>
    </article>
  );
}
