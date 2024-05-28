import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import APropos from "./pages/APropos";
import Banner from "./components/Banner";
import Error404 from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
