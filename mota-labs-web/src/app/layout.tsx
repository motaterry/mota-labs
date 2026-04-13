import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

/** Absolute URLs for Open Graph / Twitter (required with static export). */
function siteMetadataBase(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return new URL(explicit.endsWith("/") ? explicit.slice(0, -1) : explicit);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3333");
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"], // Space_Grotesk max weight is 700 in some versions, but next handles it.
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: "MOTA LABS | Software com acabamento humano",
  description: "Desenvolvimento de artefatos para o ecossistema iOS e web. Alinhado ao eixo desde a concepção.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MOTA LABS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable + " " + inter.variable}>
      <body
        className={`font-body selection:bg-primary-container selection:text-on-primary min-h-screen flex flex-col antialiased relative`}
      >
        <a
          href="#conteudo-principal"
          className="absolute left-4 top-0 z-[100] -translate-y-[150%] border-2 border-primary-container bg-surface px-4 py-2 font-label text-label text-primary-container uppercase shadow-[4px_4px_0px_#F3797A] transition-transform duration-200 focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-container motion-reduce:transition-none"
        >
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
