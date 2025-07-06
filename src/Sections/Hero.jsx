import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section h-[100vh]">
      <div className="hero-overlay">
        <div className="hero-content">
        <p className="sushi-text"><i>Best Sushi In Town</i></p>
        <h1 className="hero-title">
            TASTE THE RICH FLAVOR OF<br />HIGH QUALITY SUSHI
          </h1>
          <p className="hero-description">
            We only use the five star quality for our menu, come and get the richness in every food we serve.
          </p>
          <button className="hero-button">GO TO MENU</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
