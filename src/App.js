import React, { useEffect } from "react";
import "./style/reset.css";
import { Provider } from "mobx-react";
import incomesStore from "./stores/IncomesStore";
import MyIncomes from "./screens/MyIncomes";
import BaseLayout from "./sharedComponents/BaseLayout";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import "numeral/locales/pt-br";
import numeral from "numeral";
import { GlobalStyle } from "./style/GlobalStyle";

export function configureLocale() {
  numeral.locale("pt-br");
}

function App() {
  useEffect(configureLocale, []);

  return (
    <Provider {...{ incomesStore }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BaseLayout>
          <MyIncomes />
        </BaseLayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
