import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-lg tracking-wide">PSB Rhein-Main</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <a href="#leistungen" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Leistungen</a>
          <a href="#ablauf" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Ablauf</a>
          <a href="#vorteile" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Vorteile</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild variant="hero" size="sm">
            <a href="#kontakt">Jetzt Termin</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
