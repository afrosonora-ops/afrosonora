import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Users, ArrowRight, Mail, Globe, Music, Mic2, Send, Headphones, CalendarDays, Eye, Sparkles, Trophy, Star } from "lucide-react";
import promotersConcert from "@/assets/promoters-concert.webp";
import promotersGlobal from "@/assets/promoters-global.webp";
import promotersMusic from "@/assets/promoters-music.webp";

const showcaseCards = [
  {
    image: promotersConcert,
    title: "Festivais & Eventos ao Vivo",
    description: "Programação de artistas africanos para festivais, concertos e eventos culturais em toda a Europa.",
    link: "/parceiros",
  },
  {
    image: promotersGlobal,
    title: "Conexão Global África–Europa",
    description: "Uma ponte musical que liga talentos emergentes africanos a promotores, labels e venues internacionais.",
    link: "/parceiros",
  },
  {
    image: promotersMusic,
    title: "Showcases & Curadoria Musical",
    description: "Descubra novos sons através de showcases exclusivos, demos e projetos artísticos selecionados.",
    link: "/parceiros",
  },
];

const targetAudience = [
  { icon: CalendarDays, label: "Festivais de música" },
  { icon: Headphones, label: "Clubes e venues" },
  { icon: Music, label: "Labels e editoras musicais" },
  { icon: Mic2, label: "Produtores e organizadores de eventos" },
  { icon: Globe, label: "Agências de booking e management" },
  { icon: Star, label: "Curadores e diretores artísticos" },
];

const discoverItems = [
  { emoji: "🎵", title: "Descobrir novos artistas", desc: "Aceda a perfis profissionais de músicos, DJs, produtores e bandas africanas com identidade cultural forte e potencial internacional." },
  { emoji: "📩", title: "Contacto direto com artistas", desc: "Promotores registados podem contactar artistas diretamente para colaborações, booking, eventos ou projetos criativos." },
  { emoji: "📀", title: "Demos, maquetes e novidades", desc: "Receba informações privilegiadas sobre lançamentos, projetos emergentes e novidades da comunidade AFROSONORA." },
  { emoji: "🎤", title: "Identificação de talentos", desc: "Encontre artistas adequados para concertos, festivais, programações culturais e showcases exclusivos." },
];

const programBenefits = [
  { icon: Sparkles, text: "Acesso antecipado a novos artistas e projetos" },
  { icon: Mic2, text: "Prioridade na descoberta de talentos emergentes" },
  { icon: Globe, text: "Participação em eventos e iniciativas AFROSONORA" },
  { icon: Eye, text: "Visibilidade como promotor parceiro da plataforma" },
  { icon: Trophy, text: "Possibilidade de propor eventos, ciclos ou showcases" },
  { icon: CalendarDays, text: "Convites para eventos e encontros da comunidade" },
];

const partnershipOpportunities = [
  "Programação de artistas para festivais",
  "Curadoria musical para venues e eventos",
  "Showcases e eventos especiais",
  "Descoberta e desenvolvimento de novos talentos",
  "Colaboração com labels e produtoras",
  "Eventos culturais e musicais internacionais",
];

const PromotersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Promotores e Agências | Contratar Artistas Afro | AfroSonora"} description={"Promotores e agências europeias encontram na AfroSonora músicos africanos e da diáspora prontos para palco: afrobeat, kizomba, semba, afro house e mais."} path="/promotores" />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          {/* Hero Header */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Para Profissionais da Indústria Musical</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Parcerias e Oportunidades para{" "}
              <span className="text-gradient-gold">Promotores</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Conectar talento africano com o mundo. A AFROSONORA é a ponte entre músicos e artistas africanos e o mercado europeu — descubra novos sons, crie oportunidades exclusivas e faça parte de um movimento cultural em crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/parceiros">
                <Button variant="gold" size="lg">
                  Registe-se como Promotor <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="mailto:info@afrosonora.com">
                <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10">
                  <Mail className="mr-2 w-4 h-4" /> info@afrosonora.com
                </Button>
              </a>
            </div>
          </div>

          {/* Showcase Cards */}
          <div className="max-w-6xl mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {showcaseCards.map((card, index) => (
                <Card
                  key={card.title}
                  className="group overflow-hidden border-border bg-charcoal hover:border-gold/40 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img decoding="async" loading="lazy"
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.description}</p>
                    <Link to={card.link} className="inline-flex items-center text-gold text-sm font-medium hover:underline">
                      Saber mais <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Para Quem */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              Para Quem é Esta <span className="text-gradient-gold">Plataforma</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              A secção Promotores é dedicada a todos os profissionais que procuram descobrir artistas autênticos e criar oportunidades no universo da música africana.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {targetAudience.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-charcoal border border-border hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* O Que Podem Encontrar */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              O Que os Promotores <span className="text-gradient-gold">Podem Encontrar</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Ao registar-se como Promotor, terá acesso a ferramentas e conteúdos exclusivos para descobrir e contratar talento africano.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {discoverItems.map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-charcoal border border-border hover:border-gold/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{item.emoji}</span>
                    <div>
                      <h3 className="text-foreground font-display font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programa Promotores */}
          <div className="max-w-4xl mx-auto mb-24">
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-charcoal to-background border-2 border-gold/20">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Programa Promotores <span className="text-gradient-gold">AFROSONORA</span>
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Para incentivar a participação ativa de promotores e agências, a AFROSONORA está a desenvolver um programa especial para promotores parceiros.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programBenefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-foreground text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Oportunidades de Parceria */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              Oportunidades de <span className="text-gradient-gold">Parceria e Colaboração</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {partnershipOpportunities.map((item, i) => (
                <div key={i} className="p-5 rounded-xl bg-charcoal border border-border text-center hover:border-gold/30 transition-colors">
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing + CTA */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Construir o futuro da{" "}
              <span className="text-gradient-gold">música africana</span> na Europa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
              A AFROSONORA acredita que os promotores e agências são peças fundamentais no desenvolvimento da carreira dos artistas. Se procura novos sons, novas culturas e novos talentos, esta é a oportunidade para fazer parte de um movimento cultural em crescimento.
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-2xl mx-auto">
            <div className="p-10 rounded-2xl bg-charcoal border-2 border-gold/30 text-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Registe-se como Promotor 🌍🎶
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Comece a descobrir a próxima geração de artistas africanos. Inscreva-se na nossa página de parcerias e entre na comunidade AFROSONORA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/parceiros">
                  <Button variant="gold" size="lg">
                    Inscrever-se como Promotor <Send className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href="mailto:info@afrosonora.com">
                  <Button variant="outline" size="lg" className="border-gold/30 text-gold hover:bg-gold/10">
                    <Mail className="mr-2 w-4 h-4" /> Contactar Equipa
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PromotersPage;
