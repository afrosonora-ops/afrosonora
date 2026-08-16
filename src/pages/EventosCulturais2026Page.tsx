import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Globe, ExternalLink } from "lucide-react";
import heroImg from "@/assets/eventos-culturais-2026.webp";

interface CulturalEvent {
  name: string;
  country: string;
  city: string;
  description: string;
  dates: string;
  website: string;
  flag: string;
}

const events: CulturalEvent[] = [
  {
    name: "Afro-Pfingsten Festival",
    country: "Suíça",
    city: "Winterthur",
    description: "O maior festival suíço de culturas africanas e afro-americanas. Concertos, workshops de percussão e dança, cinema, mercado africano e debates desde 1991.",
    dates: "20 – 25 de Maio",
    website: "https://www.afro-pfingsten.ch",
    flag: "🇨🇭",
  },
  {
    name: "Africa Festival Würzburg",
    country: "Alemanha",
    city: "Würzburg",
    description: "O maior e mais antigo festival de música e cultura africana da Europa, desde 1989. Concertos ao ar livre, moda, gastronomia, cinema e workshops.",
    dates: "22 – 25 de Maio",
    website: "https://www.africafestival.org",
    flag: "🇩🇪",
  },
  {
    name: "Africa Oyé",
    country: "Reino Unido",
    city: "Liverpool (Sefton Park)",
    description: "O maior festival de música africana do Reino Unido, com Afrobeats, Reggae, Highlife, Soukous e Amapiano. Aldeia cultural, workshops e gastronomia.",
    dates: "20 – 21 de Junho",
    website: "https://www.africaoye.com",
    flag: "🇬🇧",
  },
  {
    name: "Afro Nation Portugal",
    country: "Portugal",
    city: "Portimão, Algarve",
    description: "O maior festival de Afrobeats do mundo. Participantes de mais de 180 países na Praia da Rocha com concertos, pool parties e festas de barco.",
    dates: "3 – 5 de Julho",
    website: "https://www.afronation.com",
    flag: "🇵🇹",
  },
  {
    name: "Afrika Tage Wien",
    country: "Áustria",
    city: "Viena (Ilha do Danúbio)",
    description: "11 dias de cultura africana com concertos ao vivo, workshops de percussão e dança, programa infantil e bazaar multicultural com gastronomia e têxteis.",
    dates: "14 – 24 de Agosto",
    website: "https://www.afrika-tage.at",
    flag: "🇦🇹",
  },
  {
    name: "Africolor",
    country: "França",
    city: "Paris e arredores",
    description: "Festival itinerante desde 1989 que celebra músicas africanas e da diáspora. Mais de 25 concertos em teatros e salas culturais da Île-de-France.",
    dates: "Novembro – Dezembro (a confirmar)",
    website: "https://www.africolor.com",
    flag: "🇫🇷",
  },
];

const EventosCulturais2026Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo title={"Eventos Culturais Africanos 2026 | AfroSonora"} description={"Agenda 2026 de eventos culturais e concertos de música afro na Europa promovidos pela AfroSonora: festivais, showcases e encontros da diáspora africana."} path="/eventos-culturais-2026" />

      {/* Hero */}
      <section className="relative pt-24">
        <div className="h-72 md:h-96 overflow-hidden">
          <img decoding="async" src={heroImg} alt="Eventos Culturais 2026" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative -mt-32 z-10 text-center pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-4">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Agenda 2026</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eventos de Cultura Africana <span className="text-gradient-gold">na Europa</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Festivais e espectáculos confirmados de Maio a Dezembro de 2026 em Portugal, França, Alemanha, Áustria, Suíça e Reino Unido.
          </p>
        </div>
      </section>

      {/* Timeline / Agenda */}
      <main className="pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="relative pl-16 md:pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                  <Card variant="elevated" className="hover:shadow-gold/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground">
                            {event.flag} {event.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5" /> {event.city}, {event.country}
                            </span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium whitespace-nowrap">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.dates}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <a
                        href={event.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline"
                      >
                        <Globe className="w-3.5 h-3.5" /> Visitar website <ExternalLink className="w-3 h-3" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="mt-12 p-6 rounded-xl bg-card border border-border text-center">
            <p className="text-muted-foreground text-sm">
              ⚠️ As datas podem estar sujeitas a alterações. Consulta os websites oficiais para confirmação de programação e bilhetes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventosCulturais2026Page;
