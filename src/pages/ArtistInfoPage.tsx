import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mic2, Music, Sparkles, Plane, Headphones, Handshake, ArrowRight } from "lucide-react";

const ArtistInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Mic2 className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Para Artistas</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">Artistas</span> AFROSONORA
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A AFROSONORA foi criada para descobrir, promover e dar visibilidade ao talento africano no mercado europeu. Esta secção é dedicada a músicos, cantores, DJs, produtores, bailarinos e bandas que querem expandir a sua carreira e levar a música, as tradições e a cultura africana a novos públicos.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-charcoal border border-border">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se és um artista com paixão pelo que fazes e queres dar o próximo passo na tua carreira, a AFROSONORA pode ser a plataforma que te liga a novas oportunidades.
              </p>
            </div>
          </div>

          {/* Uma plataforma para revelar talento */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Uma plataforma para <span className="text-gradient-gold">revelar talento</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              O nosso objetivo é captar jovens talentos e artistas criativos, mas também músicos já experientes que querem dar-se a conhecer fora do seu país e alcançar o público europeu.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">Procuramos artistas que representem:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-3">
                <span className="text-2xl">🎵</span>
                <span className="text-foreground">A riqueza da música africana</span>
              </div>
              <div className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-3">
                <span className="text-2xl">💃</span>
                <span className="text-foreground">A dança e as expressões culturais</span>
              </div>
              <div className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <span className="text-foreground">Novos sons e projetos criativos</span>
              </div>
              <div className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-3">
                <span className="text-2xl">🌍</span>
                <span className="text-foreground">A identidade, as tradições e a cultura africana</span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center">
              A AFROSONORA pretende criar uma comunidade forte de artistas que queiram partilhar o seu talento com o mundo.
            </p>
          </div>

          {/* O que a AFROSONORA pode oferecer */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4 text-center">
              O que a AFROSONORA pode <span className="text-gradient-gold">oferecer</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Estamos empenhados em criar oportunidades reais para os artistas que fazem parte da plataforma. Ao participar, poderás ter acesso a iniciativas como:
            </p>
            <div className="space-y-4">
              {[
                { emoji: "🎤", text: "Participação em eventos e showcases" },
                { emoji: "🎥", text: "Lives e transmissões no YouTube" },
                { emoji: "📢", text: "Promoção através da plataforma e conteúdos editoriais" },
                { emoji: "✈️", text: "Possível apoio logístico em deslocações e viagens (caso a caso)" },
                { emoji: "🎧", text: "Apoio no desenvolvimento artístico e gravação de músicas (quando possível)" },
                { emoji: "🤝", text: "Ligação com promotores e profissionais da indústria" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center">
              Além disso, iremos desenvolver programas exclusivos para artistas, incluindo eventos ao vivo, iniciativas culturais e oportunidades de promoção internacional.
            </p>
          </div>

          {/* Incentivos */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Incentivos para <span className="text-gradient-gold">artistas</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              Ao fazer parte da AFROSONORA, os artistas passam a integrar uma comunidade que está a crescer e que pretende valorizar e divulgar a cultura africana a nível global.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">A plataforma irá promover:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground">Eventos ao vivo</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground">Showcases de novos talentos</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground">Conteúdos digitais e transmissões ao vivo</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground">Projetos especiais de promoção cultural</div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center font-medium">
              O nosso objetivo é fazer com que a música africana chegue a todos os cantos do mundo. 🌍🎶
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-xl bg-charcoal border-2 border-gold/30">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Pronto para dar o próximo passo?
              </h2>
              <p className="text-muted-foreground mb-6">
                Regista-te como Artista e começa a tua jornada com a AFROSONORA.
              </p>
              <Link to="/registo">
                <Button variant="gold" size="lg">
                  Registar como Artista <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArtistInfoPage;
