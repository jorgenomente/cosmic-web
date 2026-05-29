import type { BlogPost } from "@/lib/blog";

export const primerPost: BlogPost = {
  title: "Primer articulo del blog",
  slug: "primer-articulo-del-blog",
  excerpt:
    "Una nota inicial para validar la estructura local de contenido del blog.",
  date: "2026-05-29",
  category: "Proyecto",
  readingTime: "2 min",
  content: [
    "Este articulo sirve como punto de partida para el blog de Cosmic Web.",
    "Por ahora el contenido vive dentro del proyecto para mantener una base simple, versionable y facil de migrar mas adelante.",
    "Cuando el sitio necesite un flujo editorial mas completo, esta estructura puede evolucionar a MDX, Supabase o un CMS.",
  ],
};
