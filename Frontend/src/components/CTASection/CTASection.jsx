import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './CTASection.css';

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
              Limited Time Offer — 75% OFF
            </div>
            <h2 className="cta-title">
              Ready to Launch Your<br />
              Tech Career?
            </h2>
            <p className="cta-subtitle">
              Join 50,000+ learners who have already transformed their careers.
              Your dream job is just one course away. Start today with a 7-day free trial.
            </p>
            <div className="cta-actions">
              <Link to="/courses" className="btn-white-custom">
                Browse Free Courses
                <ArrowRight size={18} />
              </Link>
              <Link to="/register" className="cta-secondary-btn">
                Start Free Trial
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="cta-note">
              ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime &nbsp;&nbsp; ✓ 30-day money back guarantee
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
