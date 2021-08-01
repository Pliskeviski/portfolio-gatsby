import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@utils/global-style";
import { theme } from "@utils/theme";
import { StyledContainer } from "./styes";

export const PageContainer = (props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledContainer {...props} />
  </ThemeProvider>
);
