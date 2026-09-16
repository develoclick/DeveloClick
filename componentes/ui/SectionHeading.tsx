import Reveal from "@/componentes/motion/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  paragraph?: string;
  align?: "left" | "center";
  /** `dark` para secciones con fondo navy fijo. */
  tone?: "default" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

/**
 * Encabezado de sección con la jerarquía de marca:
 * etiqueta en la tipografía del logo, título en Space Grotesk y
 * la parte destacada en el rojo del logo.
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  paragraph,
  align = "left",
  tone = "default",
  as = "h2",
  className = "",
}: Props) {
  const Title = as;
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      <p
        className={`type-eyebrow flex items-center gap-3 ${centered ? "justify-center" : ""} ${
          dark
            ? "text-brand-red-400"
            : "text-brand-red-600 dark:text-brand-red-400"
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-current" />
        {eyebrow}
      </p>
      <Title
        className={`${as === "h1" ? "type-display" : "type-h2"} mt-5 ${
          dark ? "text-white" : "text-brand-navy dark:text-white"
        }`}
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span
              className={
                dark
                  ? "text-brand-red-400"
                  : "text-brand-red-600 dark:text-brand-red-400"
              }
            >
              {highlight}
            </span>
          </>
        )}
      </Title>
      {paragraph && (
        <p
          className={`type-body-lg mt-5 ${centered ? "mx-auto" : ""} max-w-2xl ${
            dark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
          }`}
        >
          {paragraph}
        </p>
      )}
    </Reveal>
  );
}
