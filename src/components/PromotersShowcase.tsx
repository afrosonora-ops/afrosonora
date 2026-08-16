import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import promotersConcert from "@/assets/promoters-concert.webp";
import promotersGlobal from "@/assets/promoters-global.webp";
import promotersMusic from "@/assets/promoters-music.webp";

const cards = [
  {
    image: promotersConcert,
    title: "Festivais & Eventos ao Vivo",
    description: "Programação de artistas africanos para festivais, concertos e eventos culturais ..",
    link: "/promotores",
  },
  {
    image: promotersGlobal,
    title: "Conexão Global ",
    description: "Crie pontes entre talentos africanos e oportunidades internacionais na música.",
    link: "/promotores",
  },
  {
    image: promotersMusic,
    title: "Showcases & Curadoria ",
    description: "Descubra novos sons através de showcases exclusivos e projetos artísticos selecionados.",
    link: "/promotores",
  },
];

const PromotersShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Parcerias e Oportunidades para{" "}
            <span className="text-gradient-gold">Promotores</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conecte talento africano com o mundo e descubra novas oportunidades musicais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Card
              key={card.title}
              className="group overflow-hidden border-border bg-card hover:border-gold/40 hover:shadow-gold transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img decoding="async"
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
              </div>
              <CardContent className="p-6 text-center space-y-3">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>
                <Link to={card.link}>
                  <Button variant="gold" size="sm" className="mt-2">
                    Saber mais <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotersShowcase;
