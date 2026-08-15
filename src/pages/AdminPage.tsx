import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Users, Music, Calendar, Shield, Trash2, Search, Plus, Eye, EyeOff } from "lucide-react";

interface ProfileWithRoles {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url: string | null;
  city: string | null;
  country: string | null;
  created_at: string;
  roles: string[];
}

interface ArtistRow {
  id: string;
  user_id: string;
  artist_name: string;
  genre: string | null;
  city: string | null;
  country: string | null;
  is_featured: boolean | null;
  plan: string | null;
  created_at: string;
}

interface EventRow {
  id: string;
  title: string;
  location: string | null;
  event_date: string | null;
  is_published: boolean | null;
  organizer_id: string | null;
  created_at: string;
}

const AdminPage = () => {
  const { hasRole } = useAuth();
  const [search, setSearch] = useState("");
  const [profiles, setProfiles] = useState<ProfileWithRoles[]>([]);
  const [artists, setArtists] = useState<ArtistRow[]>([]);
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  // Event creation dialog state
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", location: "", description: "", event_date: "", venue: "" });

  const isAdmin = hasRole("admin");

  const fetchAll = async () => {
    setLoading(true);
    const [profilesRes, rolesRes, artistsRes, eventsRes] = await Promise.all([
      supabase
        .from("profiles")
        .select("id, user_id, full_name, avatar_url, country, city, created_at")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase.from("user_roles").select("user_id, role").limit(2000),
      supabase
        .from("artists")
        .select("id, user_id, artist_name, genre, country, city, avatar_url, is_featured, plan, created_at")
        .order("created_at", { ascending: false })
        .limit(500),
      supabase
        .from("events")
        .select("id, title, location, event_date, is_published, organizer_id, created_at")
        .order("created_at", { ascending: false })
        .limit(500),
    ]);

    const rolesMap: Record<string, string[]> = {};
    rolesRes.data?.forEach((r) => {
      if (!rolesMap[r.user_id]) rolesMap[r.user_id] = [];
      rolesMap[r.user_id].push(r.role);
    });

    setProfiles(
      (profilesRes.data || []).map((p) => ({ ...p, roles: rolesMap[p.user_id] || [] }))
    );
    setArtists(artistsRes.data || []);
    setEvents(eventsRes.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const toggleFeatured = async (artistId: string, current: boolean | null) => {
    const { error } = await supabase.from("artists").update({ is_featured: !current }).eq("id", artistId);
    if (error) toast.error("Erro ao atualizar destaque.");
    else { toast.success("Destaque atualizado!"); fetchAll(); }
  };

  const togglePublished = async (eventId: string, current: boolean | null) => {
    const { error } = await supabase.from("events").update({ is_published: !current }).eq("id", eventId);
    if (error) toast.error("Erro ao atualizar publicação.");
    else { toast.success("Publicação atualizada!"); fetchAll(); }
  };

  const deleteEvent = async (eventId: string) => {
    if (!confirm("Tem certeza que deseja apagar este evento?")) return;
    const { error } = await supabase.from("events").delete().eq("id", eventId);
    if (error) toast.error("Erro ao apagar evento.");
    else { toast.success("Evento apagado!"); fetchAll(); }
  };

  const deleteArtist = async (artistId: string) => {
    if (!confirm("Tem certeza que deseja apagar este artista?")) return;
    const { error } = await supabase.from("artists").delete().eq("id", artistId);
    if (error) toast.error("Erro ao apagar artista.");
    else { toast.success("Artista apagado!"); fetchAll(); }
  };

  const handleCreateEvent = async () => {
    const { error } = await supabase.from("events").insert({
      title: newEvent.title,
      location: newEvent.location || null,
      description: newEvent.description || null,
      event_date: newEvent.event_date || null,
      venue: newEvent.venue || null,
      is_published: false,
      organizer_id: (await supabase.auth.getUser()).data.user?.id,
    });
    if (error) toast.error("Erro ao criar evento.");
    else {
      toast.success("Evento criado!");
      setShowNewEvent(false);
      setNewEvent({ title: "", location: "", description: "", event_date: "", venue: "" });
      fetchAll();
    }
  };

  const filtered = <T extends Record<string, any>>(items: T[], keys: string[]) =>
    items.filter((item) =>
      !search || keys.some((k) => String(item[k] || "").toLowerCase().includes(search.toLowerCase()))
    );

  const roleLabels: Record<string, string> = {
    artist: "Artista", promoter: "Promotor", partner: "Parceiro",
    benefactor: "Benfeitor", ambassador: "Embaixador", admin: "Admin",
  };

  const formatDate = (d: string | null) => d ? new Date(d).toLocaleDateString("pt-PT") : "—";

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Painel Administrativo
                </h1>
                <p className="text-muted-foreground mt-1">Gerir utilizadores, artistas, eventos e conteúdos</p>
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Pesquisar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Utilizadores", value: profiles.length, icon: Users },
                { label: "Artistas", value: artists.length, icon: Music },
                { label: "Eventos", value: events.length, icon: Calendar },
                { label: "Publicados", value: events.filter((e) => e.is_published).length, icon: Eye },
              ].map(({ label, value, icon: Icon }) => (
                <Card key={label} variant="elevated">
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{value}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="users" className="space-y-4">
              <TabsList className="bg-secondary">
                <TabsTrigger value="users" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Users className="w-4 h-4 mr-2" />Utilizadores
                </TabsTrigger>
                <TabsTrigger value="artists" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Music className="w-4 h-4 mr-2" />Artistas
                </TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Calendar className="w-4 h-4 mr-2" />Eventos
                </TabsTrigger>
              </TabsList>

              {/* Users Tab */}
              <TabsContent value="users">
                <Card variant="gold">
                  <CardHeader>
                    <CardTitle>Utilizadores Registados</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead>Roles</TableHead>
                          <TableHead>País</TableHead>
                          <TableHead>Cidade</TableHead>
                          <TableHead>Registo</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered(profiles, ["full_name", "country", "city"]).map((p) => (
                          <TableRow key={p.id}>
                            <TableCell className="font-medium">{p.full_name || "Sem nome"}</TableCell>
                            <TableCell>
                              <div className="flex gap-1 flex-wrap">
                                {p.roles.map((r) => (
                                  <Badge key={r} variant={r === "admin" ? "default" : "secondary"} className="text-xs">
                                    {roleLabels[r] || r}
                                  </Badge>
                                ))}
                                {p.roles.length === 0 && <span className="text-muted-foreground text-xs">Nenhum</span>}
                              </div>
                            </TableCell>
                            <TableCell>{p.country || "—"}</TableCell>
                            <TableCell>{p.city || "—"}</TableCell>
                            <TableCell>{formatDate(p.created_at)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Artists Tab */}
              <TabsContent value="artists">
                <Card variant="gold">
                  <CardHeader>
                    <CardTitle>Artistas</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nome</TableHead>
                          <TableHead>Género</TableHead>
                          <TableHead>Plano</TableHead>
                          <TableHead>Destaque</TableHead>
                          <TableHead>Registo</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered(artists, ["artist_name", "genre", "city"]).map((a) => (
                          <TableRow key={a.id}>
                            <TableCell className="font-medium">{a.artist_name}</TableCell>
                            <TableCell>{a.genre || "—"}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className="text-xs capitalize">{a.plan || "base"}</Badge>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleFeatured(a.id, a.is_featured)}
                                className={a.is_featured ? "text-primary" : "text-muted-foreground"}
                              >
                                {a.is_featured ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                              </Button>
                            </TableCell>
                            <TableCell>{formatDate(a.created_at)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" onClick={() => deleteArtist(a.id)} className="text-destructive hover:text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Events Tab */}
              <TabsContent value="events">
                <Card variant="gold">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Eventos</CardTitle>
                    <Dialog open={showNewEvent} onOpenChange={setShowNewEvent}>
                      <DialogTrigger asChild>
                        <Button variant="gold" size="sm"><Plus className="w-4 h-4 mr-2" />Novo Evento</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Criar Novo Evento</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Título *</Label>
                            <Input value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>Local</Label>
                              <Input value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                              <Label>Venue</Label>
                              <Input value={newEvent.venue} onChange={(e) => setNewEvent({ ...newEvent, venue: e.target.value })} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>Data</Label>
                            <Input type="datetime-local" value={newEvent.event_date} onChange={(e) => setNewEvent({ ...newEvent, event_date: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label>Descrição</Label>
                            <Textarea value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} />
                          </div>
                          <Button variant="gold" onClick={handleCreateEvent} disabled={!newEvent.title} className="w-full">Criar Evento</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Título</TableHead>
                          <TableHead>Local</TableHead>
                          <TableHead>Data</TableHead>
                          <TableHead>Publicado</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered(events, ["title", "location"]).map((ev) => (
                          <TableRow key={ev.id}>
                            <TableCell className="font-medium">{ev.title}</TableCell>
                            <TableCell>{ev.location || "—"}</TableCell>
                            <TableCell>{formatDate(ev.event_date)}</TableCell>
                            <TableCell>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => togglePublished(ev.id, ev.is_published)}
                                className={ev.is_published ? "text-primary" : "text-muted-foreground"}
                              >
                                {ev.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                              </Button>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" onClick={() => deleteEvent(ev.id)} className="text-destructive hover:text-destructive">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPage;
