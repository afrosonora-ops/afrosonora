import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, X, AlertTriangle, ArrowRight } from "lucide-react";

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Escolha o seu <span className="text-gradient-gold">Plano</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planos desenhados para cada fase da sua carreira artística. 
              Sem compromisso, cancele quando quiser.
            </p>
          </div>
          
          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Base Plan */}
            <Card variant="elevated" className="relative overflow-hidden animate-slide-up" style={{ animationDelay: "0s" }}>
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium uppercase tracking-wider text-xs">
                  Descoberta
                </CardDescription>
                <CardTitle className="text-3xl">Base</CardTitle>
                <div className="pt-2">
                  <span className="text-5xl font-bold text-foreground">0€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Perfeito para artistas que estão a começar e querem ser descobertos.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Perfil básico público</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Participação em ciclos de seleção</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Possibilidade de destaque editorial ocasional</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">Limitações:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sem upload de vídeos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sem submissão direta a eventos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sem contacto direto com promotores</span>
                    </li>
                  </ul>
                </div>
                
                <Link to="/registo" className="block pt-4">
                  <Button variant="outline" className="w-full" size="lg">
                    Começar Grátis
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Premium Plan */}
            <Card variant="premium" className="relative overflow-hidden ring-2 ring-gold animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="absolute top-0 right-0 bg-gold text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
                Mais Popular
              </div>
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium uppercase tracking-wider text-xs">
                  Compromisso
                </CardDescription>
                <CardTitle className="text-3xl">Premium</CardTitle>
                <div className="pt-2">
                  <span className="text-5xl font-bold text-foreground">9€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground pt-1">ou 90€/ano (2 meses grátis)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Para artistas que levam a sério a sua carreira e querem crescer.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui tudo do Base, mais:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Upload de músicas e vídeos (limite definido)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Destaque rotativo no diretório</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Acesso à comunidade fechada</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Elegibilidade para entrevistas, lives e reportagens</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-gold/10 border border-gold/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="text-foreground font-medium">Nota importante</p>
                      <p className="text-muted-foreground">Não garante eventos. Seleção sempre por curadoria.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/registo" className="block pt-2">
                  <Button variant="gold" className="w-full" size="lg">
                    Escolher Premium <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* Pro Plan */}
            <Card variant="elevated" className="relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium uppercase tracking-wider text-xs">
                  Oportunidade Real
                </CardDescription>
                <CardTitle className="text-3xl">Pro</CardTitle>
                <div className="pt-2">
                  <span className="text-5xl font-bold text-foreground">25€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground pt-1">ou 250€/ano (2 meses grátis)</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Acesso total e prioridade máxima em todas as oportunidades.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui tudo do Premium, mais:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Projetos ilimitados</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Curadoria ativa da AFROSONORA</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Submissão direta a eventos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Contacto direto com promotores e agências</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Prioridade total em oportunidades</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Elegibilidade para eventos internacionais</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Possibilidade de apoio logístico (caso a caso)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary border border-border">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Acesso não significa seleção automática. Não garante contratos nem eventos. Tudo depende de qualidade e adequação.</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/registo" className="block pt-2">
                  <Button variant="goldOutline" className="w-full" size="lg">
                    Escolher Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Posso cancelar a qualquer momento?
                </h3>
                <p className="text-muted-foreground">
                  Sim, pode cancelar a sua subscrição a qualquer momento. O acesso às funcionalidades premium continuará até ao final do período pago.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  O plano Pro garante que serei selecionado para eventos?
                </h3>
                <p className="text-muted-foreground">
                  Não. O plano Pro oferece acesso prioritário e direto às oportunidades, mas a seleção final depende sempre da qualidade do trabalho e da adequação ao evento específico.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Posso fazer upgrade ou downgrade do meu plano?
                </h3>
                <p className="text-muted-foreground">
                  Sim, pode alterar o seu plano a qualquer momento. Se fizer upgrade, pagará a diferença proporcional. Se fizer downgrade, a alteração entrará em vigor no próximo ciclo de faturação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlansPage;
