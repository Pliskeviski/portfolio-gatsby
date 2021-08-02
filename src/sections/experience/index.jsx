import React, { useMemo } from "react";
import { SectionContainer } from "@components/section-container";
import { ContentContainer } from "@components/content-container";

import {
  ContainerTimeline,
  ContainerItemTimeline,
  ItemTitle,
  ItemDescription,
} from "./styles";

export const ExperienceSection = () => {
  const experiences = useMemo(() => [
    {
      id: 0,
      company: 'Sisteplan Software.',
      period: 'Oct. 2018 - Oct. 2019.',
      description: 'Had the opportunity to work as a full stack developer using .NET Framework and Angular 6. Mainly working on government projects.'
    },
    {
      id: 1,
      company: 'AutoTech.',
      period: 'Oct. 2019 - Apr. 2020.',
      description: 'Working mainly as a front-end developer using Angular 8, AngularJS, .NET and ASP.NET MVC. Most projects were focused on auctions.'
    },
    {
      id: 2,
      company: 'Manipulaê.',
      period: 'Apr. 2020 - Feb. 2021.',
      description: 'Working remotely as a full-stack developer using ReactJS, React Native and .NET Core. Working on a SaaS project focused on pharmacies.'
    },
    {
      id: 3,
      company: 'VanHack.',
      period: 'Feb. 2021 - Present.',
      description: 'Working remotely for a Canadian based company, using ReactJS and .NET Core.'
    },
  ], []);

  return (
    <SectionContainer>
      <ContentContainer title="Experiences" background="dark">
        <ContainerTimeline>
          {experiences.map(({ id, company, period, description }) => (
            <ContainerItemTimeline key={`experience-${id}`}>
              <ItemTitle>
                {company}
                <br />
                {period}
              </ItemTitle>
              <ItemDescription>
                {description}
              </ItemDescription>
            </ContainerItemTimeline>
          ))}
        </ContainerTimeline>
      </ContentContainer>
      <ContentContainer title="Projects" background="light">
      </ContentContainer>
    </SectionContainer>
  );
};
