"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * Tema persistido em localStorage, independente de navegação / locale.
 * Só aplica classe e grava storage depois da leitura inicial no cliente.
 */
export function useThemePreference() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, ready]);

  return { theme, setTheme, ready };
}
