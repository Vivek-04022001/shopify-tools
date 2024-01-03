import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AfterSalesProvider } from "./context/AfterSalesContext.jsx";
import { FindWinningProductProvider } from "./context/FindWinningProductContext.jsx";
import { DarkModeProvider } from "./context/DarkMode.jsx";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <AfterSalesProvider>
          <FindWinningProductProvider>

          <App />
          </FindWinningProductProvider>
        </AfterSalesProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
