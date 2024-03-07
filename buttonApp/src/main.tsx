import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import './index.css'
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import global_en from "./shared/components/i18n/translations/en/global.json";
import global_da from "./shared/components/i18n/translations/da/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "Dansk",
  resources: {
    Dansk: {
      global: global_da,
    },
    English: {
      global: global_en,
    },
  },
});

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <FluentProvider theme={webLightTheme} style={{ height: "100%" }}>
//     <App />
//   </FluentProvider>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FluentProvider theme={webLightTheme} style={{ height: "100%" }}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </FluentProvider>
);
