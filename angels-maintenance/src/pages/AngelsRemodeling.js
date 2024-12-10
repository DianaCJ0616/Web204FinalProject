import React, { useState } from "react";
import "../styles/AngelsRemodeling.css";

function AngelsRemodeling() {
  const [flippedStates, setFlippedStates] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    setFlippedStates((prev) => {
      const updatedStates = [...prev];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div id="beginning">
      <main>
        <section className="eye-catcher-remod">
          <div className="eye-catcher-pic">
            <h1>Where Ideas<br />Become<br />Structures</h1>
            <a href="tel:7084747120" className="button-remod">+ Contact Us</a>
          </div>
        </section>
        <section className="construction-type">
          <h2>Services</h2>
          <div className="service-category">
            <div className="commercial">
              <h3>Commercial</h3>
              <p>
                We provide top-notch commercial construction services, including office renovations, retail space
                improvements, and large-scale facility builds. Our team ensures quality and compliance with all
                commercial building codes.
              </p>
            </div>
            <div className="industrial">
              <h3>Industrial</h3>
              <p>
                Our industrial services include warehouse construction, factory upgrades, and structural
                installations tailored to meet the specific demands of your industry. We focus on durability,
                efficiency, and innovation.
              </p>
            </div>
            <div className="general">
              <h3>General</h3>
              <p>
                From home renovations to custom builds, our general construction services are designed to bring
                your vision to life. Whether it's kitchens, bathrooms, or entire houses, we deliver with
                precision and care.
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div id="before-after">
            <h3>Before<br />vs.<br />After</h3>
          </div>
          <div className="flip-gallery">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div
                key={num}
                className={`flip-container ${flippedStates[index] ? "flipped" : ""}`}
                onClick={() => handleFlip(index)}
              >
                <div className="flipper">
                  <div className="front">
                    <img
                      src={`${process.env.PUBLIC_URL}/before${num}.jpg`}
                      alt={`Before ${num}`}
                      className="remodPic"
                    />
                  </div>
                  <div className="back">
                    <img
                      src={`${process.env.PUBLIC_URL}/after${num}.jpg`}
                      alt={`After ${num}`}
                      className="remodPic"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="FAQ">
          <h2>Frequently Asked Questions</h2>
          <ul className="FAQ-list">
            {[
              {
                question: "What types of remodeling services do you offer?",
                answer:
                  "We specialize in residential and commercial remodeling, including kitchen renovations, bathroom upgrades, room additions, and complete home makeovers. No project is too big or small for our team.",
              },
              {
                question: "How long does a typical remodeling project take?",
                answer:
                  "Yes! We offer free, no-obligation estimates. Our team will visit your site, discuss your vision, and provide an accurate estimate for the work.",
              },
              {
                question: "Can I make changes to the design during the project?",
                answer:
                  "We understand that ideas evolve. While we encourage finalizing plans before construction begins, minor adjustments can be accommodated. Keep in mind that changes may affect the timeline and budget.",
              },
              {
                question: "How much will my remodeling project cost?",
                answer:
                  "Costs vary based on the size and complexity of the project, materials, and labor. During the initial consultation, we provide a transparent quote tailored to your needs and budget.",
              },
              {
                question: "How do I get started with my remodeling project?",
                answer:
                  "It’s easy! Contact us through our website or call us directly to schedule a consultation. We’ll guide you through every step, from planning to completion. vary based on the size and complexity of the project, materials, and labor. During the initial consultation, we provide a transparent quote tailored to your needs and budget.",
              },
            ].map(({ question, answer }, index) => (
              <li key={index}>
                <strong>{question}</strong>
                <p>{answer}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default AngelsRemodeling;
