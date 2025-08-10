import React from 'react';
import '../styles/QuerySection.css';
import { FaInstagram, FaTelegramPlane, FaTiktok, FaYoutube } from 'react-icons/fa';

function QuerySection() {
  return (
    <section className="query-section">
      <div className="query-box">
        <h2 className="query-title">Got any Queries?</h2>
        <p className="query-subtitle">Leave us your email and we will reach out!</p>
        <form className="query-form" onSubmit={e => e.preventDefault()}>
          <input type="email" className="query-input" placeholder="Your mail address" required />
          <button type="submit" className="query-send-btn">Send</button>
        </form>
      </div>
      <footer className="query-footer">
        <div className="footer-left">
          <div className="footer-logo">UISEL PTE Ltd</div>
          <div className="footer-info">
            <b>Corporate Head Office:</b> 123, Placeholder place, Area Country<br />
            <b>Phone:</b> 123-456-7890<br />
            <b>Email:</b> info@placeholder.com
          </div>
          <div className="footer-map">
            <img src={require('../assets/map-placeholder.png')} alt="Map" />
          </div>
        </div>
        <div className="footer-links">
          <div>
            <b>Quick Links</b>
            <ul>
              <li>Jobs</li>
              <li>Employeeer</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <b>Others</b>
            <ul>
              <li>How it works</li>
              <li>Terms and condition</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <b>About us</b>
            <ul>
              <li>Company milestone</li>
              <li>Web mail</li>
              <li>Board of Directors</li>
              <li>Senior Management</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>©2024. All rights reserved</span>
          <div className="footer-social">
            <span className="icon"><FaInstagram /></span>
            <span className="icon"><FaTelegramPlane /></span>
            <span className="icon"><FaTiktok /></span>
            <span className="icon"><FaYoutube /></span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default QuerySection;
