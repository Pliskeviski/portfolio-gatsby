import styled from "styled-components";

export const StyledContentContainer = styled.div`
  flex: 1;
  padding-top: 3%;
  background-color: ${({ theme, background }) => theme.colors[background]};
  color: ${({ theme, background }) =>
    theme.colors[background === "dark" ? "light" : "dark"]};
`;

export const Content = styled.div`
  max-width: 50%;
  min-width: 298px;
  margin: auto;
  font-size: ${({ theme }) => theme.fontSize.body.md};
`;

export const ContainerTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.title};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-top: 0;
`;
