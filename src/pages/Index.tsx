import SiteHeader from "@/components/layout/SiteHeader";
import HeroFuturist from "@/components/sections/HeroFuturist";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import SiteFooter from "@/components/layout/SiteFooter";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KFZ Expert Frankfurt — Kfz Gutachter & TÜV Service",
  areaServed: "Frankfurt am Main, Rhein-Main",
  url: typeof window !== "undefined" ? window.location.href : "https://example.com/",
  telephone: "+49-69-12345678",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankfurt am Main",
    addressCountry: "DE",
  },
  sameAs: [],
  serviceType: [
    "Schadengutachten",
    "Wertgutachten",
    "Beweissicherung",
    "HU/AU Koordination"
  ],
};

const Index = () => {
  const canonical = typeof window !== "undefined" ? window.location.href : "https://example.com/";
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kfz Gutachter & TÜV Frankfurt | Unabhängig & schnell</title>
        <meta name="description" content="Unabhängiger Kfz Gutachter und TÜV-Service in Frankfurt am Main: schnelle Termine, transparente Gutachten, rechtssicher – für Versicherung, Kauf & Zulassung." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <SiteHeader />
      <main>
        <HeroFuturist />
        <section id="vorteile" className="container mx-auto px-4 py-10">
          <div className="rounded-xl border border-border/60 bg-card/60 p-6 text-center backdrop-blur-md">
            <p className="text-sm text-muted-foreground">
              Ziel: führender unabhängiger Kfz-Gutachter & TÜV-Service in Frankfurt am Main – kompromisslos unparteiisch, maximal schnell, zertifiziert und technisch modern.
            </p>
          </div>
        </section>
        <ServicesGrid />
        <ProcessTimeline />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
