import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../styles/layout.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const pageTitles = {
    "/": "Home Page",
    "/lawn": "Lawn",
    "/remodeling": "Construction",
    "/cleaning": "Cleaning",
  };

  const currentTitle = pageTitles[location.pathname] || "Home Page";
  const pageClass = location.pathname.replace("/", "") || "home";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);   
  };

  return (
    <header className="home-head">
      <div className="bar-stuff">
        <div className="hamburger">
        <p className={`page-title ${pageClass}`}>{currentTitle}</p>
          <div className="bar-center">
            <img
              src={`${process.env.PUBLIC_URL}/AngelLawnMaintenanceLogo.png`}
              alt="Angel's Lawn Maintenance Logo"
              className="logo"
            />
          </div>
          <button className="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
        <nav id="myLinks" style={{ display: menuOpen ? "block" : "none" }}>
          <Link to="/">Home Menu</Link>
          <Link to="/lawn">Angel's Lawn Maintenance</Link>
          <Link to="/remodeling">Angel's Remodeling</Link>
          <Link to="/cleaning">Angel's Cleaning Services</Link>
          <a href="tel:(708)474-7120">(708) 474-7120</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
