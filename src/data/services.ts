export type ServiceIcon = "institutional" | "landing" | "store" | "redesign";

export interface Service {
  id: string;

  title: string;
  description: string;
  features: string[];
  icon: ServiceIcon;
}

export const services: Service[] = [
  {
    id: "sitios-institucionales",
    title: "Sitios institucionales",
    description:
      "Páginas profesionales para presentar una empresa, consultora, estudio, fundación, emprendimiento o marca personal.",
    features: [
      "Diseño personalizado",
      "Adaptación para celulares",
      "Secciones de servicios y contacto",
      "Configuración de dominio y publicación",
    ],
    icon: "institutional",
  },
  {
    id: "landing-pages",
    title: "Landing pages",
    description:
      "Páginas enfocadas en promocionar un servicio, campaña, lanzamiento o propuesta comercial específica.",
    features: [
      "Contenido organizado para convertir",
      "Llamados a la acción destacados",
      "Formularios de contacto",
      "Carga rápida y navegación sencilla",
    ],
    icon: "landing",
  },
  {
    id: "tiendas-online",
    title: "Tiendas y productos digitales",
    description:
      "Configuración y personalización de tiendas online para vender productos, servicios, capacitaciones o contenidos digitales.",
    features: [
      "Personalización visual de la tienda",
      "Configuración de medios de pago",
      "Organización de productos y categorías",
      "Integraciones y automatizaciones",
    ],
    icon: "store",
  },
  {
    id: "rediseno-web",
    title: "Rediseño y optimización",
    description:
      "Mejoras visuales y técnicas para sitios existentes que necesitan una imagen más moderna y una mejor experiencia de uso.",
    features: [
      "Actualización del diseño",
      "Mejoras en la versión móvil",
      "Reorganización del contenido",
      "Optimización de velocidad y navegación",
    ],
    icon: "redesign",
  },
];
