import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle, Phone, Mail, Star, Users, Award, TrendingUp } from 'lucide-react';
import './CTASection.css';

const benefits = [
  'No credit card required',
  'Free demo session included',
  'Cancel anytime',
  'Placement guaranteed',
];

const trustStats = [
  { icon: <Users size={18} />, value: '10.7K+', label: 'Learners' },
  { icon: <Star size={18} fill="#F59E0B" color="#F59E0B" />, value: '4.8/5', label: 'Rating' },
  { icon: <Award size={18} />, value: '100+', label: 'Partners' },
  { icon: <TrendingUp size={18} />, value: '50%', label: 'Salary Hike' },
];

export default function CTASection() {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Background decorations */}
          <div className="cta-bg-orb cta-orb-1" />
          <div className="cta-bg-orb cta-orb-2" />
          <div className="cta-bg-orb cta-orb-3" />
          <div className="cta-dots-pattern" />

          <div className="cta-inner">
            {/* Left: Content */}
            <div className="cta-content">
              <div className="cta-badge">
                <Zap size={14} fill="rgba(255,255,255,0.9)" color="rgba(255,255,255,0.9)" />
                Work-Experience Based Learning
              </div>

              <h2 className="cta-title">
                Your Dream Tech Career<br />
                Starts <span className="cta-title-highlight">Right Now</span>
              </h2>

              <p className="cta-subtitle">
                Join 10,700+ learners who chose TechVedhu to land jobs at top
                tech companies. Start with a free trial — no risk, no commitment.
              </p>

              {/* Benefits */}
              <div className="cta-benefits-row">
                {benefits.map((b) => (
                  <div key={b} className="cta-benefit">
                    <CheckCircle size={15} />
                    {b}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="cta-actions">
                <motion.a
                  href="https://wa.me/919363603504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-primary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Zap size={18} fill="currentColor" />
                  Book Your Free Trial
                  <ArrowRight size={18} />
                </motion.a>
                <Link to="/courses" className="cta-btn-secondary">
                  Browse All Programs →
                </Link>
              </div>

              {/* Contact row */}
              <div className="cta-contact-row">
                <a href="tel:+919363630504" className="cta-contact-link">
                  <Phone size={14} />
                  +91 93636 30504
                </a>
                <span className="cta-contact-sep">·</span>
                <a href="mailto:support@techvedhu.com" className="cta-contact-link">
                  <Mail size={14} />
                  support@techvedhu.com
                </a>
              </div>
            </div>

            {/* Right: Trust Stats Card */}
            <div className="cta-trust-panel">
              <div className="cta-trust-header">
                🏆 TechVedhu by the Numbers
              </div>
              <div className="cta-trust-stats">
                {trustStats.map((s) => (
                  <div key={s.label} className="cta-trust-stat">
                    <div className="cta-trust-icon">{s.icon}</div>
                    <div className="cta-trust-value">{s.value}</div>
                    <div className="cta-trust-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Mini testimonial inside CTA */}
              <div className="cta-mini-testimonial">
                <div className="cta-mini-stars">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={13} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="cta-mini-text">
                  "Got placed at Accenture within 2 months of completing the program!"
                </p>
                <div className="cta-mini-author">
                  <span className="cta-mini-name">Arjun K.</span>
                  <span className="cta-mini-role">Full Stack Developer</span>
                </div>
              </div>

              {/* Company logos text strip */}
              <div className="cta-companies-strip">
                <span className="cta-companies-label">Our learners work at:</span>
                <div className="cta-companies-row">
                  {['Accenture', 'Zoho', 'Amazon', 'Microsoft', 'Cognizant'].map((c) => (
                    <span key={c} className="cta-company-chip">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
