import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { ContactCta } from "@/components/home/ContactCta";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSlider } from "@/components/home/HeroSlider";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyInditechies } from "@/components/home/WhyInditechies";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Technology partner for modern businesses",
  description:
    "Inditechies delivers software engineering, applied AI, cloud platforms, and consulting that stays accountable through delivery.",
  path: "/",
});

export default function Home() {
  return (
    <main id="main">
      <HeroSlider />
      <ServicesOverview />
      <CapabilitiesSection />
      <FeaturedProjects />
      <IndustriesSection />
      <WhyInditechies />
      <InsightsPreview />
      <ContactCta />
    </main>
  );
}
