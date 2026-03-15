import type { BillingPeriod } from "@/pages/PlansPage";

interface PlansBillingToggleProps {
  billingPeriod: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

const PlansBillingToggle = ({ billingPeriod, onChange }: PlansBillingToggleProps) => {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary p-1 gap-1">
      <button
        onClick={() => onChange("monthly")}
        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
          billingPeriod === "monthly"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Mensal
      </button>
      <button
        onClick={() => onChange("annual")}
        className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
          billingPeriod === "annual"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Anual
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
          -17%
        </span>
      </button>
    </div>
  );
};

export default PlansBillingToggle;
