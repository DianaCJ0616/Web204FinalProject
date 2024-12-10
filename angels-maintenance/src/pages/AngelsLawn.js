import React, { useState } from "react";
import "../styles/AngelsLawn.css";

const reviews = [
  {
    name: "Curtis Williams",
    stars: 5,
    review:
      "Angel and his team did an excellent job with our lawn. They were timely and professional and even took the time to rake up the extra grass clippings. Highly recommend this company!",
    date: "5/15/2024",
  },
  {
    name: "Ariton K.",
    stars: 5,
    review:
      "Angel provided exceptional service when he planted trees in my yard. Not only did he offer the best prices in the area, but his customer service went above and beyond. Despite a few trees not meeting my preference, Angel drove an hour away to exchange them for the ones I preferred. I highly recommend Angel to anyone in search of healthy, quality evergreen trees and outstanding service.",
    date: "5/8/2024",
  },
  {
    name: "Melissa Carter",
    stars: 4,
    review:
      "Our first home required new landscaping. Angel gave great suggestions and did a beautiful job for a reasonable price. All the follow-up care we’ve received after that has been done through them. The team is very responsive.",
    date: "4/21/2024",
  },
  {
    name: "Abby Schneider",
    stars: 5,
    review:
      "Angel helped me create garden beds around my previously planted trees and bushes, removing the grass and installing mulch. They did excellent, speedy, friendly work - I will recommend them to anyone looking for excellent landscaping work!",
    date: "4/20/2024",
  },
  {
    name: "Luis Santiago",
    stars: 5,
    review:
      "Angel planted my trees and was very professional. Arrived on time. Highly recommended.",
    date: "5/14/2024",
  },
  {
    name: "C1",
    stars: 5,
    review: "Good work on time and ready for professional service!!!",
    date: "5/19/2022",
  },
  {
    name: "Aspri Gardenia",
    stars: 5,
    review:
      "Angel's service is FANTASTIC! I had trouble finding a good service this year for my widowed mom. Angel and his team provided QUALITY WORK, were IMMACULATE, FAST, PROFESSIONAL, HELPFUL, & COURTEOUS. The BEST SERVICE we have EVER had!",
    date: "5/17/2022",
  },
  {
    name: "Kathi S.",
    stars: 5,
    review:
      "We started having Angels service do our lawn. Great service it looks beautiful I highly recommend.",
    date: "7/10/2021",
  },
  {
    name: "Rich Barsic",
    stars: 5,
    review:
      "Angel and his crew do an awesome job on lawn maintenance my lawn is always well-manicured. Thank you guys.",
    date: "2/25/2021",
  },
  {
    name: "Angel C.",
    stars: 5,
    review:
      "This company is one of the best landscaping companies I've ever seen. They cut grass perfectly, have great prices, and also do snow removal, trimming, and tree cutting. Highly recommend them!",
    date: "1/9/2016",
  },
];

function Lawn() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div id="beginning">
      <main>
        <section className="eye-catcher">
          <div className="eye-catcher-text">
            <div className="eye-catcher-main">
              <h1 className="headline">Outdoor Perfection,</h1>
              <h1 className="headline">Guaranteed</h1>
            </div>
            <p className="subtext">Transforming and revitalizing your residence since 1999.</p>
            <a href="tel:7084747120" className="button-lawn">+ Get a Free Estimate</a>
          </div>
          <div className="top-image">
            <img
              src={`${process.env.PUBLIC_URL}/TopImage.jpg`}
              alt="beginning image"
              className="curved-image"
            />
          </div>
          <div className="bar-under-img">
                <ul>
                    <li>Receive a free estimate within 5 business days.</li>
                    <li>Estimates given on the spot.</li>
                    <li>See progress within weeks.</li>
                    <li>Be the envy of your neighborhood.</li>
                    <li>You ask, we do.</li>
                    <li>Satisfaction Guaranteed.</li>

                    <li>Receive a free estimate within 5 business days.</li>
                    <li>Estimates given on the spot.</li>
                    <li>See progress within weeks.</li>
                    <li>Be the envy of your neighborhood.</li>
                    <li>You ask, we do.</li>
                    <li>Satisfaction Guaranteed.</li>
                </ul>
            </div>
        </section>
        <section className="about-us">
          <div className="about-us-stuff">
            <div className="abt-2">
              <div className="about-pic">
                <img
                  src={`${process.env.PUBLIC_URL}/AboutUs.jpg`}
                  alt="about image"
                  className="about-image"
                />
              </div>
              <div className="abt-us">
                <h2>About Us</h2>
              </div>
            </div>
            <div className="abt-description">
              <p className="about-us-description">
                At Angel's Lawn Maintenance Inc., we've proudly served Lansing, IL and a wide region
                across Northern Illinois and Northwest Indiana. We specialize in lawn maintenance,
                tree trimming, and landscape services. Our licensed, bonded, and insured team is
                ready to provide you with a{" "}
                <em>professional</em> and <em>dependable</em> experience.
              </p>
            </div>
          </div>
        </section>
        <section className="services">
          <div id="services">
            <div className="services-stuff">
              <div className="browse-box">
                <h2>Browse Our</h2>
                <h2>Services...</h2>
              </div>
              <div className="service-box">
                <div className="services-columns">
                  <ul className="services-list">
                    <li>Landscape Service</li>
                    <li>Tree Planting and Removal</li>
                    <li>Power Raking</li>
                    <li>Driveway Repair and Installation</li>
                  </ul>
                  <ul className="services-list">
                    <li>Patios</li>
                    <li>Aeration</li>
                    <li>Installation</li>
                    <li>And More...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="review-section-lawn">
          <div className="review-header-lawn">
            <h2>Hear from our customers</h2>
            <h3>
              Don't just take our word for it, see what our clients have to say about their
              transformed outdoor spaces and service experiences.
            </h3>
          </div>
          <div className="review-slider">
            <div className="reviews-lawn">
              <p className="name-lawn">{reviews[currentIndex].name}</p>
              <div className="stars-lawn">
                {[...Array(reviews[currentIndex].stars)].map((_, i) => (
                  <span key={i} className="fa fa-star checked-lawn"></span>
                ))}
                {[...Array(5 - reviews[currentIndex].stars)].map((_, i) => (
                  <span key={i} className="fa fa-star"></span>
                ))}
              </div>
              <p className="review-lawn">"{reviews[currentIndex].review}"</p>
              <p className="date-lawn">{reviews[currentIndex].date}</p>
            </div>
            <div className="slider-controls">
              <button onClick={handlePrev} className="slider-arrow">&lt;</button>
              <button onClick={handleNext} className="slider-arrow">&gt;</button>
            </div>
          </div>
        </section>
        <section className="client-transformation">
          <div className="transformation-head">
            <h2>Client Transformations</h2>
          </div>
          <div className="transformation-pics">
            {[...Array(14)].map((_, i) => (
              <img
                key={i}
                src={`${process.env.PUBLIC_URL}/pic${i + 1}.jpg`}
                alt={`Transformation ${i + 1}`}
                className="transformation-pic"
              />
            ))}
          </div>
          <div className="transformations-bar">
            <h3>1000+ Yards</h3>
            <h3>Transformed</h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Lawn;
