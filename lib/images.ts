import type { StaticImageData } from "next/image";

import analitica from "@/public/imagenes/analitica.jpg";
import automatizaciones from "@/public/imagenes/automatizaciones.jpg";
import ciberseguridad from "@/public/imagenes/ciberseguridad.jpg";
import cloud from "@/public/imagenes/cloud.jpg";
import colaborativo from "@/public/imagenes/colaborativo.jpg";
import conectividad from "@/public/imagenes/conectividad.jpg";
import crecimiento from "@/public/imagenes/crecimiento.jpg";
import dashboard from "@/public/imagenes/dashboard.jpg";
import desarrolloEquipo from "@/public/imagenes/desarrollo-equipo.jpg";
import descubrimiento from "@/public/imagenes/descubrimiento.jpg";
import devops from "@/public/imagenes/devops.jpg";
import disenoUx from "@/public/imagenes/diseno-ux.jpg";
import ecommerce from "@/public/imagenes/ecommerce.jpg";
import equipoEstrategia from "@/public/imagenes/equipo-estrategia.jpg";
import estrategiaCrecimiento from "@/public/imagenes/estrategia-crecimiento.jpg";
import estrategiaProducto from "@/public/imagenes/estrategia-producto.jpg";
import integraciones from "@/public/imagenes/integraciones.jpg";
import lanzamiento from "@/public/imagenes/lanzamiento.jpg";
import liderazgo from "@/public/imagenes/liderazgo.jpg";
import optimizacion from "@/public/imagenes/optimizacion.jpg";
import programacion from "@/public/imagenes/programacion.jpg";
import publicidad from "@/public/imagenes/publicidad.jpg";
import remoto from "@/public/imagenes/remoto.jpg";
import saas from "@/public/imagenes/saas.jpg";
import softwareMedida from "@/public/imagenes/software-medida.jpg";
import soporte from "@/public/imagenes/soporte.jpg";
import testingAb from "@/public/imagenes/testing-ab.jpg";
import webResponsive from "@/public/imagenes/web-responsive.jpg";
import wireframes from "@/public/imagenes/wireframes.jpg";

/**
 * Registro único de fotografías del sitio.
 *
 * Imports estáticos: Next obtiene ancho, alto y `blurDataURL` en build, así que
 * no hay saltos de maquetación y cada foto muestra un difuminado mientras carga.
 *
 * Las panorámicas miden 1376x768 y las verticales 768x1376. Los componentes
 * recortan con `object-cover`, por eso el motivo va centrado en cada toma.
 *
 * Los textos alternativos describen lo que se ve. No afirman que las personas
 * sean el equipo de DeveloClick ni clientes reales: son fotos ilustrativas.
 */
export type Foto = {
  src: StaticImageData;
  alt: { es: string; en: string };
};

const foto = (src: StaticImageData, es: string, en: string): Foto => ({
  src,
  alt: { es, en },
});

