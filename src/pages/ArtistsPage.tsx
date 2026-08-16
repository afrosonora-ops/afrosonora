import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Search, MapPin, Music, Filter, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";
import musicosDestaque1 from "@/assets/musicos-destaque-1.webp";
import musicosDestaque2 from "@/assets/musicos-destaque-2.webp";
import musicosDestaque3 from "@/assets/musicos-destaque-3.webp";
import musicosDestaque4 from "@/assets/musicos-destaque-4.webp";

const genres = ["Todos", "Afrobeat", "Afrobeats", "Afropop", "Highlife", "Mbalax", "Mandingue", "World Music", "Kizomba", "Semba", "Kuduro"];
const countries = ["Todos", "Angola", "Benim", "Cabo Verde", "Gana", "Mali", "Moçambique", "Nigéria", "Senegal", "Guiné-Bissau"];

const highlightImages = [
  { src: musicosDestaque1, alt: "Artistas AfroSonora ao vivo" },
  { src: musicosDestaque2, alt: "Sessão de estúdio" },
  { src: musicosDestaque3, alt: "Palco AfroSonora" },
  { src: musicosDestaque4, alt: "Conexão África-Europa" },
];

type Artist = Tables<"artists">;

const ArtistCard = memo(({ artist, index }: { artist: Artist; index: number }) => (
  <div className="block animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
    <Card variant="elevated" className="group overflow-hidden hover:-translate-y-2 transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-secondary">
        {artist.avatar_url ? (
          <img decoding="async" loading="lazy" src={artist.avatar_url} alt={artist.artist_name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <User className="w-16 h-16 text-muted-foreground" aria-hidden="true" />
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
            <Music className="w-4 h-4" aria-hidden="true" />
            {artist.genre || "—"}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            {artist.country || "—"}
          </span>
        </div>
      </CardContent>
    </Card>
  </div>
));
ArtistCard.displayName = "ArtistCard";

const ArtistsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: 8 }).map((_, i) => (
      <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
        <Skeleton className="aspect-square w-full rounded-none" />
        <div className="p-4 space-y-3">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    ))}
  </div>
);

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");
  const { toast } = useToast();

  useEffect(() => {
    let active = true;
    const fetchArtists = async () => {
      try {
        const { data, error } = await supabase
          .from("artists")
          .select(
            "id, user_id, artist_name, genre, country, city, bio, avatar_url, cover_url, is_featured, plan, spotify_url, youtube_url, instagram_url, portfolio_url, created_at, updated_at"
          )
          .order("created_at", { ascending: false })
          .limit(200);
        if (error) throw error;
        if (active) setArtists(data || []);
      } catch {
        if (active) {
          toast({
            title: "Não foi possível carregar os músicos",
            description: "Verifique a sua ligação à internet e tente novamente.",
            variant: "destructive",
          });
        }
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchArtists();
    return () => {
      active = false;
    };
  }, [toast]);

  const filteredArtists = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return artists.filter((artist) => {
      const matchesSearch = artist.artist_name.toLowerCase().includes(q);
      const matchesGenre = selectedGenre === "Todos" || artist.genre === selectedGenre;
      const matchesCountry = selectedCountry === "Todos" || artist.country === selectedCountry;
      return matchesSearch && matchesGenre && matchesCountry;
    });
  }, [artists, searchQuery, selectedGenre, selectedCountry]);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedGenre("Todos");
    setSelectedCountry("Todos");
  }, []);


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Músicos Africanos | AfroSonora"} description={"Descubra músicos, cantores e bandas africanas na AfroSonora. Filtre por género musical, país ou nome e ligue-se a promotores europeus."} path="/artistas" />
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
                  <img decoding="async" loading="lazy" src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <Input type="text" aria-label="Pesquisar músicos" placeholder="Pesquisar músicos..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 min-h-11 bg-card border-border" />
              </div>
              <div className="relative">
                <Music className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <select aria-label="Filtrar por género musical" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="w-full md:w-48 min-h-11 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {genres.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <select aria-label="Filtrar por país" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full md:w-48 min-h-11 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-8" aria-live="polite">
            <p className="text-muted-foreground">
              <span className="text-gold font-semibold">{filteredArtists.length}</span> músicos encontrados
            </p>
          </div>

          {loading ? (
            <ArtistsSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          )}

          {!loading && filteredArtists.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nenhum músico encontrado</h3>
              <p className="text-muted-foreground mb-6">Tente ajustar os seus filtros ou seja o primeiro a registar-se!</p>
              <Button variant="goldOutline" onClick={clearFilters}>
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
