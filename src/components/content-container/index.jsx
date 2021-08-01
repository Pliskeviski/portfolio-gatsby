import React from "React";
import { ContainerTitle, Content, StyledContentContainer } from "./styles";

export const ContentContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  const { background, title, children } = props;

  return (
    <StyledContentContainer background={background}>
      <Content>
        <ContainerTitle>{title}</ContainerTitle>
        {children}
      </Content>
    </StyledContentContainer>
  );
};
