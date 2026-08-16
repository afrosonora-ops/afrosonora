import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { useLocation } from "react-router-dom";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  /** Meta description for this legal page. */
  description?: string;
}

const LegalPageLayout = ({ title, lastUpdated, children, description }: LegalPageLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Seo
        title={`${title} | AfroSonora`}
        description={description ?? `${title} da AfroSonora, a plataforma europeia de música afro e cultura africana.`}
        path={pathname}
      />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h1>
          <p className="text-muted-foreground text-sm mb-10">Última atualização: {lastUpdated}</p>
          <div className="prose prose-invert prose-sm max-w-none space-y-6 text-foreground/85 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_a]:text-primary [&_a]:underline">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
