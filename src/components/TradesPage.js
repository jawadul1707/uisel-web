import React from 'react';
import '../styles/TradesPage.css';

// Import trade images
import marineShipbuilding from '../assets/trades/marine-shipbuilding.jpg';
import constructionCivilWork from '../assets/trades/construction-civil-work.jpg';
import industrialTechnical from '../assets/trades/industrial-technical.jpg';
import hospitality from '../assets/trades/hospitality.jpg';
import healthcareCaregiving from '../assets/trades/healthcare-caregiving.jpg';

const TradesPage = () => {
  const tradeCategories = [
    {
      title: "Marine & Shipbuilding",
      icon: "🚢",
      image: marineShipbuilding,
      trades: [
        "Marine Welding",
        "Marine Electrical & Mechanical Work",
        "Ship Fitting & Rigging",
        "Marine Safety & Firefighting",
        "Shipbuilding Fabrication"
      ]
    },
    {
      title: "Construction & Civil Works",
      icon: "🏗",
      image: constructionCivilWork,
      trades: [
        "Structural Welding",
        "Electrical Installation",
        "Pipe Fitting & Plumbing",
        "Ceiling & Plaster Work",
        "Painter, Grinder",
        "Civil Supervision"
      ]
    },
    {
      title: "Industrial & Technical",
      icon: "⚙",
      image: industrialTechnical,
      trades: [
        "PLC Programming",
        "Ammonia & Cooling Systems",
        "Forklift & Crane Operations",
        "Boom Supervisor",
        "Signalman",
        "Surveyor"
      ]
    },
    {
      title: "Hospitality",
      icon: "👨‍🍳",
      image: hospitality,
      trades: [
        "Housekeeping",
        "Food & Beverage Services (Chef, Cook, Steward, Waiter)",
        "Bartender, Barista",
        "Bakery"
      ]
    },
    {
      title: "Healthcare & Caregiving",
      icon: "🩺",
      image: healthcareCaregiving,
      trades: [
        "Nurse Attendant",
        "Elderly Caregiver ( Dementia Care, Ortho Care, Cardiac Care)",
        "Lab Assistant"
      ]
    }
  ];

  return (
    <div className="trades-page">
      <div className="trades-hero">
        <h1>Our Trade Categories</h1>
        <p>Explore our comprehensive range of specialized trades and professional training programs</p>
      </div>
      
      <div className="trades-container">
        {tradeCategories.map((category, index) => (
          <div key={index} className="trade-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="trades-list">
              {category.trades.map((trade, tradeIndex) => (
                <div key={tradeIndex} className="trade-item">
                  {trade}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradesPage;
