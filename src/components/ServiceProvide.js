import React from 'react';
import '../styles/ServiceProvide.css';
import forProfessionals from '../assets/for-professionals.jpg';
import forSkilledLabour from '../assets/for-skilled-labour.jpg';
import forEmployeesPartners from '../assets/for-employees-partners.jpg';
import forDataResearch from '../assets/for-data-research.jpg';

function ServiceProvide() {
  return (
    <section className="service-section">
      <h2 className="service-title">What We Do</h2>
      <p className="service-subtitle">Service We Provide</p>
      <div className="service-cards">
        <div className="service-card">
          <div className="service-card-top">
            <img src={forProfessionals} alt="For Professionals" className="service-card-img" />
          </div>
          <div className="service-card-bottom">
            <div className="service-card-label">For Professionals</div>
            <div className="service-card-link">Learn More</div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-top">
            <img src={forSkilledLabour} alt="For Skilled Labour" className="service-card-img" />
          </div>
          <div className="service-card-bottom">
            <div className="service-card-label">For Skilled Labour</div>
            <div className="service-card-link">Learn More</div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-top">
            <img src={forEmployeesPartners} alt="For Employees & Partners" className="service-card-img" />
          </div>
          <div className="service-card-bottom">
            <div className="service-card-label">For Employees & Partners</div>
            <div className="service-card-link">Learn More</div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-top">
            <img src={forDataResearch} alt="Data & Research" className="service-card-img" />
          </div>
          <div className="service-card-bottom">
            <div className="service-card-label">Data & Research</div>
            <div className="service-card-link">Learn More</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProvide;