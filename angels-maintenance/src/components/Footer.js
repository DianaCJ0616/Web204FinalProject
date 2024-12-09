import React from 'react';
import "./../styles/layout.css";

function Footer() {
  return (
    <footer>
    <div className="main-footer">
      <div className="contact-us">
        <h2>Contact Us</h2>
        <a href="tel:(708)474-7120" className="phone-number">
          (708)&nbsp;474&#8209;7120
        </a>
        <a href="mailto:angelslawn@hotmail.com" className="email">
          angelslawn@hotmail.com
        </a>
      </div>
      <div className="forms-of-payment">
        <h2>Forms of Payment</h2>
        <h3 className="payment-number">
          Call
          <a href="tel:(708)639-8414" className="phone-number">
            (708)&nbsp;639&#8209;8414
          </a>
          to make any card payments over the phone.
        </h3>
        <ul>
          <li>American Express</li>
          <li>Personal Checks</li>
          <li>Debit Cards</li>
          <li>Discover</li>
          <li>MasterCard</li>
          <li>Visa</li>
          <li>Zelle</li>
        </ul>
      </div>
      <div className="follow-us">
        <h2>Follow Us On</h2>
        <a href="https://www.google.com/maps/place/Angel's+Lawn+Maintenance+Inc./">
          Google
        </a>
        <a href="https://www.facebook.com/people/Angels-Lawn-Maintenance/100069167020761/">
          Facebook
        </a>
      </div>
    </div>
    <div className="end-end">
      <div className="end-1">
        <p className="company-name">Angel's Lawn Maintenance Inc.</p>
        <p className="company-location">Lansing, IL 60438</p>
      </div>
      <div className="end-2">
        <p className="copyright">Copyright &#169; 2024</p>
      </div>
    </div>
  </footer>
);
}

export default Footer;