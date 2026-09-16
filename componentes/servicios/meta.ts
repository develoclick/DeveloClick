import {
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  Megaphone,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { fotos, type Foto } from "@/lib/images";
import type { ServicioId } from "@/componentes/i18n/pages/servicios";

/** Foto e icono de cada línea de servicio: una sola fuente para todo el sitio. */
export const servicioMeta: Record<
  ServicioId,
  { icon: LucideIcon; foto: Foto }
> = {
  web: { icon: Globe2, foto: fotos.webResponsive },
  software: { icon: Code2, foto: fotos.softwareMedida },
  saas: { icon: Layers3, foto: fotos.saas },
  dashboards: { icon: LayoutDashboard, foto: fotos.analitica },
  marketing: { icon: Megaphone, foto: fotos.publicidad },
  automation: { icon: Zap, foto: fotos.automatizaciones },
};
