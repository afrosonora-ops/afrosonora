import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
        title="Sobre a AfroSonora | Sons de África na Europa"
        description="Conhece a história, missão e os 6 pilares da AfroSonora — o movimento que amplifica artistas africanos no coração da Europa."
        path="/sobre"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4">
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
              Sobre a <span className="text-gradient-gold">AfroSonora</span>
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
                Para <span className="text-gradient-gold">Quem</span> É a AfroSonora?
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
