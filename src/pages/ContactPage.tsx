import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, MapPin, Phone, Send, Instagram, Youtube, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormEmail } from "@/lib/sendFormEmail";
import { contactSchema, firstError } from "@/lib/formSchemas";

const ContactPage = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      toast({ title: "Dados inválidos", description: firstError(parsed.error), variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      await sendFormEmail({
        formType: "Contacto",
        subject: `[Contacto] ${parsed.data.subject}`,
        name: parsed.data.name,
        email: parsed.data.email,
        fields: {
          Assunto: parsed.data.subject,
          Mensagem: parsed.data.message,
        },
      });
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contacto consigo em breve.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      toast({ title: "Erro ao enviar", description: err.message, variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Contactar a AfroSonora | Apoio a Artistas e Promotores"} description={"Fale com a equipa AfroSonora por email ou formulário: apoio a músicos, propostas de promotores, parcerias, imprensa e questões sobre planos."} path="/contacto" />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em <span className="text-gradient-gold">Contacto</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem questões, sugestões ou quer colaborar connosco? 
              Estamos aqui para ajudar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Envie-nos uma mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input
                      type="text"
                      placeholder="O seu nome"
                      maxLength={120}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input
                    type="text"
                    placeholder="Qual é o assunto?"
                    maxLength={150}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    placeholder="Escreva a sua mensagem aqui..."
                    maxLength={2000}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-card border-border resize-none"
                  />
                </div>
                
                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={sending}>
                  {sending ? "A enviar..." : "Enviar Mensagem"} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              
              {/* Social Media */}
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Siga-nos
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/50 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="mt-12 p-6 rounded-xl bg-charcoal border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Links Rápidos
                </h3>
                <ul className="space-y-3">
                  <li><a href="/benfeitores" className="text-muted-foreground hover:text-gold transition-colors text-sm">→ Quero apoiar como Benfeitor</a></li>
                  <li><a href="/embaixadores" className="text-muted-foreground hover:text-gold transition-colors text-sm">→ Quero ser Embaixador</a></li>
                  <li><a href="/parceiros" className="text-muted-foreground hover:text-gold transition-colors text-sm">→ Parcerias comerciais</a></li>
                  <li><a href="/promotores" className="text-muted-foreground hover:text-gold transition-colors text-sm">→ Sou promotor/agência</a></li>
                </ul>
              </div>

              {/* Email */}
              <div className="mt-12 flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:info@afrosonora.com" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                  info@afrosonora.com
                </a>
              </div>
            </div>
          </div>

          {/* Presence & Expansion */}
          <div className="max-w-3xl mx-auto mt-20 text-center p-8 rounded-2xl border border-gold/20 bg-gold/5 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="font-display text-xl font-semibold text-foreground">Onde Estamos</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Estamos representados na <span className="text-gold font-medium">Holanda</span>, <span className="text-gold font-medium">Luxemburgo</span>, <span className="text-gold font-medium">Portugal</span> e <span className="text-gold font-medium">França</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos a expandir as nossas parcerias por toda a Europa. Se pretendes fazer parte deste projeto e contribuir para o crescimento da cultura africana, entra em contacto connosco e junta-te a este movimento!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
