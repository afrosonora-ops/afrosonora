import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Globe,
  Calendar,
  Megaphone,
  Sparkles,
  Newspaper,
  Handshake,
  Music,
  GraduationCap,
  Check,
} from "lucide-react";
import logo3d from "@/assets/sobre-logo-3d.webp.asset.json";
import infografia from "@/assets/sobre-infografia.webp.asset.json";
import estudioTrofeus from "@/assets/sobre-estudio-trofeus.webp.asset.json";
import projetoEstudio from "@/assets/sobre-projeto.webp.asset.json";

const pilares = [
  { icon: Megaphone, title: "Divulgação de Artistas", text: "Promoção de talentos africanos junto de audiências europeias." },
  { icon: Sparkles, title: "Criação de Oportunidades", text: "Showcase, ciclos de seleção e eventos exclusivos." },
  { icon: Newspaper, title: "Conteúdo Editorial", text: "Entrevistas, lives e reportagens com histórias autênticas." },
  { icon: Handshake, title: "Ligação com Promotores", text: "Conexão direta entre artistas e contratantes na Europa." },
  { icon: Music, title: "Produção de Eventos", text: "Festivais, concertos e iniciativas culturais." },
  { icon: GraduationCap, title: "Apoio a Talentos Emergentes", text: "Mentoria, curadoria e pacotes de acesso, como o Home Studio AFROSONORA." },
];

const publicos = [
  { title: "Artistas", text: "Músicos, DJs e bandas que querem expandir a carreira na Europa." },
  { title: "Promotores", text: "Agências à procura de talento africano autêntico." },
  { title: "Benfeitores", text: "Apoiantes e investidores da cultura africana." },
  { title: "Embaixadores", text: "Líderes comunitários a expandir a missão globalmente." },
];

const valores = [
  { title: "Autenticidade", text: "Contamos as histórias como elas são, sem exotizar nem simplificar a cultura africana." },
  { title: "Oportunidade real", text: "Não vendemos promessas: ligamos artistas a promotores, palcos e projetos concretos." },
  { title: "Transparência", text: "Regras claras de participação, licenciamento e uso de imagem, em conformidade com o RGPD." },
  { title: "Comunidade", text: "Artistas, promotores, benfeitores e embaixadores constroem a plataforma em conjunto." },
];

const diferenciais = [
  "Ponte direta entre artistas africanos e promotores europeus, sem intermediários desnecessários.",
  "Preservação dos direitos dos artistas: a música permanece nas plataformas oficiais do próprio.",
  "Curadoria editorial e cultural que valoriza a autenticidade em vez da viralização superficial.",
  "Foco na música africana, na música negra contemporânea e na diáspora como ecossistema único.",
  "Iniciativas concretas: showcases, Home Studio, eventos culturais e ligações profissionais mensuráveis.",
];

const faqs = [
  {
    q: "O que é o AfroSonora?",
    a: "O AfroSonora é uma plataforma digital europeia dedicada à música afro e à cultura africana. Liga artistas africanos e da diáspora — músicos, bandas e DJs — a promotores, agências e espaços na Europa, através de perfis profissionais, uma agenda de eventos, conteúdo editorial e iniciativas de visibilidade como o Home Studio AFROSONORA.",
  },
  {
    q: "O AfroSonora é uma plataforma de streaming?",
    a: "Não. O AfroSonora não aloja nem reproduz música diretamente. Cada artista mantém a sua música nas plataformas oficiais — Spotify, YouTube e outras. O AfroSonora funciona como vitrine e ponte profissional: ajuda os artistas a serem descobertos, contactados e contratados, preservando a gestão dos seus próprios direitos e streams.",
  },
  {
    q: "Que tipo de música posso encontrar no AfroSonora?",
    a: "A curadoria abrange afrobeat e afrobeats, kizomba, semba, kuduro, afro house, amapiano, coladeira, morna, highlife, soukous, rumba congolesa, funaná e fusões contemporâneas com jazz, R&B, hip-hop e eletrónica. Inclui tanto sonoridades tradicionais do continente africano como música negra produzida na diáspora europeia.",
  },
  {
    q: "O AfroSonora é focado em música africana ou da diáspora?",
    a: "Ambos. O AfroSonora valoriza a música feita em África e as expressões criativas da diáspora africana na Europa. A plataforma não separa os dois universos: trata-os como parte do mesmo ecossistema de cultura negra, diáspora e sons africanos.",
  },
  {
    q: "Como posso descobrir novos artistas afro no AfroSonora?",
    a: "Podes explorar a página /artistas, filtrar por género e país, consultar a agenda de eventos em /eventos, ou seguir as iniciativas do Home Studio e os showcases organizados pela plataforma. Cada perfil de artista inclui biografia, fotografias e ligações diretas para Spotify e YouTube.",
  },
  {
    q: "Para quem é o AfroSonora?",
    a: "É para artistas africanos e da diáspora que querem expandir a carreira na Europa; para promotores e agências à procura de talento autêntico; para benfeitores e investidores que apoiam a cultura africana; e para embaixadores comunitários que querem expandir o movimento globalmente.",
  },
  {
    q: "Como é que um artista entra na plataforma?",
    a: "Basta criar um perfil gratuito em /registo, preencher a biografia, os géneros e as ligações às plataformas de streaming. Existem depois planos de subscrição que dão maior destaque, prioridade em showcases e acesso a iniciativas como o Home Studio AFROSONORA.",
  },
  {
    q: "O AfroSonora é gratuito?",
    a: "A criação de perfil e a consulta de artistas e eventos são gratuitas. Existem planos pagos opcionais para artistas que querem destaque editorial, prioridade em seleções e benefícios adicionais.",
  },
  {
    q: "Onde atua o AfroSonora?",
    a: "A equipa está sediada nos Países Baixos, com representação em Luxemburgo, Portugal e França, e trabalha com artistas e promotores de mais de 15 países entre a Europa e o continente africano. A expansão de parcerias é contínua e aberta a novos mercados europeus.",
  },
  {
    q: "Como contactar o AfroSonora?",
    a: "Por e-mail para info@afrosonora.com ou através do formulário em /contacto. Promotores, parceiros comerciais e media têm páginas dedicadas para candidaturas e propostas.",
  },
];

