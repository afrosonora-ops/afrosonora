import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight, Star } from "lucide-react";

const mockEvents = [
  {
    id: 1,
    title: "AFROSONORA Showcase Lisboa",
    type: "Showcase",
    date: "15 Mar 2024",
    time: "21:00",
    location: "Lisboa, Portugal",
    description: "Uma noite dedicada aos melhores talentos africanos emergentes. Curadoria especial AFROSONORA.",
    artists: 8,
    status: "Inscrições Abertas",
    featured: true,
  },
  {
    id: 2,
    title: "Ciclo de Seleção - Primavera 2024",
    type: "Ciclo de Seleção",
    date: "1-31 Mar 2024",
    time: "Contínuo",
    location: "Online",
    description: "Submeta o seu trabalho para avaliação da nossa equipa de curadoria. Os selecionados terão acesso a oportunidades exclusivas.",
    artists: null,
    status: "A Decorrer",
    featured: false,
  },
  {
    id: 3,
    title: "AFROSONORA Paris",
    type: "Evento Internacional",
    date: "22 Abr 2024",
    time: "20:00",
    location: "Paris, França",
    description: "O primeiro evento AFROSONORA em Paris. Uma ponte musical entre África e França.",
    artists: 6,
    status: "Em Breve",
    featured: true,
  },
  {
    id: 4,
    title: "Festival AFROSONORA 2024",
    type: "Festival Anual",
    date: "15-17 Jun 2024",
    time: "Todo o dia",
    location: "Lisboa, Portugal",
    description: "O grande evento anual AFROSONORA. Três dias de música, cultura e conexões. O maior encontro de música africana na Europa.",
    artists: 25,
    status: "Em Breve",
    featured: true,
  },
];

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eventos & <span className="text-gradient-gold">Oportunidades</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra os próximos eventos, ciclos de seleção e oportunidades exclusivas para artistas AFROSONORA.
            </p>
          </div>
          
          {/* Event Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="gold" size="sm">Todos</Button>
            <Button variant="outline" size="sm">Showcases</Button>
            <Button variant="outline" size="sm">Ciclos de Seleção</Button>
            <Button variant="outline" size="sm">Internacionais</Button>
            <Button variant="outline" size="sm">Festival Anual</Button>
          </div>
          
          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {mockEvents.map((event, index) => (
              <Card 
                key={event.id} 
                variant={event.featured ? "premium" : "elevated"}
                className="group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {event.featured && (
                  <div className="bg-gold text-primary-foreground text-xs font-semibold px-4 py-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Evento em Destaque
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-gold text-sm font-medium">{event.type}</span>
                      <CardTitle className="text-2xl mt-1">{event.title}</CardTitle>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "Inscrições Abertas" 
                        ? "bg-green-500/20 text-green-400"
                        : event.status === "A Decorrer"
                        ? "bg-gold/20 text-gold"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {event.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-gold" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-gold" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-gold" />
                      {event.location}
                    </div>
                    {event.artists && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4 text-gold" />
                        {event.artists} artistas
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant={event.status === "Inscrições Abertas" ? "gold" : "outline"} 
                      className="w-full"
                    >
                      {event.status === "Inscrições Abertas" 
                        ? "Candidatar-me" 
                        : event.status === "A Decorrer"
                        ? "Participar"
                        : "Saber Mais"
                      }
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 p-8 rounded-xl bg-charcoal border border-border max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              Quer participar nos nossos eventos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Crie um perfil Premium ou Pro para ter acesso a submissões diretas e prioridade na seleção.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos">
                <Button variant="gold" size="lg">
                  Ver Planos
                </Button>
              </Link>
              <Link to="/registo">
                <Button variant="goldOutline" size="lg">
                  Criar Perfil
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

export default EventsPage;
