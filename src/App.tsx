import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegistrationPage from "./pages/RegistrationPage";
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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registo" element={<RegistrationPage />} />
          <Route path="/artistas" element={<ArtistsPage />} />
          <Route path="/planos" element={<PlansPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/benfeitores" element={<BenefactorsPage />} />
          <Route path="/embaixadores" element={<AmbassadorsPage />} />
          <Route path="/parceiros" element={<PartnersPage />} />
          <Route path="/promotores" element={<PromotersPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
