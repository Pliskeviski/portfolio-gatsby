import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@utils/global-style";
import { theme } from "@utils/theme";
import { StyledContainer } from "./styes";
import { Helmet } from "react-helmet";

export const PageContainer = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gustavo Pliskeviski - Portfolio</title>
      <link rel="canonical" href="https://pliskeviski.github.io/" />
    </Helmet>
    <StyledContainer {...props} />
  </ThemeProvider>
);
