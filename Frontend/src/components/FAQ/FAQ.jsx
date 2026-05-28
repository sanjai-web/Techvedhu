import React, { useState } from 'react';
import { faqs } from '../../data/courses';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">
        <div className="text-center-section reveal">
          <div className="section-label"><i className="bi bi-question-circle-fill"></i> FAQ</div>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle">Everything you need to know before you enroll.</p>
        </div>
        <div className="faq-list" style={{ maxWidth: 800, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item reveal delay-${Math.min(i * 100 + 100, 400)}${open === i ? ' faq-open' : ''}`}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <div className="faq-icon">
                  <i className={`bi ${open === i ? 'bi-dash' : 'bi-plus'}`}></i>
                </div>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
