import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  min-height: 100vh;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
	}
`;
