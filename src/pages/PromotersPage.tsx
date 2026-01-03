import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Search, Mail, Star, CheckCircle2, ArrowRight } from "lucide-react";

const PromotersPage = () => {
  const benefits = [
    "Acesso direto a uma base de talento africano autêntico",
    "Perfis verificados e curados pela AFROSONORA",
    "Contacto direto com artistas",
    "Acesso prioritário a oportunidades e eventos",
    "Suporte na seleção de artistas para os seus projetos",
    "Lista de favoritos personalizável",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Para Profissionais da Indústria</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Promotores & <span className="text-gradient-gold">Agências</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra talento africano autêntico para os seus eventos, festivais e projetos artísticos.
            </p>
          </div>
          
          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="gold" className="text-center animate-slide-up">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Search className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Descoberta</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Encontre artistas por género, país, disponibilidade e estilo. Filtros avançados para encontrar exatamente o que procura.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="gold" className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Contacto Direto</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comunique diretamente com os artistas. Sem intermediários, sem complicações.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="gold" className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Star className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Qualidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Todos os artistas são curados pela nossa equipa. Garantimos qualidade e profissionalismo.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Benefícios para <span className="text-gradient-gold">Promotores</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* How it works */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Como <span className="text-gradient-gold">funciona</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Registe-se", desc: "Crie uma conta como promotor/agência" },
                { step: "2", title: "Explore", desc: "Navegue pelo diretório de artistas" },
                { step: "3", title: "Contacte", desc: "Entre em contacto direto com artistas" },
                { step: "4", title: "Contrate", desc: "Feche acordos diretamente" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold text-primary-foreground font-bold text-xl flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <Card variant="premium" className="p-8 ring-2 ring-gold">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Pronto para descobrir talento africano?
              </h2>
              <p className="text-muted-foreground mb-6">
                Registe-se gratuitamente e comece a explorar a nossa base de artistas verificados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/registo">
                  <Button variant="gold" size="lg">
                    Registar como Promotor <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/artistas">
                  <Button variant="goldOutline" size="lg">
                    Ver Artistas
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PromotersPage;
