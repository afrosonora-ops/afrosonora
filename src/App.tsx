import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import ArtistsPage from "./pages/ArtistsPage";
import PlansPage from "./pages/PlansPage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import BenefactorsPage from "./pages/BenefactorsPage";
import AmbassadorsPage from "./pages/AmbassadorsPage";
import PartnersPage from "./pages/PartnersPage";
import PromotersPage from "./pages/PromotersPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
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
            <Route
              path="/artistas"
              element={
                <ProtectedRoute allowedRoles={["artist", "promoter", "benefactor", "ambassador"]}>
                  <ArtistsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/planos" element={<PlansPage />} />
            <Route path="/eventos" element={<EventsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/benfeitores" element={<BenefactorsPage />} />
            <Route path="/embaixadores" element={<AmbassadorsPage />} />
            <Route path="/parceiros" element={<PartnersPage />} />
            <Route path="/promotores" element={<PromotersPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
