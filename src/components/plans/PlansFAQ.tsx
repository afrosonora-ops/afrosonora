const faqs = [
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, pode cancelar a sua subscrição a qualquer momento. O acesso às funcionalidades continuará até ao final do período pago.",
  },
  {
    q: "O plano Pro garante que serei selecionado para eventos?",
    a: "Não. O plano Pro oferece acesso prioritário e direto às oportunidades, mas a seleção final depende sempre da qualidade do trabalho e da adequação ao evento específico.",
  },
  {
    q: "Posso fazer upgrade ou downgrade do meu plano?",
    a: "Sim, pode alterar o seu plano a qualquer momento. Se fizer upgrade, pagará a diferença proporcional. Se fizer downgrade, a alteração entrará em vigor no próximo ciclo de faturação.",
  },
  {
    q: "Qual a diferença entre pagamento mensal e anual?",
    a: "O pagamento anual oferece um desconto de aproximadamente 17% face ao valor mensal. Pode escolher a opção que melhor se adequa ao seu orçamento.",
  },
];

const PlansFAQ = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
        Perguntas Frequentes
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-xl bg-card border border-border">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
            <p className="text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansFAQ;
