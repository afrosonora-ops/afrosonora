import { Instagram, Facebook } from "lucide-react";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/afro.sonora",
  facebook: "https://www.facebook.com/profile.php?id=61586604232083",
};

interface SocialLinksProps {
  size?: number;
  className?: string;
  itemClassName?: string;
}

const SocialLinks = ({ size = 20, className = "", itemClassName = "" }: SocialLinksProps) => {
  const items = [
    { href: SOCIAL_LINKS.instagram, label: "Instagram da AfroSonora", Icon: Instagram },
    { href: SOCIAL_LINKS.facebook, label: "Facebook da AfroSonora", Icon: Facebook },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${itemClassName}`}
        >
          <Icon size={size} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
