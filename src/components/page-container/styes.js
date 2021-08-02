import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 10px;
  overflow: auto;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
  height: 100vh;

  ::-webkit-scrollbar {
    width: 6px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.indicator};
    border-radius: 25px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.indicator};
  }
`;
