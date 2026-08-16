// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://afrosonora.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

// Keep in sync with src/data/eventsData.ts
const eventSlugs = [
  "afrosonora-spotlight",
  "afrosonora-live-sessions",
  "music-clip-challenge",
  "cultural-exchange",
  "producers-desk",
  "monthly-drop",
  "video-spotlight",
  "fan-collaboration",
  "event-prep",
];

// Keep in sync with src/data/guidesData.ts
const guideSlugs = [
  "o-que-e-musica-afro-contemporanea",
  "como-descobrir-novos-artistas-afro",
  "afrobeat-afropop-diaspora-diferencas",
  "onde-ouvir-musica-afro",
];

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/artistas", changefreq: "weekly", priority: "0.9" },
  { path: "/para-artistas", changefreq: "monthly", priority: "0.7" },
  { path: "/planos", changefreq: "monthly", priority: "0.9" },
  { path: "/eventos", changefreq: "weekly", priority: "0.9" },
  { path: "/eventos-culturais-2026", changefreq: "monthly", priority: "0.7" },
  { path: "/comeca-a-criar", changefreq: "monthly", priority: "0.8" },
  { path: "/store", changefreq: "monthly", priority: "0.7" },
  { path: "/sobre", changefreq: "monthly", priority: "0.9" },
  { path: "/guias", changefreq: "monthly", priority: "0.8" },
  ...guideSlugs.map((slug) => ({ path: `/guias/${slug}`, changefreq: "monthly" as const, priority: "0.8" })),
  { path: "/quem-somos", changefreq: "monthly", priority: "0.7" },
  { path: "/contacto", changefreq: "monthly", priority: "0.7" },
  { path: "/promotores", changefreq: "monthly", priority: "0.6" },
  { path: "/parceiros", changefreq: "monthly", priority: "0.6" },
  { path: "/embaixadores", changefreq: "monthly", priority: "0.6" },
  { path: "/benfeitores", changefreq: "monthly", priority: "0.6" },
  { path: "/registo", changefreq: "yearly", priority: "0.5" },
  { path: "/login", changefreq: "yearly", priority: "0.3" },
  { path: "/termos", changefreq: "yearly", priority: "0.3" },
  { path: "/privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/aviso-legal", changefreq: "yearly", priority: "0.3" },
  { path: "/regras-conteudo", changefreq: "yearly", priority: "0.3" },
  { path: "/licenciamento-musica", changefreq: "yearly", priority: "0.3" },
  { path: "/consentimento-imagem", changefreq: "yearly", priority: "0.3" },
  ...eventSlugs.map((slug) => ({
    path: `/eventos/${slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
];

function generateSitemap(items: SitemapEntry[]) {
  const urls = items.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
