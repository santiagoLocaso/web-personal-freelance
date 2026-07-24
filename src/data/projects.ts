export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  url: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "salinas-consultora",
    title: "Salinas Consultora",
    category: "Sitio institucional y comercial",
    image: "/images/projects/salinas-consultora.webp",
    imageAlt: "Vista del sitio web de Salinas Consultora",
    url: "https://salinasconsultora.group",
    featured: true,
  },
  {
    id: "locaso-asociados",
    title: "Locaso y Asociados",
    category: "Estudio jurídico",
    image: "/images/projects/locaso-asociados.webp",
    imageAlt: "Vista del sitio web de Locaso y Asociados",
    url: "https://locasoyasoc.com.ar",
    featured: true,
  },
  {
    id: "transformando-vinculos",
    title: "Transformando Vínculos",
    category: "Sitio institucional",
    image: "/images/projects/transformando-vinculos.webp",
    imageAlt: "Vista del sitio web de Fundación Transformando Vínculos",
    url: "REEMPLAZAR_POR_URL_REAL",
    featured: false,
  },
  {
    id: "calendario-espacial",
    title: "Calendario Espacial",
    category: "Aplicación web",
    image: "/images/projects/calendario-espacial.webp",
    imageAlt: "Vista de la aplicación Calendario Espacial",
    url: "https://calendariolanzamientosespaciales.vercel.app",
    featured: true,
  },
];
