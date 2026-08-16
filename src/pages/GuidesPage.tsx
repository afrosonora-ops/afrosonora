import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { guides } from "@/data/guidesData";
import { ArrowRight, Clock } from "lucide-react";

const SITE_URL = "https://afrosonora.com";

const GuidesPage = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Guias AfroSonora sobre música afro",
      description:
        "Artigos e guias sobre música afro contemporânea, géneros africanos e descoberta de novos artistas.",
      url: `${SITE_URL}/guias`,
      hasPart: guides.map((g) => ({
        "@type": "Article",
        headline: g.title,
        url: `${SITE_URL}/guias/${g.slug}`,
        description: g.description,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Seo
        title="Guias de música afro: géneros, artistas e cultura | AfroSonora"
        description="Guias claros sobre música afro contemporânea, diferenças entre afrobeat e afrobeats, como descobrir novos artistas e onde ouvir música africana."
        path="/guias"
        jsonLd={jsonLd}
      />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs />
          <header className="mb-14 max-w-3xl">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Guias & Conhecimento</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Guias sobre música afro e cultura africana
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Conteúdo útil e factual sobre géneros, cenas e formas de descobrir artistas africanos e da diáspora.
              Escrito pela equipa da{" "}
              <Link to="/sobre" className="text-gold hover:underline">
                AfroSonora
              </Link>
              , a plataforma europeia dedicada à música afro.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guias/${guide.slug}`}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-gold/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <span className="rounded-full border border-gold/40 text-gold px-3 py-1">{guide.category}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {guide.readingTime}
                  </span>
                </div>
                <h2 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-gold transition-colors">
                  {guide.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{guide.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                  Ler guia <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-gold/25 bg-gold/[0.06] p-8 text-center">
            <h2 className="font-display text-2xl font-bold mb-3">Descubra a plataforma</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Perfis de músicos, agenda de eventos e ligação direta a promotores europeus.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/artistas" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-opacity">
                Ver Músicos
              </Link>
              <Link to="/eventos" className="rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors">
                Ver Eventos
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuidesPage;
