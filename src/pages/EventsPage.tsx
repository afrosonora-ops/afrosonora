import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Users, ArrowRight, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

const EventsPage = () => {
  const [events, setEvents] = useState<Tables<"events">[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .eq("is_published", true)
        .order("event_date", { ascending: true });
      setEvents(data || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eventos & <span className="text-gradient-gold">Oportunidades</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra os próximos eventos, ciclos de seleção e oportunidades exclusivas para artistas AFROSONORA.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-16">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nenhum evento disponível</h3>
              <p className="text-muted-foreground">Os próximos eventos serão publicados em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <Card key={event.id} variant="elevated" className="group overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {event.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img src={event.image_url} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {event.description && <CardDescription className="text-base">{event.description}</CardDescription>}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {event.event_date && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-gold" />
                          {format(new Date(event.event_date), "d MMM yyyy", { locale: pt })}
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 text-gold" />
                          {event.location}
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-gold" />
                          {event.venue}
                        </div>
                      )}
                      {event.capacity && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-gold" />
                          {event.capacity} lugares
                        </div>
                      )}
                    </div>
                    {event.price !== null && (
                      <p className="text-gold font-semibold">{event.price === 0 ? "Gratuito" : `${event.price}€`}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-16 p-8 rounded-xl bg-charcoal border border-border max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Quer participar nos nossos eventos?</h3>
            <p className="text-muted-foreground mb-6">Crie um perfil Premium ou Pro para ter acesso a submissões diretas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/planos"><Button variant="gold" size="lg">Ver Planos</Button></Link>
              <Link to="/registo"><Button variant="goldOutline" size="lg">Criar Perfil</Button></Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
