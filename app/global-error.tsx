"use client";

/**
 * Frontera de error raíz: sustituye al <html>/<body> completos, por lo que no
 * puede depender del layout, de los providers ni de las clases de Tailwind del
 * layout. Se estiliza en línea a propósito, con la paleta de marca.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1526",
          color: "#ffffff",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "34rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#f27479",
            }}
          >
            Error inesperado
          </p>

          <h1
            style={{
              margin: "1rem 0 0",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            No pudimos cargar la página.
          </h1>

          <p
            style={{
              margin: "1.25rem 0 0",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#cbd5e1",
            }}
          >
            Ha ocurrido un problema al iniciar la aplicación. Vuelve a
            intentarlo en unos segundos.
          </p>

          {error.digest && (
            <p
              style={{
                margin: "1rem 0 0",
                fontSize: "0.75rem",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                color: "#94a3b8",
              }}
            >
              Referencia: {error.digest}
            </p>
          )}

          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "2.25rem",
              cursor: "pointer",
              border: "none",
              borderRadius: "12px",
              backgroundColor: "#bd1f23",
              color: "#ffffff",
              padding: "1rem 1.75rem",
              fontSize: "0.875rem",
              fontWeight: 700,
            }}
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
