/**
 * Home: cada bloque resume una ruta y lleva a ella para profundizar.
 * Los datos (servicios, fases, planes) salen de las fuentes ya existentes;
 * aquí solo viven los encabezados y enlaces de los resúmenes.
 */
const es = {
  servicios: {
    eyebrow: "Servicios",
    title: "Todo lo que tu negocio necesita para",
    highlight: "vender en digital.",
    paragraph:
      "Seis líneas de trabajo que puedes contratar por separado o combinar en un mismo proyecto. Pasa el cursor para ver el detalle.",
    link: "Ver todos los servicios",
  },
  proceso: {
    eyebrow: "Proceso",
    title: "Del primer mensaje al lanzamiento,",
    highlight: "sin zonas grises.",
    paragraph:
      "Sabes en qué fase está tu proyecto, qué se está haciendo y qué recibes al terminar cada etapa.",
    link: "Conocer el proceso completo",
  },
  nosotros: {
    eyebrow: "Nosotros",
    link: "Conocer cómo trabajamos",
  },
  precios: {
    eyebrow: "Precios",
    title: "Rangos claros",
    highlight: "desde el primer día.",
    paragraph:
      "Sin cuotas ocultas ni sorpresas en la factura. El precio final depende del alcance y lo recibes por escrito antes de empezar.",
    link: "Ver planes y qué incluyen",
    from: "Rango",
  },
  blog: {
    eyebrow: "Blog",
    title: "Ideas para hacer",
    highlight: "crecer tu empresa.",
    link: "Ir al blog",
    minutes: "min de lectura",
  },
};

const en: typeof es = {
  servicios: {
    eyebrow: "Services",
    title: "Everything your business needs to",
    highlight: "sell online.",
    paragraph:
      "Six lines of work you can hire separately or combine into one project. Hover over each one to see the details.",
    link: "See all services",
  },
  proceso: {
    eyebrow: "Process",
    title: "From the first message to launch,",
    highlight: "with no grey areas.",
    paragraph:
      "You always know which phase your project is in, what is being done and what you get at the end of each stage.",
    link: "See the full process",
  },
  nosotros: {
    eyebrow: "About",
    link: "See how we work",
  },
  precios: {
    eyebrow: "Pricing",
    title: "Clear ranges",
    highlight: "from day one.",
    paragraph:
      "No hidden fees and no billing surprises. The final price depends on scope, and you get it in writing before we start.",
    link: "See plans and what they include",
    from: "Range",
  },
  blog: {
    eyebrow: "Blog",
    title: "Ideas to help",
    highlight: "your company grow.",
    link: "Go to the blog",
    minutes: "min read",
  },
};

const home = { es, en };
export default home;
