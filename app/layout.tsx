import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import { ThemeProvider } from "@/componentes/ThemeProvider";
import { LanguageProvider } from "@/componentes/i18n/LanguageProvider";
import AnimatedLayout from "@/componentes/motion/AnimatedLayout";
import { SITE_URL, SITE_NAME, SITE_EMAIL, OG_IMAGE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

/** Tipografía del logo. Se autoaloja en build, igual que las otras dos. */
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DeveloClick - Soluciones digitales para hacer crecer tu negocio",
    template: "%s | DeveloClick",
  },
  description:
    "En DeveloClick diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes. Estrategia, diseño y tecnología en un solo equipo.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "plataformas SaaS",
    "diseño UX/UI",
    "automatización empresarial",
    "agencia digital",
    "DeveloClick",
  ],
  authors: [{ name: "DeveloClick" }],
  creator: "DeveloClick",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "DeveloClick",
    title: "DeveloClick - Soluciones digitales para hacer crecer tu negocio",
    description:
      "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeveloClick - Soluciones digitales para hacer crecer tu negocio",
    description:
      "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/imagenes/favicon.png",
    apple: "/imagenes/develoclick_simbolo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1526" },
  ],
};

/**
 * ProfessionalService: schema correcto para un negocio de servicios cuyo objetivo
 * es la solicitud de contacto. Sin dirección física (no publicamos datos que no
 * podamos sostener); el contacto se declara vía ContactPoint.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${OG_IMAGE.url}`,
        width: 1200,
        height: 630,
      },
      description:
        "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
      email: SITE_EMAIL,
      areaServed: "Worldwide",
      availableLanguage: ["es", "en"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_EMAIL,
        availableLanguage: ["es", "en"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DeveloClick",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem("develoclick-theme");
    var isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);

    // Decide la intro antes del primer pintado: sin parpadeo y sin desajuste
    // de hidratacion. Solo primera carga de la sesion y sin movimiento reducido.
    var visto = sessionStorage.getItem("develoclick-intro-visto");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!visto && !reduce) {
      document.documentElement.classList.add("dc-intro");
      sessionStorage.setItem("develoclick-intro-visto", "1");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-brand-ink transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <AnimatedLayout>{children}</AnimatedLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
