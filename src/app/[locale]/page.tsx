import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div
      className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col border border-red-500 bg-zinc-50 font-sans dark:bg-zinc-950"
      suppressHydrationWarning
    >
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {t("title")}
        </h1>
      </main>
    </div>
  );
}
