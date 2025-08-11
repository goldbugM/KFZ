import { ShieldCheck, Clock, Building2, FileCheck2 } from "lucide-react";

const features = [
  {
    title: "Unabhängige Gutachten",
    desc: "Beweissicher, transparent und rechtssicher – akzeptiert von Versicherern und Gerichten.",
    icon: ShieldCheck,
  },
  {
    title: "Schnell: 24–48h",
    desc: "Express-Bearbeitung und digitale Abwicklung für minimale Ausfallzeiten.",
    icon: Clock,
  },
  {
    title: "Frankfurt & Rhein-Main",
    desc: "Vor-Ort-Service in Frankfurt am Main und Umgebung – flexibel und zuverlässig.",
    icon: Building2,
  },
  {
    title: "Zertifiziert & TÜV-nah",
    desc: "Zertifizierte Expertise, TÜV-Koordination und rechtssichere Dokumentation.",
    icon: FileCheck2,
  },
];

const ServicesGrid = () => {
  return (
    <section id="leistungen" className="container mx-auto px-4 py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-display text-3xl">Leistungen</h2>
        <p className="mt-2 text-muted-foreground">Alles für Schaden, Wert, Kauf/Verkauf und HU/AU-Koordination – aus einer Hand.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, icon: Icon }) => (
          <article key={title} className="glass-panel rounded-lg p-6 animate-fade-in">
            <Icon className="mb-3 h-6 w-6 text-primary" aria-hidden />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
