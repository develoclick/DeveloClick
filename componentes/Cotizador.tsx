"use client";

import { useState } from "react";
import { Check, ChevronRight, ChevronLeft, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function Cotizador() {
  const { t } = useLanguage();
  const c = t.cotizador;
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    objective: "",
    budget: "",
    urgency: "",
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    description: "",
    references: "",
  });

  const updateForm = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isCurrentStepValid = () => {
    if (step === 1) return !!formData.type;
    if (step === 2) return !!formData.objective;
    if (step === 3) return !!formData.budget;
    if (step === 4) return !!formData.urgency;
    if (step === 5) return !!(formData.name && formData.email && formData.whatsapp);
    return true;
  };

  return (
    <section id="cotizador" className="relative scroll-mt-24 overflow-hidden bg-[#07182d] py-24 text-white lg:py-32">
      {/* Elementos de fondo decorativos */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF2738]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header del cotizador */}
      <div className="mx-auto max-w-3xl text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#FF2738]/20 bg-white/5 px-4 py-1.5 shadow-sm mb-4 backdrop-blur-md">
          <Sparkles size={14} className="text-[#FF2738]" />
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF2738] uppercase">
            {c.badge}
          </span>
        </div>

        <h2 className="mt-4 text-4xl font-display font-bold leading-[1.03] tracking-[-0.05em] text-[#ffffff] sm:text-5xl">
          {c.title1} <br /><span className="text-[#FF2738]">{c.titleHighlight}</span>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {c.subtitle}
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 mt-14 z-10">
        {/* PROGRESS BAR (Solo visible si no se ha enviado) */}
        {!isSubmitted && (
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs font-bold tracking-[0.18em] text-slate-400 uppercase">
              <span className="text-[#FF2738]">{c.stepLabel} {step} {c.of}</span>
              <span>{Math.round((step / 6) * 100)}% {c.completed}</span>
            </div>

            <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#FF2738] to-[#ff4d5b] transition-all duration-500 ease-out"
                style={{ width: `${(step / 6) * 100}%` }}
              />
            </div>

            <div className="mt-4 hidden md:grid grid-cols-6 gap-2 text-center text-[12px] font-bold uppercase tracking-wider text-slate-500">
              {c.steps.map((s, index) => (
                <span
                  key={s}
                  className={`transition-colors duration-300 ${step === index + 1 ? "text-[#FF2738]" : step > index + 1 ? "text-slate-300" : ""
                    }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CARD CONTAINER PRINCIPAL */}
        <div className="rounded-[2.5rem] border border-white/10 bg-[#0A192F]/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-12 relative overflow-hidden">

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border border-[#FF2738]/30 bg-[#FF2738]/10 shadow-lg shadow-[#FF2738]/20">
                  <Check size={48} className="text-[#FF2738]" />
                </div>
                <h3 className="mb-3 text-3xl font-black text-white tracking-tight">{c.successTitle}</h3>
                <p className="max-w-md text-base text-slate-300 leading-relaxed">
                  {c.successMessage.replace("{name}", formData.name)}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* STEPS CONTENT */}
                {step === 1 && (
                  <StepLayout
                    title={c.q1Title}
                    subtitle={c.q1Subtitle}
                    options={c.projectTypes}
                    selected={formData.type}
                    onSelect={(val: string) => updateForm("type", val)}
                  />
                )}
                {step === 2 && (
                  <StepLayout
                    title={c.q2Title}
                    subtitle={c.q2Subtitle}
                    options={c.objectives}
                    selected={formData.objective}
                    onSelect={(val: string) => updateForm("objective", val)}
                  />
                )}
                {step === 3 && (
                  <StepLayout
                    title={c.q3Title}
                    subtitle={c.q3Subtitle}
                    options={c.budgets}
                    selected={formData.budget}
                    onSelect={(val: string) => updateForm("budget", val)}
                  />
                )}
                {step === 4 && (
                  <StepLayout
                    title={c.q4Title}
                    subtitle={c.q4Subtitle}
                    options={c.urgencies}
                    selected={formData.urgency}
                    onSelect={(val: string) => updateForm("urgency", val)}
                  />
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{c.contactTitle}</h3>
                      <p className="mt-2 text-sm text-slate-400">{c.contactSubtitle}</p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <InputField label={c.nameLabel} placeholder={c.namePlaceholder} value={formData.name} onChange={(v: string) => updateForm("name", v)} />
                      <InputField label={c.emailLabel} placeholder={c.emailPlaceholder} value={formData.email} onChange={(v: string) => updateForm("email", v)} />
                      <InputField label={c.whatsappLabel} placeholder={c.whatsappPlaceholder} value={formData.whatsapp} onChange={(v: string) => updateForm("whatsapp", v)} />
                      <InputField label={c.companyLabel} placeholder={c.companyPlaceholder} value={formData.company} onChange={(v: string) => updateForm("company", v)} />
                    </div>

                    <InputField label={c.descriptionLabel} placeholder={c.descriptionPlaceholder} value={formData.description} onChange={(v: string) => updateForm("description", v)} textarea />
                    <InputField label={c.referencesLabel} placeholder={c.referencesPlaceholder} value={formData.references} onChange={(v: string) => updateForm("references", v)} />
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{c.summaryTitle}</h3>
                      <p className="mt-2 text-sm text-slate-400">{c.summarySubtitle}</p>
                    </div>

                    <div className="grid gap-3">
                      <SummaryItem label={c.summaryType} value={formData.type} />
                      <SummaryItem label={c.summaryObjective} value={formData.objective} />
                      <SummaryItem label={c.summaryBudget} value={formData.budget} />
                      <SummaryItem label={c.summaryUrgency} value={formData.urgency} />
                      <SummaryItem label={c.summaryContact} value={`${formData.name} · ${formData.email} · ${formData.whatsapp}`} />
                      {formData.description && <SummaryItem label={c.summaryDescription} value={formData.description} />}
                    </div>

                    <button
                      disabled={loading}
                      onClick={async () => {
                        setLoading(true);
                        try {
                          const respuesta = await fetch("https://8x4gau47hh.execute-api.us-east-2.amazonaws.com/default/contacto-api2", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                          });

                          // Leemos la respuesta como texto primero por si el servidor devolvió un error HTML/texto plano
                          const textoRespuesta = await respuesta.text();
                          let resultado;
                          try {
                            resultado = JSON.parse(textoRespuesta);
                          } catch {
                            resultado = { error: textoRespuesta || "Error desconocido del servidor" };
                          }

                          if (respuesta.ok) {
                            setIsSubmitted(true);
                          } else {
                            // AQUÍ VERÁS EL ERROR REAL QUE ENVÍA AWS O LAMBDA
                            alert("Error del servidor: " + (resultado.error || JSON.stringify(resultado)));
                          }
                        } catch (error) {
                          console.error("Error de red detallado:", error);
                          alert("Error de red: No se pudo contactar con AWS. Revisa la consola (F12).");
                        } finally {
                          setLoading(false);
                        }
                      }}
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FF2738] py-4 text-sm font-bold text-white shadow-lg shadow-[#FF2738]/25 transition-transform hover:scale-[1.01] active:scale-[0.99] mt-6 disabled:opacity-50"
                    >
                      <Send size={18} />
                      {loading ? "Enviando solicitud..." : c.submit}
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* NAVIGATION BUTTONS */}
          {!isSubmitted && step < 6 && (
            <div className={`mt-10 flex pt-6 border-t border-white/10 ${step > 1 ? "justify-between" : "justify-end"}`}>
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
                >
                  <ChevronLeft size={18} /> {c.back}
                </button>
              )}

              <button
                type="button"
                disabled={!isCurrentStepValid()}
                onClick={() => setStep(step + 1)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF2738] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF2738]/20 transition-all hover:bg-[#e02030] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
              >
                {c.continue} <ChevronRight size={16} />
              </button>
            </div>
          )}

          {!isSubmitted && step === 6 && (
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-start">
              <button
                type="button"
                onClick={() => setStep(5)}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
              >
                <ChevronLeft size={18} /> {c.editData}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// Helper Components
function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
      <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF2738]">{label}</span>
      <span className="text-sm font-medium text-white text-left sm:text-right">{value}</span>
    </div>
  );
}

function StepLayout({
  title,
  subtitle,
  options,
  selected,
  onSelect,
}: {
  title: string;
  subtitle: string;
  options: readonly string[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        {options.map((opt: string) => {
          const isSelected = selected === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onSelect(opt)}
              className={`group flex items-center justify-between rounded-2xl border p-5 text-left text-sm font-semibold transition-all duration-300 ${isSelected
                ? "border-[#FF2738] bg-[#FF2738]/10 text-white shadow-lg shadow-[#FF2738]/10"
                : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/25 hover:bg-white/[0.05]"
                }`}
            >
              <span className="tracking-tight">{opt}</span>
              <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${isSelected ? "bg-[#FF2738] border-[#FF2738] text-white" : "border-white/30 group-hover:border-white/50"
                }`}>
                {isSelected && <Check size={12} strokeWidth={3} />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  textarea = false,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold tracking-wide text-slate-300 uppercase">{label}</label>
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] p-4 text-sm text-white placeholder:text-slate-600 focus:border-[#FF2738] focus:bg-white/[0.05] outline-none transition-all resize-none shadow-inner"
        />
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:border-[#FF2738] focus:bg-white/[0.05] outline-none transition-all shadow-inner"
        />
      )}
    </div>
  );
}
