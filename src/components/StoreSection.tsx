import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";

const storeItems = [
  {
    image: store1,
    title: "Streetwear Premium",
    description: "Hoodies, bonés e jackets com o emblema AFROSONORA. Estilo urbano, identidade africana.",
  },
  {
    image: store2,
    title: "Coleção Completa",
    description: "T-shirts, bombers e acessórios para toda a tribo. Cada peça conta uma história.",
  },
  {
    image: store3,
    title: "Música & Lifestyle",
    description: "Onde o equipamento de estúdio encontra a moda. Cultura africana em cada detalhe.",
  },
];

const StoreSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Loja Oficial</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Store <span className="text-gradient-gold">AFROSONORA</span> – Junta-te à Tribo
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Descobre a loja AFROSONORA, onde cada produto adquirido contribui para iniciativas que apoiam jovens músicos africanos. Toda a receita é usada para promover projetos, eventos e oportunidades para artistas emergentes. Junta-te à nossa tribo e faz parte desta missão de apoiar a cultura africana!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {storeItems.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img decoding="async" loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/store">
            <Button variant="gold" size="xl">
              Aceder à Loja Online <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
