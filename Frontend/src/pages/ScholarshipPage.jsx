import React, { useState } from 'react';
import ScholarshipBanner from '../components/ScholarshipBanner/ScholarshipBanner';
import ContactForm from '../components/ContactForm/ContactForm';
import './ScholarshipPage.css';

export default function ScholarshipPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '', year: '', program: '', motivation: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleNext = e => {
    e.preventDefault();
    setStep(s => s + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="sp-hero section-padding-sm">
        <div className="container text-center">
          <div className="section-label reveal">
            <i className="bi bi-gift-fill"></i> Scholarship Program
          </div>
          <h1 className="section-title reveal delay-100">
            50% Scholarship for <span className="gradient-text">Deserving Students</span>
          </h1>
          <p className="section-subtitle reveal delay-200">
            We believe talent knows no financial barrier. Apply now for our scholarship and transform your career at half the price.
          </p>
        </div>
      </section>

      <ScholarshipBanner />

      {/* How It Works */}
      <section className="sp-how section-padding">
        <div className="container">
          <div className="text-center-section reveal">
            <h2 className="section-title">How the Scholarship <span className="gradient-text">Works</span></h2>
          </div>
          <div className="how-steps">
            {[
              { step: '01', title: 'Apply Online', desc: 'Fill in the scholarship application form with your academic and career details', icon: 'bi-file-earmark-text-fill' },
              { step: '02', title: 'Screening Call', desc: 'A 15-minute counselling call with our team to understand your goals', icon: 'bi-telephone-fill' },
              { step: '03', title: 'Scholarship Decision', desc: 'Receive scholarship offer within 48 hours based on eligibility', icon: 'bi-award-fill' },
              { step: '04', title: 'Enroll & Begin', desc: 'Confirm your seat, enroll at the discounted price, and start your journey', icon: 'bi-rocket-takeoff-fill' },
            ].map((s, i) => (
              <div key={s.step} className={`how-step reveal delay-${(i + 1) * 100}`}>
                <div className="how-step-num">{s.step}</div>
                <div className="how-step-icon"><i className={`bi ${s.icon}`}></i></div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="sp-form-section section-padding">
        <div className="container">
          <div className="text-center-section reveal">
            <h2 className="section-title">Apply for <span className="gradient-text">Scholarship</span></h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            {submitted ? (
              <div className="sp-success reveal">
                <div className="success-icon"><i className="bi bi-check-circle-fill"></i></div>
                <h3>Application Submitted! 🎉</h3>
                <p>Our team will review your application and contact you within <strong>48 hours</strong>.</p>
              </div>
            ) : (
              <div className="sp-form-card reveal delay-100">
                <div className="sp-step-indicator">
                  {[1, 2].map(s => (
                    <div key={s} className={`step-dot${step >= s ? ' active' : ''}`}>{s}</div>
                  ))}
                </div>
                {step === 1 ? (
                  <form onSubmit={handleNext} className="sp-form">
                    <h4 className="sp-form-title">Personal Information</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name *</label>
                        <input name="name" type="text" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>Email *</label>
                        <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Phone *</label>
                        <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <label>College/University *</label>
                        <input name="college" type="text" placeholder="Your institution" value={form.college} onChange={handleChange} required />
                      </div>
                    </div>
                    <button type="submit" className="btn-primary-custom" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                      Next Step <i className="bi bi-arrow-right"></i>
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit} className="sp-form">
                    <h4 className="sp-form-title">Program & Motivation</h4>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Graduation Year *</label>
                        <select name="year" value={form.year} onChange={handleChange} required>
                          <option value="">Select year</option>
                          {['2022', '2023', '2024', '2025', '2026'].map(y => <option key={y}>{y}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Program of Interest *</label>
                        <select name="program" value={form.program} onChange={handleChange} required>
                          <option value="">Select program</option>
                          <option>Software Development Launch Track</option>
                          <option>Data Science Launch Track</option>
                          <option>FinTech Launch Track</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Why do you deserve this scholarship? *</label>
                      <textarea name="motivation" rows={5} placeholder="Tell us about your goals, challenges, and why you're the right candidate..." value={form.motivation} onChange={handleChange} required></textarea>
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button type="button" className="btn-outline-custom" onClick={() => setStep(1)} style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>
                        <i className="bi bi-arrow-left"></i> Back
                      </button>
                      <button type="submit" className="btn-primary-custom" style={{ flex: 2, justifyContent: 'center', padding: '14px' }}>
                        <i className="bi bi-send-fill"></i> Submit Application
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
