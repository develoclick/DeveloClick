/**
 * Nosotros reutiliza la historia, los valores y el compromiso ya existentes en
 * el diccionario. Aquí solo va lo que la nueva estructura necesita alrededor.
 */
const es = {
  hero: {
    secondary: "Nuestra historia",
    chips: ["Estrategia", "Diseño", "Desarrollo"],
  },
  valores: {
    hint: "Elige un principio",
  },
  cifras: {
    eyebrow: "En concreto",
    title: "Compromisos que",
    highlight: "puedes medir.",
  },
  equipo: {
    eyebrow: "Un solo equipo",
    title: "Estrategia, diseño e ingeniería",
    highlight: "en la misma mesa.",
    paragraph:
      "Cuando quien diseña y quien programa trabajan juntos desde el primer día, las decisiones se toman una vez y bien. Así evitamos el ida y vuelta entre proveedores que retrasa los proyectos.",
    items: ["Estrategia de negocio", "Diseño UX/UI", "Desarrollo y cloud"],
  },
};

const en: typeof es = {
  hero: {
    secondary: "Our story",
    chips: ["Strategy", "Design", "Development"],
  },
  valores: {
    hint: "Pick a principle",
  },
  cifras: {
    eyebrow: "In practice",
    title: "Commitments you",
    highlight: "can measure.",
  },
  equipo: {
    eyebrow: "One team",
    title: "Strategy, design and engineering",
    highlight: "at the same table.",
    paragraph:
      "When the people who design and the people who code work together from day one, decisions are made once and made well. That avoids the back-and-forth between vendors that delays projects.",
    items: ["Business strategy", "UX/UI design", "Development and cloud"],
  },
};

const nosotros = { es, en };
export default nosotros;
