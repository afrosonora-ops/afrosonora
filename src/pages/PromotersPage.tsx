import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ArrowRight } from "lucide-react";

const PromotersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Users className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Para Profissionais da Indústria</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Promotores & <span className="text-gradient-gold">Agências</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A AFROSONORA é uma plataforma criada para ligar músicos e artistas africanos ao mercado europeu, criando uma ponte direta entre talento emergente e profissionais da indústria musical.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-charcoal border border-border space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A secção Promotores & Agências é dedicada a todos aqueles que procuram descobrir novos artistas autênticos, criar eventos, desenvolver carreiras e estabelecer novas colaborações no universo da música africana.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Se é promotor, agente artístico, produtor de eventos, festival ou agência, a AFROSONORA permite-lhe aceder a uma rede crescente de talentos, cuidadosamente apresentados numa plataforma profissional e internacional.
              </p>
            </div>
          </div>

          {/* Descobrir talento */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Descobrir <span className="text-gradient-gold">talento africano</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Ao registar-se como Promotor ou Agência, terá acesso a:
            </p>
            <div className="space-y-4">
              {[
                { emoji: "🎵", title: "Perfis de artistas e bandas africanas", desc: "Descubra músicos emergentes com identidade cultural forte e potencial internacional." },
                { emoji: "📩", title: "Acesso direto a artistas", desc: "Possibilidade de contactar artistas registados na plataforma para colaborações, eventos ou projetos." },
                { emoji: "📀", title: "Receção de novidades e maquetes musicais", desc: "Promotores registados poderão receber informações sobre artistas promissores, incluindo lançamentos, demos, projetos e novidades da comunidade AFROSONORA." },
                { emoji: "🎤", title: "Oportunidades para eventos e showcases", desc: "Identifique artistas adequados para concertos, festivais, eventos culturais e programações artísticas." },
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

          {/* Criar ligações */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
              Criar ligações e <span className="text-gradient-gold">desenvolver talento</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              A AFROSONORA não pretende apenas promover artistas — queremos também criar relações reais entre profissionais da indústria.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-center">Promotores registados poderão:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Aconselhar artistas em fase de desenvolvimento</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Acompanhar projetos promissores desde o início</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Colaborar na promoção de músicas e projetos</div>
              <div className="p-4 rounded-lg bg-charcoal border border-border text-foreground text-sm">Convidar artistas para eventos, espetáculos e programações culturais</div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-6 text-center">
              Esta ligação direta pode contribuir para descobrir talentos antes de chegarem ao mercado mainstream.
            </p>
          </div>

          {/* Programa */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Programa Promotores <span className="text-gradient-gold">AFROSONORA</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-center">
              Para incentivar a participação ativa de promotores e agências, a AFROSONORA está a desenvolver um programa especial para promotores parceiros. Este programa poderá incluir:
            </p>
            <div className="space-y-4">
              {[
                { emoji: "🤝", text: "Acesso antecipado a novos artistas e projetos" },
                { emoji: "🎤", text: "Prioridade na descoberta de talentos emergentes" },
                { emoji: "🌍", text: "Participação em eventos e iniciativas AFROSONORA" },
                { emoji: "📢", text: "Visibilidade como promotor parceiro da plataforma" },
                { emoji: "💡", text: "Possibilidade de propor eventos, ciclos ou showcases" },
                { emoji: "🎟", text: "Convites para eventos e encontros da comunidade AFROSONORA" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-lg bg-charcoal border border-border flex items-center gap-4">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing + CTA */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Construir o futuro da <span className="text-gradient-gold">música africana</span> na Europa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A AFROSONORA acredita que os promotores e agências são peças fundamentais no desenvolvimento da carreira dos artistas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se procura novos sons, novas culturas e novos talentos, esta é uma oportunidade para fazer parte de um movimento cultural em crescimento.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-xl bg-charcoal border-2 border-gold/30">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Registe-se como Promotor 🌍🎶
              </h2>
              <p className="text-muted-foreground mb-6">
                Comece a descobrir a próxima geração de artistas africanos.
              </p>
              <Link to="/registo">
                <Button variant="gold" size="lg">
                  Registar como Promotor <ArrowRight className="ml-2 w-4 h-4" />
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

export default PromotersPage;
