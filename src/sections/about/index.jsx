import React, { useCallback, useMemo } from "react";
import { SectionContainer } from "@components/section-container";
import { ContentContainer } from "@components/content-container";

import {
  FamiliarWithLanguages,
  FamiliarWithText,
  InnerProgress,
  ProgressBar,
  ProgressValue,
  SkillContainer,
  SkillLabel,
  SkillsContainer,
  SkillsProgressContainer,
  SubTitleSkills,
} from "./styles";

export const AboutSection = () => {
  const aboutMeText = useMemo(() => {
    return <>
      I’m Gustavo Pliskeviski, a full-stack developer from Curitiba, Brazil.
      Currently, I’m working at HomeFromCollege with React.JS and Node.JS.
      I’ve learned a lot throughout the years in the tech industry with different projects, ranging from small to large clients. <br />
      Oh, and also, I’m a design enthusiast!
    </>;
  }, []);

  const skills = useMemo(() => {
    return [
      {
        label: "ReactJS",
        value: "90%",
      },
      {
        label: ".NET Core",
        value: "88%",
      },
      {
        label: "Angular",
        value: "86%",
      },
      {
        label: "HTML & CSS",
        value: "96%",
      },
      {
        label: "React Native",
        value: "80%",
      },
    ];
  }, []);

  const RenderItemSkills = useCallback(({ skill }) => {
    const { label, value } = skill;

    return (
      <SkillContainer>
        <SkillLabel>{label}</SkillLabel>
        <SkillsProgressContainer>
          <ProgressBar>
            <InnerProgress progress={value} />
          </ProgressBar>
          <ProgressValue>{value}</ProgressValue>
        </SkillsProgressContainer>
      </SkillContainer>
    );
  }, []);

  return (
    <SectionContainer>
      <ContentContainer title="About me" background="dark">
        {aboutMeText}
      </ContentContainer>
      <ContentContainer title="Technologies" background="light">
        <SubTitleSkills>How confident I fell about:</SubTitleSkills>

        <SkillsContainer>
          {skills.map((skill) => (
            <RenderItemSkills key={skill.label} skill={skill} />
          ))}
        </SkillsContainer>

        <FamiliarWithText>But I&apos;m also familiar with:</FamiliarWithText>
        <FamiliarWithLanguages>
          C++, VueJS, OpenGL, NodeJS, Ruby on Rails and many others!
        </FamiliarWithLanguages>
      </ContentContainer>
    </SectionContainer>
  );
};
