import React from 'react';
import '../styles/Certification.css';

const certifications = [
  { name: 'Sofa Express', cert: 'Certification Name, Year' },
  { name: 'Stratacard', cert: 'Certification Name, Year' },
  { name: 'Pacific Stereo', cert: 'Certification Name, Year' },
  { name: 'GlobalCert', cert: 'Certification Name, Year' },
  { name: 'TechBoard', cert: 'Certification Name, Year' },
  { name: 'SkillPro', cert: 'Certification Name, Year' },
  { name: 'EduMark', cert: 'Certification Name, Year' },
  { name: 'TalentVerify', cert: 'Certification Name, Year' },
  { name: 'TalentVerify', cert: 'Certification Name, Year' },
  { name: 'TalentVerify', cert: 'Certification Name, Year' },
];

function Certification() {
  return (
    <section className="certification-section">
      <h2 className="certification-title">Certifications</h2>
      <p className="certification-subtitle">Certifications from global institutions</p>
      <div className="certification-marquee-wrapper">
        <div className="certification-marquee">
          {[...certifications, ...certifications].map((c, idx) => (
            <div className="certification-card" key={idx}>
              <div className="certification-circle"></div>
              <div className="certification-info">
                <div className="certification-name">{c.name}</div>
                <div className="certification-detail">{c.cert}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;