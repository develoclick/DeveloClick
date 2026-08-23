# DeveloClick

Sitio corporativo y blog de DeveloClick. Next.js 16 (App Router), React 19,
Tailwind v4 y contenido en MDX.

Producción: **https://develoclick.com**

---

## Arranque

```bash
npm install
cp .env.example .env.local   # rellena los valores
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm start` | Sirve el build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Variables de entorno

Ver `.env.example`. Ninguna es secreta: el endpoint del cotizador es un
receptor público de formularios, por eso lleva el prefijo `NEXT_PUBLIC_`.

| Variable | Obligatoria | Nota |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recomendada | Sin barra final. Si falta, se usa el dominio de producción. |
| `NEXT_PUBLIC_COTIZADOR_ENDPOINT` | Opcional | Si falta, se usa el endpoint actual de AWS. |

## Estructura

```
app/                 Rutas (App Router) + sitemap, robots, error, not-found
componentes/         Componentes de UI
  blog/              Piezas del blog
  motion/            Intro, transiciones de ruta y barra de progreso
  i18n/              Diccionario ES/EN y proveedor de idioma
content/blog/*.mdx   Artículos. Añadir uno = crear un archivo, sin tocar código
lib/                 site.ts (URL canónica), blog.ts (lector de MDX)
```

## Añadir un artículo

Crea `content/blog/mi-articulo.mdx` con el frontmatter de cualquier artículo
existente como referencia. El listado, el sitemap, el RSS y la página del
artículo se generan solos.

## Decisiones que conviene conocer

**Contacto.** El Cotizador es el único canal. Envía a un API Gateway de AWS que
reenvía a `develoclick@gmail.com`. No hay teléfono ni WhatsApp publicados a
propósito: no se publican datos que no se puedan sostener.

**Sistema de diseño.** Los tokens viven en `app/globals.css`: tres rojos de
marca con roles definidos (`red-600` texto/botón, `red-500` decorativo,
`red-400` sobre navy), seis estilos tipográficos (`type-*`), escala de
espaciado de 8 y tres niveles de elevación (`elev-1..3`). No añadas valores
sueltos: usa los tokens.

**CSP.** `next.config.ts` sirve una Content Security Policy compatible con
generación estática. Se probó la variante con nonce (vía `proxy.ts`) y
funcionaba, pero convertía las 23 rutas de estáticas a dinámicas, porque Next
solo puede inyectar el nonce durante el SSR. Para un sitio sin contenido de
usuario ese coste no compensa. Si algún día se renderiza entrada del visitante,
conviene recuperar la variante con nonce.

**Tema.** Un script inline en `app/layout.tsx` decide el tema y la intro antes
del primer pintado, para que no haya parpadeo. Si tocas ese script, comprueba
que sigue sin haber flash al recargar en modo oscuro.

## Despliegue

Pensado para Vercel. Build `npm run build`, sin configuración extra.

1. Variables de entorno del proyecto: las de la tabla de arriba.
2. Dominio: apuntar `develoclick.com` y `www.develoclick.com`. El redirect
   `www → apex` ya está en `next.config.ts`, así que basta con que ambos
   resuelvan.
3. HTTPS y HSTS: el certificado lo emite Vercel; la cabecera `Strict-Transport-Security`
   ya se envía desde la configuración.
