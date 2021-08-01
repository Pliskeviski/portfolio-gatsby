import React from "react";
import { SectionContainer } from "@components/section-container";
import {
  ContentContainer,
  HeaderContent,
  HeroContainer,
  HeroText,
} from "./styles";

export const HeroSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <HeaderContent>Gustavo Pliskeviski, Curitiba/PR, Brazil.</HeaderContent>
        <HeroContainer>
          <HeroText>HELLO</HeroText>
        </HeroContainer>
      </ContentContainer>
    </SectionContainer>
  );
};
