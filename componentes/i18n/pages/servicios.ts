export type ServicioId =
  "web" | "software" | "saas" | "dashboards" | "marketing" | "automation";

const es = {
  hero: {
    eyebrow: "Servicios",
    title: "Todo lo que tu negocio necesita para",
    highlight: "escalar digitalmente.",
    subtitle:
      "Desde una landing page hasta una plataforma SaaS completa. Un mismo equipo diseña y construye cada pieza, así que nada se pierde entre proveedores.",
    secondary: "Explorar servicios",
    chips: ["6 líneas de servicio", "100% a medida", "Un solo equipo"],
  },
  navLabel: "Ir a un servicio",
  includes: "Qué incluye",
  idealFor: "Ideal para",
  deliverables: "Qué recibes",
  quoteThis: "Cotizar este servicio",
  servicios: [
    {
      id: "web" as ServicioId,
      short: "Webs",
      category: "Webs profesionales",
      title: "Sitios web que comunican valor y convierten.",
      description:
        "Diseñamos y desarrollamos sitios rápidos, elegantes y optimizados para SEO y conversión, construidos sobre tecnología moderna y mantenible.",
      features: [
        "Diseño UX/UI a medida",
        "Optimización Core Web Vitals",
        "SEO técnico incluido",
      ],
      idealFor: [
        "Empresas que necesitan una presencia seria y confiable",
        "Negocios que quieren recibir solicitudes desde su web",
        "Marcas que están renovando una web antigua o lenta",
      ],
      deliverables: [
        "Sitio publicado en tu dominio",
        "Panel o archivos para actualizar contenido",
        "Configuración de analítica y buscadores",
      ],
    },
    {
      id: "software" as ServicioId,
      short: "Software",
      category: "Software a medida",
      title: "Soluciones tecnológicas diseñadas para tus procesos.",
      description:
        "Construimos software robusto y modular que se adapta a la forma en que tu negocio ya trabaja, sin forzarte a cambiar tus procesos.",
      features: [
        "Arquitectura escalable",
        "Integraciones con tus herramientas actuales",
        "Documentación técnica completa",
      ],
      idealFor: [
        "Operaciones que hoy viven en hojas de cálculo",
        "Procesos internos que ningún software comercial resuelve bien",
        "Equipos que pierden tiempo entre sistemas desconectados",
      ],
      deliverables: [
        "Aplicación funcionando en tu infraestructura",
        "Código fuente y documentación",
        "Capacitación para tu equipo",
      ],
    },
    {
      id: "saas" as ServicioId,
      short: "SaaS",
      category: "Plataformas SaaS",
      title: "Productos digitales listos para escalar.",
      description:
        "Llevamos tu idea a una plataforma multiusuario lista para operar, vender y crecer, con una arquitectura pensada desde el día uno para escalar.",
      features: [
        "Autenticación y roles de usuario",
        "Facturación y suscripciones",
        "Infraestructura cloud escalable",
      ],
      idealFor: [
        "Emprendedores que quieren lanzar un producto digital",
        "Empresas que quieren vender su conocimiento como servicio",
        "Negocios que necesitan cobrar suscripciones",
      ],
      deliverables: [
        "Plataforma en producción lista para usuarios",
        "Panel de administración",
        "Base técnica preparada para crecer",
      ],
    },
    {
      id: "dashboards" as ServicioId,
      short: "Dashboards",
      category: "Dashboards",
      title: "Paneles administrativos con datos en tiempo real.",
      description:
        "Convertimos información compleja en tableros claros para que tomes decisiones con rapidez, contexto y confianza.",
      features: [
        "Visualización de datos en tiempo real",
        "Roles y permisos por usuario",
        "Exportación de reportes",
      ],
      idealFor: [
        "Gerencias que deciden con reportes armados a mano",
        "Equipos comerciales que necesitan ver sus metas al día",
        "Empresas con datos repartidos en varios sistemas",
      ],
      deliverables: [
        "Tablero conectado a tus fuentes de datos",
        "Indicadores definidos contigo",
        "Accesos por rol para tu equipo",
      ],
    },
    {
      id: "marketing" as ServicioId,
      short: "Publicidad",
      category: "Publicidad en redes",
      title: "Campañas que captan clientes, no solo likes.",
      description:
        "Conectamos estrategia, creatividad y datos para construir campañas que llevan personas correctas a una página preparada para convertirlas.",
      features: [
        "Segmentación por objetivo de negocio",
        "Landing pages conectadas a la campaña",
        "Medición de conversiones",
      ],
      idealFor: [
        "Negocios que invierten en anuncios sin medir el retorno",
        "Lanzamientos de productos o servicios nuevos",
        "Empresas que quieren generar solicitudes cada semana",
      ],
      deliverables: [
        "Campañas configuradas y activas",
        "Seguimiento de conversiones instalado",
        "Reporte de resultados con recomendaciones",
      ],
    },
    {
      id: "automation" as ServicioId,
      short: "Automatización",
      category: "Automatizaciones",
      title: "Procesos que trabajan solos mientras tu equipo avanza.",
      description:
        "Eliminamos tareas repetitivas y conectamos tus herramientas para que tu equipo se enfoque en lo que genera valor.",
      features: [
        "Flujos de trabajo automatizados",
        "Conexión entre plataformas",
        "Reducción de errores manuales",
      ],
      idealFor: [
        "Equipos que copian datos de un sistema a otro",
        "Procesos de ventas o cobranza con muchos pasos manuales",
        "Empresas que necesitan avisos y reportes automáticos",
      ],
      deliverables: [
        "Flujos automatizados en funcionamiento",
        "Mapa del proceso antes y después",
        "Alertas ante fallos",
      ],
    },
  ],
  capacidades: {
    eyebrow: "Capacidades técnicas",
    title: "Lo que va incluido",
    highlight: "debajo de cada proyecto.",
    paragraph:
      "No se ven en la pantalla, pero deciden si tu producto aguanta el crecimiento. Toca cada tarjeta para ver por qué importa.",
    flip: "Por qué importa",
    items: [
      {
        title: "Integraciones por API",
        text: "Conectamos tu solución con pasarelas de pago, CRM, correo y las herramientas que ya usas.",
        why: "Evita que tu equipo copie datos a mano entre sistemas y reduce errores.",
      },
      {
        title: "Seguridad desde el diseño",
        text: "Buenas prácticas de autenticación, permisos y protección de datos en cada capa.",
        why: "Un incidente de seguridad cuesta mucho más que prevenirlo desde el inicio.",
      },
      {
        title: "Cloud y despliegue",
        text: "Infraestructura en la nube preparada para crecer con tu tráfico y tus usuarios.",
        why: "Tu producto responde igual con diez usuarios que con diez mil.",
      },
      {
        title: "Comercio electrónico",
        text: "Catálogo, carrito y pagos online integrados con tu operación.",
        why: "Vendes a cualquier hora sin depender de atender cada pedido por chat.",
      },
    ],
  },
  explorer: {
    eyebrow: "Compara servicios",
  },
};

