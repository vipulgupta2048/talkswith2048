import React from "react";
import Layout from "@theme/Layout";
import { AchievementCards } from "../components/homepage/AchievementCards";
import { FeaturedProjects } from "../components/homepage/FeaturedProjects";
import { Hero } from "../components/homepage/Hero";
import IntroSection from "../components/homepage/IntroSection";
import { Testimonials } from "../components/homepage/Testimonials";
import { TimelineScrubber } from "../components/homepage/TimelineScrubber";
import { BlueprintShowcase } from "../components/homepage/BlueprintShowcase";
import { FlipDotMetrics } from "../components/homepage/FlipDotMetrics";
import { HumanSection } from "../components/homepage/HumanSection";
import { CommandPalette } from "../components/homepage/CommandPalette";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Vipul Gupta - Product Owner, Engineer, Open Source Contributor"
        description="Vipul Gupta (vipulgupta2048) is a GitHub Star building hard-tech systems, contributing to open source since 2016, and organizing developer communities."
        keywords={[
          "Vipul Gupta",
          "vipulgupta2048",
          "GitHub Star",
          "open source engineer",
          "hard-tech products",
          "developer education",
          "supply chain security",
        ]}
      />
      <Layout>
        <Hero />
        <main>
          <FlipDotMetrics />
          <BlueprintShowcase />
          <TimelineScrubber />
          <IntroSection />
          <AchievementCards />
          <FeaturedProjects />
          <HumanSection />
          <Testimonials />
        </main>
        <CommandPalette />
      </Layout>
    </>
  );
}
