import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Heart, ArrowRight } from "lucide-react";

const BenefactorsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Benfeitores | Apoia a Música Afro e a Cultura Africana"} description={"Apoia projetos de música afro e cultura africana na Europa como benfeitor AfroSonora e financia oportunidades reais para talentos emergentes."} path="/benfeitores" />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Heart className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Apoie a Cultura Africana</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Benfeitores <span className="text-gradient-gold">AFROSONORA</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A AFROSONORA é uma plataforma cultural com uma missão clara: promover o talento africano e criar oportunidades reais para artistas no mercado europeu.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Para que este projeto possa crescer e ter impacto real, criámos o <strong className="text-foreground">Programa de Benfeitores AFROSONORA</strong> — destinado a pessoas, empresas, fundações e organizações que acreditam na importância da cultura, da música e no apoio a artistas emergentes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Os Benfeitores são parceiros fundamentais neste movimento. Através do seu apoio, tornam possível desenvolver programas que ajudam artistas a transformar talento em oportunidades reais.
              </p>
            </div>
          </div>

          {/* Impacto do apoio */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              O impacto do <span className="text-gradient-gold">seu apoio</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Os contributos dos Benfeitores são utilizados exclusivamente em iniciativas ligadas aos artistas e aos eventos AFROSONORA, ajudando a criar condições para que novos talentos possam desenvolver a sua carreira. Os apoios podem contribuir para:
            </p>
            <div className="space-y-4">
              {[
                { emoji: "🎵", title: "Gravação e produção musical", desc: "Apoio a artistas que precisam de acesso a estúdios de gravação ou produção profissional." },
                { emoji: "🎤", title: "Desenvolvimento artístico", desc: "Acompanhamento e promoção de projetos musicais emergentes." },
                { emoji: "✈️", title: "Apoio logístico e deslocações", desc: "Ajuda a artistas que precisam de viajar para participar em eventos, showcases ou gravações." },
                { emoji: "🎸", title: "Instrumentos e recursos musicais", desc: "Apoio no acesso a instrumentos e equipamentos essenciais." },
                { emoji: "🎶", title: "Eventos culturais e showcases", desc: "Organização de eventos, iniciativas culturais e momentos de promoção da música africana." },
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
            <p className="text-muted-foreground leading-relaxed mt-6 text-center">
              Cada contributo ajuda diretamente a dar visibilidade, recursos e oportunidades a artistas que muitas vezes não têm acesso a estes meios.
            </p>
          </div>

          {/* Transparência */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Transparência e <span className="text-gradient-gold">acompanhamento</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A AFROSONORA compromete-se a manter total transparência no uso dos apoios recebidos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Os Benfeitores poderão receber relatórios informativos, onde será possível acompanhar como e onde os recursos foram utilizados, bem como conhecer projetos e artistas que beneficiaram do apoio.
              </p>
            </div>
          </div>

          {/* Benefícios */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Benefícios para <span className="text-gradient-gold">Benfeitores</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Além de apoiar diretamente o crescimento da música africana, os Benfeitores poderão beneficiar de várias vantagens exclusivas:
            </p>
            <div className="space-y-4">
              {[
                { emoji: "🎟", text: "Convites VIP para eventos AFROSONORA" },
                { emoji: "🎤", text: "Convites para acompanhar iniciativas e projetos culturais da plataforma" },
                { emoji: "🤝", text: "Participação próxima no desenvolvimento do projeto" },
                { emoji: "💡", text: "Possibilidade de sugerir iniciativas, programas ou eventos culturais" },
                { emoji: "🌍", text: "Reconhecimento como apoiador do movimento AFROSONORA" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center">
              Para empresas e organizações, também poderão existir oportunidades de visibilidade e colaboração cultural, através de eventos, iniciativas e projetos especiais.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4 text-center">
              Outras vantagens e programas de reconhecimento poderão ser anunciados à medida que a plataforma cresce.
            </p>
          </div>

          {/* Como tornar-se Benfeitor */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Como tornar-se <span className="text-gradient-gold">Benfeitor</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O apoio ao projeto poderá ser feito através de donativos ou parcerias de apoio cultural.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                📌 <strong className="text-foreground">Dados da conta para donativos:</strong> (a divulgar brevemente)
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Caso pretenda apoiar a AFROSONORA ou obter mais informações sobre o Programa de Benfeitores, poderá entrar em contacto com a nossa equipa por email para solicitar os dados e conhecer melhor as iniciativas em desenvolvimento.
              </p>
            </div>
          </div>

          {/* Investir na cultura */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Investir na cultura é investir no <span className="text-gradient-gold">futuro</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ao tornar-se Benfeitor AFROSONORA, estará a contribuir para:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Apoiar novos talentos</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Promover a cultura africana</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Criar oportunidades para artistas emergentes</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Fortalecer pontes culturais entre África e a Europa</div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-xl bg-charcoal border-2 border-gold/30">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Junte-se a nós 🌍🎶
              </h2>
              <p className="text-muted-foreground mb-6">
                Faça parte deste movimento cultural que pretende levar a música africana mais longe.
              </p>
              <Link to="/registo">
                <Button variant="gold" size="lg">
                  Registar como Benfeitor <ArrowRight className="ml-2 w-4 h-4" />
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

export default BenefactorsPage;
