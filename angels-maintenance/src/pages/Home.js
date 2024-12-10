import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/home.css";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div className="home-h2">
      <main>
        <section className="name-about">
          <h1 id="company-name">Angel's Lawn<br />Maintenance Inc.</h1>
          <div className="home-about">
            <h2>About Us</h2>
            <div id="home-about-text">
              <p>
                Angel's Lawn Maintenance Inc. began as a dedicated lawn care
                company focused on creating and maintaining beautiful outdoor
                spaces. Over time, we expanded our services to include
                professional construction and remodeling, as well as
                comprehensive cleaning solutions.
              </p>
              <p>
                From expertly maintained lawns to outdoor transformations and
                spotless interiors, we take pride in delivering quality,
                reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </section>
        <section className="lawn-section">
          <div className="home-sect-container">
            <div className="home-sect-text">
              <h2>Angel's Lawn Maintenance</h2>
              <p>
                Transform your outdoor spaces with our expert lawn care and
                landscaping services. From routine maintenance to stunning
                custom designs, we create vibrant, healthy lawns that stand out.
              </p>
            </div>
            <div
              className="home-icon"
              onClick={handleNavigation("/lawn")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/LawnLogo.png`}
                alt="Lawn Icon"
                className="business-icon"
              />
            </div>
          </div>
        </section>
        <section className="construction-section">
          <div className="home-sect-container">
            <div className="home-sect-text">
              <h2>Angel's Remodeling</h2>
              <p>
                Bring your vision to life with our professional construction and
                remodeling services. Whether it’s a patio, deck, or a complete
                outdoor makeover, we build spaces that blend style and
                functionality.
              </p>
            </div>
            <div
              className="home-icon"
              onClick={handleNavigation("/remodeling")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/ConstructionLogo.png`}
                alt="Construction Icon"
                className="business-icon"
              />
            </div>
          </div>
        </section>
        <section className="cleaning-section">
          <div className="home-sect-container">
            <div className="home-sect-text">
              <h2>Angel's Cleaning Services</h2>
              <p>
                Ensure a spotless and welcoming environment with our
                comprehensive cleaning services. Working commercially, we tailor
                our solutions to meet your needs with exceptional care.
              </p>
            </div>
            <div
              className="home-icon"
              onClick={handleNavigation("/cleaning")}
            >
              <img
                src={`${process.env.PUBLIC_URL}/CleaningLogo.png`}
                alt="Cleaning Icon"
                className="business-icon"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
