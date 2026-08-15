import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { staticEvents } from "@/data/eventsData";
import { ArrowLeft, Mail, CheckCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendFormEmail } from "@/lib/sendFormEmail";

const EventDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const event = staticEvents.find((e) => e.slug === slug);

  const [formData, setFormData] = useState({
    artistName: "",
    country: "",
    genre: "",
    message: "",
    link: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!event) return <Navigate to="/eventos" replace />;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendFormEmail({
        formType: `Candidatura – ${event.title}`,
        subject: event.emailSubject,
        name: formData.artistName,
        email: user?.email || "no-reply@afrosonora.com",
        fields: {
          "Nome artístico": formData.artistName,
          "País/Cidade": formData.country,
          "Género musical": formData.genre,
          "Link da música/vídeo": formData.link,
          Mensagem: formData.message,
        },
      });
      setSubmitted(true);
      toast({
        title: "Candidatura enviada!",
        description: "Recebemos a tua candidatura e entraremos em contacto.",
      });
    } catch (err: any) {
      toast({ title: "Erro ao enviar", description: err.message, variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Seo
        title={`${event.title} | AfroSonora`}
        description={event.shortDescription}
        path={`/eventos/${event.slug}`}
      />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back link */}
          <Link to="/eventos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar aos Eventos
          </Link>

          {/* Hero image */}
          <div className="rounded-xl overflow-hidden mb-10 h-64 md:h-80">
            <img decoding="async" loading="lazy" src={event.image} alt={event.title} className="w-full h-full object-cover" />
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {event.title}
          </h1>

          {/* Intro */}
          <div className="prose prose-invert max-w-none mb-10">
            {event.intro.split("\n").map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-3">
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          {event.sections.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
              <div className="space-y-2">
                {section.content.split("\n").map((line, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* How to participate */}
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Como participar</h2>
            <ul className="space-y-3">
              {event.howToParticipate.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-card border border-border">
              <p className="text-muted-foreground">
                📩 As submissões devem ser enviadas para:{" "}
                <a href="mailto:info@afrosonora.com" className="text-primary font-semibold hover:underline">
                  info@afrosonora.com
                </a>
              </p>
              <p className="text-muted-foreground mt-1">
                No assunto do email indicar: <strong className="text-foreground">{event.emailSubject}</strong>
              </p>
            </div>
          </div>

          {/* Participation Form - Auth Gated */}
          <div className="rounded-xl border border-border bg-card p-8" id="participar">
            <h2 className="font-display text-2xl font-bold text-foreground mb-2 flex items-center gap-3">
              <Send className="w-6 h-6 text-primary" />
              {event.buttonLabel}
            </h2>

            {!user ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-muted-foreground text-lg">
                  Para participar neste evento, precisas de ter uma conta AFROSONORA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/login">
                    <Button variant="gold" size="lg">Iniciar Sessão</Button>
                  </Link>
                  <Link to="/registo">
                    <Button variant="goldOutline" size="lg">Criar Conta</Button>
                  </Link>
                </div>
              </div>
            ) : submitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle className="w-16 h-16 text-primary mx-auto" />
                <h3 className="font-display text-xl font-bold text-foreground">Candidatura Preparada!</h3>
                <p className="text-muted-foreground">
                  O teu cliente de email foi aberto com os dados preenchidos. Envia o email para completar a tua candidatura.
                </p>
                <Button variant="goldOutline" onClick={() => setSubmitted(false)}>
                  Enviar Nova Candidatura
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="artistName">Nome artístico *</Label>
                    <Input
                      id="artistName"
                      required
                      maxLength={100}
                      value={formData.artistName}
                      onChange={(e) => setFormData({ ...formData, artistName: e.target.value })}
                      placeholder="O teu nome artístico"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">País / Cidade *</Label>
                    <Input
                      id="country"
                      required
                      maxLength={100}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Ex: Lisboa, Portugal"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="genre">Género musical</Label>
                    <Input
                      id="genre"
                      maxLength={100}
                      value={formData.genre}
                      onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                      placeholder="Ex: Afrobeats, Kizomba, Semba"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="link">Link da música / vídeo</Label>
                    <Input
                      id="link"
                      maxLength={500}
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      placeholder="URL do YouTube, SoundCloud, etc."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem / Apresentação *</Label>
                  <Textarea
                    id="message"
                    required
                    maxLength={2000}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Apresenta-te brevemente e descreve o teu projeto artístico..."
                  />
                </div>
                <Button type="submit" variant="gold" size="lg" className="w-full md:w-auto">
                  <Mail className="w-4 h-4" />
                  {event.buttonLabel}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetailPage;
