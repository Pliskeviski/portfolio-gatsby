import styled from "styled-components";

export const SubTitleSkills = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 30px;
  font-weight: 800;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillLabel = styled.h6`
  margin-top: 0;
  margin-bottom: 7px;
  font-size: ${({ theme }) => theme.fontSize.body.xl};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const SkillsProgressContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProgressBar = styled.div`
  height: 25px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 25px;
  padding: 2px;
  width: 100%;
`;

export const InnerProgress = styled.span`
  background-color: ${({ theme }) => theme.colors.light};
  display: block;
  height: 100%;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  top: 50%;
  transform: translateY(-50%);

  width: ${({ progress }) => `${progress}`};
`;

export const ProgressValue = styled.div`
  align-self: center;
  padding-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
`;

export const FamiliarWithText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.body.sm};
  font-weight: bold;
  margin-top: 20px;
`;

export const FamiliarWithLanguages = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.body.xs};
`;
