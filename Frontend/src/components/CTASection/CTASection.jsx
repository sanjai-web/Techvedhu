import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import './CTASection.css';

const benefits = [
  'No credit card required',
  'Free demo session available',
  'Assured scholarships on enrollment',
  'Placement guaranteed',
];

export default function CTASection() {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Circles */}
          <div className="cta-bg-circle cta-bg-circle-1" />
          <div className="cta-bg-circle cta-bg-circle-2" />
          <div className="cta-bg-grid" />

          <div className="cta-inner">
            <div className="cta-badge">
              <Sparkles size={16} />
              Work-Experience Based Learning · 10,700+ Learners
            </div>

            <h2 className="cta-title">
              Supercharge Your Career<br />
              Right Away
            </h2>

            <p className="cta-subtitle">
              Work-experience-based learning personalized programs to land your
              dream tech job at the best companies in India. Start with a
              free trial — no commitment needed.
            </p>

            {/* Benefits Row */}
            <div className="cta-benefits">
              {benefits.map((b) => (
                <span key={b} className="cta-benefit-item">
                  <CheckCircle size={14} />
                  {b}
                </span>
              ))}
            </div>

            <div className="cta-actions">
              <a
                href="https://wa.me/919363603504"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white-custom"
              >
                Book Your Free Trial, Now
                <ArrowRight size={18} />
              </a>
              <Link to="/courses" className="cta-secondary-btn">
                Explore Our Programs
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="cta-contact">
              <span>📞 Call us: <a href="tel:+919363630504" className="cta-contact-link">+91 93636 30504</a></span>
              <span className="cta-contact-divider">|</span>
              <span>✉️ <a href="mailto:support@techvedhu.com" className="cta-contact-link">support@techvedhu.com</a></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
