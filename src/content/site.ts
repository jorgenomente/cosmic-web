export const siteConfig = {
  name: "Cosmic Web",
  description: "Sitio web inicial creado con Next.js.",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "mailto:contacto@example.com" },
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/placeholder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/placeholder" },
  ],
  contactEmail: "contacto@example.com",
} as const;
