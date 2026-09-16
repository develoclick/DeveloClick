const es = {
  hero: {
    secondary: "Cómo funciona",
    chips: ["Respuesta en menos de 24 h", "Sin compromiso", "Toma 2 minutos"],
  },
  faq: {
    eyebrow: "Antes de escribirnos",
    title: "Dudas frecuentes.",
    items: [
      {
        q: "¿Enviar el cotizador me obliga a contratar?",
        a: "No. Es solo el punto de partida: recibes una propuesta y decides con calma si quieres avanzar.",
      },
      {
        q: "¿Qué pasa si no sé qué necesito?",
        a: "Elige la opción «No estoy seguro, necesito asesoría» en el primer paso. Te orientamos según tu objetivo de negocio.",
      },
      {
        q: "¿Cuándo recibo la respuesta?",
        a: "Respondemos cada solicitud en menos de 24 horas hábiles al correo que nos indiques.",
      },
    ],
  },
};

const en: typeof es = {
  hero: {
    secondary: "How it works",
    chips: ["Reply in under 24 h", "No commitment", "Takes 2 minutes"],
  },
  faq: {
    eyebrow: "Before you write",
    title: "Common questions.",
    items: [
      {
        q: "Does sending the quote form commit me to hire you?",
        a: "No. It's only the starting point: you get a proposal and decide calmly whether to move forward.",
      },
      {
        q: "What if I don't know what I need?",
        a: "Pick the option “I'm not sure, I need advice” in the first step. We'll guide you based on your business goal.",
      },
      {
        q: "When will I get a reply?",
        a: "We reply to every request in under 24 business hours at the email you give us.",
      },
    ],
  },
};

const contacto = { es, en };
export default contacto;
