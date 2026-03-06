import React from "react";
import Layout from "@theme/Layout";
import { Hero } from "../components/homepage/Hero";
import { FlipDotMetrics } from "../components/homepage/FlipDotMetrics";
import { TimelineScrubber } from "../components/homepage/TimelineScrubber";
import { GreatestHits } from "../components/homepage/GreatestHits";
import { BeyondTheCode } from "../components/homepage/BeyondTheCode";
import { Testimonials } from "../components/homepage/Testimonials";
import { CommandPalette } from "../components/homepage/CommandPalette";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Vipul Gupta - Product Engineer, Open Source Leader, Global Nomad"
        description="Vipul Gupta (vipulgupta2048) is a GitHub Star building hardware testing infrastructure, scaling developer communities, and creating documentation systems. Nine years shipping open source."
        keywords={[
          "Vipul Gupta",
          "vipulgupta2048",
          "GitHub Star",
          "open source engineer",
          "product engineer",
          "developer communities",
          "hardware testing",
          "documentation systems",
        ]}
      />
      <Layout>
        <Hero />
        <main>
          <FlipDotMetrics />
          <TimelineScrubber />
          <GreatestHits />
          <BeyondTheCode />
          <Testimonials />
        </main>
        <CommandPalette />
      </Layout>
    </>
  );
}
