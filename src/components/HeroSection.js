import React from 'react';
import { FaSearch, FaMapMarkerAlt} from 'react-icons/fa';
import { GrUserWorker } from "react-icons/gr";
import '../styles/HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Showcase <span>Your</span> Mastery.<br />Get Connected.
        </h1>
        <p>Create your profile, showcase your skills, and let employers find you.</p>
        <div className="search-bar-group">
          <div className="search-bar">
            <div className="search-field">
              <FaSearch className="icon" />
              <select>
                <option>As an Employee</option>
                <option>As an Employer</option>
                {/* Add more options as needed */}
              </select>
            </div>
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