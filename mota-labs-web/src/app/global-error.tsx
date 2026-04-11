"use client";

import "./globals.css";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body bg-background text-primary antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-12">
          <div className="max-w-md text-center">
            <h1 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary-container">
              Erro crítico
            </h1>
            <p className="mt-3 text-sm">
              A aplicação não pôde iniciar esta vista. Tente recarregar a página.
            </p>
            {process.env.NODE_ENV === "development" && error.message ? (
              <pre className="mt-4 max-h-32 overflow-auto rounded border border-primary-container bg-surface p-3 text-left font-mono text-xs">
                {error.message}
              </pre>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => reset()}
            className="border-2 border-primary-container bg-primary-container px-6 py-2 font-label text-sm font-bold uppercase tracking-tighter text-on-primary"
          >
            Tentar de novo
          </button>
        </div>
      </body>
    </html>
  );
}
