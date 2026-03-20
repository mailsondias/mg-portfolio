import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-zinc-950">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Portfolio
        </h1>
      </main>
    </div>
  );
}