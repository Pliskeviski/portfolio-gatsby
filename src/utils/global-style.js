import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
	  height: 100vh;
	}
	
	body {
	  margin: 0;
	}
	
	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
	  html,
	  body {
	    height: calc(100vh - 56px);
	  }
	}
	
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
	  :root {
	    font-size: 60%;
	  }
	}
	
	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
	  :root {
	    font-size: 50%;
	  }
	}
`;

export default GlobalStyles;