const SITE = "https://afrosonora.lovable.app";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE}/sobre#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

const sobreJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE}/sobre#aboutpage`,
    name: "Sobre o AfroSonora",
    url: `${SITE}/sobre`,
    inLanguage: "pt-PT",
    description:
      "O que é o AfroSonora: plataforma europeia de música afro e cultura africana que liga artistas de África e da diáspora a promotores, eventos e público na Europa.",
    about: { "@id": `${SITE}/#organization` },
    mainEntity: {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "AfroSonora",
      url: `${SITE}/`,
      email: "info@afrosonora.com",
      logo: `${SITE}/logo.png`,
      slogan: "Sons de África — a ponte musical entre África e Europa",
      foundingLocation: { "@type": "Place", name: "Países Baixos" },
      areaServed: ["Países Baixos", "Luxemburgo", "Portugal", "França", "Europa", "África"],
      sameAs: [
        "https://www.instagram.com/afro.sonora",
        "https://www.facebook.com/profile.php?id=61586604232083",
      ],

      knowsAbout: [
        "música afro",
        "afrobeat",
        "afrobeats",
        "kizomba",
        "semba",
        "kuduro",
        "afro house",
        "amapiano",
        "cultura africana",
        "diáspora africana",
        "música negra",
        "sons africanos",
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Sobre o AfroSonora", item: `${SITE}/sobre` },
    ],
  },
  faqJsonLd,
];

