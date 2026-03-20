import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, ArrowRight, Loader2 } from "lucide-react";
import type { BillingPeriod } from "@/pages/PlansPage";

const plans = [
  {
    slug: "essencial",
    tag: "Iniciante",
    name: "Cartão de Membro AFROSONORA",
    monthlyPrice: 4,
    annualPrice: 40,
    description: "Para artistas que buscam iniciar a promoção dos seus trabalhos.",
    features: [
      "Acesso à Store AFROSONORA — Loja exclusiva para membros",
      "Apoio na Promoção Artística — Suporte para divulgar os seus projetos",
      "Participação em Eventos — Acesso a ciclos e eventos selecionados",
      "Destaque Rotativo — Visibilidade ocasional nas nossas plataformas",
    ],
    featuresLabel: "Inclui:",
    variant: "elevated" as const,
    buttonVariant: "outline" as const,
    buttonText: "Começar Agora",
    popular: false,
  },
  {
    slug: "premium",
    tag: "Compromisso",
    name: "Premium",
    monthlyPrice: 9,
    annualPrice: 90,
    description: "Para artistas sérios sobre a sua carreira, buscando promoção avançada.",
    features: [
      "Upload Ilimitado — Publique músicas e vídeos sem restrições",
      "Destaque Prioritário — Maior visibilidade em todas as plataformas",
      "Comunidade Exclusiva — Acesso a grupo seleto para networking",
      "Entrevistas — Elegibilidade para entrevistas em nossos canais",
    ],
    featuresLabel: "Inclui tudo do Essencial, mais:",
    variant: "premium" as const,
    buttonVariant: "gold" as const,
    buttonText: "Escolher Premium",
    popular: true,
  },
  {
    slug: "pro",
    tag: "Oportunidade Real",
    name: "Pro",
    monthlyPrice: 25,
    annualPrice: 250,
    description: "Para artistas estabelecidos com acesso total e oportunidades diretas.",
    features: [
      "Projetos Ilimitados — Gerencie e promova quantos projetos desejar",
      "Submissão Direta — Envie trabalho diretamente para curadores de eventos",
      "Contacto com Promotores — Facilitação de contacto direto com profissionais",
      "Convites VIP — Receba convites para eventos exclusivos",
      "Prioridade Total — Atendimento e suporte com a mais alta prioridade",
    ],
    featuresLabel: "Inclui tudo do Premium, mais:",
    variant: "elevated" as const,
    buttonVariant: "goldOutline" as const,
    buttonText: "Escolher Pro",
    popular: false,
    disclaimer: "Acesso não significa seleção automática. Tudo depende de qualidade e adequação.",
  },
];

interface PlansGridProps {
  billingPeriod: BillingPeriod;
  loadingPlan: string | null;
  onCheckout: (planSlug: string) => void;
}

const PlansGrid = ({ billingPeriod, loadingPlan, onCheckout }: PlansGridProps) => {
  const formatPrice = (plan: typeof plans[0]) => {
    const price = billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice;
    return price % 1 === 0 ? `${price}€` : `${price.toFixed(2).replace(".", ",")}€`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
      {plans.map((plan, i) => (
        <Card
          key={plan.slug}
          variant={plan.variant}
          className={`relative overflow-hidden animate-slide-up ${plan.popular ? "ring-2 ring-primary" : ""}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {plan.popular && (
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
              Mais Popular
            </div>
          )}
          <CardHeader className="pb-4">
            <CardDescription className="text-primary font-medium uppercase tracking-wider text-xs">
              {plan.tag}
            </CardDescription>
            <CardTitle className="text-3xl">{plan.name}</CardTitle>
            <div className="pt-2">
              <span className="text-5xl font-bold text-foreground">{formatPrice(plan)}</span>
              <span className="text-muted-foreground">/{billingPeriod === "annual" ? "ano" : "mês"}</span>
            </div>
            {billingPeriod === "annual" && (
              <p className="text-xs text-muted-foreground mt-1">
                equivale a {(plan.annualPrice / 12).toFixed(2).replace(".", ",")}€/mês
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">{plan.description}</p>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                {plan.featuresLabel}
              </h4>
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.disclaimer && (
              <div className="p-4 rounded-lg bg-secondary border border-border">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{plan.disclaimer}</p>
                </div>
              </div>
            )}

            <div className="pt-2">
              <Button
                variant={plan.buttonVariant}
                className="w-full"
                size="lg"
                onClick={() => onCheckout(plan.slug)}
                disabled={loadingPlan !== null}
              >
                {loadingPlan === plan.slug ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    A processar...
                  </>
                ) : (
                  <>
                    {plan.buttonText}
                    {plan.popular && <ArrowRight className="ml-2 w-4 h-4" />}
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PlansGrid;
