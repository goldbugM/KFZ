const SiteFooter = () => {
  return (
    <footer id="kontakt" className="border-t border-border/60 bg-background">
      <div className="container mx-auto grid gap-8 px-4 py-12 sm:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl">Kontakt</h3>
          <p className="mt-2 text-muted-foreground">Frankfurt am Main · Rhein-Main-Region</p>
          <div className="mt-4 space-y-1 text-sm">
            <p><a href="tel:+496912345678" className="hover:underline">+49 (69) 123 45 678</a> · 24/7 Notfall</p>
            <p><a href="mailto:service@kfz-expert-frankfurt.de" className="hover:underline">service@kfz-expert-frankfurt.de</a></p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl">Warum wir?</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Unabhängig & zertifiziert</li>
            <li>24–48h Gutachten, digital signiert</li>
            <li>Transparente Festpreise</li>
            <li>Rechtssichere Dokumentation</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} KFZ Expert Frankfurt · Alle Rechte vorbehalten
      </div>
    </footer>
  );
};

export default SiteFooter;
