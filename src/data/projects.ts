export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  url: string;
  featured: boolean;
  summary: string;
  service: string;
  technologies: string[];
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
    summary:
      "Sitio web institucional y comercial para presentar los servicios de la consultora.",
    service: "Diseño y desarrollo de sitio institucional y tienda online.",
    technologies: ["TiendaNube"],
  },
  {
    id: "locaso-asociados",
    title: "Locaso y Asociados",
    category: "Estudio jurídico",
    image: "/images/projects/locaso-asociados.webp",
    imageAlt: "Vista del sitio web de Locaso y Asociados",
    url: "https://locasoyasoc.com.ar",
    featured: true,
    summary:
      "Sitio web institucional para presentar los servicios del estudio jurídico.",
    service: "Diseño y desarrollo de sitio institucional",
    technologies: ["Astro", "HTML", "TypeScript", "CSS"],
  },
  {
    id: "transformando-vinculos",
    title: "Transformando Vínculos",
    category: "Sitio institucional",
    image: "/images/projects/transformando-vinculos.webp",
    imageAlt: "Vista del sitio web de Fundación Transformando Vínculos",
    url: "https://www.transformandovinculos.group",
    featured: false,
    summary:
      "Sitio web institucional para presentar la fundación y dar a conocer su trabajo.",
    service: "Diseño y desarrollo de sitio web institucional",
    technologies: ["Squarespace"],
  },
  {
    id: "calendario-espacial",
    title: "Calendario Espacial",
    category: "Aplicación web",
    image: "/images/projects/calendario-espacial.webp",
    imageAlt: "Vista de la aplicación Calendario Espacial",
    url: "https://calendariolanzamientosespaciales.vercel.app",
    featured: true,
    summary:
      "Aplicación web con información actualizada en tiempo real sobre próximos lanzamientos espaciales.",
    service: "Diseño y desarrollo de aplicación web dinámica",
    technologies: ["ReactJs", "Vite", "TypeScript", "CSS"],
  },
];
