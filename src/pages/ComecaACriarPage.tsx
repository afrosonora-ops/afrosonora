import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Headphones, Mic2, Music, Cable, MonitorSpeaker, CheckCircle2, ArrowRight } from "lucide-react";
import setupImg from "@/assets/home-studio-setup.jpg";
import packImg from "@/assets/home-studio-pack.jpg";

const ComecaACriarPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            Começa a <span className="text-gradient-gold">Criar</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Tudo o que precisas para montar o teu Home Studio e começar a gravar música profissional a partir de casa.
          </p>
        </div>
      </section>

      {/* Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <img src={setupImg} alt="Setup básico de home studio" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Setup Básico / Start</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Microfone, interface de áudio e auscultadores — o essencial para começar a gravar música de forma simples e profissional.
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <img src={packImg} alt="Pacote Home Studio AFROSONORA" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Pacote Home Studio AFROSONORA</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todos os equipamentos juntos num pacote completo e acessível, pensado para artistas que querem um setup profissional em casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
              Pacote Home Studio <span className="text-gradient-gold">AFROSONORA</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              Para ajudar artistas a começar mais facilmente, a AFROSONORA disponibiliza um pacote especial de Home Studio, com todos os equipamentos necessários para montar o teu espaço de gravação em casa.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: Mic2, label: "Microfone de estúdio" },
                { icon: MonitorSpeaker, label: "Interface de áudio" },
                { icon: Headphones, label: "Auscultadores profissionais" },
                { icon: Music, label: "Pop filter e acessórios essenciais" },
                { icon: Cable, label: "Cabos e suporte de microfone" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center">
              Benefícios para Artistas <span className="text-gradient-gold">Registados</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Promoções especiais",
                "Pacotes completos com preço reduzido",
                "Recomendações de equipamento adaptadas ao seu projeto musical",
                "Apoio para escolher o melhor setup para começar",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Este pacote foi pensado para simplificar o processo de criar um home studio, evitando erros comuns na escolha de equipamento.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 text-center space-y-6 max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Pronto para <span className="text-gradient-gold">Começar</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Se quiseres mais informações ou quiseres adquirir o pacote Home Studio AFROSONORA, entra em contacto connosco.
          </p>
          <a href="mailto:info@afrosonora.com?subject=Informação%20sobre%20Pacote%20Home%20Studio">
            <Button variant="hero" size="xl" className="mt-4">
              <Headphones className="mr-2 w-5 h-5" />
              Pedir Informações sobre Equipamento
            </Button>
          </a>
          <p className="text-muted-foreground text-sm pt-4">
            Equipamentos também disponíveis na nossa loja online, com condições especiais para membros registados da AFROSONORA.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComecaACriarPage;
