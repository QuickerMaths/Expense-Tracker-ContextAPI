import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";

import { GlobalProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
