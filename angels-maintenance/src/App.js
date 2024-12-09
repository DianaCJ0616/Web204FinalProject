import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AngelsCleaning from "./pages/AngelsCleaning";
import AngelsLawn from "./pages/AngelsLawn";
import AngelsRemodeling from "./pages/AngelsRemodeling";
import "./styles/layout.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cleaning" element={<AngelsCleaning />} />
        <Route path="/lawn" element={<AngelsLawn />} />
        <Route path="/remodeling" element={<AngelsRemodeling />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
