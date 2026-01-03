import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Gift, Star, Users, CheckCircle2, ArrowRight } from "lucide-react";

const BenefactorsPage = () => {
  const benefits = [
    "Convites VIP para todos os eventos AFROSONORA",
    "Menção como apoiador oficial",
    "Acesso antecipado a eventos e conteúdos",
    "Relatórios de impacto personalizados",
    "Badge exclusivo de Benfeitor",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Heart className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Apoie a Cultura Africana</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Torne-se um <span className="text-gradient-gold">Benfeitor</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apoie artistas africanos emergentes e ajude-nos a criar pontes culturais entre África e Europa.
            </p>
          </div>
          
          {/* Impact Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">100+</h3>
                <p className="text-muted-foreground">Artistas apoiados</p>
              </div>
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">20+</h3>
                <p className="text-muted-foreground">Eventos realizados</p>
              </div>
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">15</h3>
                <p className="text-muted-foreground">Países representados</p>
              </div>
            </div>
          </div>
          
          {/* Donation Options */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Como pode <span className="text-gradient-gold">apoiar</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card variant="gold" className="animate-slide-up">
                <CardHeader>
                  <CardTitle className="text-2xl">Doação Única</CardTitle>
                  <CardDescription className="text-base">
                    Faça uma contribuição pontual para apoiar projetos específicos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    <Button variant="outline" className="h-16 text-lg font-semibold">10€</Button>
                    <Button variant="outline" className="h-16 text-lg font-semibold">25€</Button>
                    <Button variant="outline" className="h-16 text-lg font-semibold">50€</Button>
                    <Button variant="outline" className="h-16 text-lg font-semibold">100€</Button>
                    <Button variant="outline" className="h-16 text-lg font-semibold">250€</Button>
                    <Button variant="gold" className="h-16 text-lg font-semibold">Outro</Button>
                  </div>
                  <Button variant="gold" className="w-full" size="lg">
                    Doar Agora <Heart className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card variant="premium" className="animate-slide-up ring-2 ring-gold" style={{ animationDelay: "0.1s" }}>
                <div className="bg-gold text-primary-foreground text-xs font-semibold px-4 py-2 flex items-center gap-2 justify-center">
                  <Star className="w-4 h-4" />
                  Maior Impacto
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Apoio Mensal</CardTitle>
                  <CardDescription className="text-base">
                    Torne-se um benfeitor recorrente e garanta impacto contínuo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg font-semibold">15€</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg font-semibold">30€</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </Button>
                    <Button variant="outline" className="h-16 flex flex-col">
                      <span className="text-lg font-semibold">50€</span>
                      <span className="text-xs text-muted-foreground">/mês</span>
                    </Button>
                    <Button variant="gold" className="h-16 flex flex-col">
                      <span className="text-lg font-semibold">Outro</span>
                      <span className="text-xs">/mês</span>
                    </Button>
                  </div>
                  <Button variant="gold" className="w-full" size="lg">
                    Tornar-me Benfeitor <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Benefícios de ser <span className="text-gradient-gold">Benfeitor</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* How donations help */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              O seu apoio ajuda a:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-foreground">🎵 Financiar deslocações de artistas para eventos</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-foreground">🎬 Produzir conteúdo editorial de qualidade</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-foreground">🎤 Organizar showcases e eventos culturais</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-foreground">🌍 Expandir a rede de contactos na Europa</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BenefactorsPage;
