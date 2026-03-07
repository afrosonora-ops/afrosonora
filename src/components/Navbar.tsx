import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogOut, Shield } from "lucide-react";
import { useState } from "react";
import logo2 from "@/assets/logo2.png";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, profile, roles, signOut } = useAuth();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/artistas", label: "Artistas" },
    { href: "/planos", label: "Planos" },
    { href: "/eventos", label: "Eventos" },
    { href: "/contacto", label: "Contacto" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo2} alt="AfroSonora" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold text-foreground">AfroSonora</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold ${isActive(link.href) ? "text-gold" : "text-foreground/80"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                {roles.includes("admin") && (
                  <Link to="/admin">
                    <Button variant="ghost" size="sm" className="gap-2 text-primary">
                      <Shield className="w-4 h-4" />
                      Admin
                    </Button>
                  </Link>
                )}
                <Link to="/painel">
                  <Button variant="goldOutline" size="sm" className="gap-2">
                    <User className="w-4 h-4" />
                    {profile?.full_name || "Painel"}
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={signOut} className="gap-2 text-muted-foreground hover:text-foreground">
                  <LogOut className="w-4 h-4" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="goldOutline" size="sm">Entrar</Button>
                </Link>
                <Link to="/registo">
                  <Button variant="gold" size="sm">Criar Perfil</Button>
                </Link>
              </>
            )}
          </div>

          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-lg font-medium transition-colors hover:text-gold ${isActive(link.href) ? "text-gold" : "text-foreground/80"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
                  <>
                    <Link to="/painel" onClick={() => setIsOpen(false)}>
                      <Button variant="goldOutline" className="w-full">O Meu Painel</Button>
                    </Link>
                    <Button variant="ghost" className="w-full" onClick={() => { signOut(); setIsOpen(false); }}>
                      Sair
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="goldOutline" className="w-full">Entrar</Button>
                    </Link>
                    <Link to="/registo" onClick={() => setIsOpen(false)}>
                      <Button variant="gold" className="w-full">Criar Perfil</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
