import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { staticEvents } from "@/data/eventsData";
import eventosCulturaisImg from "@/assets/eventos-culturais-2026.webp";
import eventosCulturaisImgSm from "@/assets/eventos-culturais-2026-640.webp";

// First 3 static events + Eventos Culturais 2026 card
const featuredStatic = staticEvents.slice(0, 3);

const FeaturedEvents = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Oportunidades</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eventos em <span className="text-gradient-gold">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descobre as iniciativas AFROSONORA e participa nos eventos que podem transformar a tua carreira.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStatic.map((event) => (
            <Link key={event.slug} to="/eventos">
              <Card variant="gold" className="group hover:-translate-y-2 hover:shadow-gold transition-all duration-300 h-full overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img decoding="async"
                    src={event.image}
                    srcSet={`${event.imageSmall} 640w, ${event.image} 1200w`}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    alt={event.title}
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover bg-[#1A1A1A] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                    Saber Mais <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* Eventos Culturais 2026 card */}
          <Link to="/eventos-culturais-2026">
            <Card variant="gold" className="group hover:-translate-y-2 hover:shadow-gold transition-all duration-300 h-full overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img decoding="async"
                  src={eventosCulturaisImg}
                  srcSet={`${eventosCulturaisImgSm} 640w, ${eventosCulturaisImg} 832w`}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  alt="Cartaz dos Eventos Culturais Africanos 2026 promovidos pela AfroSonora"
                  width={832}
                  height={624}
                  className="w-full h-full object-cover bg-[#1A1A1A] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-5 space-y-3">
                <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">
                  Eventos Culturais 2026
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  Agenda de festivais e espectáculos de cultura africana na Europa.
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:gap-2 transition-all">
                  Saber Mais <ArrowRight className="w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link to="/eventos">
            <Button variant="gold" size="lg">
              Ver Todos os Eventos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
