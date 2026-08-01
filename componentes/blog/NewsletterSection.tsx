"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#07182D] px-8 py-14 text-center shadow-2xl sm:px-14 sm:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(230,57,70,0.3),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.2),transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-xl">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#E63946]">
            <Mail size={22} />
          </div>

          <h2 className="mt-5 text-2xl font-display font-bold leading-tight tracking-tight text-white sm:text-3xl">
            Recibe estrategias tecnológicas para hacer crecer tu empresa.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Un correo al mes. Cero spam. Solo ideas prácticas que puedes aplicar de inmediato.
          </p>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-8 flex flex-col items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-5"
              >
                <CheckCircle2 size={28} className="text-emerald-400" />
                <p className="text-sm font-semibold text-white">¡Listo! Revisa tu correo para confirmar la suscripción.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="flex-1 text-left">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@empresa.com"
                    aria-label="Correo electrónico"
                    className="w-full rounded-xl border border-white/15 bg-white/[0.05] px-5 py-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-[#E63946] focus:bg-white/[0.08]"
                  />
                  {error && <p className="mt-2 text-xs font-semibold text-red-400">{error}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E63946] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#E63946]/25 transition-transform hover:-translate-y-0.5"
                >
                  Suscribirme <Send size={16} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
