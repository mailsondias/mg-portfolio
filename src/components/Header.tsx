"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type Lang = "pt" | "en";

export function Header() {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
      <div className="justify-self-start">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          MG
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="flex rounded-full border border-zinc-200 p-0.5 text-xs font-medium dark:border-zinc-700">
          {(["pt", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={`rounded-full px-3 py-1 transition-colors ${
                lang === code
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
          className="rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          aria-label={theme === "light" ? "Ativar tema escuro" : "Ativar tema claro"}
        >
          {theme === "light" ? "Escuro" : "Claro"}
        </button>
      </div>

      <nav className="justify-self-end flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        <Link href="#projetos" className="hover:text-zinc-950 dark:hover:text-white">
          Projetos
        </Link>
        <Link href="#sobre" className="hover:text-zinc-950 dark:hover:text-white">
          Sobre
        </Link>
        <Link href="#contato" className="hover:text-zinc-950 dark:hover:text-white">
          Contato
        </Link>
      </nav>
    </header>
  );
}