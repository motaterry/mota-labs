"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 py-12 text-primary">
      <div className="max-w-md text-center">
        <h1 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary-container">
          Algo deu errado
        </h1>
        <p className="mt-3 font-body text-sm text-primary">
          Não foi possível carregar esta página. Pode tentar de novo ou voltar ao início.
        </p>
        {process.env.NODE_ENV === "development" && error.message ? (
          <pre className="mt-4 max-h-32 overflow-auto rounded border border-primary-container bg-surface p-3 text-left font-mono text-xs text-primary">
            {error.message}
          </pre>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="border-2 border-primary-container bg-primary-container px-6 py-2 font-label text-sm font-bold uppercase tracking-tighter text-on-primary transition-none hover:opacity-90"
        >
          Tentar de novo
        </button>
        <a
          href="/"
          className="border-2 border-primary-container bg-surface px-6 py-2 font-label text-sm font-bold uppercase tracking-tighter text-primary-container transition-none hover:bg-primary-container/10"
        >
          Início
        </a>
      </div>
    </div>
  );
}
