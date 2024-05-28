import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "../components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import APropos from "./APropos";
import Banner from "./Banner";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/APropos" element={<APropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
