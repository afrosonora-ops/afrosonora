import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Handshake, Building2, Megaphone, Palette, Music, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormEmail } from "@/lib/sendFormEmail";

const PartnersPage = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendFormEmail({
        formType: "Parcerias",
        subject: `[Parceria] ${formData.company}`,
        name: formData.name,
        email: formData.email,
        fields: {
          "Empresa / Organização": formData.company,
          "Tipo de Parceiro": formData.type,
          Proposta: formData.message,
        },
      });
      toast({
        title: "Proposta enviada!",
        description: "Analisaremos a sua proposta e entraremos em contacto.",
      });
      setFormData({ company: "", name: "", email: "", type: "", message: "" });
    } catch (err: any) {
      toast({ title: "Erro ao enviar", description: err.message, variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const partnerTypes = [
    {
      icon: Building2,
      title: "Estúdios",
      description: "Estúdios de gravação, produção e pós-produção interessados em trabalhar com talento africano.",
    },
    {
      icon: Megaphone,
      title: "Media",
      description: "Jornais, revistas, podcasts e plataformas digitais focadas em cultura e música.",
    },
    {
      icon: Palette,
      title: "Marcas",
      description: "Marcas que querem associar-se à cultura africana e apoiar artistas emergentes.",
    },
    {
      icon: Music,
      title: "Agências",
      description: "Agências de booking, management e produção de eventos interessadas em colaborar.",
    },
  ];

  const collaborationTypes = [
    "Troca de serviços",
    "Patrocínios",
    "Sinergias criativas",
    "Co-produção de eventos",
    "Produção de conteúdo",
    "Apoio logístico",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Handshake className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Colaborações Estratégicas</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Parceiros & <span className="text-gradient-gold">Parcerias</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Procuramos parceiros que partilhem a nossa visão de conectar África e Europa através da música.
            </p>
          </div>
          
          {/* Partner Types */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Quem procuramos?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerTypes.map((type, index) => (
                <Card 
                  key={type.title} 
                  variant="gold" 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 mb-4 rounded-lg bg-gold/10 flex items-center justify-center">
                      <type.icon className="w-7 h-7 text-gold" />
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {type.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Collaboration Types */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Tipos de <span className="text-gradient-gold">Colaboração</span>
            </h2>
            <div className="p-8 rounded-xl bg-charcoal border border-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {collaborationTypes.map((collab, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{collab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Proponha uma <span className="text-gradient-gold">Parceria</span>
            </h2>
            
            <Card variant="elevated" className="p-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa / Organização
                      </label>
                      <Input
                        type="text"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome do Contacto
                      </label>
                      <Input
                        type="text"
                        placeholder="O seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="email@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Parceiro
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        required
                        className="w-full h-10 px-3 rounded-md bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione...</option>
                        <option value="estudio">Estúdio</option>
                        <option value="media">Media</option>
                        <option value="marca">Marca</option>
                        <option value="agencia">Agência</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Descreva a sua proposta
                    </label>
                    <Textarea
                      placeholder="Conte-nos como gostaria de colaborar com a AFROSONORA..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    Enviar Proposta <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PartnersPage;
