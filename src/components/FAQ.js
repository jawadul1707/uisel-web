import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
  {
    question: 'How do I create an account on the job board?',
    answer: 'Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.'
  },
  {
    question: 'How do I apply for a job through the platform?',
    answer: 'Browse available jobs, select your preferred position, and follow the application instructions provided by the employer.'
  },
  {
    question: 'How can I track the status of my job applications?',
    answer: 'Log in to your account and visit the application dashboard to view the status of all your job applications.'
  },
  {
    question: 'How do I create an account on the job board?',
    answer: 'Use the search bar on the homepage to enter keywords related to your skills, job title, or preferred location. You can also use the advanced search filters to narrow down results by industry, job type (full-time, part-time, freelance), and experience level.'
  },
  {
    question: 'Is there a cost to use the job board, and what features are free?',
    answer: 'Basic job search and application features are free. Premium features may require a subscription.'
  }
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently asked Questions</h2>
      <div className="faq-cards">
        {faqs.map((faq, idx) => (
          <div
            className={`faq-card${active === idx ? ' active' : ''}`}
            key={idx}
            onClick={() => setActive(active === idx ? null : idx)}
          >
            <div className="faq-card-number">{String(idx + 1).padStart(2, '0')}</div>
            <div className="faq-card-content">
              <div className="faq-card-question">{faq.question}</div>
              {active === idx && (
                <div className="faq-card-answer">{faq.answer}</div>
              )}
            </div>
            <div className="faq-card-toggle">
              {active === idx ? <span>&#10005;</span> : <span>+</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
