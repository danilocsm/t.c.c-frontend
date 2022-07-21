import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import logoutService from "./lib/services/logout.service";

window.onunload = async () => {
  await logoutService();
  sessionStorage.clear();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
