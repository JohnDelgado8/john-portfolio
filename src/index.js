import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom"; // Use HashRouter instead of BrowserRouter
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
