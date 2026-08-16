import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Eye, EyeOff, LogIn } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Preencha todos os campos.");
      return;
    }
    setIsLoading(true);
    const { error } = await signIn(email, password);
    setIsLoading(false);

    if (error) {
      toast.error("Credenciais inválidas. Tente novamente.");
    } else {
      toast.success("Sessão iniciada com sucesso!");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Entrar na Conta AfroSonora"} description={"Acede à tua conta AfroSonora para gerir o teu perfil de músico, candidaturas a eventos e definições do plano."} path="/login" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto animate-fade-in">
            <Card variant="gold">
              <CardHeader className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <LogIn className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-2xl">Iniciar Sessão</CardTitle>
                <CardDescription>Entre na sua conta AFROSONORA</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <Link to="/recuperar-senha" className="text-sm text-gold hover:text-gold-light transition-colors">
                      Esqueceu a password?
                    </Link>
                  </div>
                  <Button type="submit" variant="gold" className="w-full" disabled={isLoading}>
                    {isLoading ? "A entrar..." : "Entrar"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Ainda não tem conta?{" "}
                    <Link to="/registo" className="text-gold hover:text-gold-light transition-colors font-medium">
                      Criar conta
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
