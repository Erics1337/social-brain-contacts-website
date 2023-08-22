import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Features from "@/components/features";
import Contact from "@/components/contact";
import OpenSource from "@/components/openSource";
import KickstarterCampaign from "@/components/kickstarter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Features />
      <KickstarterCampaign />
      <OpenSource />
      <Contact />
    </main>
  );
}