const en: typeof es = {
  hero: {
    eyebrow: "Services",
    title: "Everything your business needs to",
    highlight: "scale digitally.",
    subtitle:
      "From a landing page to a full SaaS platform. One team designs and builds every piece, so nothing gets lost between vendors.",
    secondary: "Explore services",
    chips: ["6 service lines", "100% custom", "One team"],
  },
  navLabel: "Jump to a service",
  includes: "What's included",
  idealFor: "Ideal for",
  deliverables: "What you get",
  quoteThis: "Quote this service",
  servicios: [
    {
      id: "web",
      short: "Websites",
      category: "Professional websites",
      title: "Websites that communicate value and convert.",
      description:
        "We design and build fast, elegant sites optimised for SEO and conversion, built on modern, maintainable technology.",
      features: [
        "Custom UX/UI design",
        "Core Web Vitals optimisation",
        "Technical SEO included",
      ],
      idealFor: [
        "Companies that need a serious, trustworthy presence",
        "Businesses that want to receive requests from their site",
        "Brands replacing an old or slow website",
      ],
      deliverables: [
        "Site published on your domain",
        "Panel or files to update content",
        "Analytics and search engine setup",
      ],
    },
    {
      id: "software",
      short: "Software",
      category: "Custom software",
      title: "Technology solutions designed for your processes.",
      description:
        "We build robust, modular software that adapts to the way your business already works, without forcing you to change your processes.",
      features: [
        "Scalable architecture",
        "Integrations with your current tools",
        "Complete technical documentation",
      ],
      idealFor: [
        "Operations that currently live in spreadsheets",
        "Internal processes no off-the-shelf software handles well",
        "Teams losing time between disconnected systems",
      ],
      deliverables: [
        "Application running on your infrastructure",
        "Source code and documentation",
        "Training for your team",
      ],
    },
    {
      id: "saas",
      short: "SaaS",
      category: "SaaS platforms",
      title: "Digital products ready to scale.",
      description:
        "We take your idea to a multi-user platform ready to operate, sell and grow, with an architecture designed to scale from day one.",
      features: [
        "User authentication and roles",
        "Billing and subscriptions",
        "Scalable cloud infrastructure",
      ],
      idealFor: [
        "Founders who want to launch a digital product",
        "Companies that want to sell their know-how as a service",
        "Businesses that need to charge subscriptions",
      ],
      deliverables: [
        "Platform in production, ready for users",
        "Admin panel",
        "Technical foundation ready to grow",
      ],
    },
    {
      id: "dashboards",
      short: "Dashboards",
      category: "Dashboards",
      title: "Admin panels with real-time data.",
      description:
        "We turn complex information into clear dashboards so you can make decisions with speed, context and confidence.",
      features: [
        "Real-time data visualisation",
        "User roles and permissions",
        "Report exporting",
      ],
      idealFor: [
        "Managers deciding with hand-built reports",
        "Sales teams that need to see their targets up to date",
        "Companies with data spread across several systems",
      ],
      deliverables: [
        "Dashboard connected to your data sources",
        "Indicators defined with you",
        "Role-based access for your team",
      ],
    },
    {
      id: "marketing",
      short: "Advertising",
      category: "Social media advertising",
      title: "Campaigns that win customers, not just likes.",
      description:
        "We connect strategy, creativity and data to build campaigns that bring the right people to a page ready to convert them.",
      features: [
        "Targeting by business goal",
        "Landing pages connected to the campaign",
        "Conversion tracking",
      ],
      idealFor: [
        "Businesses spending on ads without measuring return",
        "Launches of new products or services",
        "Companies that want to generate requests every week",
      ],
      deliverables: [
        "Campaigns set up and running",
        "Conversion tracking installed",
        "Results report with recommendations",
      ],
    },
    {
      id: "automation",
      short: "Automation",
      category: "Automations",
      title: "Processes that run themselves while your team moves ahead.",
      description:
        "We remove repetitive tasks and connect your tools so your team can focus on what creates value.",
      features: [
        "Automated workflows",
        "Connections between platforms",
        "Fewer manual errors",
      ],
      idealFor: [
        "Teams copying data from one system to another",
        "Sales or billing processes with many manual steps",
        "Companies that need automatic alerts and reports",
      ],
      deliverables: [
        "Automated flows up and running",
        "Before-and-after process map",
        "Failure alerts",
      ],
    },
  ],
  capacidades: {
    eyebrow: "Technical capabilities",
    title: "What comes built in",
    highlight: "beneath every project.",
    paragraph:
      "You don't see them on screen, but they decide whether your product can handle growth. Tap each card to see why it matters.",
    flip: "Why it matters",
    items: [
      {
        title: "API integrations",
        text: "We connect your solution to payment gateways, CRMs, email and the tools you already use.",
        why: "Your team stops copying data by hand between systems, and errors go down.",
      },
      {
        title: "Security by design",
        text: "Good practices for authentication, permissions and data protection at every layer.",
        why: "A security incident costs far more than preventing it from the start.",
      },
      {
        title: "Cloud and deployment",
        text: "Cloud infrastructure ready to grow with your traffic and your users.",
        why: "Your product responds the same with ten users as with ten thousand.",
      },
      {
        title: "E-commerce",
        text: "Catalogue, cart and online payments integrated with your operation.",
        why: "You sell around the clock without handling every order by chat.",
      },
    ],
  },
  explorer: {
    eyebrow: "Compare services",
  },
};

const servicios = { es, en };
export default servicios;
