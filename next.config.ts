import type { NextConfig } from "next";

/**
 * Content Security Policy — variante compatible con generación estática.
 *
 * Decisión documentada: se probó la CSP con nonce por petición (proxy.ts) y
 * funcionaba, pero medido convertía las 23 rutas de estáticas a dinámicas,
 * porque Next solo puede inyectar el nonce durante el SSR. Para un sitio de
 * captación sin contenido de usuario, ese coste no se justifica:
 *
 *   - Lo que se pierde: bloqueo de <script> inline inyectado. Aquí no hay
 *     vector real — el sitio no renderiza ninguna entrada del visitante; todo
 *     el contenido procede de archivos del propio repositorio.
 *   - Lo que se conserva: bloqueo de scripts externos no autorizados, de
 *     incrustación en iframes, de inyección de <base>, de secuestro de
 *     formularios y de exfiltración de datos vía connect-src.
 *
 * Para volver a la variante con nonce basta recrear proxy.ts; queda descrito
 * en el README.
 */
const COTIZADOR_ORIGIN =
  "https://8x4gau47hh.execute-api.us-east-2.amazonaws.com";

const esDesarrollo = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  // 'unsafe-inline' es necesario aquí: Next inyecta scripts inline propios
  // (payload RSC) cuyo contenido cambia en cada build, así que no se pueden
  // cubrir con hashes fijos. Los scripts EXTERNOS siguen limitados a 'self'.
  //
  // 'unsafe-eval' SOLO en desarrollo: React lo usa para reconstruir los stack
  // traces del overlay de errores. Nunca se emite en producción.
  `script-src 'self' 'unsafe-inline'${esDesarrollo ? " 'unsafe-eval'" : ""}`,
  // Tailwind y Framer Motion escriben en el atributo style de los elementos
  // animados; sin esto se romperían todas las animaciones.
  "style-src 'self' 'unsafe-inline'",
  // data: y blob: los necesita next/image para los placeholders.
  "img-src 'self' data: blob:",
  // next/font autoaloja las tipografías en build: sin dominio externo.
  "font-src 'self'",
  // Único destino de fetch del sitio: el endpoint del Cotizador.
  `connect-src 'self' ${COTIZADOR_ORIGIN}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // Evita que el navegador adivine el tipo MIME (vector clásico de XSS).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Impide que el sitio se incruste en iframes de terceros (clickjacking).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // No filtra la URL completa al navegar hacia dominios externos.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva APIs del navegador que este sitio no usa.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Fuerza HTTPS durante 2 años, incluidos subdominios.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Aísla el sitio de ventanas abiertas por terceros.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  images: {
    // Sin remotePatterns: todas las imágenes del sitio son locales.
    // Añadir aquí un host solo si algún día se sirven imágenes externas
    // (y recordar reflejarlo también en img-src de la CSP).
    // Formatos modernos: el navegador recibe AVIF/WebP cuando los soporta.
    formats: ["image/avif", "image/webp"],
  },

  // No filtrar la versión de Next en las cabeceras de respuesta.
  poweredByHeader: false,

  // URLs canónicas sin barra final, coherentes con los canonical y el sitemap.
  trailingSlash: false,

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  /**
   * Canonicalización de dominio: www -> apex (https://develoclick.com).
   * Vercel también permite hacerlo desde el panel; se deja aquí para que la
   * regla viaje con el repositorio y funcione en cualquier hosting Node.
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.develoclick.com" }],
        destination: "https://develoclick.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
