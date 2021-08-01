import styled from "styled-components";

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.h2`
  height: 40px;
  margin: 0;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.body.md};
  font-weight: 800;
`;

export const HeroContainer = styled.div`
  display: grid;
	align-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  height: calc(100vh - 40px);

  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.hero};
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  cursor: default;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.light};
`;
