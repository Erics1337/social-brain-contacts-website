import Image from "next/image";

import HeroSection from "@/components/hero-section";
import Content from "@/components/content";
import Features from "@/components/features";
import Contact from "@/components/contact";
import OpenSource from "@/components/openSource";
import KickstarterCampaign from "@/components/kickstarter";
import BetaCampaignLaunch from "@/components/beta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Content />
      <Features />
      <BetaCampaignLaunch />
      <OpenSource />
      {/* <KickstarterCampaign /> */}
      <Contact />
    </main>
  );
}
