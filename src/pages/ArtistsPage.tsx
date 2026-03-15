import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Music, Filter, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import musicosDestaque1 from "@/assets/musicos-destaque-1.jpg";
import musicosDestaque2 from "@/assets/musicos-destaque-2.jpg";
import musicosDestaque3 from "@/assets/musicos-destaque-3.png";
import musicosDestaque4 from "@/assets/musicos-destaque-4.png";

const genres = ["Todos", "Afrobeat", "Afrobeats", "Afropop", "Highlife", "Mbalax", "Mandingue", "World Music", "Kizomba", "Semba", "Kuduro"];
const countries = ["Todos", "Angola", "Benim", "Cabo Verde", "Gana", "Mali", "Moçambique", "Nigéria", "Senegal", "Guiné-Bissau"];

const highlightImages = [
  { src: musicosDestaque1, alt: "Artistas AfroSonora ao vivo" },
  { src: musicosDestaque2, alt: "Sessão de estúdio" },
  { src: musicosDestaque3, alt: "Palco AfroSonora" },
  { src: musicosDestaque4, alt: "Conexão África-Europa" },
];

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Tables<"artists">[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");

  useEffect(() => {
    const fetchArtists = async () => {
      const { data } = await supabase.from("artists").select("*").order("created_at", { ascending: false });
      setArtists(data || []);
      setLoading(false);
    };
    fetchArtists();
  }, []);

  const filteredArtists = artists.filter((artist) => {
    const matchesSearch = artist.artist_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "Todos" || artist.genre === selectedGenre;
    const matchesCountry = selectedCountry === "Todos" || artist.country === selectedCountry;
    return matchesSearch && matchesGenre && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Descubra os Nossos <span className="text-gradient-gold">Músicos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Esta página é dedicada a <span className="text-gold font-semibold">músicos, cantores, artistas e potenciais ídolos musicais</span>. 
              Explore o talento africano autêntico por género, país ou nome. Nós acreditamos no vosso talento!
            </p>
          </div>

          {/* Highlight images – page in update */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
                🎶 Página em atualização — novos músicos em breve!
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {highlightImages.map((img, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input type="text" placeholder="Pesquisar músicos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-card border-border" />
              </div>
              <div className="relative">
                <Music className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="w-full md:w-48 h-10 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring">
                  {genres.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full md:w-48 h-10 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring">
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="text-gold font-semibold">{filteredArtists.length}</span> músicos encontrados
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-16">
              <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtists.map((artist, index) => (
                <div key={artist.id} className="block animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <Card variant="elevated" className="group overflow-hidden hover:-translate-y-2 transition-all duration-300">
                    <div className="aspect-square relative overflow-hidden bg-secondary">
                      {artist.avatar_url ? (
                        <img src={artist.avatar_url} alt={artist.artist_name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <User className="w-16 h-16 text-muted-foreground" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                        {artist.artist_name}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Music className="w-4 h-4" />
                          {artist.genre || "—"}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {artist.country || "—"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          {!loading && filteredArtists.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nenhum músico encontrado</h3>
              <p className="text-muted-foreground mb-6">Tente ajustar os seus filtros ou seja o primeiro a registar-se!</p>
              <Button variant="goldOutline" onClick={() => { setSearchQuery(""); setSelectedGenre("Todos"); setSelectedCountry("Todos"); }}>
                Limpar Filtros
              </Button>
            </div>
          )}

          <div className="text-center mt-16 p-8 rounded-xl bg-charcoal border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">É músico e quer aparecer aqui?</h3>
            <p className="text-muted-foreground mb-6">Crie o seu perfil na AFROSONORA e conecte-se com promotores europeus.</p>
            <Link to="/registo"><Button variant="gold" size="lg">Criar Perfil de Músico</Button></Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistsPage;
