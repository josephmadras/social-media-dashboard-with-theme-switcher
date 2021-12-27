import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
