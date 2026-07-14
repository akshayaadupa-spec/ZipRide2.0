import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RideProvider } from "./assets/RideContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RideProvider>
      <App />
    </RideProvider>
  </React.StrictMode>
);