import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag, Heart, ArrowRight, Star, Sparkles, Music, Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

import storeTshirt from "@/assets/store-tshirt.jpg";
import storeHoodie from "@/assets/store-hoodie.jpg";
import storeCap from "@/assets/store-cap.jpg";
import storeLeather from "@/assets/store-leather.jpg";
import storeCasual from "@/assets/store-casual.jpg";
import storeBackpack from "@/assets/store-backpack.jpg";
import storeHeadphones from "@/assets/store-headphones.jpg";
import storeMic from "@/assets/store-mic.jpg";
import storeKit from "@/assets/store-kit.jpg";

const products = [
{
  image: storeTshirt,
  title: 'T-shirt "AfroSonora Vibes"',
  desc: "Camiseta de alta qualidade, design premium, perfeita para mostrar a tua paixão pela música africana.",
  price: "29€",
  badge: "Novo"
},
{
  image: storeHoodie,
  title: 'Camisola de Capuz "Tribo AFRO"',
  desc: "Hoodie confortável e estiloso, ideal para artistas, fãs e criadores que fazem parte da tribo AFROSONORA.",
  price: "45€",
  badge: "Popular"
},
{
  image: storeCap,
  title: 'Boné "Ritmo Urbano"',
  desc: "Boné moderno e ajustável, com estilo urbano, perfeito para completar o teu estilo musical.",
  price: "24€",
  badge: null
},
{
  image: storeLeather,
  title: 'Casaco Tipo Couro "Gold Beat"',
  desc: "Casaco elegante tipo couro com detalhes sofisticados para um look premium com atitude musical.",
  price: "129€",
  badge: "Novo"
},
{
  image: storeCasual,
  title: 'Casaco Casual "AfroFlow"',
  desc: "Casaco confortável e versátil, ideal para o dia a dia ou para eventos AFROSONORA.",
  price: "79€",
  badge: null
},
{
  image: storeBackpack,
  title: 'Mochila "Tribo Beat"',
  desc: "Mochila moderna e prática, ideal para transportar equipamentos, laptops ou acessórios musicais.",
  price: "69€",
  badge: null
},
{
  image: storeHeadphones,
  title: "Auscultadores SingerPro",
  desc: "Auscultadores ideais para gravação vocal, produção musical ou ouvir música com qualidade.",
  price: "22€",
  badge: "Recomendado para Artistas"
},
{
  image: storeMic,
  title: "Microfone Pro BM800 V8 Studio",
  desc: "Microfone condensador de estúdio ideal para canto, gravação vocal e produção musical.",
  price: "95€",
  badge: "Popular"
},
{
  image: storeKit,
  title: "Home Studio AFROSONORA – MX10 Studio Kit",
  desc: "Kit completo de home studio com microfone condensador profissional MX10, ideal para artistas que querem começar a gravar música em casa.",
  price: "245€",
  badge: "Recomendado para Artistas"
}];


const badgeIcon = (badge: string) => {
  if (badge === "Novo") return <Sparkles className="w-3 h-3" />;
  if (badge === "Popular") return <Star className="w-3 h-3" />;
  return <Music className="w-3 h-3" />;
};

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast({ title: "Email inválido", description: firstError(parsed.error), variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data.toLowerCase() });

    setLoading(false);

    if (error && error.code !== "23505") {
      toast({ title: "Erro", description: "Não foi possível registar. Tenta novamente.", variant: "destructive" });
      return;
    }

    setSubscribed(true);
    toast({ title: "Inscrição confirmada 🎉", description: "Vais receber as novidades AFROSONORA no teu email." });
  };


  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Explora a Nossa Loja! <span className="text-gradient-gold">Disponível</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explora todos os produtos AFROSONORA. Streetwear, acessórios e equipamentos musicais para a tribo. Nova Coleção de 2026 em constante atualização!
          </p>

          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-gold/10 border border-gold/30">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">Inscrito com sucesso! Obrigado por te juntares à tribo.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="email"
                  required
                  placeholder="O teu email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-14 bg-charcoal border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="hero" size="xl" type="submit" disabled={loading}>
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>Receber Novidades <ArrowRight className="ml-2 w-5 h-5" /></>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

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
                Cada compra na Store AFROSONORA contribui diretamente para apoiar iniciativas, eventos e oportunidades para jovens músicos africanos. Junta-te à tribo AFROSONORA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">AfroSonora Cstore
            <span className="text-gradient-gold">Coleção</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">Descobre uma seleção premium de produtos e equipamentos musicais, escolhidos com cuidado para artistas, fãs e criadores. Cada item reflete a qualidade, estilo e espírito da nossa tribo musical.

          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((item, i) =>
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-border hover:border-gold/40 transition-all duration-300 bg-background/50 flex flex-col">
              
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                  {item.badge &&
                <Badge className="absolute top-3 left-3 bg-gold text-primary-foreground border-none gap-1 text-xs font-semibold">
                      {badgeIcon(item.badge)}
                      {item.badge}
                    </Badge>
                }
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-display text-2xl font-bold text-gold">
                      {item.price}
                    </span>
                    <Button variant="goldOutline" size="sm" disabled className="opacity-60 cursor-not-allowed">
                      Ver Produto <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <NewsletterCTA />

      <Footer />
    </div>);

};

export default StorePage;