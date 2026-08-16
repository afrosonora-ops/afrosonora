import { useEffect } from "react";
import { getTrail, type Crumb } from "@/lib/breadcrumbTrails";

export type { Crumb };

const SITE_URL = "https://afrosonora.com";
const DEFAULT_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/ZI7Zx4L0GMXfEHzDy466NYNogmn2/social-images/social-1774086687145-Logo_branco.webp";



interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Structured data (JSON-LD) specific to this route. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Breadcrumb trail (without "Início"), emitted as BreadcrumbList JSON-LD. */
  breadcrumbs?: Crumb[];
  /** Keep the route out of search results (private/utility pages). */
  noindex?: boolean;
}


const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Updates the document head (title, description, canonical, Open Graph, Twitter)
 * for the current route. Client-side only — crawlers that execute JS read it.
 */
const Seo = ({ title, description, path, image = DEFAULT_IMAGE, jsonLd, breadcrumbs, noindex }: SeoProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setLink("canonical", url);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "AfroSonora");
    setMeta("property", "og:locale", "pt_PT");
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:alt", title);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:image:alt", title);
  }, [title, description, path, image, noindex]);

  const provided = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  const hasOwnBreadcrumb = provided.some((n) => n?.["@type"] === "BreadcrumbList");
  const trail = breadcrumbs ?? getTrail(path);

  const breadcrumbLd =
    trail.length && !hasOwnBreadcrumb
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ name: "Início", path: "/" }, ...trail].map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: `${SITE_URL}${c.path}`,
          })),
        }
      : null;

  const graph = [...provided, ...(breadcrumbLd ? [breadcrumbLd] : [])];

  const serialized = graph.length ? JSON.stringify(graph.length === 1 ? graph[0] : graph) : null;
  useEffect(() => {
    if (!serialized) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoRoute = "true";
    script.textContent = serialized;
    document.head.appendChild(script);
    return () => script.remove();
  }, [serialized]);


  return null;
};

export default Seo;
