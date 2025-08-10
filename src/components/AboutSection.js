import React from 'react';
import '../styles/AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2>Who We Are</h2>
        <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate</p>
        <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate</p>
        <p>Lorem Ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate</p>
      </div>
      <div className="about-right">
        <div className="about-stats-box">
          <div className="about-stat">
            <div className="about-stat-number">146</div>
            <div className="about-stat-label">Training per months</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-number">180,000</div>
            <div className="about-stat-label">Global clients</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-number">70</div>
            <div className="about-stat-label">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
