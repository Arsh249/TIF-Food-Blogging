import React from 'react';
import '../App.css';

function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src="/about.svg" alt="Food" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p style={{fontSize:'14px'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
        </p>
        <button className="readBtn">Read More</button>
      </div>
    </section>
  );
}

export default About;
