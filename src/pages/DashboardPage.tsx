import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { User, Music, Upload, Settings } from "lucide-react";

const DashboardPage = () => {
  const { user, profile, roles, refreshProfile, signOut } = useAuth();
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || "");
      setBio(profile.bio || "");
      setPhone(profile.phone || "");
      setCountry(profile.country || "");
      setCity(profile.city || "");
    }
  }, [profile]);

  const handleAvatarUpload = async () => {
    if (!avatarFile || !user) return null;
    const ext = avatarFile.name.split(".").pop();
    const path = `${user.id}/avatar.${ext}`;
    const { error } = await supabase.storage.from("avatars").upload(path, avatarFile, { upsert: true });
    if (error) { toast.error("Erro ao fazer upload da foto."); return null; }
    const { data: { publicUrl } } = supabase.storage.from("avatars").getPublicUrl(path);
    return publicUrl;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setIsLoading(true);

    let avatarUrl = profile?.avatar_url;
    if (avatarFile) {
      const url = await handleAvatarUpload();
      if (url) avatarUrl = url;
    }

    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName, bio, phone, country, city, avatar_url: avatarUrl })
      .eq("user_id", user.id);

    setIsLoading(false);
    if (error) {
      toast.error("Erro ao guardar perfil.");
    } else {
      toast.success("Perfil atualizado com sucesso!");
      await refreshProfile();
    }
  };

  const roleLabels: Record<string, string> = {
    artist: "Artista",
    promoter: "Promotor",
    partner: "Parceiro",
    benefactor: "Benfeitor",
    ambassador: "Embaixador",
    admin: "Administrador",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Painel do Artista | AfroSonora"} description={"Gere o teu perfil de músico, candidaturas e definições na AfroSonora."} path="/painel" noindex />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">O Meu Painel</h1>
                <p className="text-muted-foreground">
                  {roles.map((r) => roleLabels[r] || r).join(", ")}
                </p>
              </div>
              <Button variant="goldOutline" size="sm" onClick={signOut}>
                Sair
              </Button>
            </div>

            {/* Profile Card */}
            <Card variant="gold">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gold" />
                  Editar Perfil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
                      {profile?.avatar_url ? (
                        <img decoding="async" loading="lazy" src={profile.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <Label htmlFor="avatar" className="cursor-pointer text-gold hover:text-gold-light flex items-center gap-2">
                        <Upload className="w-4 h-4" /> Alterar foto
                      </Label>
                      <Input
                        id="avatar"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
                      />
                      {avatarFile && <p className="text-xs text-muted-foreground mt-1">{avatarFile.name}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nome Completo</Label>
                      <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">País</Label>
                      <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea id="bio" rows={4} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Conte-nos sobre si..." />
                  </div>

                  <Button type="submit" variant="gold" disabled={isLoading}>
                    {isLoading ? "A guardar..." : "Guardar Alterações"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links based on role */}
            {roles.includes("artist") && (
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Music className="w-5 h-5 text-gold" /> Área do Artista
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex gap-3">
                  <Link to="/artistas"><Button variant="goldOutline" size="sm">Ver Artistas</Button></Link>
                  <Link to="/eventos"><Button variant="goldOutline" size="sm">Ver Eventos</Button></Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
