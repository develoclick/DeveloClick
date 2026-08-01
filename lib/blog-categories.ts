export type CategoryMeta = {
  slug: string;
  name: string;
  description: string;
  icon: string;
};

export const categories: CategoryMeta[] = [
  { slug: "transformacion-digital", name: "Transformación Digital", description: "Cómo la tecnología redefine la forma de operar y competir.", icon: "Sparkles" },
  { slug: "casos-de-exito", name: "Casos de Éxito", description: "Análisis reales de empresas que escalaron con tecnología.", icon: "Trophy" },
  { slug: "desarrollo-web", name: "Desarrollo Web", description: "Sitios rápidos, seguros y pensados para convertir.", icon: "Globe2" },
  { slug: "landing-pages", name: "Landing Pages", description: "Páginas diseñadas para capturar y convertir tráfico.", icon: "LayoutTemplate" },
  { slug: "software-empresarial", name: "Software Empresarial", description: "Herramientas a medida para procesos complejos.", icon: "Building2" },
  { slug: "inteligencia-artificial", name: "Inteligencia Artificial", description: "IA aplicada a negocios reales, sin humo.", icon: "BrainCircuit" },
  { slug: "automatizacion", name: "Automatización", description: "Procesos que se ejecutan solos, sin fricción.", icon: "Workflow" },
  { slug: "marketing-digital", name: "Marketing Digital", description: "Estrategias de adquisición y crecimiento medible.", icon: "Megaphone" },
  { slug: "seo", name: "SEO", description: "Visibilidad orgánica sostenible en buscadores.", icon: "Search" },
  { slug: "productividad", name: "Productividad", description: "Cómo hacer más con los mismos recursos.", icon: "Gauge" },
  { slug: "innovacion", name: "Innovación", description: "Tendencias que están cambiando las reglas del juego.", icon: "Lightbulb" },
  { slug: "ux-ui", name: "UX/UI", description: "Diseño centrado en el usuario que convierte.", icon: "PenTool" },
  { slug: "saas", name: "SaaS", description: "Software como servicio: modelos, retos y oportunidades.", icon: "Cloud" },
  { slug: "erp", name: "ERP", description: "Sistemas de gestión que unifican la operación.", icon: "Boxes" },
  { slug: "crm", name: "CRM", description: "Gestión de clientes que impulsa las ventas.", icon: "Users" },
  { slug: "comercio-electronico", name: "Comercio Electrónico", description: "Tiendas digitales que venden 24/7.", icon: "ShoppingCart" },
  { slug: "startups", name: "Startups", description: "Aprendizajes de empresas que crecieron rápido.", icon: "Rocket" },
  { slug: "emprendimiento", name: "Emprendimiento", description: "Guías prácticas para quienes están construyendo su negocio.", icon: "Compass" },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryByName(name: string) {
  return categories.find((c) => c.name === name);
}
