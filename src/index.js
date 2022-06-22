import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import "./components/layout/layout.css";
import "./components/Home/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

//CSS con módulos React-bootstrap y bootstrap (no usa enlaces al CDN ni otros links a temas de bootstrap en el index)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
