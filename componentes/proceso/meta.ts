import {
  Compass,
  Map as MapIcon,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { fotos, type Foto } from "@/lib/images";

/**
 * Foto e icono de cada una de las 6 fases, en el mismo orden que
 * `t.proceso.phases`. Las fotos 21–26 se hicieron para estas fases.
 */
export const faseMeta: { icon: LucideIcon; foto: Foto }[] = [
  { icon: Compass, foto: fotos.descubrimiento },
  { icon: MapIcon, foto: fotos.estrategiaProducto },
  { icon: PenTool, foto: fotos.wireframes },
  { icon: Code2, foto: fotos.colaborativo },
  { icon: Rocket, foto: fotos.lanzamiento },
  { icon: TrendingUp, foto: fotos.optimizacion },
];
