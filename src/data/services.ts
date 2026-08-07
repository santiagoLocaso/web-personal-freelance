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
    title: "Desarrollo de sitios institucionales",
    description:
      "Páginas web profesionales para empresas, estudios, profesionales yorganizaciones.",
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
    title: "Diseño de landing pages",
    description:
      "Landing pages pensadas para promocionar servicios, campañas y productos.",
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
    title: "Desarrollo de tiendas online",
    description:
      "Tiendas online para vender productos, servicios y contenidos digitales.",
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
    title: "Rediseño y optimización de páginas web",
    description:
      "Mejoras visuales, técnicas y de velocidad para sitios existentes.",
    features: [
      "Actualización del diseño",
      "Mejoras en la versión móvil",
      "Reorganización del contenido",
      "Optimización de velocidad y navegación",
    ],
    icon: "redesign",
  },
];
