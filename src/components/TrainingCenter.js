import React from 'react';
import '../styles/TrainingCenter.css';

const courses = [
  {
    image: require('../assets/trades/marine-shipbuilding.jpg'),
    title: 'Marine & Ship Building',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
  },
  {
    image: require('../assets/trades/construction-civil-work.jpg'),
    title: 'Construction & Civil Work',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
  },
  {
    image: require('../assets/trades/industrial-technical.jpg'), // Replace with actual image
    title: 'Industrial & Technical',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
  },
  {
    image: require('../assets/trades/hospitality.jpg'), // Replace with actual image
    title: 'Hospitality',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
  },
  {
    image: require('../assets/trades/healthcare-caregiving.jpg'), // Replace with actual image
    title: 'Healthcare and Caregiving',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore',
  },
];

function TrainingCenter() {
  return (
    <section className="training-center-section">
      <h2 className="training-title">Training Center</h2>
      <p className="training-subtitle">Gain the knowledge and skills you need to advance</p>
      <div className="training-cards">
        {courses.map((course, idx) => (
          <div className="training-card" key={idx}>
            <img src={course.image} alt={course.title} className="training-card-img" />
            <div className="training-card-content">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p className="training-card-details"><b>Course Details:</b> {course.details}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="training-viewall-btn">
        View All <span className="arrow">→</span>
      </button>
    </section>
  );
}

export default TrainingCenter;
