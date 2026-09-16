import { SITE_URL } from "@/lib/site";

/**
 * Migas de pan estructuradas (schema.org BreadcrumbList) para las rutas de
 * primer nivel. Google puede mostrarlas en el resultado en lugar de la URL.
 * Componente de servidor: no añade JavaScript al cliente.
 */
export default function BreadcrumbJsonLd({
  name,
  path,
}: {
  name: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
