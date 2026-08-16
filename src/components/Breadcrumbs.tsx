import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import type { Crumb } from "@/components/Seo";

interface BreadcrumbsProps {
  /** Trail without the "Início" root — it is added automatically. */
  items: Crumb[];
  className?: string;
}

/**
 * Visual breadcrumb trail. Pair it with <Seo breadcrumbs={items} /> so the
 * same trail is also emitted as BreadcrumbList structured data.
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  if (!items.length) return null;

  return (
    <nav aria-label="Caminho de navegação" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
              {isLast ? (
                <span className="text-foreground/90" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link to={item.path} className="hover:text-gold transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
