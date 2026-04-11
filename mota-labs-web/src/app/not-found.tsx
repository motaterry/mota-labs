import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4 py-12 text-primary">
      <div className="max-w-md text-center">
        <p className="font-label text-sm uppercase tracking-widest text-primary-container">404</p>
        <h1 className="mt-2 font-headline text-2xl font-bold uppercase tracking-tight">
          Página não encontrada
        </h1>
        <p className="mt-3 font-body text-sm">
          O endereço não existe ou foi movido.
        </p>
      </div>
      <Link
        href="/"
        className="border-2 border-primary-container bg-surface px-6 py-2 font-label text-sm font-bold uppercase tracking-tighter text-primary-container transition-none hover:bg-primary-container/10"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
