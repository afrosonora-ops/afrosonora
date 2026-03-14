import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="AfroSonora" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A ponte entre artistas africanos e o mercado europeu. 
              Promoção, oportunidades e ligação profissional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Plataforma
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/artistas" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Ver Artistas
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Planos
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/registo" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Criar Perfil
                </Link>
              </li>
              <li>
                <Link to="/comeca-a-criar" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Começa a Criar
                </Link>
              </li>
            </ul>
          </div>

          {/* Para Quem */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Para Quem
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/para-artistas" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Músicos & Artistas
                </Link>
              </li>
              <li>
                <Link to="/promotores" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Promotores
                </Link>
              </li>
              <li>
                <Link to="/benfeitores" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Benfeitores
                </Link>
              </li>
              <li>
                <Link to="/embaixadores" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Embaixadores
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Informação
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Parceiros
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Termos & Condições
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 AFROSONORA. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Conectando África à Europa através da música.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
