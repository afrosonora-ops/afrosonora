import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <Seo title={"Página não encontrada (404) | AfroSonora"} description={"A página que procura não existe. Volte ao início ou explore músicos e eventos de música afro na AfroSonora."} path="/404" noindex />
      <main className="flex-1 flex items-center justify-center px-4 pt-32 pb-24">
        <div className="max-w-lg text-center animate-fade-in">
          <p className="font-display text-7xl md:text-8xl font-bold text-gradient-gold mb-4">404</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Página não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            A página que procura não existe ou foi movida. Volte ao início ou explore os nossos músicos e eventos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold text-background font-semibold hover:opacity-90 transition-opacity"
            >
              <Home className="w-4 h-4" />
              Voltar ao início
            </Link>
            <Link
              to="/eventos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
            >
              <Search className="w-4 h-4" />
              Ver eventos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
