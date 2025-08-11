import hero from "@/assets/hero-frankfurt-futurist.jpg";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroFuturist = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={hero} 
          alt="Futuristische Skyline Frankfurt am Main mit Lichtspuren" 
          className="h-full w-full object-cover object-center" 
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/90" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), hsl(var(--sidebar-ring) / 0.15), transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-32 lg:py-40 flex items-center min-h-[80vh] lg:min-h-[90vh]">
        <div className="max-w-4xl animate-enter">
          <p className="mb-4 inline-block rounded-full border border-border/60 bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md">
            Unabhängig · TÜV · Frankfurt am Main
          </p>
          <h1 className="font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-foreground">
            PSB Rhein-Main — Kfz Gutachter & TÜV Service
          </h1>
          <p className="mt-6 text-xl text-muted-foreground sm:text-2xl lg:text-2xl max-w-3xl">
            Transparent, rechtssicher und schnell – digitale Abwicklung, 24–48h Gutachten und zertifizierte Expertise für Versicherung, Kauf/Verkauf und Zulassung.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#kontakt">Schnellen Termin buchen</a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#leistungen">Kostenlose Erstberatung</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFuturist;
