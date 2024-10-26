import React from 'react';
import '../App.css';


function Header() {
  return (
  <header className="header">
   <div className="left">
    <div className="logo">
      <img src="/logo.svg" alt="Logo" />
    </div>
    <div className="hero-text">
      <h1>
        Discover the <span className="highlight">Best</span> Food and Drinks
      </h1>
      <p>Naturally made Healthcare Products for the better care & support of your body.</p>
      <button className="explore-btn">Explore Now!</button>
    </div>
   </div>
   <div className="right">
    <button className="contact-btn">Get in Touch</button>
    <div className="vector">
      <img src="/Vector 1.png" alt="vector" />
    </div>
    <div className="hero-image">
      <img src="/pizza.svg" alt="Pizza" />
    </div>
   </div>
 </header>
  );
}

export default Header;
