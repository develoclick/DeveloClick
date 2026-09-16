import type { StaticImageData } from "next/image";

import equipoEstrategia from "@/public/imagenes/01_equipo_estrategia_digital.jpg";
import desarrolloEquipo from "@/public/imagenes/02_desarrollo_software_equipo.jpg";
import disenoUx from "@/public/imagenes/03_diseno_ux_ui.jpg";
import programacion from "@/public/imagenes/04_programacion_codigo.jpg";
import estrategiaCrecimiento from "@/public/imagenes/05_estrategia_crecimiento.jpg";
import liderazgo from "@/public/imagenes/06_liderazgo_tecnologico.jpg";
import conectividad from "@/public/imagenes/07_conectividad_global.jpg";
import analitica from "@/public/imagenes/08_analitica_empresarial.jpg";
import remoto from "@/public/imagenes/09_trabajo_remoto.jpg";
import cloud from "@/public/imagenes/10_cloud_infraestructura.jpg";
import webResponsive from "@/public/imagenes/11_desarrollo_web_responsive.jpg";
import softwareMedida from "@/public/imagenes/12_software_a_medida.jpg";
import saas from "@/public/imagenes/13_plataforma_saas.jpg";
import dashboard from "@/public/imagenes/14_dashboard_datos.jpg";
import publicidad from "@/public/imagenes/15_publicidad_y_analytics.jpg";
import automatizaciones from "@/public/imagenes/16_automatizaciones.jpg";
import ecommerce from "@/public/imagenes/17_ecommerce_tienda_online.jpg";
import integraciones from "@/public/imagenes/18_integraciones_api.jpg";
import ciberseguridad from "@/public/imagenes/19_ciberseguridad.jpg";
import devops from "@/public/imagenes/20_devops_cloud.jpg";
import descubrimiento from "@/public/imagenes/21_descubrimiento_equipo.jpg";
import estrategiaProducto from "@/public/imagenes/22_estrategia_producto.jpg";
import wireframes from "@/public/imagenes/23_wireframes_ux.jpg";
import colaborativo from "@/public/imagenes/24_desarrollo_colaborativo.jpg";
import lanzamiento from "@/public/imagenes/25_lanzamiento_producto.jpg";
import optimizacion from "@/public/imagenes/26_optimizacion_metricas.jpg";
import testingAb from "@/public/imagenes/27_testing_ab.jpg";
import ia from "@/public/imagenes/28_inteligencia_artificial.jpg";
import soporte from "@/public/imagenes/29_soporte_cliente.jpg";
import crecimiento from "@/public/imagenes/30_crecimiento_digital.jpg";

/**
 * Registro único de fotografías del sitio.
 *
 * Imports estáticos: Next obtiene ancho, alto y `blurDataURL` en build, así que
 * no hay saltos de maquetación y cada foto muestra un difuminado mientras carga.
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
  equipoEstrategia: foto(
    equipoEstrategia,
    "Equipo revisando una estrategia digital en una laptop",
    "Team reviewing a digital strategy on a laptop",
  ),
  desarrolloEquipo: foto(
    desarrolloEquipo,
    "Desarrolladores revisando código en varias pantallas",
    "Developers reviewing code across several screens",
  ),
  disenoUx: foto(
    disenoUx,
    "Diseñadora bocetando interfaces móviles junto a su monitor",
    "Designer sketching mobile interfaces next to her monitor",
  ),
  programacion: foto(
    programacion,
    "Monitores con código fuente en un escritorio de desarrollo",
    "Monitors showing source code on a development desk",
  ),
  estrategiaCrecimiento: foto(
    estrategiaCrecimiento,
    "Sesión de estrategia frente a una pizarra con gráficos de crecimiento",
    "Strategy session in front of a whiteboard with growth charts",
  ),
  liderazgo: foto(
    liderazgo,
    "Profesional de tecnología en una oficina moderna",
    "Technology professional in a modern office",
  ),
  conectividad: foto(
    conectividad,
    "Mapa digital con conexiones de red entre continentes",
    "Digital map with network connections between continents",
  ),
  analitica: foto(
    analitica,
    "Equipo analizando métricas de negocio en un dashboard",
    "Team analysing business metrics on a dashboard",
  ),
  remoto: foto(
    remoto,
    "Videollamada de trabajo con cuatro participantes",
    "Work video call with four participants",
  ),
  cloud: foto(
    cloud,
    "Centro de datos con icono de sincronización en la nube",
    "Data centre with a cloud sync icon",
  ),
  webResponsive: foto(
    webResponsive,
    "Sitio web adaptado a laptop y teléfono móvil",
    "Website adapted to a laptop and a mobile phone",
  ),
  softwareMedida: foto(
    softwareMedida,
    "Desarrollador trabajando en una aplicación a medida",
    "Developer working on a custom application",
  ),
  saas: foto(
    saas,
    "Panel de una plataforma SaaS con usuarios y gráficos",
    "SaaS platform panel with users and charts",
  ),
  dashboard: foto(
    dashboard,
    "Dashboard de datos con mapas y gráficos en tiempo real",
    "Data dashboard with maps and real-time charts",
  ),
  publicidad: foto(
    publicidad,
    "Equipo revisando resultados de campañas publicitarias",
    "Team reviewing advertising campaign results",
  ),
  automatizaciones: foto(
    automatizaciones,
    "Diagrama de un flujo automatizado entre aplicaciones",
    "Diagram of an automated flow between applications",
  ),
  ecommerce: foto(
    ecommerce,
    "Tienda online abierta en una laptop",
    "Online store open on a laptop",
  ),
  integraciones: foto(
    integraciones,
    "Esquema de integraciones entre sistemas mediante API",
    "Diagram of system integrations through APIs",
  ),
  ciberseguridad: foto(
    ciberseguridad,
    "Escudo con candado sobre servidores, símbolo de seguridad",
    "Shield with a padlock over servers, a security symbol",
  ),
  devops: foto(
    devops,
    "Servidores conectados a la nube",
    "Servers connected to the cloud",
  ),
  descubrimiento: foto(
    descubrimiento,
    "Equipo en una sesión de descubrimiento alrededor de una laptop",
    "Team in a discovery session around a laptop",
  ),
  estrategiaProducto: foto(
    estrategiaProducto,
    "Profesional planificando la estrategia de un producto",
    "Professional planning a product strategy",
  ),
  wireframes: foto(
    wireframes,
    "Wireframes de una aplicación móvil en pantalla",
    "Wireframes of a mobile application on screen",
  ),
  colaborativo: foto(
    colaborativo,
    "Dos desarrolladores revisando código juntos",
    "Two developers reviewing code together",
  ),
  lanzamiento: foto(
    lanzamiento,
    "Equipo celebrando el lanzamiento de un producto",
    "Team celebrating a product launch",
  ),
  optimizacion: foto(
    optimizacion,
    "Analista revisando métricas de rendimiento",
    "Analyst reviewing performance metrics",
  ),
  testingAb: foto(
    testingAb,
    "Comparación de dos variantes de una página en una prueba A/B",
    "Comparison of two page variants in an A/B test",
  ),
  ia: foto(
    ia,
    "Mano robótica con un chip de inteligencia artificial",
    "Robotic hand with an artificial intelligence chip",
  ),
  soporte: foto(
    soporte,
    "Profesional de soporte atendiendo con auriculares",
    "Support professional assisting with a headset",
  ),
  crecimiento: foto(
    crecimiento,
    "Persona frente a una ciudad con una línea de crecimiento luminosa",
    "Person facing a city with a glowing growth line",
  ),
} satisfies Record<string, Foto>;

export type FotoKey = keyof typeof fotos;
