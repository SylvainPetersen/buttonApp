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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FluentProvider theme={webLightTheme} style={{ height: "100%" }}>
    <App />
  </FluentProvider>
);
