"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/componentes/ThemeProvider";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={theme === "dark" ? t.theme.activateLight : t.theme.activateDark}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-white/10 ${className}`}
    >
      <Sun size={17} className={`absolute transition-all duration-300 ${theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
      <Moon size={17} className={`absolute transition-all duration-300 ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`} />
    </button>
  );
}
