import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RideProvider } from "./RideContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RideProvider>
      <App />
    </RideProvider>
  </React.StrictMode>
);