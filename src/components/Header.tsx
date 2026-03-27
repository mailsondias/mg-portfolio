"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import { useThemePreference } from "@/hooks/useThemePreference";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function Header() {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme, ready: themeReady } = useThemePreference();

  return (
    <header
      className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-zinc-200 px-6 py-4 dark:border-zinc-800"
      suppressHydrationWarning
    >
      <div className="justify-self-start" suppressHydrationWarning>
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          mg
        </Link>
      </div>

      <div
        className="flex items-center justify-center gap-3"
        suppressHydrationWarning
      >
        <button
          type="button"
          disabled={!themeReady}
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
          className="inline-flex size-9 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-zinc-800 transition-colors hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          aria-label={theme === "light" ? t("themeDark") : t("themeLight")}
        >
          {theme === "light" ? (
            <MoonIcon className="size-5" aria-hidden />
          ) : (
            <SunIcon className="size-5" aria-hidden />
          )}
        </button>
        <div
          className="flex rounded-full border border-zinc-200 p-0.5 text-xs font-medium dark:border-zinc-700"
          suppressHydrationWarning
        >
          {routing.locales.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => router.replace(pathname, { locale: code })}
              className={`cursor-pointer rounded-full px-3 py-1 transition-colors ${
                locale === code
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <nav className="justify-self-end flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <Link
          href="#projetos"
          className="hover:text-zinc-950 dark:hover:text-white"
        >
          {t("projects")}
        </Link>
        <Link
          href="#sobre"
          className="hover:text-zinc-950 dark:hover:text-white"
        >
          {t("about")}
        </Link>
        <Link
          href="#contato"
          className="hover:text-zinc-950 dark:hover:text-white"
        >
          {t("contact")}
        </Link>
      </nav>
    </header>
  );
}
