import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import img1 from "@/assets/quem-somos-1.webp";
import img2 from "@/assets/quem-somos-2.webp";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const QuemSomosPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Seo title={"Quem Somos: A Equipa e a Visão da AfroSonora"} description={"A história, a visão e a forma de trabalhar da AfroSonora — a plataforma que liga músicos africanos e da diáspora a promotores, palcos e público na Europa."} path="/quem-somos" />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img decoding="async" src={img1} alt="Artistas africanos em palco durante um concerto AfroSonora na Europa" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient-gold">AfroSonora</span>: Amplificando a Voz da África na Europa
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-16">
        <Breadcrumbs />
        {/* 1. Introdução */}
        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold text-foreground">1. Introdução</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A AFROSONORA é uma plataforma digital inovadora, nascida da paixão pela rica tapeçaria cultural africana e do desejo de criar um impacto global. Nosso objetivo é ser a ponte essencial que conecta o vibrante talento musical e artístico de África com as vastas oportunidades do mercado europeu. Mais do que uma ferramenta, somos um movimento que celebra a diversidade, promove a inclusão e impulsiona carreiras, garantindo que a arte africana ressoe em novos palcos e corações.
          </p>
        </section>

        {/* 2. Visão e Missão */}
        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold text-foreground">2. Visão e Missão</h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-display text-xl font-semibold text-gold mb-2">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal plataforma global para a descoberta, promoção e intercâmbio cultural da música e arte africana na Europa, construindo um ecossistema sustentável que beneficie artistas, promotores e comunidades.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-display text-xl font-semibold text-gold mb-2">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Criar ligações profissionais duradouras, oferecer visibilidade autêntica e gerar oportunidades reais para músicos, artistas e bandas africanas, ao mesmo tempo que enriquecemos o panorama cultural europeu com a energia e a inovação da criatividade africana.
              </p>
            </div>
          </div>
        </section>

        {/* Image break */}
        <div className="rounded-xl overflow-hidden border border-border">
          <img decoding="async" loading="lazy" src={img2} alt="Colagem visual do conceito AfroSonora: música, cultura africana e ligação à Europa" className="w-full h-auto object-cover" />
        </div>

        {/* 3. O que é */}
        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold text-foreground">3. O que é a AFROSONORA?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A AFROSONORA é um ecossistema digital dinâmico e uma comunidade apaixonada, dedicada a amplificar as vozes e os ritmos vibrantes de África no coração da Europa. Trabalhamos incansavelmente para criar uma ponte sólida e significativa entre talentos emergentes e estabelecidos do continente e o dinâmico mercado europeu. Nosso propósito é claro: oferecer visibilidade autêntica, abrir portas para oportunidades reais e forjar ligações profissionais duradouras que impulsionam carreiras e enriquecem o panorama cultural global. Juntos, celebramos a diversidade e o legado da criatividade africana.
          </p>
        </section>

        {/* 4. Para Quem */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl font-bold text-foreground">4. Para Quem a AFROSONORA Ressoa?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa plataforma é um ecossistema vibrante, cuidadosamente desenhado para nutrir e conectar todos os pilares da cena musical africana. Se você é parte desta jornada, a AFROSONORA é para você:
          </p>
          {[
            { title: "Artistas", text: "Músicos, cantores, DJs e bandas com a alma africana que sonham em expandir seu palco para a Europa. Oferecemos o caminho para que sua arte seja descoberta, apreciada e celebrada por um público mais vasto." },
            { title: "Promotores", text: "Agências e organizadores de eventos que buscam a autenticidade, a energia e a inovação do talento africano para enriquecer suas programações. Conectamos você diretamente com as estrelas de amanhã e os ícones de hoje." },
            { title: "Benfeitores", text: "Indivíduos e organizações que partilham a nossa paixão pela cultura africana e desejam investir no futuro de artistas emergentes. Seu apoio é a semente que faz florescer novos talentos e projetos transformadores." },
            { title: "Embaixadores", text: "Líderes comunitários, influenciadores e apaixonados pela cultura que se juntam a nós para expandir a missão da AFROSONORA. Sua voz e sua rede são cruciais para levar a nossa mensagem e os nossos artistas a todos os cantos do mundo." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-display text-xl font-semibold text-gold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </section>

        {/* 5. Vantagens */}
        <section className="space-y-6">
          <h2 className="font-display text-3xl font-bold text-foreground">5. Vantagens de Fazer Parte da AFROSONORA</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Fazer parte da comunidade AFROSONORA significa ter acesso a um universo de oportunidades e suporte. Nossos membros beneficiam de:
          </p>

          {[
            {
              title: "Para Artistas",
              items: [
                "Visibilidade Aumentada: Destaque em plataformas digitais e eventos, alcançando um público europeu diversificado.",
                "Oportunidades de Carreira: Acesso a ciclos de eventos, festivais, entrevistas e reportagens que impulsionam a sua trajetória.",
                "Networking Profissional: Conexão direta com promotores, agências e outros artistas, facilitando colaborações e novos projetos.",
                "Ferramentas de Promoção: Recursos para upload de músicas e vídeos, gestão de perfil e marketing digital.",
                "Apoio e Curadoria: Orientação e curadoria ativa para otimizar a apresentação do seu trabalho e acesso a oportunidades internacionais.",
              ],
            },
            {
              title: "Para Promotores",
              items: [
                "Acesso a Talentos Exclusivos: Descubra artistas africanos autênticos e inovadores, muitos deles fora dos circuitos tradicionais.",
                "Facilitação de Contato: Conexão direta e simplificada com artistas e seus representantes.",
                "Diversificação de Programação: Enriqueça seus eventos com a riqueza e a originalidade da cultura musical africana.",
              ],
            },
            {
              title: "Para Benfeitores",
              items: [
                "Impacto Cultural e Social: Contribua diretamente para o desenvolvimento e a valorização da arte africana.",
                "Reconhecimento: Visibilidade como apoiador de uma causa cultural significativa.",
                "Acesso Privilegiado: Oportunidade de acompanhar de perto o progresso dos artistas apoiados e participar de eventos exclusivos.",
              ],
            },
            {
              title: "Para Embaixadores",
              items: [
                "Liderança Cultural: Torne-se uma voz ativa na promoção da cultura africana na Europa.",
                "Rede de Influência: Conecte-se com artistas, promotores e líderes comunitários em uma rede global.",
                "Reconhecimento: Destaque como um agente de mudança e promotor da diversidade cultural.",
              ],
            },
          ].map((group) => (
            <div key={group.title} className="p-6 rounded-xl border border-border bg-card space-y-3">
              <h3 className="font-display text-xl font-semibold text-gold">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 6. Planos */}
        <section className="space-y-4">
          <h2 className="font-display text-3xl font-bold text-foreground">6. Nossos Planos de Assinatura</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Para atender às diversas necessidades de nossa comunidade, a AFROSONORA oferece planos de assinatura flexíveis, desenhados para acompanhar o artista em cada etapa de sua carreira. Desde o Plano Essencial, ideal para quem está a começar, passando pelo Plano Premium, para quem busca um crescimento sério, até o Plano Pro, que oferece acesso total e prioridade máxima para artistas estabelecidos. Cada plano é cuidadosamente estruturado para maximizar as oportunidades e o suporte, com opções de pagamento mensal ou anual (com benefícios de desconto).
          </p>
          <Link to="/planos">
            <Button variant="gold" size="lg" className="mt-2">
              Ver Planos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </section>

        {/* 7. Junte-se */}
        <section className="text-center space-y-6 py-12 px-6 rounded-2xl border border-gold/20 bg-gold/5">
          <h2 className="font-display text-3xl font-bold text-foreground">7. Junte-se a Nós</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Seja você um artista em busca de novos horizontes, um promotor à procura de talentos únicos, um benfeitor que acredita no poder da arte ou um embaixador da cultura, a AFROSONORA convida-o a fazer parte desta jornada. Juntos, podemos construir um futuro onde a música e a arte africana brilhem intensamente no cenário global. Descubra o seu lugar na AFROSONORA e comece a transformar o seu potencial em realidade.
          </p>
          <Link to="/registo">
            <Button variant="hero" size="xl">
              Registar Agora <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default QuemSomosPage;
