import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    background-color: ${p => p.theme.colors.background};
    
    * {
      font-family: ${p => p.theme.fonts.body};
    }
  }
`;
