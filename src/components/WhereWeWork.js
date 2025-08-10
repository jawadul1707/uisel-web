import React from 'react';
import '../styles/WhereWeWork.css';

const locations = [
  {
    image: require('../assets/japan.jpg'), // Add this image to assets
    name: 'Japan',
  },
  {
    image: require('../assets/singapore.jpg'), // Add this image to assets
    name: 'Singapore',
  },
  {
    image: require('../assets/saudi-arabia.jpg'), // Add this image to assets
    name: 'Saudi Arabia',
  },
  {
    image: require('../assets/japan.jpg'), // Add this image to assets
    name: 'Japan',
  },
  {
    image: require('../assets/saudi-arabia.jpg'), // Add this image to assets
    name: 'Saudi Arabia',
  },
];

function WhereWeWork() {
  return (
    <section className="wherewework-section">
      <div className="wherewework-header">
        <h2 className="wherewework-title">Where We Work</h2>
        <div className="wherewework-nav">
          <button className="wherewework-nav-btn light">&#8592;</button>
          <button className="wherewework-nav-btn dark">&#8594;</button>
        </div>
      </div>
      <div className="wherewework-cards">
        {locations.map((loc, idx) => (
          <div className="wherewework-card" key={idx}>
            <img src={loc.image} alt={loc.name} className="wherewework-img" />
            <div className="wherewework-card-label">{loc.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhereWeWork;
