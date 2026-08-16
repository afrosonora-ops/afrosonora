import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones, ArrowRight } from "lucide-react";
import setupImg from "@/assets/home-studio-setup.webp";
import packImg from "@/assets/home-studio-pack.webp";
import setupImgSm from "@/assets/home-studio-setup-640.webp";
import packImgSm from "@/assets/home-studio-pack-640.webp";

const HomeStudioSection = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Headphones className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Home Studio</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Começa a <span className="text-gradient-gold">Criar</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Monta o teu Home Studio com o pacote AFROSONORA e começa a gravar música profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="group space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border group-hover:border-gold/30 transition-colors">
              <img decoding="async"
                src={setupImg}
                srcSet={`${setupImgSm} 640w, ${setupImg} 1200w`}
                sizes="(min-width: 768px) 50vw, 100vw"
                width={1200}
                height={900}
                alt="Setup básico de home studio"
                className="w-full h-full object-cover bg-[#1A1A1A] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Setup Básico / Start</h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              Microfone, interface e auscultadores — o essencial para começar a gravar música de forma simples.
            </p>
          </div>

          <div className="group space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border group-hover:border-gold/30 transition-colors">
              <img decoding="async"
                src={packImg}
                srcSet={`${packImgSm} 640w, ${packImg} 1200w`}
                sizes="(min-width: 768px) 50vw, 100vw"
                width={1200}
                height={900}
                alt="Pacote Home Studio AFROSONORA"
                className="w-full h-full object-cover bg-[#1A1A1A] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">Pacote Home Studio AFROSONORA</h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              Todos os equipamentos juntos num pacote completo, pensado para preparar o teu home studio profissional.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/comeca-a-criar">
            <Button variant="gold" size="lg">
              Saber Mais <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeStudioSection;
