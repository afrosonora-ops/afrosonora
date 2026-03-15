import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { X, Cookie, Shield } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "afrosonora-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const all: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    setVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setSettingsOpen(false);
    setVisible(false);
  };

  const legalLinks = [
    { to: "/termos", label: "Termos & Condições" },
    { to: "/privacidade", label: "Política de Privacidade" },
    { to: "/cookies", label: "Política de Cookies" },
    { to: "/aviso-legal", label: "Aviso Legal" },
    { to: "/regras-conteudo", label: "Regras de Conteúdo" },
    { to: "/licenciamento-musica", label: "Licenciamento Musical" },
    { to: "/consentimento-imagem", label: "Consentimento de Imagem" },
  ];

  const cookieTypes = [
    {
      id: "necessary" as const,
      label: "Cookies Necessários",
      description: "Essenciais para o funcionamento do site. Não podem ser desativados.",
      disabled: true,
    },
    {
      id: "functional" as const,
      label: "Cookies Funcionais",
      description: "Permitem recordar preferências como idioma e região.",
      disabled: false,
    },
    {
      id: "analytics" as const,
      label: "Cookies de Análise",
      description: "Ajudam a compreender como os visitantes interagem com o site.",
      disabled: false,
    },
    {
      id: "marketing" as const,
      label: "Cookies de Marketing",
      description: "Utilizados para apresentar anúncios relevantes ao visitante.",
      disabled: false,
    },
  ];

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
        role="dialog"
        aria-label="Consentimento de cookies"
      >
        <div className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
          <div className="relative rounded-xl border border-border bg-card/95 backdrop-blur-md p-5 sm:p-6 shadow-card">
            {/* Close */}
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 mb-3">
              <Cookie className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                Este site utiliza cookies
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Utilizamos cookies para personalizar conteúdos e anúncios, fornecer funcionalidades de
              redes sociais e analisar o tráfego do site. Também partilhamos informações sobre o uso
              do site com os nossos parceiros de redes sociais, publicidade e análises, que podem
              combiná-las com outras informações que você forneceu ou que recolheram do uso dos seus
              serviços.
            </p>

            <p className="text-xs text-muted-foreground mb-4">
              Para saber mais, consulte:{" "}
              {legalLinks.map((link, i) => (
                <span key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                  {i < legalLinks.length - 1 && <span className="text-muted-foreground"> · </span>}
                </span>
              ))}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Button variant="gold" onClick={acceptAll} className="text-sm">
                Aceitar todos os cookies
              </Button>
              <Button
                variant="goldOutline"
                onClick={() => setSettingsOpen(true)}
                className="text-sm"
              >
                Configurações de cookies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5 text-primary" />
              Configurações de Cookies
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Selecione os tipos de cookies que pretende autorizar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {cookieTypes.map((cookie) => (
              <label
                key={cookie.id}
                className="flex items-start gap-3 rounded-lg border border-border p-3 hover:border-primary/30 transition-colors cursor-pointer"
              >
                <Checkbox
                  checked={preferences[cookie.id]}
                  disabled={cookie.disabled}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, [cookie.id]: !!checked }))
                  }
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground">{cookie.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{cookie.description}</p>
                </div>
              </label>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="goldOutline" onClick={() => setSettingsOpen(false)} className="text-sm">
              Cancelar
            </Button>
            <Button variant="gold" onClick={savePreferences} className="text-sm">
              Guardar preferências
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
