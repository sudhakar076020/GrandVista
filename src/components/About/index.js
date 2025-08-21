// AboutSection.js
import React from "react";
import { Parallax } from "react-parallax";
import "./styles.css";

import Navbar from "../Navbar";
import Footer from "../Footer";

const images = [
  "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1673809798817-457be4736fa4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1675604274302-665e7e65021e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJha2VyeXxlbnwwfHwwfHx8MA%3D%3D",
];

// Component parallax banner image
const parallaxBannerImage = "https://plus.unsplash.com/premium_photo-1687888327531-090715f28f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D"
const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <Parallax
        bgImage={parallaxBannerImage}
        strength={300}
        className="parallax-banner-card"
      >
        <div className="parallax-banner-box">
          <h2 className="section-header-title">About</h2>
        </div>
      </Parallax>
      <section className="about-section">
        <div className="about-grid">
          {/* Parallax Image 1 */}
          <Parallax bgImage={images[0]} strength={300}>
            <div className="parallax-box parallax-box-1" />
          </Parallax>

          {/* About Text */}
          <div className="about-text">
            <p>
              Welcome to GrandVista, where fine dining meets elegance. Our chefs
              create exquisite dishes with fresh ingredients, ensuring an
              unforgettable experience. Relax in our cozy ambiance and enjoy
              exceptional service.
            </p>
          </div>

          {/* Parallax Image 2 */}
          <Parallax bgImage={images[1]} strength={300}>
            <div className="parallax-box parallax-box-2" />
          </Parallax>

          {/* Parallax Image 3 */}
          <Parallax bgImage={images[2]} strength={300}>
            <div className="parallax-box parallax-box-3" />
          </Parallax>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
