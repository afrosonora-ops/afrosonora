import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import PlansBillingToggle from "@/components/plans/PlansBillingToggle";
import PlansGrid from "@/components/plans/PlansGrid";
import PlansFAQ from "@/components/plans/PlansFAQ";

export type BillingPeriod = "monthly" | "annual";

const PlansPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async (planSlug: string) => {
    if (!user) {
      toast.info("Crie uma conta ou inicie sessão para subscrever.");
      navigate("/registo");
      return;
    }

    setLoadingPlan(planSlug);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: { planSlug, billingPeriod },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Não foi possível iniciar o pagamento.");
      }
    } catch (err: any) {
      toast.error(err.message || "Erro ao processar pagamento.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Planos e Preços | AfroSonora"} description={"Escolha o plano AfroSonora certo para si e ganhe visibilidade junto de promotores e público europeu."} path="/planos" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Planos de Assinatura para <span className="text-gradient-gold">Artistas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Impulsione sua carreira. Escolha o plano ideal para cada fase da sua jornada artística.
            </p>
            <PlansBillingToggle billingPeriod={billingPeriod} onChange={setBillingPeriod} />
          </div>

          <PlansGrid
            billingPeriod={billingPeriod}
            loadingPlan={loadingPlan}
            onCheckout={handleCheckout}
          />

          <PlansFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
