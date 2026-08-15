import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight, Mail } from "lucide-react";
import { staticEvents } from "@/data/eventsData";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Eventos & Oportunidades | AfroSonora"} description={"Iniciativas e eventos AfroSonora para descobrir novos talentos, promover artistas e divulgar a cultura africana na Europa."} path="/eventos" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eventos & <span className="text-gradient-gold">Oportunidades</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A AFROSONORA cria regularmente iniciativas e eventos destinados a descobrir novos talentos, promover artistas e divulgar a cultura africana na Europa e no mundo.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
              Através destes eventos, músicos, DJs, produtores, bailarinos e criadores culturais podem apresentar o seu trabalho, ganhar visibilidade, colaborar com outros artistas e participar em projetos promovidos pela plataforma.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {staticEvents.map((event, index) => (
              <Link
                key={event.slug}
                to={`/eventos/${event.slug}`}
                className="group animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Card variant="elevated" className="h-full overflow-hidden hover:shadow-gold/20 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                  <div className="h-52 overflow-hidden">
                    <img decoding="async" loading="lazy"
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {event.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm pt-2">
                      Saber mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Contact Section */}
          <div className="text-center mt-20 p-8 rounded-xl bg-card border border-border max-w-3xl mx-auto">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Dúvidas ou Informações</h3>
            <p className="text-muted-foreground mb-2">
              Se tiver alguma dúvida sobre os eventos ou oportunidades da AFROSONORA, pode utilizar o formulário de contacto no site ou enviar um email para:
            </p>
            <a href="mailto:info@afrosonora.com" className="text-primary font-semibold hover:underline">
              📩 info@afrosonora.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
