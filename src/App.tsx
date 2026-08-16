import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import ArtistsPage from "./pages/ArtistsPage";
import ArtistInfoPage from "./pages/ArtistInfoPage";
import PlansPage from "./pages/PlansPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import ContactPage from "./pages/ContactPage";
import BenefactorsPage from "./pages/BenefactorsPage";
import AmbassadorsPage from "./pages/AmbassadorsPage";
import PartnersPage from "./pages/PartnersPage";
import PromotersPage from "./pages/PromotersPage";
import AdminPage from "./pages/AdminPage";
import ComecaACriarPage from "./pages/ComecaACriarPage";
import QuemSomosPage from "./pages/QuemSomosPage";
import SobrePage from "./pages/SobrePage";

import StorePage from "./pages/StorePage";
import EventosCulturais2026Page from "./pages/EventosCulturais2026Page";
import NotFound from "./pages/NotFound";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import ContentRulesPage from "./pages/ContentRulesPage";
import MusicLicensingPage from "./pages/MusicLicensingPage";
import ImageConsentPage from "./pages/ImageConsentPage";
import CookieConsent from "./components/CookieConsent";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AuthProvider>
            <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registo" element={<RegisterPage />} />
              <Route path="/recuperar-senha" element={<ForgotPasswordPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route
                path="/painel"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/artistas" element={<ArtistsPage />} />
              <Route path="/para-artistas" element={<ArtistInfoPage />} />
              <Route path="/planos" element={<PlansPage />} />
              <Route path="/eventos" element={<EventsPage />} />
              <Route path="/eventos/:slug" element={<EventDetailPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/benfeitores" element={<BenefactorsPage />} />
              <Route path="/embaixadores" element={<AmbassadorsPage />} />
              <Route path="/parceiros" element={<PartnersPage />} />
              <Route path="/promotores" element={<PromotersPage />} />
              <Route path="/comeca-a-criar" element={<ComecaACriarPage />} />
              <Route path="/quem-somos" element={<QuemSomosPage />} />
              <Route path="/sobre" element={<SobrePage />} />

              <Route path="/store" element={<StorePage />} />
              <Route path="/eventos-culturais-2026" element={<EventosCulturais2026Page />} />
              <Route path="/termos" element={<TermsPage />} />
              <Route path="/privacidade" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/aviso-legal" element={<LegalNoticePage />} />
              <Route path="/regras-conteudo" element={<ContentRulesPage />} />
              <Route path="/licenciamento-musica" element={<MusicLicensingPage />} />
              <Route path="/consentimento-imagem" element={<ImageConsentPage />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={["admin"]}>
                    <AdminPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </ErrorBoundary>
            <CookieConsent />
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );

export default App;
