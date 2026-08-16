import { Link, useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { getGuide, guides } from "@/data/guidesData";
import { ArrowLeft, ArrowRight, Clock, Check } from "lucide-react";

const SITE_URL = "https://afrosonora.lovable.app";

const GuideArticlePage = () => {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) return <Navigate to="/guias" replace />;

  const url = `${SITE_URL}/guias/${guide.slug}`;
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      inLanguage: "pt-PT",
      articleSection: guide.category,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "AfroSonora", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "AfroSonora",
        url: SITE_URL,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE_URL}/guias` },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Seo title={guide.seoTitle} description={guide.description} path={`/guias/${guide.slug}`} jsonLd={jsonLd} />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Navegação estrutural" className="mb-8">
            <Link to="/guias" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Todos os guias
            </Link>
          </nav>

          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-5">
              <span className="rounded-full border border-gold/40 text-gold px-3 py-1">{guide.category}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {guide.readingTime} de leitura
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">{guide.title}</h1>
            <div className="space-y-4">
              {guide.intro.map((p, i) => (
                <p key={i} className="text-lg text-foreground/85 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </header>

          <div className="h-px bg-gradient-to-r from-gold/50 to-transparent mb-10" />

          <div className="space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">{section.heading}</h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 mt-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-foreground/80 leading-relaxed">
                        <Check className="h-5 w-5 shrink-0 text-gold mt-0.5" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14 rounded-2xl border border-gold/25 bg-gold/[0.06] p-8">
            <h2 className="font-display text-2xl font-bold mb-4">Conclusão</h2>
            {guide.conclusion.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/artistas" className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition-opacity">
                Explorar Músicos
              </Link>
              <Link to="/eventos" className="rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold text-gold hover:bg-gold/10 transition-colors">
                Ver Eventos
              </Link>
              <Link to="/sobre" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:border-gold/40 transition-colors">
                Sobre a AfroSonora
              </Link>
            </div>
          </section>

          <nav aria-label="Outros guias" className="mt-16">
            <h2 className="font-display text-xl font-semibold mb-5">Continue a ler</h2>
            <ul className="space-y-3">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    to={`/guias/${g.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-gold/40"
                  >
                    <span className="text-sm md:text-base text-foreground/90 group-hover:text-gold transition-colors">{g.title}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6">
              Voltar à <Link to="/" className="text-gold hover:underline">página inicial</Link> ou conhecer a{" "}
              <Link to="/sobre" className="text-gold hover:underline">história da AfroSonora</Link>.
            </p>
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default GuideArticlePage;
