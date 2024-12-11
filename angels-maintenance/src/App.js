import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AngelsCleaning from "./pages/AngelsCleaning";
import AngelsLawn from "./pages/AngelsLawn";
import AngelsRemodeling from "./pages/AngelsRemodeling";
import ScrollToTop from "./components/ScrollToTop";
import PlantNet from "./components/PlantNet";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<PlantNet />} />
        <Route path="/cleaning" element={<AngelsCleaning />} />
        <Route path="/lawn" element={<AngelsLawn />} />
        <Route path="/remodeling" element={<AngelsRemodeling />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
