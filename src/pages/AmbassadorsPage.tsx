import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Award, ArrowRight } from "lucide-react";

const AmbassadorsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Embaixadores AfroSonora | Representa a Cultura Afro na Europa"} description={"Torna-te embaixador AfroSonora e ajuda a levar a música afro, o afrobeat e a cultura africana a novas cidades europeias."} path="/embaixadores" />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Programa de Embaixadores</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Embaixadores <span className="text-gradient-gold">AFROSONORA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A AFROSONORA está a construir uma rede de Embaixadores — pessoas apaixonadas pela cultura e pela música africana que queiram ajudar a divulgar e fortalecer este movimento em diferentes cidades e países.
            </p>
          </div>

          {/* O que é */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              O que é um <span className="text-gradient-gold">Embaixador</span> AFROSONORA?
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Um Embaixador AFROSONORA é alguém que acredita no poder da música e da cultura africana e que, de forma voluntária e solidária, apoia o crescimento da plataforma na sua região.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Os Embaixadores não são funcionários nem colaboradores pagos — são membros da comunidade que partilham a missão e querem contribuir ativamente para que mais artistas tenham oportunidades reais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este é um papel baseado em solidariedade, paixão pela cultura e vontade de fazer a diferença.
              </p>
            </div>
          </div>

          {/* O que faz */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              O que faz um <span className="text-gradient-gold">Embaixador</span>?
            </h2>
            <div className="space-y-4">
              {[
                { emoji: "📢", title: "Divulgação", desc: "Partilhar a AFROSONORA nas redes sociais, grupos, comunidades e eventos locais." },
                { emoji: "🤝", title: "Ligação comunitária", desc: "Ajudar a identificar artistas, músicos e criativos africanos na sua região que possam fazer parte da plataforma." },
                { emoji: "🌍", title: "Representação local", desc: "Ser o rosto da AFROSONORA no seu país, cidade ou comunidade." },
                { emoji: "🎤", title: "Participação ativa em eventos", desc: "Possibilidade de colaborar diretamente em eventos, showcases e iniciativas da plataforma." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-lg bg-charcoal border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">{item.emoji}</span>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outros benefícios */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              ✨ Outros <span className="text-gradient-gold">benefícios</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Novas vantagens e oportunidades serão anunciadas à medida que o projeto cresce.
            </p>
          </div>

          {/* Junta-te */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Junta-te ao <span className="text-gradient-gold">movimento</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Se acreditas na música africana, na cultura e no poder das comunidades digitais, este é o momento certo para fazer parte do início da AFROSONORA.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Torna-te um Embaixador AFROSONORA e ajuda-nos a construir uma ponte entre África e a Europa através da música.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Este é apenas o começo. E os próximos eventos já estão a caminho.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-xl bg-charcoal border-2 border-gold/30">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Torna-te Embaixador 🌍🎶
              </h2>
              <p className="text-muted-foreground mb-6">
                Regista-te e faz parte do movimento AFROSONORA.
              </p>
              <Link to="/registo">
                <Button variant="gold" size="lg">
                  Registar como Embaixador <ArrowRight className="ml-2 w-4 h-4" />
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

export default AmbassadorsPage;
