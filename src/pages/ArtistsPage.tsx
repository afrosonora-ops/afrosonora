import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Music, Filter } from "lucide-react";

// Mock data for artists
const mockArtists = [
  {
    id: 1,
    name: "Amara Diallo",
    genre: "Afrobeat",
    country: "Senegal",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 2,
    name: "Kofi Mensah",
    genre: "Highlife",
    country: "Gana",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 3,
    name: "Fatou Keita",
    genre: "Mbalax",
    country: "Senegal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    available: false,
  },
  {
    id: 4,
    name: "Tunde Adebayo",
    genre: "Afrobeats",
    country: "Nigéria",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 5,
    name: "Yemi Alade",
    genre: "Afropop",
    country: "Nigéria",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 6,
    name: "Salif Keita",
    genre: "Mandingue",
    country: "Mali",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    available: true,
  },
  {
    id: 7,
    name: "Angélique Kidjo",
    genre: "World Music",
    country: "Benim",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    available: false,
  },
  {
    id: 8,
    name: "Fela Kuti Jr",
    genre: "Afrobeat",
    country: "Nigéria",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    available: true,
  },
];

const genres = ["Todos", "Afrobeat", "Afrobeats", "Afropop", "Highlife", "Mbalax", "Mandingue", "World Music"];
const countries = ["Todos", "Nigéria", "Senegal", "Gana", "Mali", "Benim", "Angola", "Cabo Verde"];

const ArtistsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedCountry, setSelectedCountry] = useState("Todos");

  const filteredArtists = mockArtists.filter((artist) => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "Todos" || artist.genre === selectedGenre;
    const matchesCountry = selectedCountry === "Todos" || artist.country === selectedCountry;
    return matchesSearch && matchesGenre && matchesCountry;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Descubra <span className="text-gradient-gold">Artistas</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore o talento africano autêntico. Encontre artistas por género, país ou nome.
            </p>
          </div>
          
          {/* Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Pesquisar artistas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border"
                />
              </div>
              
              {/* Genre Filter */}
              <div className="relative">
                <Music className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full md:w-48 h-10 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Country Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full md:w-48 h-10 pl-10 pr-4 rounded-md bg-card border border-border text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="text-gold font-semibold">{filteredArtists.length}</span> artistas encontrados
            </p>
          </div>
          
          {/* Artists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtists.map((artist, index) => (
              <Link 
                key={artist.id} 
                to={`/artista/${artist.id}`}
                className="block animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card variant="elevated" className="group overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {artist.available && (
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-green-500/90 text-xs font-medium text-primary-foreground">
                        Disponível
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
                      {artist.name}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Music className="w-4 h-4" />
                        {artist.genre}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {artist.country}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredArtists.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Nenhum artista encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar os seus filtros de pesquisa.
              </p>
              <Button 
                variant="goldOutline" 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedGenre("Todos");
                  setSelectedCountry("Todos");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
          
          {/* CTA */}
          <div className="text-center mt-16 p-8 rounded-xl bg-charcoal border border-border">
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">
              É artista e quer aparecer aqui?
            </h3>
            <p className="text-muted-foreground mb-6">
              Crie o seu perfil na AFROSONORA e conecte-se com promotores europeus.
            </p>
            <Link to="/registo">
              <Button variant="gold" size="lg">
                Criar Perfil de Artista
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArtistsPage;
