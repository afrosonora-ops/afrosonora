import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { toast.error("Introduza o seu email."); return; }
    setIsLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setIsLoading(false);
    if (error) {
      toast.error("Erro ao enviar email. Tente novamente.");
    } else {
      setSent(true);
      toast.success("Email enviado! Verifique a sua caixa de entrada.");
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
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-2xl">Recuperar Password</CardTitle>
                <CardDescription>Enviaremos um link para redefinir a sua password.</CardDescription>
              </CardHeader>
              <CardContent>
                {sent ? (
                  <div className="text-center space-y-4">
                    <p className="text-foreground">Email enviado com sucesso!</p>
                    <p className="text-muted-foreground text-sm">Verifique a sua caixa de entrada e siga as instruções.</p>
                    <Link to="/login">
                      <Button variant="goldOutline" className="mt-4">Voltar ao Login</Button>
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <Button type="submit" variant="gold" className="w-full" disabled={isLoading}>
                      {isLoading ? "A enviar..." : "Enviar Link"}
                    </Button>
                    <div className="text-center">
                      <Link to="/login" className="text-sm text-gold hover:text-gold-light">Voltar ao Login</Link>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;
