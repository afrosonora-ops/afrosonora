import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { openCookieSettings } from "@/components/CookieConsent";

import { toast } from "@/hooks/use-toast";
import { emailSchema, firstError } from "@/lib/formSchemas";

import logo from "@/assets/logo.webp";

const FooterNewsletter = () => {
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
      toast({
        title: "Erro",
        description: "Não foi possível registar. Tenta novamente.",
        variant: "destructive",
      });
      return;
    }
    setSubscribed(true);
    toast({ title: "Inscrição confirmada 🎉", description: "Vais receber as novidades AFROSONORA no teu email." });
  };


  if (subscribed) {
    return (
      <div className="inline-flex items-center gap-2 text-sm text-gold">
        <CheckCircle className="w-4 h-4" />
        <span>Inscrito com sucesso!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex gap-2">
      <Input
        type="email"
        required
        maxLength={255}
        placeholder="O teu email..."

        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-10 bg-background/50 border-border text-foreground placeholder:text-muted-foreground text-sm"
      />
      <Button variant="gold" size="sm" type="submit" disabled={loading} className="shrink-0">
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
      </Button>
    </form>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + Newsletter */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img decoding="async" loading="lazy" src={logo} alt="Logótipo AfroSonora — plataforma de música afro na Europa" width={585} height={427} className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A ponte entre artistas africanos e o mercado europeu. Promoção, oportunidades e ligação profissional.
            </p>
            <div className="flex items-center gap-1 -ml-3">
              <SocialLinks size={20} />
              <a
                href="mailto:info@afrosonora.com"
                aria-label="Enviar email para a AfroSonora"
                className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>

            <div className="pt-2">
              <h4 className="font-display text-sm font-semibold text-foreground mb-2">Newsletter</h4>
              <FooterNewsletter />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Plataforma</h4>
            <ul className="space-y-3">
              <li><Link to="/artistas" className="text-muted-foreground hover:text-gold transition-colors text-sm">Ver Artistas</Link></li>
              <li><Link to="/planos" className="text-muted-foreground hover:text-gold transition-colors text-sm">Planos</Link></li>
              <li><Link to="/eventos-culturais-2026" className="text-muted-foreground hover:text-gold transition-colors text-sm">Eventos Culturais 2026</Link></li>
              <li><Link to="/eventos" className="text-muted-foreground hover:text-gold transition-colors text-sm">Eventos</Link></li>
              <li><Link to="/registo" className="text-muted-foreground hover:text-gold transition-colors text-sm">Criar Perfil</Link></li>
              <li><Link to="/comeca-a-criar" className="text-muted-foreground hover:text-gold transition-colors text-sm">Começa a Criar</Link></li>
              <li><Link to="/store" className="text-muted-foreground hover:text-gold transition-colors text-sm">Store AFROSONORA</Link></li>
              <li><Link to="/guias" className="text-muted-foreground hover:text-gold transition-colors text-sm">Guias de Música Afro</Link></li>
            </ul>
          </div>

          {/* Para Quem */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Para Quem</h4>
            <ul className="space-y-3">
              <li><Link to="/para-artistas" className="text-muted-foreground hover:text-gold transition-colors text-sm">Músicos & Artistas</Link></li>
              <li><Link to="/promotores" className="text-muted-foreground hover:text-gold transition-colors text-sm">Promotores</Link></li>
              <li><Link to="/benfeitores" className="text-muted-foreground hover:text-gold transition-colors text-sm">Benfeitores</Link></li>
              <li><Link to="/embaixadores" className="text-muted-foreground hover:text-gold transition-colors text-sm">Embaixadores</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Informação</h4>
            <ul className="space-y-3">
              <li><Link to="/contacto" className="text-muted-foreground hover:text-gold transition-colors text-sm">Contacto</Link></li>
              <li><Link to="/parceiros" className="text-muted-foreground hover:text-gold transition-colors text-sm">Parceiros</Link></li>
              <li><Link to="/termos" className="text-muted-foreground hover:text-gold transition-colors text-sm">Termos & Condições</Link></li>
              <li><Link to="/privacidade" className="text-muted-foreground hover:text-gold transition-colors text-sm">Política de Privacidade</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-gold transition-colors text-sm">Política de Cookies</Link></li>
              <li><Link to="/aviso-legal" className="text-muted-foreground hover:text-gold transition-colors text-sm">Aviso Legal</Link></li>
              <li><Link to="/regras-conteudo" className="text-muted-foreground hover:text-gold transition-colors text-sm">Regras de Conteúdo</Link></li>
              <li><Link to="/licenciamento-musica" className="text-muted-foreground hover:text-gold transition-colors text-sm">Licenciamento Musical</Link></li>
              <li><Link to="/consentimento-imagem" className="text-muted-foreground hover:text-gold transition-colors text-sm">Consentimento de Imagem</Link></li>
              <li><button onClick={openCookieSettings} className="text-muted-foreground hover:text-gold transition-colors text-sm">Preferências de Cookies</button></li>
            </ul>

          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2024 AFROSONORA. Todos os direitos reservados.</p>
            <p className="text-muted-foreground text-sm">Conectando África à Europa através da música.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
