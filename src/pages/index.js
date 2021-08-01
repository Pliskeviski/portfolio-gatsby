import React from "react";
import { PageContainer } from "@components/page-container";
import { HeroSection } from "@sections/hero";
import { AboutSection } from "../sections/about";

const IndexPage = () => {
  return (
    <PageContainer>
      <HeroSection />
      <AboutSection />
    </PageContainer>
  );
};

export default IndexPage;
