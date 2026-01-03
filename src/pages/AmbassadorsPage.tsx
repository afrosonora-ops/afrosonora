import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Globe, Users, Calendar, CheckCircle2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AmbassadorsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Candidatura enviada!",
      description: "Analisaremos a sua candidatura e entraremos em contacto.",
    });
    setFormData({ name: "", email: "", country: "", city: "", motivation: "" });
  };

  const benefits = [
    "Convites VIP para todos os eventos AFROSONORA",
    "Menção oficial como Embaixador",
    "Acesso antecipado a oportunidades",
    "Possibilidade de apoio em viagens (caso a caso)",
    "Rede exclusiva de contactos",
    "Participação em decisões estratégicas",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <Award className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Programa de Embaixadores</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Seja um <span className="text-gradient-gold">Embaixador</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se à nossa rede de líderes que ajudam a expandir a missão AFROSONORA globalmente.
            </p>
          </div>
          
          {/* What is */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="p-8 rounded-xl bg-charcoal border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                O que é um Embaixador AFROSONORA?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Os Embaixadores são pessoas apaixonadas pela cultura africana que nos ajudam a crescer a comunidade, 
                apoiar eventos e criar pontes em diferentes cidades e países. É um programa solidário, sem salário fixo, 
                mas com benefícios exclusivos e a oportunidade de fazer parte de algo significativo.
              </p>
            </div>
          </div>
          
          {/* Roles */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
              O que fazem os <span className="text-gradient-gold">Embaixadores</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="gold" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Comunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ajudam a crescer a comunidade AFROSONORA na sua região, conectando artistas e promotores.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="gold" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Eventos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Participam na criação e apoio de eventos locais, representando a AFROSONORA.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card variant="gold" className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-gold" />
                  </div>
                  <CardTitle className="text-xl">Expansão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Representam a marca e missão AFROSONORA em diferentes países e contextos.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Benefits & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Benefícios de ser Embaixador
              </h2>
              <div className="p-6 rounded-xl bg-charcoal border border-border">
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-gold/10 border border-gold/30">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota:</strong> Este é um programa solidário. 
                  Não há salário fixo, mas há possibilidade de apoio em viagens e despesas caso a caso.
                </p>
              </div>
            </div>
            
            {/* Application Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Candidatura
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      placeholder="O seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      País
                    </label>
                    <Input
                      type="text"
                      placeholder="Portugal"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cidade
                    </label>
                    <Input
                      type="text"
                      placeholder="Lisboa"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                      className="bg-card border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Porque quer ser Embaixador?
                  </label>
                  <Textarea
                    placeholder="Conte-nos a sua motivação e como gostaria de contribuir..."
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    required
                    rows={5}
                    className="bg-card border-border resize-none"
                  />
                </div>
                
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  Enviar Candidatura <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AmbassadorsPage;
