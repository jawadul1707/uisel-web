import React from 'react';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { GrUserWorker } from "react-icons/gr";
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Find <span>Skilled</span> Professionals Worldwide<br /> Fast, Reliable, and Verified.
        </h1>
        <p>Connect with top talent from multiple countries through our trusted recruitment network.</p>
        <div className="search-bar-group">
          <div className="search-bar">
            <div className="search-field">
              <FaMapMarkerAlt className="icon" />
              <select>
                <option>Country</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="search-field">
              <GrUserWorker className="icon" />
              <select>
                <option>Trade</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <div className="search-btn-field">
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;