"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { flushSync } from "react-dom";
import FadeIn from "@/components/FadeIn";
import { useThemePreference } from "@/hooks/useThemePreference";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme, ready: themeReady } = useThemePreference();
  const alternativeLocale = routing.locales.find((code) => code !== locale);

  const handleThemeToggle = () => {
    const toggle = () =>
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
  
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => {
        flushSync(toggle);
      });
    } else {
      toggle();
    }
  };

  return (
    <header
      className="grid w-full grid-cols-[1fr_auto_1fr] gap-4 px-6 py-4 pt-6 max-w-[1600px] mx-auto fixed top-0 left-0 right-0 z-50"
      suppressHydrationWarning
    >
      <FadeIn delay={0} className="justify-self-start" suppressHydrationWarning>
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 bg-white dark:bg-zinc-900 p-1 pt-0"
        >
          mg
        </Link>
      </FadeIn>

      <FadeIn delay={300} className="flex items-start gap-2" suppressHydrationWarning>
        <button
          type="button"
          disabled={!themeReady}
          onClick={handleThemeToggle}
          className="inline-flex size-7 cursor-pointer items-center justify-center rounded-full text-zinc-800 transition-colors disabled:cursor-not-allowed dark:border-zinc-700 dark:text-zinc-100 bg-white dark:bg-zinc-900"
          aria-label={theme === "light" ? t("themeDark") : t("themeLight")}
        >
          {theme === "light" ? (
            <MoonIcon className="size-5" fill="currentColor" aria-hidden />
          ) : (
            <SunIcon className="size-5" fill="currentColor" aria-hidden />
          )}
        </button>
        <div
          className="mt-[2px] flex border-zinc-100 p-0.5 text-xs font-medium dark:border-zinc-400 bg-white dark:bg-zinc-900"
          suppressHydrationWarning
        >
          {alternativeLocale && (
            <button
              type="button"
              onClick={() => router.replace(pathname, { locale: alternativeLocale })}
              className="cursor-pointer px-2 py-0.5 text-xs font-medium transition-colors text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {alternativeLocale.toUpperCase()}
            </button>
          )}
        </div>
      </FadeIn>

      <nav className="justify-self-end flex mt-2 flex-col md:flex-row md:gap-3 w-auto gap-2 items-end text-right text-lg font-medium">
        <FadeIn delay={450}>
          <Link
            href="#sobre"
            className="font-bold lowercase border-b-2 border-[#ddd] pb-1 leading-none hover:border-zinc-900 dark:border-slate-600 hover:text-zinc-950 dark:hover:border-white dark:hover:text-white bg-white dark:bg-zinc-900"
          >
            {t("about")}
          </Link>
        </FadeIn>
        <FadeIn delay={600}>
          <Link
            href="#projetos"
            className="font-bold lowercase border-b-2 border-[#ddd] pb-1 leading-none hover:border-zinc-900 dark:border-slate-600 hover:text-zinc-950 dark:hover:border-white dark:hover:text-white bg-white dark:bg-zinc-900"
          >
            {t("projects")}
          </Link>
        </FadeIn>
        <FadeIn delay={750}>
          <Link
            href="#contato"
            className="font-bold lowercase border-b-2 border-[#ddd] pb-1 leading-none hover:border-zinc-900 dark:border-slate-600 hover:text-zinc-950 dark:hover:border-white dark:hover:text-white bg-white dark:bg-zinc-900"
          >
            {t("contact")}
          </Link>
        </FadeIn>
      </nav>
    </header>
  );
}
