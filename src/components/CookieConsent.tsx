import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
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
export const OPEN_COOKIE_SETTINGS_EVENT = "afrosonora:open-cookie-settings";

export const openCookieSettings = () =>
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));

const legalLinks = [
  { to: "/cookies", label: "Política de Cookies" },
  { to: "/privacidade", label: "Política de Privacidade" },
  { to: "/termos", label: "Termos & Condições" },
  { to: "/aviso-legal", label: "Aviso Legal" },
  { to: "/regras-conteudo", label: "Regras de Conteúdo" },
  { to: "/licenciamento-musica", label: "Licenciamento Musical" },
  { to: "/consentimento-imagem", label: "Consentimento de Imagem" },
];

const cookieTypes = [
  {
    id: "necessary" as const,
    label: "Necessários",
    description: "Essenciais para o funcionamento do site. Sempre ativos.",
    disabled: true,
  },
  {
    id: "functional" as const,
    label: "Funcionais",
    description: "Recordam preferências como idioma e região.",
    disabled: false,
  },
  {
    id: "analytics" as const,
    label: "Análise",
    description: "Ajudam-nos a compreender a utilização do site.",
    disabled: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description: "Permitem apresentar conteúdos e anúncios relevantes.",
    disabled: false,
  },
];

const ONLY_ESSENTIAL: CookiePreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const ALL: CookiePreferences = {
  necessary: true,
  functional: true,
  analytics: true,
  marketing: true,
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(ONLY_ESSENTIAL);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPreferences({ ...ONLY_ESSENTIAL, ...JSON.parse(stored) });
      } catch {
        /* ignore */
      }
    } else {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handler = () => setSettingsOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handler);
  }, []);

  const persist = (prefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setSettingsOpen(false);
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up pointer-events-none"
          role="dialog"
          aria-label="Consentimento de cookies"
        >
          <div className="mx-auto max-w-xl px-4 pb-4 sm:pb-6 pointer-events-auto">
            <div className="relative rounded-2xl border border-border/70 bg-card/95 backdrop-blur-xl p-6 shadow-card">
              <button
                onClick={() => setVisible(false)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2.5 mb-3">
                <Cookie className="h-4 w-4 text-primary shrink-0" />
                <h3 className="font-display text-base font-semibold text-foreground">
                  Utilizamos cookies
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground mb-5 pr-6">
                Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e
                personalizar conteúdos. Pode aceitar todos os cookies ou gerir as suas
                preferências.{" "}
                <button
                  onClick={() => setLearnMoreOpen(true)}
                  className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                >
                  Saber mais
                </button>
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <Button variant="gold" onClick={() => persist(ALL)} className="text-sm sm:flex-1">
                  Aceitar todos
                </Button>
                <Button
                  variant="goldOutline"
                  onClick={() => persist(ONLY_ESSENTIAL)}
                  className="text-sm sm:flex-1"
                >
                  Apenas essenciais
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setSettingsOpen(true)}
                  className="text-sm text-muted-foreground hover:text-foreground sm:flex-1"
                >
                  Personalizar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="bg-card border-border max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5 text-primary" />
              Preferências de Cookies
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Escolha que tipos de cookies pretende autorizar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-1">
            {cookieTypes.map((cookie) => (
              <div
                key={cookie.id}
                className="flex items-start justify-between gap-4 rounded-xl border border-border p-3"
              >
                <div className="flex-1">
                  <span className="text-sm font-medium text-foreground">{cookie.label}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{cookie.description}</p>
                </div>
                <Switch
                  checked={preferences[cookie.id]}
                  disabled={cookie.disabled}
                  onCheckedChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, [cookie.id]: checked }))
                  }
                />
              </div>
            ))}
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              variant="goldOutline"
              onClick={() => persist(ONLY_ESSENTIAL)}
              className="text-sm"
            >
              Apenas essenciais
            </Button>
            <Button variant="gold" onClick={() => persist(preferences)} className="text-sm">
              Guardar preferências
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Learn more modal */}
      <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
        <DialogContent className="bg-card border-border max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-foreground">Informação Legal</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Consulte as nossas políticas e termos.
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-1 py-1">
            {legalLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setLearnMoreOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground/85 hover:bg-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
