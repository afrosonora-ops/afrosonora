import { useState } from "react";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import PlansBillingToggle from "@/components/plans/PlansBillingToggle";
import PlansGrid from "@/components/plans/PlansGrid";
import PlansFAQ from "@/components/plans/PlansFAQ";

export type BillingPeriod = "monthly" | "annual";

const PlansPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Planos e Preços para Músicos | AfroSonora"} description={"Compare os planos AfroSonora para músicos e bandas: perfil profissional, destaque no diretório, candidaturas a eventos e ligação a promotores europeus."} path="/planos" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planos de Assinatura para <span className="text-gradient-gold">Artistas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Impulsione sua carreira. Escolha o plano ideal para cada fase da sua jornada artística.
            </p>
            <PlansBillingToggle billingPeriod={billingPeriod} onChange={setBillingPeriod} />
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-xl border border-primary/40 bg-primary/5 px-6 py-4 text-center">
            <p className="text-sm text-foreground">
              As subscrições ainda não estão disponíveis. Os planos abaixo são informativos —
              em breve poderás aderir online.
            </p>
          </div>

          <PlansGrid billingPeriod={billingPeriod} />

          <PlansFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
