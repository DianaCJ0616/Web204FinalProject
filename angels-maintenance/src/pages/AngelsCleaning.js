import React from "react";
import "../styles/AngelsCleaning.css";

function CleaningService() {
  return (
    <div id="beginning">
      <main>
        <section className="eyecatcher-cleaning">
          <div className="eyecatcher-clean">
            <div className="cleaning-eyecatcher-text">
              <h1>
                A Cleaner Space,
                <br />
                A Brighter Day
              </h1>
              <button className="contact-button">+ Contact Us</button>
            </div>
            <div className="cleaning-image">
              <img
                src={`${process.env.PUBLIC_URL}/CleaningPic.jpg`}
                alt="Cleaning Image"
              />
            </div>
          </div>
        </section>
        <section className="services-offered">
          <h2>Services Offered</h2>
          <div className="service">
            <h3>Commercial</h3>
            <p>
              A professional service tailored to maintain the cleanliness and
              hygiene of business and office spaces. From dusting and
              disinfecting high-touch surfaces to deep cleaning floors and
              restrooms, commercial cleaning ensures a safe, welcoming, and
              productive environment for employees and clients. We deliver
              exceptional results that meet the unique needs of your business.
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="products">
          <h2>Products Used</h2>
          <ul className="product-list">
            <li>Professional, Industrial Grade Vacuums</li>
            <li>Microfiber Cleaning Cloths</li>
            <li>Eco-Friendly All-Purpose Cleaners</li>
            <li>Glass and Window Cleaners</li>
            <li>Eco-Friendly All-Purpose Cleaners</li>
          </ul>
          <div className="why-these">
            <h3>Why These Products?</h3>
            <p>
              We are committed to quality and sustainability. Using
              professional-grade, eco-friendly products ensures your space is
              cleaned thoroughly while minimizing environmental impact.
            </p>
          </div>
        </section>

        {/* Examples Section */}
        <section className="examples">
          <div className="examplesAreas">
            <div className="place-lo">
              <h3>Arrow Condos Association</h3>
              <p>Lansing, IL</p>
            </div>
            <div className="place-lo">
              <h3>Chatham Apartments</h3>
              <p>Chicago, IL</p>
            </div>
            <div className="place-lo">
              <h3>Park Boulevard Apartments</h3>
              <p>Lansing, IL</p>
            </div>
          </div>
          <h2>
            Where We
            <br />
            Work /
            <br />
            Have
            <br />
            Worked
          </h2>
        </section>
        <section className="FAQ">
  <h2>Frequently Asked Questions</h2>
  <ul className="FAQ-list">
    {[
      {
        question: "Do I need to provide cleaning supplies or equipment?",
        answer:
          "No, we bring our own high-quality supplies and equipment. However, if you have specific products you'd prefer us to use, we’re happy to accommodate.",
      },
      {
        question: "Can I schedule regular cleaning services?",
        answer:
          "Absolutely! We offer weekly, bi-weekly, and monthly cleaning schedules to fit your needs. Note, the frequency of cleaning schedules may change pricing.",
      },
      {
        question: "Do you clean during business hours?",
        answer:
          "Yes, we can work around your schedule, including evenings and weekends, to minimize disruptions.",
      },
      {
        question: "What if I'm not satisfied with the cleaning?",
        answer:
          "Your satisfaction is our top priority. If you're not happy with the service, let us know within 24 hours, and we'll return to address any issues free of charge.",
      },
      {
        question: "Can I request specific cleaning tasks?",
        answer:
          "Yes, we’re happy to tailor our services to your needs. Let us know any special requests when booking.",
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

export default CleaningService;
