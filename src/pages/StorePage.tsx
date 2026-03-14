import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import store3 from "@/assets/store-3.jpg";

const StorePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
              <ShoppingBag className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Loja Oficial</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Store <span className="text-gradient-gold">AFROSONORA</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Cada compra na loja AFROSONORA contribui diretamente para apoiar jovens músicos africanos, financiar eventos e criar oportunidades reais para artistas emergentes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl border border-border bg-charcoal/50">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-gold" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">A Nossa Missão</h2>
              <p className="text-muted-foreground leading-relaxed">
                A loja é uma extensão da missão da AFROSONORA: promover talento, criar oportunidades e eventos, e fortalecer a comunidade musical africana na Europa. Ao adquirires um produto, estás a ajudar a cultura a crescer e a fazer parte da tribo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            A Nossa <span className="text-gradient-gold">Coleção</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { image: store1, title: "Streetwear Premium", desc: "Hoodies, bonés e jackets exclusivos com o emblema AFROSONORA. Design urbano com identidade africana autêntica." },
              { image: store2, title: "Coleção Completa", desc: "T-shirts, bombers e acessórios para toda a tribo. Cada peça é desenhada para representar a cultura e a música." },
              { image: store3, title: "Música & Lifestyle", desc: "Equipamento de estúdio encontra a moda. Produtos que celebram a fusão entre tecnologia musical e cultura africana." },
            ].map((item, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-300 bg-background/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Brevemente <span className="text-gradient-gold">Disponível</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A loja online AFROSONORA estará disponível em breve. Regista-te para seres o primeiro a saber quando abrirmos portas, com condições especiais para membros da comunidade.
            </p>
            <a href="mailto:info@afrosonora.com?subject=Interesse%20na%20Loja%20AFROSONORA">
              <Button variant="hero" size="xl">
                Receber Novidades <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StorePage;
