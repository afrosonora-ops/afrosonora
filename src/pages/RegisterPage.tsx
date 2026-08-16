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
import { Eye, EyeOff, Music, Users, Handshake, Heart, Award } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type AppRole = Database["public"]["Enums"]["app_role"];

const roleOptions: { value: AppRole; label: string; icon: React.ElementType; description: string }[] = [
  { value: "artist", label: "Artista / Músico / Banda", icon: Music, description: "Crie o seu perfil artístico" },
  { value: "promoter", label: "Promotor / Agência", icon: Users, description: "Descubra talento africano" },
  { value: "partner", label: "Parceiro / Serviços", icon: Handshake, description: "Oportunidades de colaboração" },
  { value: "benefactor", label: "Benfeitor", icon: Heart, description: "Apoie artistas emergentes" },
  { value: "ambassador", label: "Embaixador", icon: Award, description: "Expanda a missão globalmente" },
];

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<AppRole | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !selectedRole) {
      toast.error("Preencha todos os campos e escolha o seu perfil.");
      return;
    }
    if (password.length < 6) {
      toast.error("A password deve ter pelo menos 6 caracteres.");
      return;
    }

    setIsLoading(true);
    const { error } = await signUp(email, password, fullName, selectedRole);
    setIsLoading(false);

    if (error) {
      if (error.message?.includes("already registered")) {
        toast.error("Este email já está registado.");
      } else {
        toast.error("Erro ao criar conta. Tente novamente.");
      }
    } else {
      toast.success("Conta criada com sucesso! Verifique o seu email para confirmar.");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Criar Perfil de Artista | AfroSonora"} description={"Cria gratuitamente o teu perfil de músico africano na AfroSonora e fica visível para promotores, agências e público na Europa."} path="/registo" />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Junte-se à <span className="text-gradient-gold">AFROSONORA</span>
              </h1>
              <p className="text-muted-foreground">Crie a sua conta e comece a sua jornada.</p>
            </div>

            <Card variant="gold">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">Tipo de Perfil *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {roleOptions.map((role) => (
                        <button
                          key={role.value}
                          type="button"
                          onClick={() => setSelectedRole(role.value)}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all text-left ${
                            selectedRole === role.value
                              ? "border-gold bg-gold/10"
                              : "border-border hover:border-gold/40"
                          }`}
                        >
                          <role.icon className={`w-5 h-5 flex-shrink-0 ${selectedRole === role.value ? "text-gold" : "text-muted-foreground"}`} />
                          <div>
                            <p className={`text-sm font-medium ${selectedRole === role.value ? "text-gold" : "text-foreground"}`}>
                              {role.label}
                            </p>
                            <p className="text-xs text-muted-foreground">{role.description}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        placeholder="O seu nome completo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
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
                      <Label htmlFor="password">Password *</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Mínimo 6 caracteres"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          minLength={6}
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
                  </div>

                  <Button type="submit" variant="gold" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "A criar conta..." : "Criar Conta"}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-muted-foreground text-sm">
                    Já tem uma conta?{" "}
                    <Link to="/login" className="text-gold hover:text-gold-light transition-colors font-medium">
                      Iniciar Sessão
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

export default RegisterPage;
