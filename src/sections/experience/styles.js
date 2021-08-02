import styled from "styled-components";

export const ContainerTimeline = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerItemTimeline = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3em 2em 2em;
  position: relative;
  max-width: 378px;

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
    height: 90%;
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