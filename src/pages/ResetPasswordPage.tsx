import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.includes("type=recovery")) {
      toast.error("Link inválido ou expirado.");
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) { toast.error("As passwords não coincidem."); return; }
    if (password.length < 6) { toast.error("A password deve ter pelo menos 6 caracteres."); return; }

    setIsLoading(true);
    const { error } = await supabase.auth.updateUser({ password });
    setIsLoading(false);

    if (error) {
      toast.error("Erro ao redefinir password.");
    } else {
      toast.success("Password redefinida com sucesso!");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto animate-fade-in">
            <Card variant="gold">
              <CardHeader className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                  <Lock className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-2xl">Nova Password</CardTitle>
                <CardDescription>Defina a sua nova password.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Nova Password</Label>
                    <Input id="password" type="password" placeholder="Mínimo 6 caracteres" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Repita a password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                  </div>
                  <Button type="submit" variant="gold" className="w-full" disabled={isLoading}>
                    {isLoading ? "A redefinir..." : "Redefinir Password"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;
