import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planos de Assinatura para <span className="text-gradient-gold">Artistas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Impulsione sua carreira. Escolha o plano ideal para cada fase da sua jornada artística. 
              Nossos planos oferecem ferramentas e suporte para o seu crescimento.
            </p>
          </div>
          
          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Essencial Plan */}
            <Card variant="elevated" className="relative overflow-hidden animate-slide-up" style={{ animationDelay: "0s" }}>
              <CardHeader className="pb-4">
                <CardDescription className="text-gold font-medium uppercase tracking-wider text-xs">
                  Iniciante
                </CardDescription>
                <CardTitle className="text-3xl">Essencial</CardTitle>
                <div className="pt-2">
                  <span className="text-5xl font-bold text-foreground">1,50€</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Para artistas que buscam iniciar a promoção dos seus trabalhos e explorar novas ferramentas de divulgação.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Promoção Artística — Ferramentas básicas para divulgar seus projetos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Participação em Eventos — Acesso a ciclos e eventos selecionados</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Destaque Rotativo — Visibilidade ocasional em nossas plataformas</span>
                    </li>
                  </ul>
                </div>
                
                <Link to="/registo" className="block pt-4">
                  <Button variant="outline" className="w-full" size="lg">
                    Começar Agora
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
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Para artistas sérios sobre a sua carreira, buscando promoção avançada e acesso exclusivo.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui tudo do Essencial, mais:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Upload Ilimitado — Publique músicas e vídeos sem restrições</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Destaque Prioritário — Maior visibilidade em todas as plataformas</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Comunidade Exclusiva — Acesso a grupo seleto para networking</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Entrevistas — Elegibilidade para entrevistas em nossos canais</span>
                    </li>
                  </ul>
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
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Para artistas estabelecidos que buscam acesso total, prioridade máxima e oportunidades diretas com promotores.
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Inclui tudo do Premium, mais:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Projetos Ilimitados — Gerencie e promova quantos projetos desejar</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Submissão Direta — Envie trabalho diretamente para curadores de eventos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Contacto com Promotores — Facilitação de contacto direto com profissionais</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Convites VIP — Receba convites para eventos exclusivos</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">Prioridade Total — Atendimento e suporte com a mais alta prioridade</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-secondary border border-border">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Acesso não significa seleção automática. Tudo depende de qualidade e adequação.</p>
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
                  Sim, pode cancelar a sua subscrição a qualquer momento. O acesso às funcionalidades continuará até ao final do período pago.
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
