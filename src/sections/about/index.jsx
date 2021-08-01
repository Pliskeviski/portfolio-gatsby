import React, { useMemo } from "react";
import { SectionContainer } from "@components/section-container";
import { ContentContainer } from "../../components/content-container";

export const AboutSection = () => {
  const aboutMeText = useMemo(() => {
    return `I’m Gustavo Pliskeviski, a full-stack developer based in Curitiba, Brazil.
            Currently, I'm working at VanHack, focusing more on the front-end side.
            I've learned a lot throughout the years in the tech industry with different projects and clients.
            I’m also a design enthusiast living in Curitiba, Brazil.`;
  }, []);

  return (
    <SectionContainer>
      <ContentContainer title="About me" background="dark">
        {aboutMeText}
      </ContentContainer>
      <ContentContainer title="Technologies" background="light">
        a
      </ContentContainer>
    </SectionContainer>
  );
};
