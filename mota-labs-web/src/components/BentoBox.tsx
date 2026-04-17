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
        <div className="flex flex-1 items-end justify-end min-w-0 overflow-hidden" style={{ padding: "16px 24px" }}>
          <span className="font-meta font-medium text-primary-container leading-none tracking-tight select-none text-[14px]">
            mota labs ltda
          </span>
        </div>
      </div>

      {/* Manifesto Block (Cols 1-6, Rows 2-4) */}
      <section
        className="min-w-0 md:col-span-6 md:row-span-3 md:row-start-2 border-b-2 md:border-r-2 border-primary-container flex flex-col"
        aria-labelledby="titulo-manifesto"
      >
        {/* Hero area: illustration bg + H1 on top */}
        <div className="relative flex-1 min-h-0 overflow-hidden flex flex-col justify-end" style={{ padding: "24px" }}>
          {/* Illustration as background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <Image
              src="/illustration.svg"
              alt=""
              width={655}
              height={595}
              className="w-full h-full object-cover object-center opacity-30"
              aria-hidden
            />
          </div>
          {/* H1 on top of illustration */}
          <h1
            id="titulo-manifesto"
            className="relative z-10 min-w-0 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.1] font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            SOFTWARE COM
            <br />
            ACABAMENTO
            <br />
            HUMANO
          </h1>
        </div>
        {/* Paragraphs anchored at the bottom */}
        <div className="flex min-w-0 w-full flex-col gap-4 border-t-2 border-primary-container/30" style={{ padding: "24px" }}>
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
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-2 border-b-2 border-primary-container group hover:bg-primary-container/20 transition-none cursor-default flex flex-col justify-between"
        style={{ padding: "24px" }}
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
        <div className="flex flex-col gap-3">
          <p className="min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
            Aplicativos próprios, testados no uso real. Evolução contínua guiada por quem utiliza.
          </p>
          <a
            href="https://apps.apple.com/us/app/serpentime/id6760731158"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 font-label text-label text-primary-container uppercase underline underline-offset-2 decoration-1 hover:text-white transition-none"
            aria-label="Ver Serpentime na App Store"
          >
            SERPENTIME — APP STORE ↗
          </a>
        </div>
      </section>

      {/* Privacy Block (Cols 7-12, Row 3) */}
      <section
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-3 border-b-2 border-primary-container bg-[linear-gradient(rgba(243,121,122,0.2),rgba(243,121,122,0.2)),#224225] transition-none cursor-default flex flex-col justify-between"
        style={{ padding: "24px" }}
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
        <div className="mt-auto flex flex-col gap-3">
          <p className="min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
            Dados tratados apenas quando necessário. Não vendemos informações.
          </p>
          <a
            href="/privacidade"
            className="font-label text-label text-primary-container uppercase underline underline-offset-2 decoration-1 hover:text-white transition-none"
          >
            POLÍTICA DE PRIVACIDADE ↗
          </a>
        </div>
      </section>

      {/* Contact Block (Cols 7-12, Row 4) */}
      <a
        href="mailto:contato@motalabs.com.br"
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-4 border-b-2 border-primary-container group hover:bg-primary-container/20 transition-none cursor-pointer flex flex-col justify-between no-underline"
        style={{ padding: "24px" }}
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

      {/* About Block — Cols 1-6, Row 5 */}
      <section
        className="min-w-0 md:col-span-6 md:col-start-1 md:row-start-5 border-b-2 md:border-r-2 border-primary-container flex flex-col justify-between"
        style={{ padding: "24px" }}
        aria-labelledby="titulo-sobre"
      >
        <div className="mb-6 flex min-w-0 items-start justify-between gap-3">
          <h3
            id="titulo-sobre"
            className="min-w-0 flex-1 font-display text-section font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            SOBRE A EMPRESA
          </h3>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <p className="min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
            MOTA LABS LTDA — empresa brasileira de desenvolvimento de software,
            especializada no ecossistema Apple.
          </p>
          <dl className="flex flex-col gap-1">
            <div className="flex gap-2 min-w-0">
              <dt className="font-label text-caption text-on-surface/60 uppercase shrink-0">CNPJ</dt>
              <dd className="font-label text-caption text-on-surface uppercase [overflow-wrap:break-word]">61.619.848/0001-98</dd>
            </div>
            <div className="flex gap-2 min-w-0">
              <dt className="font-label text-caption text-on-surface/60 uppercase shrink-0">FUNDADOR</dt>
              <dd className="font-label text-caption text-on-surface uppercase [overflow-wrap:break-word]">
                <a
                  href="https://terrymota.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-1 hover:text-primary-container transition-none"
                >
                  TÉRCIO RODRIGUES MOTA ↗
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Serpentime App Block — Cols 7-12, Row 5 */}
      <a
        href="https://apps.apple.com/us/app/serpentime/id6760731158"
        target="_blank"
        rel="noopener noreferrer"
        className="min-w-0 md:col-span-6 md:col-start-7 md:row-start-5 border-b-2 border-primary-container group hover:bg-primary-container/20 transition-none cursor-pointer flex flex-col justify-between no-underline"
        style={{ padding: "24px" }}
        aria-label="Ver Serpentime na App Store"
      >
        <div className="mb-6 flex min-w-0 items-start justify-between gap-3">
          <h3
            className="min-w-0 flex-1 font-display text-section font-black text-primary-container uppercase [overflow-wrap:break-word] text-pretty"
          >
            SERPENTIME
          </h3>
          <span className="font-label text-caption text-on-surface/60 uppercase shrink-0">APP STORE</span>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <p className="min-w-0 font-label text-label text-on-surface uppercase [overflow-wrap:break-word] text-pretty">
            Rastreamento de cobras e répteis. Registros, saúde e histórico — tudo num único lugar.
          </p>
          <span className="font-label text-label text-primary-container uppercase underline underline-offset-2 decoration-1 group-hover:text-white transition-none">
            VER NA APP STORE ↗
          </span>
        </div>
      </a>

      {/* Footer Row (Col 1-12, Row 6) */}
      <footer
        className="min-w-0 md:col-span-12 md:row-start-6 flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-center gap-4 font-meta text-meta text-primary uppercase bg-[#224225]"
        style={{ padding: "24px" }}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <p className="min-w-0 text-center md:text-left [overflow-wrap:break-word] text-pretty">
            © 2026 MOTA LABS LTDA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="min-w-0 text-center md:text-left text-on-surface/60 [overflow-wrap:break-word]">
            CNPJ 61.619.848/0001-98
          </p>
        </div>
        <div className="flex gap-6 flex-wrap justify-center md:justify-end">
          <a
            href="/privacidade"
            className="hover:text-white underline underline-offset-2"
          >
            PRIVACIDADE
          </a>
          <a
            href="https://apps.apple.com/us/app/serpentime/id6760731158"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-2 break-words"
            aria-label="Abrir Serpentime na App Store"
          >
            APP STORE
          </a>
        </div>
      </footer>
    </article>
  );
}
