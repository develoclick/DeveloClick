import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/componentes/ThemeProvider";
import { LanguageProvider } from "@/componentes/i18n/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const siteUrl = "https://develoclick.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "DeveloClick",
    title: "DeveloClick - Soluciones digitales para hacer crecer tu negocio",
    description:
      "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
    images: [
      {
        url: "/imagenes/develoclick_logo_PNG.png",
        width: 1200,
        height: 630,
        alt: "DeveloClick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeveloClick - Soluciones digitales para hacer crecer tu negocio",
    description:
      "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
    images: ["/imagenes/develoclick_logo_PNG.png"],
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
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07182d" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DeveloClick",
  url: siteUrl,
  logo: `${siteUrl}/imagenes/develoclick_logo_PNG.png`,
  description:
    "Diseñamos y desarrollamos webs, software a medida y plataformas SaaS que convierten visitas en clientes.",
  email: "hola@develoclick.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
  },
};

const noFlashScript = `
(function () {
  try {
    var stored = localStorage.getItem("develoclick-theme");
    var isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#07182d] transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
