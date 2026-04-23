import Script from "next/script";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Platform } from "@/components/sections/platform";
import { ImportGenius } from "@/components/sections/import-genius";
import { WhyZerox } from "@/components/sections/why-zerox";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Ticker } from "@/components/sections/ticker";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
  servicesJsonLd,
} from "@/lib/seo";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <Platform />
        <ImportGenius />
        <WhyZerox />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Ticker />
        <CTA />
      </main>
      <Footer />

      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd()) }}
      />
      <Script
        id="ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd()),
        }}
      />
      <Script
        id="ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": servicesJsonLd(),
          }),
        }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </>
  );
}
