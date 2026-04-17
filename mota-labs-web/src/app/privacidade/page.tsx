import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — MOTA LABS",
  description:
    "Como a MOTA LABS LTDA trata os dados dos usuários de seus aplicativos e serviços.",
};

export default function PrivacidadePage() {
  return (
    <div
      className="flex flex-col min-h-screen justify-start items-center relative overflow-x-hidden"
      style={{ padding: "24px" }}
    >
      <div className="fixed inset-0 grid-overlay -z-10 pointer-events-none" />

      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="w-full max-w-3xl flex flex-col border-2 border-primary-container bg-[#224225] outline-none"
      >
        {/* Header */}
        <div className="border-b-2 border-primary-container flex justify-start items-stretch">
          <Link
            href="/"
            className="relative box-border flex h-24 w-28 min-h-24 min-w-[7rem] shrink-0 overflow-hidden border-r-2 border-primary-container p-0 outline-offset-4"
            aria-label="Mota Labs — voltar ao início"
          >
            <span className="relative block h-full w-full flex-1">
              <Image
                src="/logo-2.svg"
                alt="Mota Labs"
                fill
                className="object-cover object-center"
                sizes="112px"
                priority
              />
            </span>
          </Link>
          <div className="flex flex-col justify-center gap-1" style={{ padding: "16px 24px" }}>
            <h1 className="font-display text-section font-black text-primary-container uppercase leading-tight">
              POLÍTICA DE PRIVACIDADE
            </h1>
            <p className="font-meta text-meta text-on-surface/60 uppercase">
              MOTA LABS LTDA — CNPJ 61.619.848/0001-98
            </p>
          </div>
        </div>

        {/* Last updated */}
        <div className="border-b-2 border-primary-container" style={{ padding: "12px 24px" }}>
          <p className="font-meta text-meta text-on-surface/60 uppercase">
            ÚLTIMA ATUALIZAÇÃO: ABRIL DE 2026
          </p>
        </div>

        {/* 01 — Quem somos */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">01</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">QUEM SOMOS</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed flex flex-col gap-3">
            <p>
              A <strong className="text-primary-container font-semibold">MOTA LABS LTDA</strong>,
              CNPJ <span className="text-primary-container">61.619.848/0001-98</span>, é uma empresa
              brasileira de desenvolvimento de software especializada no ecossistema Apple. Nosso produto
              atual é o <strong className="text-primary-container font-semibold">Serpentime</strong>,
              disponível na App Store.
            </p>
            <p>
              Dúvidas ou solicitações de privacidade:{" "}
              <a href="mailto:contato@motalabs.com.br" className="text-primary-container underline underline-offset-2 hover:text-white">
                contato@motalabs.com.br
              </a>
            </p>
          </div>
        </section>

        {/* 02 — Dados que coletamos */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">02</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">DADOS QUE COLETAMOS</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed flex flex-col gap-3">
            <p>
              Nossos aplicativos são projetados com privacidade em primeiro lugar. O Serpentime opera
              de forma <strong className="text-primary-container font-semibold">totalmente offline</strong> —
              todos os dados inseridos ficam armazenados exclusivamente no dispositivo do usuário, sem
              envio a servidores externos.
            </p>
            <p>
              Não coletamos dados pessoais identificáveis, não solicitamos cadastro e não exigimos
              criação de conta para uso do aplicativo.
            </p>
          </div>
        </section>

        {/* 03 — Dados de diagnóstico */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">03</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">DADOS DE DIAGNÓSTICO</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed">
            <p>
              Podemos receber, por meio dos sistemas da Apple (App Store Connect / TestFlight),
              relatórios anônimos de falhas e diagnósticos de desempenho. Esses dados são fornecidos
              de forma agregada e anonimizada, de acordo com as configurações de privacidade do
              dispositivo do usuário, e não são associados a nenhuma identidade pessoal.
            </p>
          </div>
        </section>

        {/* 04 — Uso de dados */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">04</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">USO DE DADOS</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed flex flex-col gap-3">
            <p>Como não coletamos dados pessoais diretamente, nosso uso de dados é restrito a:</p>
            <ul className="flex flex-col gap-2 ml-4 list-disc list-outside marker:text-primary-container">
              <li>Diagnósticos anônimos para correção de falhas técnicas.</li>
              <li>Estatísticas agregadas de uso fornecidas pela App Store para melhoria do produto.</li>
            </ul>
            <p>Em nenhuma hipótese vendemos, alugamos ou compartilhamos dados de usuários com terceiros para fins comerciais.</p>
          </div>
        </section>

        {/* 05 — Direitos do usuário */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">05</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">DIREITOS DO USUÁRIO (LGPD)</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed flex flex-col gap-3">
            <p>
              Em conformidade com a{" "}
              <strong className="text-primary-container font-semibold">Lei Geral de Proteção de Dados (Lei n.º 13.709/2018)</strong>,
              o usuário tem direito a confirmar a existência de tratamento, acessar, corrigir ou
              excluir seus dados, revogar consentimento e solicitar informações sobre compartilhamento
              com terceiros.
            </p>
            <p>
              Como o Serpentime não coleta dados em nossos servidores, a exclusão pode ser realizada
              desinstalando o aplicativo, o que remove todos os dados armazenados localmente.
            </p>
          </div>
        </section>

        {/* 06 — Alterações */}
        <section className="border-b-2 border-primary-container flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">06</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">ALTERAÇÕES NESTA POLÍTICA</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed">
            <p>
              A versão mais recente estará sempre disponível em{" "}
              <a href="https://motalabs.com.br/privacidade" className="text-primary-container underline underline-offset-2 hover:text-white">
                motalabs.com.br/privacidade
              </a>
              . Alterações relevantes serão comunicadas via atualização do aplicativo na App Store.
            </p>
          </div>
        </section>

        {/* 07 — Contato */}
        <section className="flex flex-col gap-4" style={{ padding: "24px" }}>
          <div className="flex items-start gap-4">
            <span className="font-display text-2xl font-black text-primary-container/40 leading-none select-none shrink-0">07</span>
            <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight">CONTATO</h2>
          </div>
          <div className="font-body text-body text-on-surface normal-case leading-relaxed">
            <p>
              Responsável pelo tratamento de dados:{" "}
              <strong className="text-primary-container font-semibold">Tércio Rodrigues Mota</strong>
              {" "}—{" "}
              <a href="mailto:contato@motalabs.com.br" className="text-primary-container underline underline-offset-2 hover:text-white">
                contato@motalabs.com.br
              </a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="border-t-2 border-primary-container flex flex-col md:flex-row md:justify-between md:items-center gap-4 font-meta text-meta text-primary uppercase bg-[#224225]"
          style={{ padding: "24px" }}
        >
          <div className="flex flex-col gap-1">
            <p>© 2026 MOTA LABS LTDA. TODOS OS DIREITOS RESERVADOS.</p>
            <p className="text-on-surface/60">CNPJ 61.619.848/0001-98</p>
          </div>
          <Link href="/" className="hover:text-white underline underline-offset-2 text-center md:text-right">
            ← VOLTAR AO INÍCIO
          </Link>
        </footer>
      </main>
    </div>
  );
}
