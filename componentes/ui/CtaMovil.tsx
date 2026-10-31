"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import common from "@/componentes/i18n/pages/common";

/**
 * Barra de acción fija en móvil.
 *
 * En pantallas pequeñas el CTA del navbar queda dentro del menú plegado, así
 * que tras la primera pantalla no hay ninguna llamada a la acción visible.
 * Esta barra la mantiene siempre a un toque.
 *
 * No aparece en /contacto: allí el cotizador ya está en la página y taparía
 * sus propios campos.
 */
export default function CtaMovil() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const c = usePage(common);
  const [visible, setVisible] = useState(false);

  // Solo después de pasar la primera pantalla: antes el hero ya tiene su CTA.
  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contacto")) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-brand-ink/95 xl:hidden"
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
          }}
        >
          <div className="flex items-center gap-3 px-4 pt-3">
            <p className="min-w-0 flex-1 text-xs font-semibold leading-tight text-slate-600 dark:text-slate-400">
              {c.noCommitment}
            </p>
            <Link
              href="/contacto#cotizador"
              className="flex shrink-0 items-center gap-2 rounded-xl bg-brand-red-600 px-5 py-3 font-display text-sm font-bold text-white elev-2 transition hover:bg-brand-red-700"
            >
              {t.nav.cotizar}
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
