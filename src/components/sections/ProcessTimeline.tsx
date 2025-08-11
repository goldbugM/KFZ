import { ChevronRight } from "lucide-react";

const steps = [
  {
    t: "Kontakt",
    d: "Schaden/Anliegen kurz schildern – sofortige Terminvergabe (telefonisch oder online).",
  },
  { t: "Vor-Ort oder Remote", d: "Begutachtung bei Ihnen, in der Werkstatt oder über digitale Einreichung." },
  { t: "Gutachten 24–48h", d: "Rechtssicheres, nachvollziehbares Gutachten – inkl. Fotodoku & Kalkulation." },
  { t: "Unterstützung", d: "Begleitung bei Versicherung, Regulierung, Verkauf/Kauf & TÜV-Abstimmung." },
];

const ProcessTimeline = () => {
  return (
    <section id="ablauf" className="container mx-auto px-4 py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="font-display text-3xl">So einfach funktioniert's</h2>
        <p className="mt-2 text-muted-foreground">Klare Schritte, klare Ergebnisse – ohne Umwege.</p>
      </div>
      <ol className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={i} className="group rounded-lg border border-border/60 bg-card/60 p-6 backdrop-blur-md">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-semibold">{i + 1}</div>
              <div>
                <h3 className="text-lg font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                <ChevronRight className="mt-3 h-4 w-4 opacity-60 transition group-hover:translate-x-1" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProcessTimeline;
