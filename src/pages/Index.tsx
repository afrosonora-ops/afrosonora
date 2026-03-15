import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, Users, Calendar, Globe, Mic2, Video, Award, Heart, ArrowRight, Star, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import FeaturedEvents from "@/components/FeaturedEvents";
import HomeStudioSection from "@/components/HomeStudioSection";
import StoreSection from "@/components/StoreSection";
import partnerTrtwxm from "@/assets/partner-trtwxm.jpeg";
import partnerTavares from "@/assets/partner-tavares.jpeg";
import partnerMikondo from "@/assets/partner-mikondo.jpeg";
import partnerAfrosonora from "@/assets/partner-afrosonora-white.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">A ponte entre África e Europa</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Conectamos <span className="text-gradient-gold">Artistas</span> ao Mercado Internacional
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Promoção artística, criação de oportunidades reais, eventos exclusivos e ligação direta com promotores
              internacionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/registo">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Criar Perfil <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/artistas">
                <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                  Ver Artistas
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 pt-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Music className="w-5 h-5 text-gold" />
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

      {/* What is AFROSONORA */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              O que é a <span className="text-gradient-gold">AFROSONORA</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A AFROSONORA é uma plataforma digital que visa criar uma ponte sólida entre músicos, artistas e bandas
              africanas e o mercado europeu. Trabalhamos para oferecer visibilidade, oportunidades reais e ligações
              profissionais que transformam carreiras.
            </p>
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Para <span className="text-gradient-gold">Quem</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma plataforma desenhada para todos os intervenientes do ecossistema musical africano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/para-artistas">
              <Card variant="gold" className="group hover:-translate-y-2 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mic2 className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Artistas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Músicos, cantores, DJs e bandas que querem expandir a sua carreira para a Europa.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/promotores">
              <Card variant="gold" className="group hover:-translate-y-2 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Promotores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Agências e promotores à procura de talento africano autêntico para os seus eventos.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/benfeitores">
              <Card variant="gold" className="group hover:-translate-y-2 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Heart className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Benfeitores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Pessoas que acreditam na cultura africana e querem apoiar artistas emergentes.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/embaixadores">
              <Card variant="gold" className="group hover:-translate-y-2 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Embaixadores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Líderes comunitários que ajudam a expandir a missão AFROSONORA globalmente.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              O que <span className="text-gradient-gold">Fazemos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Criamos valor real para artistas através de quatro pilares fundamentais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-6 p-6 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Divulgação de Artistas</h3>
                <p className="text-muted-foreground text-sm">
                  Promovemos artistas africanos junto de audiências europeias através de canais digitais e presenciais.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Criação de Oportunidades</h3>
                <p className="text-muted-foreground text-sm">
                  Organizamos showcases, ciclos de seleção e eventos exclusivos para dar palco aos artistas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                <Video className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Conteúdo Editorial</h3>
                <p className="text-muted-foreground text-sm">
                  Produzimos entrevistas, lives, reportagens e destaques que contam histórias autênticas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-xl bg-background/50 border border-border hover:border-gold/30 transition-colors">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ligação com Promotores</h3>
                <p className="text-muted-foreground text-sm">
                  Conectamos artistas diretamente com agências, promotores e organizadores de eventos europeus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <FeaturedEvents />

      {/* Sons de África - YouTube Video */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Sons de <span className="text-gradient-gold">África</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Descobre os ritmos, sons e energia da música africana com AFROSONORA. Sente a cultura, inspira-te e junta-te à tribo!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full rounded-xl overflow-hidden border border-border/50" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/eknwtUVQFxM?autoplay=1&mute=0&rel=0"
                title="Sons de África"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home Studio */}
      <HomeStudioSection />

      {/* Store Section */}
      <StoreSection />

      {/* Plans Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">Planos</span> para Artistas
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Impulsione sua carreira. Escolha o plano ideal para cada fase da sua jornada artística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Essencial Plan */}
            <Card variant="elevated" className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium">Iniciante</CardDescription>
                <CardTitle className="text-3xl">Essencial</CardTitle>
                <div className="pt-2">
                  <span className="text-4xl font-bold text-foreground">1,50€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">Para artistas que buscam iniciar a promoção dos seus trabalhos.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Promoção artística</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Participação em eventos</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Destaque rotativo</span>
                  </li>
                </ul>
                <Link to="/registo" className="block pt-4">
                  <Button variant="outline" className="w-full">
                    Começar Agora
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card variant="premium" className="relative overflow-hidden ring-2 ring-gold">
              <div className="absolute top-0 right-0 bg-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium">Compromisso</CardDescription>
                <CardTitle className="text-3xl">Premium</CardTitle>
                <div className="pt-2">
                  <span className="text-4xl font-bold text-foreground">9€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">Para artistas sérios sobre a sua carreira.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Upload ilimitado</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Destaque prioritário</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Comunidade exclusiva</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Elegível para entrevistas</span>
                  </li>
                </ul>
                <Link to="/registo" className="block pt-4">
                  <Button variant="gold" className="w-full">
                    Escolher Premium
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card variant="elevated" className="relative overflow-hidden">
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium">Oportunidade Real</CardDescription>
                <CardTitle className="text-3xl">Pro</CardTitle>
                <div className="pt-2">
                  <span className="text-4xl font-bold text-foreground">25€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">Acesso total e prioridade máxima.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Projetos ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Submissão direta a eventos</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Contacto com promotores</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Convites VIP</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">Prioridade total</span>
                  </li>
                </ul>
                <Link to="/registo" className="block pt-4">
                  <Button variant="goldOutline" className="w-full">
                    Escolher Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/planos"
              className="text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
            >
              Ver todos os detalhes dos planos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Pronto para dar o próximo passo na sua <span className="text-gradient-gold">carreira</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Junte-se à comunidade AFROSONORA e comece a construir a sua presença no mercado europeu hoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/registo">
                <Button variant="hero" size="xl">
                  Criar Perfil Agora <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="heroOutline" size="xl">
                  Falar Connosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros Produção Musical */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Parceiros <span className="text-gradient-gold">Produção Musical</span>
            </h3>
            <p className="text-muted-foreground mt-2">Juntos a impulsionar a música africana</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {[
              { src: partnerTrtwxm, alt: "TRTWXM Production" },
              { src: partnerTavares, alt: "Tavares Music Studio" },
              { src: partnerMikondo, alt: "Mikondó" },
              { src: partnerAfrosonora, alt: "AFROSONORA" },
            ].map((partner) => (
              <div key={partner.alt} className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-card border border-border/50 flex items-center justify-center p-3 hover:border-gold/40 transition-colors">
                <img src={partner.src} alt={partner.alt} className="max-w-full max-h-full object-contain rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
