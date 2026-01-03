import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, Users, Handshake, Heart, ArrowRight } from "lucide-react";

const RegistrationPage = () => {
  const registrationOptions = [
    {
      icon: Music,
      title: "Músicos / Artistas / Bandas",
      description: "Crie o seu perfil profissional e conecte-se com promotores europeus.",
      href: "/registo/artista",
      color: "gold",
    },
    {
      icon: Users,
      title: "Promotores / Agências",
      description: "Descubra talento africano autêntico para os seus eventos e projetos.",
      href: "/registo/promotor",
      color: "gold",
    },
    {
      icon: Handshake,
      title: "Serviços Premium / Parceiros",
      description: "Explore oportunidades de colaboração e parcerias estratégicas.",
      href: "/registo/parceiro",
      color: "gold",
    },
    {
      icon: Heart,
      title: "Benfeitores",
      description: "Apoie artistas emergentes e contribua para a cultura africana.",
      href: "/benfeitores",
      color: "gold",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Junte-se à <span className="text-gradient-gold">AFROSONORA</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Escolha o tipo de conta que melhor se adapta ao seu perfil e comece a sua jornada connosco.
              </p>
            </div>
            
            {/* Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {registrationOptions.map((option, index) => (
                <Link 
                  key={option.title} 
                  to={option.href}
                  className="block animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card variant="gold" className="h-full group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 mb-4 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                        <option.icon className="w-7 h-7 text-gold" />
                      </div>
                      <CardTitle className="text-xl flex items-center justify-between">
                        {option.title}
                        <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {option.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            {/* Already have account */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Já tem uma conta?
              </p>
              <Link to="/login">
                <Button variant="goldOutline" size="lg">
                  Iniciar Sessão
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

export default RegistrationPage;
