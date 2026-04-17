import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade — MOTA LABS",
  description:
    "Como a MOTA LABS LTDA trata os dados dos usuários de seus aplicativos e serviços.",
};

const sections = [
  {
    number: "01",
    title: "QUEM SOMOS",
    content: (
      <>
        <p>
          A <strong className="text-primary-container font-semibold">MOTA LABS LTDA</strong>,
          inscrita no CNPJ sob o n.º <span className="text-primary-container">61.619.848/0001-98</span>,
          é uma empresa brasileira de desenvolvimento de software, especializada no ecossistema
          Apple. Nosso produto atual é o <strong className="text-primary-container font-semibold">Serpentime</strong>,
          aplicativo disponível na App Store.
        </p>
        <p>
          Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo
          e-mail{" "}
          <a
            href="mailto:contato@motalabs.com.br"
            className="text-primary-container underline underline-offset-2 decoration-1 hover:text-white transition-none"
          >
            contato@motalabs.com.br
          </a>
          .
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "DADOS QUE COLETAMOS",
    content: (
      <>
        <p>
          Nossos aplicativos são projetados com privacidade em primeiro lugar.
          O Serpentime opera de forma totalmente <strong className="text-primary-container font-semibold">offline</strong> —
          todos os dados inseridos pelo usuário (registros de animais, histórico de saúde,
          alimentação e informações de manejo) ficam armazenados exclusivamente no próprio
          dispositivo, sem envio a servidores externos.
        </p>
        <p>
          Não coletamos dados pessoais identificáveis, não solicitamos cadastro e não
          exigimos criação de conta para uso do aplicativo.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "DADOS DE DIAGNÓSTICO",
    content: (
      <p>
        Podemos receber, por meio dos sistemas da Apple (App Store Connect / TestFlight),
        relatórios anônimos de falhas e diagnósticos de desempenho. Esses dados são
        fornecidos pela Apple de forma agregada e anonimizada, de acordo com as
        configurações de privacidade do dispositivo do usuário. Não são associados
        a nenhuma identidade pessoal.
      </p>
    ),
  },
  {
    number: "04",
    title: "USO DE DADOS",
    content: (
      <>
        <p>Como não coletamos dados pessoais diretamente, nosso uso de dados é restrito a:</p>
        <ul className="flex flex-col gap-2 mt-2 ml-4 list-disc list-outside marker:text-primary-container">
          <li>Diagnósticos anônimos para correção de falhas técnicas.</li>
          <li>Estatísticas agregadas de uso fornecidas pela App Store para fins de melhoria do produto.</li>
        </ul>
        <p className="mt-3">
          Em nenhuma hipótese vendemos, alugamos ou compartilhamos dados de usuários
          com terceiros para fins comerciais.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "DIREITOS DO USUÁRIO",
    content: (
      <>
        <p>
          Em conformidade com a{" "}
          <strong className="text-primary-container font-semibold">
            Lei Geral de Proteção de Dados (Lei n.º 13.709/2018 — LGPD)
          </strong>
          , o usuário tem direito a:
        </p>
        <ul className="flex flex-col gap-2 mt-2 ml-4 list-disc list-outside marker:text-primary-container">
          <li>Confirmar a existência de tratamento de dados pessoais.</li>
          <li>Acessar, corrigir ou excluir seus dados.</li>
          <li>Revogar o consentimento quando aplicável.</li>
          <li>Solicitar informações sobre compartilhamento com terceiros.</li>
        </ul>
        <p className="mt-3">
          Como o Serpentime não coleta dados pessoais em nossos servidores, a exclusão
          pode ser realizada diretamente pelo usuário desinstalando o aplicativo, o que
          remove todos os dados armazenados localmente.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "LINKS EXTERNOS",
    content: (
      <p>
        Nossos aplicativos ou site podem conter links para serviços de terceiros,
        como a App Store da Apple. Não nos responsabilizamos pelas práticas de
        privacidade desses serviços externos, que possuem suas próprias políticas.
      </p>
    ),
  },
  {
    number: "07",
    title: "ALTERAÇÕES NESTA POLÍTICA",
    content: (
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. A versão mais
        recente estará sempre disponível em{" "}
        <a
          href="https://motalabs.com.br/privacidade"
          className="text-primary-container underline underline-offset-2 decoration-1 hover:text-white transition-none"
        >
          motalabs.com.br/privacidade
        </a>
        . Alterações relevantes serão comunicadas por meio de atualização do aplicativo
        na App Store.
      </p>
    ),
  },
  {
    number: "08",
    title: "CONTATO",
    content: (
      <p>
        Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em
        contato com o responsável pelo tratamento de dados:{" "}
        <strong className="text-primary-container font-semibold">Tércio Rodrigues Mota</strong>{" "}
        —{" "}
        <a
          href="mailto:contato@motalabs.com.br"
          className="text-primary-container underline underline-offset-2 decoration-1 hover:text-white transition-none"
        >
          contato@motalabs.com.br
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <div
      className="flex flex-col min-h-screen justify-start items-center relative overflow-x-hidden"
      style={{ padding: "24px" }}
    >
      {/* Background Grid Layer */}
      <div className="fixed inset-0 grid-overlay -z-10 pointer-events-none" />

      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="w-full max-w-3xl flex flex-col border-2 border-primary-container bg-[#224225] outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Header row */}
        <div className="border-b-2 border-primary-container flex justify-start items-stretch">
          <Link
            href="/"
            className="relative box-border flex h-24 w-28 min-h-24 min-w-[7rem] shrink-0 flex-col gap-0 overflow-hidden border-r-2 border-primary-container p-0 outline-offset-4"
            aria-label="Mota Labs — voltar ao início"
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

        {/* Sections */}
        {sections.map((section, index) => (
          <section
            key={section.number}
            className={`border-primary-container flex flex-col gap-4${index < sections.length - 1 ? " border-b-2" : ""}`}
            style={{ padding: "24px" }}
          >
            <div className="flex items-start gap-4 min-w-0">
              <span className="font-display text-2xl font-black text-primary-container/40 leading-none shrink-0 select-none">
                {section.number}
              </span>
              <h2 className="font-display text-section font-black text-primary-container uppercase leading-tight [overflow-wrap:break-word]">
                {section.title}
              </h2>
            </div>
            <div className="font-body text-body md:text-body-lg text-on-surface normal-case leading-relaxed flex flex-col gap-3 [overflow-wrap:break-word]">
              {section.content}
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer
          className="border-t-2 border-primary-container flex flex-col md:flex-row md:justify-between md:items-center gap-4 font-meta text-meta text-primary uppercase bg-[#224225]"
          style={{ padding: "24px" }}
        >
          <div className="flex flex-col gap-1">
            <p className="[overflow-wrap:break-word]">© 2026 MOTA LABS LTDA. TODOS OS DIREITOS RESERVADOS.</p>
            <p className="text-on-surface/60">CNPJ 61.619.848/0001-98</p>
          </div>
          <Link
            href="/"
            className="hover:text-white underline underline-offset-2 text-center md:text-right"
          >
            ← VOLTAR AO INÍCIO
          </Link>
        </footer>
      </main>
    </div>
  );
}
