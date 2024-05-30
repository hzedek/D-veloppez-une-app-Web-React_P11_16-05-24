import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Error404 from "./pages/404";
import Estate from "./pages/Estate";
import APropos from "./pages/APropos";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/estate/:id" element={<Estate />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
