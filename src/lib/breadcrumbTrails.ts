export interface Crumb {
  name: string;
  path: string;
}

/**
 * Breadcrumb trail per route (without the "Início" root, which is added
 * automatically). Used both for the visual trail and for BreadcrumbList
 * structured data.
 */
const trails: Record<string, Crumb[]> = {
  "/artistas": [{ name: "Músicos", path: "/artistas" }],
  "/para-artistas": [
    { name: "Músicos", path: "/artistas" },
    { name: "Para Músicos", path: "/para-artistas" },
  ],
  "/planos": [{ name: "Planos", path: "/planos" }],
  "/eventos": [{ name: "Eventos", path: "/eventos" }],
  "/eventos-culturais-2026": [
    { name: "Eventos", path: "/eventos" },
    { name: "Eventos Culturais 2026", path: "/eventos-culturais-2026" },
  ],
  "/contacto": [{ name: "Contacto", path: "/contacto" }],
  "/benfeitores": [{ name: "Benfeitores", path: "/benfeitores" }],
  "/embaixadores": [{ name: "Embaixadores", path: "/embaixadores" }],
  "/parceiros": [{ name: "Parcerias", path: "/parceiros" }],
  "/promotores": [{ name: "Promotores", path: "/promotores" }],
  "/comeca-a-criar": [{ name: "Começa a Criar", path: "/comeca-a-criar" }],
  "/quem-somos": [
    { name: "Sobre", path: "/sobre" },
    { name: "Quem Somos", path: "/quem-somos" },
  ],
  "/sobre": [{ name: "Sobre", path: "/sobre" }],
  "/guias": [{ name: "Guias", path: "/guias" }],
  "/store": [{ name: "Store", path: "/store" }],
  "/registo": [{ name: "Criar conta", path: "/registo" }],
  "/login": [{ name: "Entrar", path: "/login" }],
  "/termos": [{ name: "Termos & Condições", path: "/termos" }],
  "/privacidade": [{ name: "Privacidade", path: "/privacidade" }],
  "/cookies": [{ name: "Cookies", path: "/cookies" }],
  "/aviso-legal": [{ name: "Aviso Legal", path: "/aviso-legal" }],
  "/regras-conteudo": [{ name: "Regras de Conteúdo", path: "/regras-conteudo" }],
  "/licenciamento-musica": [{ name: "Licenciamento de Música", path: "/licenciamento-musica" }],
  "/consentimento-imagem": [{ name: "Consentimento de Imagem", path: "/consentimento-imagem" }],
};

export const getTrail = (pathname: string): Crumb[] => trails[pathname] ?? [];
