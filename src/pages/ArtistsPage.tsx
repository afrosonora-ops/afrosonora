import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";
import musicosDestaque1 from "@/assets/musicos-destaque-1.webp";
import musicosDestaque2 from "@/assets/musicos-destaque-2.webp";

const genres = ["Todos", "Afrobeat", "Afrobeats", "Afropop", "Highlife", "Mbalax", "Mandingue", "World Music", "Kizomba", "Semba", "Kuduro"];
const countries = ["Todos", "Angola", "Benim", "Cabo Verde", "Gana", "Mali", "Moçambique", "Nigéria", "Senegal", "Guiné-Bissau"];

const highlightImages = [
  { src: musicosDestaque1, alt: "Artistas AfroSonora ao vivo" },
  { src: musicosDestaque2, alt: "Sessão de estúdio" },
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

const artistsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: "https://afrosonora.lovable.app/artistas",
  name: "Músicos africanos e da diáspora na AfroSonora",
  inLanguage: "pt-PT",
  description:
    "Diretório exclusivo de músicos, bandas e DJs de música afro. Os perfis e contactos dos artistas estão disponíveis apenas para promotores e agências credenciadas durante a fase de lançamento.",
  isPartOf: { "@id": "https://afrosonora.lovable.app/#website" },
  publisher: { "@id": "https://afrosonora.lovable.app/#organization" },
};

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    () => new URLSearchParams(window.location.search).get("q") ?? ""
  );
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
      <Seo
        title={"Músicos Afro | Acesso Exclusivo para Promotores e Agências | AfroSonora"}
        description={"Diretório exclusivo de músicos africanos e da diáspora na AfroSonora. Durante a fase de lançamento, os perfis e contactos dos artistas estão disponíveis apenas para promotores e agências credenciadas."}
        path="/artistas"
        jsonLd={artistsJsonLd}
      />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs />
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Músicos Afro <span className="text-gradient-gold">em Curadoria</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
              A AfroSonora está a construir uma comunidade exclusiva de artistas africanos e da diáspora.
              Durante esta fase de lançamento, os perfis e contactos dos músicos só estão disponíveis para
              <span className="text-gold font-semibold"> promotores e agências credenciadas</span>.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium">
              <Lock className="w-4 h-4" aria-hidden="true" />
              Acesso exclusivo para promotores e agências neste momento
            </div>
          </div>

          {/* Highlight images — two only, curated preview */}
          <div className="max-w-4xl mx-auto mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ainda não existem perfis públicos</h3>
              <p className="text-muted-foreground mb-2">
                Estamos a preparar e validar os primeiros artistas. Os perfis serão publicados em breve.
              </p>
              <p className="text-muted-foreground mb-6">
                Se é promotor ou agência, registe-se abaixo para aceder antecipadamente às informações.
              </p>
              <Button variant="goldOutline" onClick={clearFilters}>
                Limpar Filtros
              </Button>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-16">
            <div className="text-center p-8 rounded-xl bg-charcoal border border-border">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">É músico e quer aparecer aqui?</h3>
              <p className="text-muted-foreground mb-6">
                Crie o seu perfil na AFROSONORA e conecte-se com promotores europeus. Será analisado antes de ser publicado.
              </p>
              <Link to="/registo">
                <Button variant="goldOutline" size="lg">Criar Perfil de Músico</Button>
              </Link>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-gold/30">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">É promotor ou agência?</h3>
              <p className="text-muted-foreground mb-6">
                Registe-se na AFROSONORA para aceder antecipadamente aos perfis, contactos e portefólios dos artistas afro.
              </p>
              <Link to="/registo">
                <Button variant="gold" size="lg">Registar como Promotor</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistsPage;
