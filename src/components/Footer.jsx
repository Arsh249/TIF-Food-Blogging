import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../App.css';

function Footer() {
  return (
  <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="/logo.svg" alt="Food Truck Logo" />
    </div>
    <div className="contact-info">
    <h4>Contact Us</h4>
      <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
      <p>example2020@gmail.com</p>
      <p>(904) 443-0343</p>
    </div>
    <div className="footer-links">
    <h4>More</h4>
      <ul>
        <li>About Us</li>
        <li>Products</li>
        <li>Career</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="social-links">
      <div className='icons'>
    <h4>Social Links</h4>
      <ul>
        <li><i className="fab fa-instagram"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-facebook-f"></i></li>
      </ul>
      </div>
      <div className="copyright">
      <p>© 2022 Food Truck Example</p>
    </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;


