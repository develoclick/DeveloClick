"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Calendar, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function ContactSection() {
  const { t } = useLanguage();
  const cs = t.contactoSection;
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-white dark:bg-[#07182d] py-20 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Lado Izquierdo: Información */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-[#07182d] dark:text-white mb-4">{cs.title}</h2>
            <p className="text-slate-500 dark:text-slate-400">{cs.paragraph}</p>
          </div>

          <div className="space-y-4">
            <ContactMethod icon={<Mail />} label={cs.email.toUpperCase()} value="hola@develoclick.com" href="mailto:hola@develoclick.com" />
            <ContactMethod icon={<MessageCircle />} label={cs.whatsapp.toUpperCase()} value="+52 55 1234 5678" href="https://wa.me/525512345678" />
            <ContactMethod icon={<MapPin />} label={cs.location.toUpperCase()} value="Ciudad de México, MX" />
            <ContactMethod icon={<Calendar />} label={cs.schedule.toUpperCase()} value={cs.scheduleValue} href="/#cotizador" />
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="rounded-3xl border border-gray-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#E63946]/30 bg-[#E63946]/10">
                  <CheckCircle2 size={40} className="text-[#E63946]" />
                </div>
                <h3 className="text-2xl font-bold text-[#07182d] dark:text-white mb-2">{cs.successTitle}</h3>
                <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cs.successMessage.replace("{name}", name ? `, ${name}` : "")}
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h3 className="text-2xl font-bold text-[#07182d] dark:text-white mb-6">{cs.formTitle}</h3>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <InputField label={cs.nameLabel} placeholder={cs.namePlaceholder} value={name} onChange={setName} required />
                  <InputField label={cs.emailLabel} placeholder={cs.emailPlaceholder} type="email" required />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-display font-bold text-gray-700 dark:text-slate-300">{cs.messageLabel}</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/[0.03] p-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] outline-none transition"
                      placeholder={cs.messagePlaceholder}
                    />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#E63946] py-4 text-white font-display font-bold hover:bg-[#cf2e3b] transition shadow-lg shadow-red-500/20">
                    <Send size={18} /> {cs.send}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

// Sub-componentes
function ContactMethod({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl text-gray-600 dark:text-slate-300">{icon}</div>
        <div>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-slate-500 uppercase">{label}</p>
          <p className="text-sm font-display font-bold text-[#07182d] dark:text-white">{value}</p>
        </div>
      </div>
      {href && <ArrowUpRight className="text-gray-300 dark:text-slate-600 group-hover:text-[#E63946] transition" size={20} />}
    </>
  );

  const className = "flex items-center justify-between p-5 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-gray-200 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition group";

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function InputField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-display font-bold text-gray-700 dark:text-slate-300">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl border border-gray-200 dark:border-white/15 bg-white dark:bg-white/[0.03] p-4 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-600 focus:border-[#E63946] focus:ring-1 focus:ring-[#E63946] outline-none transition"
        placeholder={placeholder}
      />
    </div>
  );
}
