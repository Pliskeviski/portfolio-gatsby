import React from "react";
import { PageContainer } from "@components/page-container";
import { HeroSection } from "@sections/hero";
import { AboutSection } from "../sections/about";
import { ExperienceSection } from "../sections/experience";

const IndexPage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </PageContainer>
  );
};

export default IndexPage;