const SobrePage = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = logo3d.url;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Seo
        title="Sobre o AfroSonora | Música Afro e Cultura Africana"
        description="O que é o AfroSonora: plataforma europeia de música afro e cultura africana que liga artistas de África e da diáspora a promotores, palcos e público — história, missão, valores e FAQ."
        path="/sobre"
        jsonLd={sobreJsonLd}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <Link
            to="/"
            className="inline-flex items-center gap-2 min-h-11 text-sm text-muted-foreground hover:text-gold transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar ao Início
          </Link>

          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <img
              src={logo3d.url}
              alt="Logótipo AfroSonora em relevo dourado"
              width={1137}
              height={928}
              className="mx-auto w-40 md:w-56 h-auto aspect-[1137/928] object-cover rounded-2xl border border-gold/20 shadow-lg bg-[#1A1A1A]"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Sobre o <span className="text-gradient-gold">AfroSonora</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Sons de África — Sente a cultura, inspira-te e junta-te à tribo!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-sm">100+ Artistas</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gold" />
                <span className="text-sm">15+ Países</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                <span className="text-sm">20+ Eventos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resposta direta: o que é o AfroSonora */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-5 p-8 rounded-2xl border border-gold/20 bg-gold/5">
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              O que é o <span className="text-gradient-gold">AfroSonora</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              O <strong className="text-foreground">AfroSonora</strong> é uma plataforma digital
              europeia dedicada à <strong className="text-foreground">música afro</strong> e à
              cultura africana. Reúne num só lugar perfis profissionais de músicos, bandas e DJs de
              África e da diáspora, uma agenda de eventos culturais, conteúdo editorial e ligação
              direta a promotores, agências e espaços na Europa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A curadoria abrange afrobeat e afrobeats, kizomba, semba, kuduro, afro house, amapiano,
              morna, highlife, soukous e as fusões contemporâneas da música negra feita na Europa. Os
              artistas mantêm a sua música nas plataformas oficiais — o AfroSonora trata da
              visibilidade, das ligações profissionais e dos palcos.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Está sediado nos Países Baixos, com representação em Luxemburgo, Portugal e França, e
              trabalha com artistas e promotores de mais de 15 países. O contacto oficial é{" "}
              <a href="mailto:info@afrosonora.com" className="text-gold hover:underline">
                info@afrosonora.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* História, Visão e Missão + Infografia */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                História, <span className="text-gradient-gold">Visão</span> e Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A AFROSONORA nasceu da paixão pela riqueza cultural africana e da vontade de criar
                uma ponte real entre o talento do continente e o mercado europeu. Começámos como uma
                comunidade de artistas, produtores e promotores que partilhavam a mesma convicção: a
                música africana merece palcos maiores e ligações profissionais duradouras.
              </p>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-display text-xl font-semibold text-gold mb-2">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a principal plataforma de descoberta, promoção e intercâmbio cultural da música
                  africana na Europa, construindo um ecossistema sustentável para artistas, promotores
                  e comunidades.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-display text-xl font-semibold text-gold mb-2">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dar visibilidade autêntica, gerar oportunidades reais e criar ligações profissionais
                  para músicos, artistas e bandas africanas, enriquecendo o panorama cultural europeu
                  com a energia e a inovação da criatividade africana.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/20 animate-fade-in">
              <img
                src={infografia.url}
                alt="Infografia do ecossistema AfroSonora: showcase de artistas, ligação global, editorial, prémios, dashboard e comunidade"
                width={1137}
                height={928}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto aspect-[1137/928] object-cover bg-[#1A1A1A]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6 Pilares */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Os Nossos <span className="text-gradient-gold">6 Pilares</span> de Atuação
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilares.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-gold/50 transition-colors"
              >
                <p.icon className="w-8 h-8 text-gold mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl overflow-hidden border border-gold/20">
            <img
              src={estudioTrofeus.url}
              alt="Sessões de gravação em estúdio e troféus AfroSonora: Talento Revelação, Promotor do Ano e Impacto Cultural"
              width={1137}
              height={928}
              sizes="100vw"
              className="w-full h-auto aspect-[1137/928] object-cover bg-[#1A1A1A]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Para <span className="text-gradient-gold">Quem</span> É o AfroSonora?
              </h2>
              <div className="space-y-4">
                {publicos.map((p) => (
                  <div key={p.title} className="p-6 rounded-2xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-gold mb-1">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gold/20">
              <img
                src={projetoEstudio.url}
                alt="Artistas e produtores africanos em estúdio, representando a comunidade AfroSonora"
                width={1136}
                height={928}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-auto aspect-[1136/928] object-cover bg-[#1A1A1A]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Os Nossos <span className="text-gradient-gold">Valores</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {valores.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que diferencia a plataforma */}
      <section className="py-16 md:py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
              O que Diferencia o <span className="text-gradient-gold">AfroSonora</span>?
            </h2>
            <div className="space-y-4">
              {diferenciais.map((d) => (
                <div key={d} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card">
                  <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" aria-hidden="true" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas frequentes */}
      <section className="py-16 md:py-24" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-10 text-center">
              Perguntas <span className="text-gradient-gold">Frequentes</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="p-6 rounded-2xl border border-border bg-card">
                  <h3 className="font-display text-lg font-semibold mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl border border-gold/20 bg-gold/5 text-center">
              <h3 className="font-display text-xl font-semibold mb-2">Falar connosco</h3>
              <p className="text-muted-foreground leading-relaxed">
                E-mail:{" "}
                <a href="mailto:info@afrosonora.com" className="text-gold hover:underline">
                  info@afrosonora.com
                </a>{" "}
                · Formulário em <Link to="/contacto" className="text-gold hover:underline">/contacto</Link> ·
                Promotores e agências em <Link to="/promotores" className="text-gold hover:underline">/promotores</Link> ·
                Parcerias em <Link to="/parceiros" className="text-gold hover:underline">/parceiros</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 py-12 px-6 rounded-2xl border border-gold/20 bg-gold/5">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Loja Oficial <span className="text-gradient-gold">AFROSONORA</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Cada produto adquirido na nossa loja contribui diretamente para iniciativas que apoiam
              jovens músicos africanos. Toda a receita financia projetos e eventos para talentos
              emergentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Junta-te à Tribo / Ver Planos <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/store">
                <Button variant="goldOutline" size="xl" className="w-full sm:w-auto">
                  Ver Loja Oficial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobrePage;