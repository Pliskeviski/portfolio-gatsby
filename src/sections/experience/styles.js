import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
`;

export const ContainerTimeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerItemTimeline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3em 2em 2em;
  position: relative;
  max-width: 278px;

  &:before {
    width: 10px;
    height: 10px;
    display: block;
    top: 5px;
    position: absolute;
    left: -7px;
    border-radius: 10px;
    content: "";
    border: 2px solid ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.light};
  }

  &:after {
    content: "";
    width: 3px;
    height: 100%;
    left: -2px;
    top: 18px;
    position: absolute;
    background: ${({ theme }) => theme.colors.light};
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
`;

export const ItemTitle = styled.h6`
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
`;

export const ItemDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  font-weight: 800;
`;

export const ContainerGitHub = styled.div`
  flex: 1;
`;

export const CheckGitHubText = styled.p`
  padding-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  font-weight: 800;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const GitHubLink = styled.a``;

export const GitHubImage = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 100px;
  background: url(${({ src }) => src});
  margin: auto;
`;

export const GitHubName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding-top: 20px;
  font-weight: 900;
  text-align: center;
`;

export const EmailContact = styled.div`
  font-family: ${({ theme }) => theme.fonts.secondary};
  padding-top: 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.body.xs};
`;

export const LinkEmail = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ContainerContact = styled.div`
  flex: 0.4;
`;

export const FindMeOn = styled.p`
  margin: 0;
  font-weight: 800;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.body.md};
`;

export const ContainerSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  margin-top: 8px;

  > svg {
    cursor: pointer;
  }
`;