export const fotos = {
  // ---- Panorámicas (1376x768) ----
  analitica: foto(
    analitica,
    "Dos profesionales señalando un gráfico en una pantalla grande",
    "Two professionals pointing at a chart on a large screen",
  ),
  automatizaciones: foto(
    automatizaciones,
    "Diagrama luminoso de un flujo automatizado con un engranaje rojo en el centro",
    "Glowing diagram of an automated flow with a red gear at its centre",
  ),
  ciberseguridad: foto(
    ciberseguridad,
    "Escudo luminoso con un candado delante de racks de servidores",
    "Glowing shield with a padlock in front of server racks",
  ),
  cloud: foto(
    cloud,
    "Nube luminosa sobre racks de servidores en un centro de datos",
    "Glowing cloud above server racks in a data centre",
  ),
  conectividad: foto(
    conectividad,
    "Globo terráqueo oscuro con arcos de conexión rojos entre continentes",
    "Dark globe with red connection arcs between continents",
  ),
  crecimiento: foto(
    crecimiento,
    "Persona mirando una ciudad al anochecer con una estela de luz roja",
    "Person looking out over a city at dusk with a red light trail",
  ),
  dashboard: foto(
    dashboard,
    "Monitor con un panel de métricas y un mapa de datos",
    "Monitor showing a metrics dashboard and a data map",
  ),
  desarrolloEquipo: foto(
    desarrolloEquipo,
    "Fila de personas trabajando frente a monitores en una oficina",
    "Row of people working at monitors in an office",
  ),
  devops: foto(
    devops,
    "Racks de servidores conectados a una nube por flujos de luz",
    "Server racks connected to a cloud by streams of light",
  ),
  disenoUx: foto(
    disenoUx,
    "Diseñadora bocetando pantallas en papel junto a un monitor",
    "Designer sketching screens on paper beside a monitor",
  ),
  ecommerce: foto(
    ecommerce,
    "Manos sosteniendo un teléfono sobre una laptop con una tienda online",
    "Hands holding a phone above a laptop showing an online store",
  ),
  integraciones: foto(
    integraciones,
    "Red de nodos luminosos conectados sobre una superficie oscura",
    "Network of glowing nodes connected across a dark surface",
  ),
  liderazgo: foto(
    liderazgo,
    "Profesional de pie en una oficina acristalada con la ciudad detrás",
    "Professional standing in a glass-walled office with the city behind",
  ),
  publicidad: foto(
    publicidad,
    "Equipo revisando métricas de campañas en un monitor",
    "Team reviewing campaign metrics on a monitor",
  ),
  remoto: foto(
    remoto,
    "Videollamada de trabajo en una laptop con varios participantes",
    "Work video call on a laptop with several participants",
  ),
  saas: foto(
    saas,
    "Monitor con la interfaz de una plataforma multiusuario",
    "Monitor showing a multi-user platform interface",
  ),
  softwareMedida: foto(
    softwareMedida,
    "Persona programando frente a un monitor con código",
    "Person coding at a monitor filled with code",
  ),
  soporte: foto(
    soporte,
    "Especialista de soporte con auriculares atendiendo en una laptop",
    "Support specialist with a headset assisting on a laptop",
  ),
  testingAb: foto(
    testingAb,
    "Dos personas comparando dos versiones de una página en pantalla",
    "Two people comparing two versions of a page on screen",
  ),
  webResponsive: foto(
    webResponsive,
    "Laptop y teléfono mostrando el mismo sitio web adaptado",
    "Laptop and phone showing the same responsive website",
  ),

  // ---- Verticales (768x1376) ----
  colaborativo: foto(
    colaborativo,
    "Dos personas revisando código juntas en el mismo monitor",
    "Two people reviewing code together on the same monitor",
  ),
  descubrimiento: foto(
    descubrimiento,
    "Equipo reunido alrededor de una laptop tomando notas",
    "Team gathered around a laptop taking notes",
  ),
  equipoEstrategia: foto(
    equipoEstrategia,
    "Equipo trabajando junto a una laptop en una sala de reuniones",
    "Team working around a laptop in a meeting room",
  ),
  estrategiaCrecimiento: foto(
    estrategiaCrecimiento,
    "Persona dibujando una curva de crecimiento en una pizarra ante su equipo",
    "Person drawing a growth curve on a whiteboard in front of their team",
  ),
  estrategiaProducto: foto(
    estrategiaProducto,
    "Profesional trazando un plan en una pizarra durante una sesión de estrategia",
    "Professional mapping out a plan on a whiteboard during a strategy session",
  ),
  lanzamiento: foto(
    lanzamiento,
    "Equipo celebrando con las manos en alto frente a una pantalla",
    "Team celebrating with raised hands in front of a screen",
  ),
  optimizacion: foto(
    optimizacion,
    "Analista revisando gráficos de rendimiento en un monitor",
    "Analyst reviewing performance charts on a monitor",
  ),
  programacion: foto(
    programacion,
    "Escritorio con dos monitores mostrando código",
    "Desk with two monitors showing code",
  ),
  wireframes: foto(
    wireframes,
    "Persona señalando wireframes de una aplicación en una pantalla vertical",
    "Person pointing at app wireframes on a vertical screen",
  ),
} satisfies Record<string, Foto>;

export type FotoKey = keyof typeof fotos;
