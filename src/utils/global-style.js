import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
	  height: 100vh;
	}
	
	body {
	  margin: 0;
		font-size: ${({ theme }) => theme.fontSize.body.md};
		font-family: ${({ theme }) => theme.fonts.primary};
	}

  :root {
    font-size: 60.5%;
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
