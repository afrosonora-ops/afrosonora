import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Headphones, Mic2, Music, Cable, MonitorSpeaker, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormEmail } from "@/lib/sendFormEmail";
import setupImg from "@/assets/home-studio-setup.webp";
import packImg from "@/assets/home-studio-pack.webp";

const productOptions = [
  "Quero saber as condições do Pacote Home Studio AFROSONORA",
  "Microfone de estúdio",
  "Interface de áudio",
  "Auscultadores profissionais",
  "Pop filter e acessórios essenciais",
  "Cabos e suporte de microfone",
  "Software de produção musical (DAW)",
  "Tratamento acústico (painéis, bass traps, cortinas)",
  "Outros equipamentos de home studio",
];

const ComecaACriarPage = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const toggleProduct = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    );
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || selectedProducts.length === 0) {
      toast({ title: "Campos obrigatórios em falta", description: "Preenche o nome, email e seleciona pelo menos um produto.", variant: "destructive" });
      return;
    }

    setSending(true);
    try {
      await sendFormEmail({
        formType: "Home Studio",
        subject: "Pedido de Informações – Home Studio AFROSONORA",
        name: name.trim(),
        email: email.trim(),
        fields: {
          WhatsApp: whatsapp.trim(),
          "Produtos / Informações": selectedProducts.map((p) => `• ${p}`).join("\n"),
          "Mensagem adicional": message.trim(),
        },
      });
      setSubmitted(true);
    } catch (err: any) {
      toast({ title: "Erro ao enviar", description: err.message, variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setWhatsapp("");
    setSelectedProducts([]);
    setMessage("");
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Começa a Criar | AfroSonora"} description={"Recursos, home studio e apoio para músicos africanos começarem a criar e gravar com qualidade profissional."} path="/comeca-a-criar" />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Breadcrumbs className="text-left" />
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
                <img decoding="async" loading="lazy" src={setupImg} alt="Setup básico de home studio" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">Setup Básico / Start</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Microfone, interface de áudio e auscultadores — o essencial para começar a gravar música de forma simples e profissional.
              </p>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                <img decoding="async" loading="lazy" src={packImg} alt="Pacote Home Studio AFROSONORA" className="w-full h-full object-cover" />
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
          <Button variant="hero" size="xl" className="mt-4" onClick={() => setOpen(true)}>
            <Headphones className="mr-2 w-5 h-5" />
            Pedir Informações sobre Equipamento
          </Button>
          <p className="text-muted-foreground text-sm pt-4">
            Equipamentos também disponíveis na nossa loja online, com condições especiais para membros registados da AFROSONORA.
          </p>
        </div>
      </section>

      {/* Form Dialog */}
      <Dialog open={open} onOpenChange={(v) => { if (!v) resetForm(); else setOpen(true); }}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-charcoal border-border">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">Pedido Enviado com Sucesso!</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
                O seu pedido foi enviado com sucesso! A equipa AFROSONORA entrará em contacto em breve.
              </p>
              <Button variant="gold" onClick={resetForm} className="mt-4">Fechar</Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl text-foreground">
                  Pedido de <span className="text-gradient-gold">Informações</span>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">
                  Preenche o formulário e a equipa AFROSONORA entrará em contacto.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-5 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="form-name" className="text-foreground">Nome completo *</Label>
                  <Input id="form-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="O teu nome" required maxLength={100} className="bg-background/50 border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-email" className="text-foreground">Email *</Label>
                  <Input id="form-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@exemplo.com" required maxLength={255} className="bg-background/50 border-border" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-whatsapp" className="text-foreground">WhatsApp <span className="text-muted-foreground text-xs">(opcional)</span></Label>
                  <Input id="form-whatsapp" type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+351 912 345 678" maxLength={20} className="bg-background/50 border-border" />
                </div>

                <div className="space-y-3">
                  <Label className="text-foreground">Tipo de produtos ou informações *</Label>
                  <div className="space-y-2.5">
                    {productOptions.map((product) => (
                      <label key={product} className="flex items-start gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedProducts.includes(product)}
                          onCheckedChange={() => toggleProduct(product)}
                          className="mt-0.5 border-border data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors leading-snug">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-message" className="text-foreground">Mensagem adicional / Observações</Label>
                  <Textarea id="form-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Descreve as tuas necessidades ou dúvidas..." maxLength={1000} rows={3} className="bg-background/50 border-border resize-none" />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Enviar Pedido
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ComecaACriarPage;
