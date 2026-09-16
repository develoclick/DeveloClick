const es = {
  hero: {
    secondary: "¿Qué plan necesito?",
    chips: ["Sin cuotas ocultas", "Precio por escrito", "Rangos en USD"],
  },
  finder: {
    eyebrow: "Recomendador",
    title: "¿Qué plan necesito?",
    highlight: "Respóndelo en 3 clics.",
    paragraph:
      "Es una orientación rápida, no un presupuesto. El precio exacto lo recibes al contarnos tu proyecto.",
    step: "Pregunta",
    of: "de",
    back: "Volver",
    restart: "Empezar de nuevo",
    resultEyebrow: "Tu punto de partida",
    resultCta: "Cotizar con este plan",
    seePlan: "Ver detalle del plan",
    questions: [
      {
        q: "¿Qué necesitas construir?",
        options: [
          { label: "Una web o landing para presentar mi negocio", score: 0 },
          {
            label: "Un sitio completo que capte y gestione clientes",
            score: 1,
          },
          { label: "Un software, plataforma o dashboard", score: 2 },
        ],
      },
      {
        q: "¿Cuánta lógica o integración requiere?",
        options: [
          { label: "Poca: contenido y un formulario", score: 0 },
          { label: "Media: CRM, analítica o pagos", score: 1 },
          { label: "Alta: usuarios, roles o automatizaciones", score: 2 },
        ],
      },
      {
        q: "¿Qué acompañamiento esperas después?",
        options: [
          { label: "Lo lanzo y lo gestiono yo", score: 0 },
          { label: "Soporte el primer mes", score: 1 },
          { label: "Acompañamiento técnico continuo", score: 2 },
        ],
      },
    ],
    reasons: [
      "Tu proyecto se centra en presentar tu negocio y convertir visitas en contactos.",
      "Necesitas un sitio con lógica de conversión, integraciones y soporte inicial.",
      "Tu proyecto requiere arquitectura a medida, usuarios y funcionalidades complejas.",
    ],
  },
  incluido: {
    eyebrow: "En todos los planes",
    title: "Lo que nunca",
    highlight: "se cobra aparte.",
    items: [
      {
        title: "Estrategia y diseño",
        text: "Cada plan incluye estrategia, diseño UX/UI y desarrollo completo.",
      },
      {
        title: "Cero plantillas",
        text: "Todo se construye a medida de tu negocio y tus clientes.",
      },
      {
        title: "Responsive y rápido",
        text: "Se ve y funciona bien en móvil, tablet y escritorio.",
      },
      {
        title: "Precio por escrito",
        text: "Recibes alcance, tiempos y costo antes de empezar.",
      },
    ],
  },
  tabla: {
    eyebrow: "Comparativa",
    title: "Los tres planes,",
    highlight: "lado a lado.",
    feature: "Qué incluye",
    yes: "Incluido",
    no: "No incluido",
    rows: [
      { label: "Diseño UX/UI a medida", plans: [true, true, true] },
      { label: "Responsive y Core Web Vitals", plans: [true, true, true] },
      { label: "SEO on-page", plans: [true, true, true] },
      { label: "Sitio multipágina o dashboard", plans: [false, true, true] },
      {
        label: "Integraciones (CRM, analítica, formularios)",
        plans: [false, true, true],
      },
      {
        label: "Animaciones e interacciones premium",
        plans: [false, true, true],
      },
      { label: "Soporte post-lanzamiento", plans: [false, true, true] },
      {
        label: "Software o plataforma SaaS multiusuario",
        plans: [false, false, true],
      },
      { label: "Automatizaciones y APIs propias", plans: [false, false, true] },
      { label: "Acompañamiento técnico continuo", plans: [false, false, true] },
    ],
  },
};

const en: typeof es = {
  hero: {
    secondary: "Which plan do I need?",
    chips: ["No hidden fees", "Price in writing", "Ranges in USD"],
  },
  finder: {
    eyebrow: "Plan finder",
    title: "Which plan do I need?",
    highlight: "Answer in 3 clicks.",
    paragraph:
      "It's a quick guide, not a quote. You get the exact price when you tell us about your project.",
    step: "Question",
    of: "of",
    back: "Back",
    restart: "Start over",
    resultEyebrow: "Your starting point",
    resultCta: "Get a quote for this plan",
    seePlan: "See plan details",
    questions: [
      {
        q: "What do you need to build?",
        options: [
          {
            label: "A website or landing page to present my business",
            score: 0,
          },
          {
            label: "A full site that attracts and manages customers",
            score: 1,
          },
          { label: "Software, a platform or a dashboard", score: 2 },
        ],
      },
      {
        q: "How much logic or integration does it need?",
        options: [
          { label: "Little: content and a form", score: 0 },
          { label: "Medium: CRM, analytics or payments", score: 1 },
          { label: "High: users, roles or automations", score: 2 },
        ],
      },
      {
        q: "What support do you expect afterwards?",
        options: [
          { label: "I launch it and manage it myself", score: 0 },
          { label: "Support for the first month", score: 1 },
          { label: "Ongoing technical support", score: 2 },
        ],
      },
    ],
    reasons: [
      "Your project focuses on presenting your business and turning visits into contacts.",
      "You need a site with conversion logic, integrations and initial support.",
      "Your project needs custom architecture, users and complex features.",
    ],
  },
  incluido: {
    eyebrow: "In every plan",
    title: "What is never",
    highlight: "charged extra.",
    items: [
      {
        title: "Strategy and design",
        text: "Every plan includes strategy, UX/UI design and full development.",
      },
      {
        title: "Zero templates",
        text: "Everything is built around your business and your customers.",
      },
      {
        title: "Responsive and fast",
        text: "It looks and works well on mobile, tablet and desktop.",
      },
      {
        title: "Price in writing",
        text: "You get scope, timeline and cost before we start.",
      },
    ],
  },
  tabla: {
    eyebrow: "Comparison",
    title: "The three plans,",
    highlight: "side by side.",
    feature: "What's included",
    yes: "Included",
    no: "Not included",
    rows: [
      { label: "Custom UX/UI design", plans: [true, true, true] },
      { label: "Responsive and Core Web Vitals", plans: [true, true, true] },
      { label: "On-page SEO", plans: [true, true, true] },
      { label: "Multi-page site or dashboard", plans: [false, true, true] },
      {
        label: "Integrations (CRM, analytics, forms)",
        plans: [false, true, true],
      },
      {
        label: "Premium animations and interactions",
        plans: [false, true, true],
      },
      { label: "Post-launch support", plans: [false, true, true] },
      {
        label: "Multi-user software or SaaS platform",
        plans: [false, false, true],
      },
      { label: "Automations and custom APIs", plans: [false, false, true] },
      { label: "Ongoing technical support", plans: [false, false, true] },
    ],
  },
};

const precios = { es, en };
export default precios;
