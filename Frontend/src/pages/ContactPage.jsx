import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="cp-hero section-padding-sm">
        <div className="container text-center">
          <div className="section-label reveal"><i className="bi bi-envelope-fill"></i> Contact Us</div>
          <h1 className="section-title reveal delay-100">
            Let's Talk About Your <span className="gradient-text">Career</span>
          </h1>
          <p className="section-subtitle reveal delay-200">
            Our career advisors are available to help you choose the right program and answer all your questions.
          </p>
        </div>
      </section>

      <section className="cp-body section-padding">
        <div className="container">
          <div className="cp-grid">
            {/* Info */}
            <div className="cp-info reveal-left">
              <h3 className="cp-info-title">Get in Touch</h3>
              <p className="cp-info-desc">We're here to help you make the best career decision. Our team responds within 24 hours.</p>

              <div className="cp-contacts">
                {[
                  { icon: 'bi-telephone-fill', color: '#6C63FF', title: 'Call Us', val: '+91 98765 43210', sub: 'Mon–Sat 9AM–8PM IST' },
                  { icon: 'bi-envelope-fill', color: '#00D4AA', title: 'Email Us', val: 'hello@techvedhu.com', sub: 'We reply within 24 hours' },
                  { icon: 'bi-whatsapp', color: '#25D366', title: 'WhatsApp', val: '+91 98765 43210', sub: 'Quick responses' },
                  { icon: 'bi-geo-alt-fill', color: '#FF9F43', title: 'Office', val: 'Chennai, Tamil Nadu', sub: 'India – 600001' },
                ].map(c => (
                  <div key={c.title} className="cp-contact-item">
                    <div className="cp-contact-icon" style={{ background: `${c.color}18`, borderColor: `${c.color}35` }}>
                      <i className={`bi ${c.icon}`} style={{ color: c.color }}></i>
                    </div>
                    <div>
                      <h5 className="cp-contact-title">{c.title}</h5>
                      <p className="cp-contact-val">{c.val}</p>
                      <p className="cp-contact-sub">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cp-social-section">
                <h5>Follow Us</h5>
                <div className="footer-social">
                  {[
                    { icon: 'bi-linkedin', href: '#' },
                    { icon: 'bi-instagram', href: '#' },
                    { icon: 'bi-twitter-x', href: '#' },
                    { icon: 'bi-youtube', href: '#' },
                  ].map(s => (
                    <a key={s.icon} href={s.href} className="social-icon" target="_blank" rel="noopener noreferrer">
                      <i className={`bi ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="cp-form reveal-right">
              <ContactForm
                title="Send Us a Message"
                subtitle="Tell us what you're looking for and we'll help you find the right program."
              />
            </div>
          </div>

          {/* Office Hours */}
          <div className="cp-hours reveal">
            <h3 className="cp-hours-title">Office Hours & Availability</h3>
            <div className="cp-hours-grid">
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM IST', available: true },
                { day: 'Saturday', time: '10:00 AM – 6:00 PM IST', available: true },
                { day: 'Sunday', time: 'Email & WhatsApp Support', available: true },
              ].map(h => (
                <div key={h.day} className="cp-hour-row">
                  <span className="cp-hour-day">{h.day}</span>
                  <span className="cp-hour-time">{h.time}</span>
                  <span className={`cp-hour-badge ${h.available ? 'available' : ''}`}>
                    <i className={`bi ${h.available ? 'bi-circle-fill' : 'bi-circle'}`}></i>
                    {h.available ? 'Open' : 'Closed'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
