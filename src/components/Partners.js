import React from 'react';
import '../styles/Partners.css';

const partners = [
  {
    name: 'Zrand Hobs',
    role: 'Developer',
    image: require('../assets/logo.png'),
    skills: ['Gimp', 'Wordpress'],
  },
  {
    name: 'Dorothy Wood',
    role: 'Teacher',
    image: require('../assets/logo.png'),
    skills: ['Elementor', 'Wix', 'Illustrator'],
    featured: true,
  },
  {
    name: 'Timothy Baker',
    role: 'Teacher',
    image: require('../assets/logo.png'),
    skills: ['Figma', 'Elementor', 'Wordpress'],
  },
  {
    name: 'Shane Pratt',
    role: 'Developer',
    image: require('../assets/logo.png'),
    skills: ['Figma', 'Wordpress', 'Gimp'],
  },
  {
    name: 'Frances Washing',
    role: 'Developer',
    image: require('../assets/logo.png'),
    skills: ['Wordpress', 'Wix', 'Illustrator'],
  },
  {
    name: 'Jason Bell',
    role: 'Web Designer',
    image: require('../assets/logo.png'),
    skills: ['Elementor', 'Wordpress'],
  },
  {
    name: 'Kathryn Sanchez',
    role: 'Teacher',
    image: require('../assets/logo.png'),
    skills: ['Framer', 'Webflow', 'Wix'],
  },
  {
    name: 'Jaime Strickland',
    role: 'Web Designer',
    image: require('../assets/logo.png'),
    skills: ['Gimp', 'Figma', 'Webflow'],
  },
];

function Partners() {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Partners</h2>
      <p className="partners-subtitle">Connect with the best industry leaders looking for top talents for hire</p>
      <div className="partners-cards">
        {partners.map((p, idx) => (
          <div className={`partner-card${p.featured ? ' featured' : ''}`} key={idx}>
            <img src={p.image} alt={p.name} className="partner-img" />
            <div className="partner-info">
              <div className="partner-name">{p.name}</div>
              <div className="partner-role">{p.role}</div>
              <div className="partner-skills">
                {p.skills.map((skill, i) => (
                  <span className="partner-skill" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="partners-viewall-btn">
        View All <span className="arrow">→</span>
      </button>
    </section>
  );
}

export default Partners;
