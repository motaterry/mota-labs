import BentoBox from "@/components/BentoBox";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center relative overflow-x-hidden p-4 md:p-8">
      {/* Background Grid Layer */}
      <div className="fixed inset-0 grid-overlay -z-10 pointer-events-none"></div>
      
      <main
        id="conteudo-principal"
        tabIndex={-1}
        className="w-full flex items-center justify-center relative z-10 outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <BentoBox />
      </main>

    </div>
  );
}
