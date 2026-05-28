import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Globe, Users, ArrowRight, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

// Real TechVedhu.com "Why Choose Us" content
const whyUs = [
  { icon: '🎯', title: 'Live Interactive Class', desc: 'Learn in real-time with industry experts — not pre-recorded videos. Ask questions, collaborate, and grow.' },
  { icon: '💼', title: 'Gain Working Experience', desc: 'Build professional projects alongside practitioners, mirroring real tech company environments.' },
  { icon: '🤝', title: '1-1 Assistance', desc: 'Dedicated mentors guide you personally through every challenge in your learning journey.' },
  { icon: '🧠', title: 'Expert Advice', desc: 'Learn directly from professionals who have worked at Accenture, Zoho, Microsoft, Amazon, and Walmart.' },
  { icon: '📝', title: 'Mock Assessment', desc: 'Comprehensive mock tests, coding challenges, and interview simulations mirror real hiring processes.' },
  { icon: '🏆', title: 'Placement Guaranteed', desc: 'Our 100+ hiring partner network ensures you land your dream tech role upon program completion.' },
];

// Real partner companies
const companies = ['Accenture', 'Zoho', 'Microsoft', 'Amazon', 'Walmart', 'Cognizant'];

const programHighlights = [
  { label: '1000+', desc: 'Learning Hours' },
  { label: '10.7K+', desc: 'Registered Learners' },
  { label: '92%', desc: 'Positive Career Impact' },
  { label: '50%', desc: 'Average Salary Hike' },
  { label: '100+', desc: 'Hiring Partners' },
  { label: '10+', desc: 'Languages Supported' },
];

export default function AboutPage() {
  return (
    <div className="page-content">

      {/* Hero */}
      <div className="page-hero bg-surface">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">About TechVedhu</p>
            <h1 className="section-title">
              Learn Just Like You Would Be in<br />
              <span className="text-gradient">The Best Tech Companies in India</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Work-experience-based learning personalized programs to supercharge your
              career and land your dream tech job at India's best tech companies.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28 }}>
              <Link to="/courses" className="btn-primary-custom">Explore Programs <ArrowRight size={16} /></Link>
              <a href="https://wa.me/919363603504" target="_blank" rel="noopener noreferrer" className="btn-outline-custom">
                Book Free Trial
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="about-mission-grid">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label">Our Mission</p>
              <h2 className="section-title">
                Supercharge Your Career{' '}
                <span className="text-gradient">Right Away</span>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                TechVedhu is built on a single belief — every learner deserves access to the kind
                of work experience that transforms their career. We're not just an ed-tech platform;
                we're your career launchpad.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'Build professional projects with real professionals',
                  'Master the current cutting-edge technologies',
                  'Crack your dream role at the best tech companies',
                  '100+ hiring partners actively sourcing from TechVedhu',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, color: 'var(--text-secondary)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--success)', flexShrink: 0 }} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=560&h=400&fit=crop"
                alt="TechVedhu Learning Environment"
                style={{ width: '100%', height: 380, objectFit: 'cover', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">By The Numbers</p>
            <h2 className="section-title">Our Impact at a Glance</h2>
          </div>
          <div className="about-stats-grid">
            {programHighlights.map((s, i) => (
              <motion.div
                key={s.label}
                className="about-stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="about-stat-value">{s.label}</div>
                <div className="about-stat-label">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Why Choose TechVedhu</p>
            <h2 className="section-title">
              The TechVedhu{' '}
              <span className="text-gradient">Difference</span>
            </h2>
          </div>
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="why-us-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="why-us-icon">{item.icon}</span>
                <h4 className="why-us-title">{item.title}</h4>
                <p className="why-us-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Learners Work At */}
      <section className="section-padding bg-surface">
        <div className="container text-center">
          <p className="section-label">Hiring Partners</p>
          <h2 className="section-title">
            Our Learners Work At{' '}
            <span className="text-gradient">Top Companies</span>
          </h2>
          <p className="section-subtitle mx-auto mb-5">
            100+ partner companies actively hiring TechVedhu graduates across India.
          </p>
          <div className="companies-row">
            {companies.map((c) => (
              <div key={c} className="company-name-chip">{c}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Address */}
      <section className="section-padding">
        <div className="container">
          <div className="about-contact-grid">
            <div>
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">
                We're Here to{' '}
                <span className="text-gradient">Help You</span>
              </h2>
              <p className="section-subtitle mb-4">
                Have questions about our programs? Reach out to our team — we'll help
                you choose the right learning path for your career goals.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { icon: <Phone size={18} />, label: 'Phone', value: '+91 93636 30504', href: 'tel:+919363630504' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'support@techvedhu.com', href: 'mailto:support@techvedhu.com' },
                  { icon: <MapPin size={18} />, label: 'Corporate Office', value: '7/257c Lakshmi Complex, Advaitha Ashram Road, Sinthampalayam, Balaji Nagar, Fairlands, Salem — 636016, Tamil Nadu, India.', href: null },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, background: 'var(--primary-light)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="about-form-card">
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Send a Quick Message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input type="text" className="form-control-modern" placeholder="Your Full Name" required />
                <input type="email" className="form-control-modern" placeholder="Email Address" required />
                <input type="tel" className="form-control-modern" placeholder="Phone Number" />
                <select className="form-control-modern">
                  <option value="">Select a Program</option>
                  <option>Web Development</option>
                  <option>Machine Learning</option>
                  <option>Data Science</option>
                  <option>Career Launchpad (FSD)</option>
                  <option>Career Launchpad (DADS)</option>
                  <option>FinTech & Digital Finance</option>
                  <option>Other</option>
                </select>
                <textarea className="form-control-modern" rows={3} placeholder="Your message or question..." style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-primary-custom justify-content-center w-100" style={{ padding: 14 }}>
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
