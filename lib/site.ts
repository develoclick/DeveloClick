/**
 * Configuración canónica del sitio.
 * El dominio vive en una sola fuente de verdad: NEXT_PUBLIC_SITE_URL.
 * El fallback es el dominio de producción para que un despliegue sin la
 * variable configurada siga generando URLs correctas (nunca localhost).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://develoclick.com"
).replace(/\/$/, "");

export const SITE_NAME = "DeveloClick";
export const SITE_EMAIL = "develoclick@gmail.com";

/** Imagen Open Graph — 1200x630 real, generada en /public/og-image.png */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "DeveloClick — Soluciones digitales para hacer crecer tu negocio",
} as const;

/** Construye una URL absoluta a partir de una ruta interna. */
export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
