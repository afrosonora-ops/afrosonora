import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { getTrail, type Crumb } from "@/lib/breadcrumbTrails";

interface BreadcrumbsProps {
  /** Trail without the "Início" root. Defaults to the trail of the current route. */
  items?: Crumb[];
  className?: string;
}

/**
 * Visual breadcrumb trail. The matching BreadcrumbList structured data is
 * emitted by <Seo /> for the same route.
 */
const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  const trail = items ?? getTrail(pathname);
  if (!trail.length) return null;

  return (
    <nav aria-label="Caminho de navegação" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-gold transition-colors">
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
        </li>
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
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
