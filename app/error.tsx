"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

/**
 * Frontera de error de segmento.
 * No expone el mensaje interno al usuario (podría filtrar rutas, stack o
 * detalles de infraestructura). El detalle solo se registra en el servidor
 * de logs del hosting; al usuario se le da el `digest`, que es el
 * identificador opaco que Next genera para correlacionar el incidente.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // En producción esto lo captura el logger del hosting (Vercel).
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-white transition-colors duration-300 dark:bg-brand-navy">
      <div className="mx-auto w-full max-w-xl px-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-red-500/10 text-brand-red-600 dark:text-brand-red-400">
          <AlertTriangle size={28} />
        </div>

        <h1 className="type-h2 mt-8 text-brand-navy dark:text-white">
          Algo no funcionó como esperábamos.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-base leading-8 text-slate-600 dark:text-slate-400">
          Ha ocurrido un error inesperado en esta página. Puedes intentarlo de
          nuevo o volver al inicio. Si el problema persiste, escríbenos y lo
          revisamos.
        </p>

        {error.digest && (
          <p className="mt-4 font-mono text-xs text-slate-400 dark:text-slate-500">
            Referencia: {error.digest}
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-7 py-4 text-sm font-bold text-white elev-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c1303b] sm:w-auto"
          >
            <RotateCcw size={16} />
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-brand-navy transition-all duration-300 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
