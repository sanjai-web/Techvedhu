import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play, ArrowRight, Star, Users, BookOpen, Award,
  CheckCircle, TrendingUp, Sparkles, Clock
} from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '1000+', label: 'Learning Hours', icon: <Clock size={18} /> },
  { value: '10.7K+', label: 'Registered Learners', icon: <Users size={18} /> },
  { value: '50%', label: 'Avg Salary Hike', icon: <TrendingUp size={18} /> },
  { value: '100+', label: 'Hiring Partners', icon: <Award size={18} /> },
];

const trustPoints = [
  'Build professional projects with professionals.',
  'Master the current cutting-edge technologies',
  'Crack your dream role at the best tech companies',
];

const floatingCards = [
  {
    id: 1,
    icon: '🚀',
    title: 'Career Launchpad',
    subtitle: 'Software Development with Gen AI',
    extra: 'Free Demo Available',
    position: { top: '10%', right: '-30px' },
    delay: 0,
  },
  {
    id: 2,
    icon: '🏆',
    title: 'Placement Guaranteed',
    subtitle: '100+ Hiring Partners',
    extra: '50% Avg Salary Hike',
    position: { bottom: '28%', left: '-40px' },
    delay: 0.4,
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Live Classes',
    subtitle: '1-1 Assistance Available',
    extra: '4 hr/week schedule',
    position: { bottom: '8%', right: '8%' },
    delay: 0.8,
  },
];

const partners = ['Accenture', 'Zoho', 'Microsoft', 'Amazon', 'Walmart', 'Cognizant'];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Career', 'Skills', 'Future', 'Life'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="hero-badge-dot" />
              <Sparkles size={14} />
              India's Work-Experience Based Learning Platform
            </motion.div>

            {/* Heading */}
            <h1 className="hero-heading">
              Learn Just Like You Would Be in the{' '}
              <span className="word-cycle">
                <motion.span
                  key={currentWord}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="word-cycle-item"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
              <br />
              <span className="hero-heading-highlight">Best Tech Companies in India</span>
            </h1>

            <p className="hero-subtitle">
              Work-experience-based learning personalized way programs to
              Supercharge your career and land your dream tech job.
            </p>

            {/* Trust Points */}
            <div className="hero-trust">
              {trustPoints.map((point) => (
                <span key={point} className="hero-trust-item">
                  <CheckCircle size={14} />
                  {point}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-cta">
              <Link to="/courses" className="btn-primary-custom hero-btn-main">
                Explore Our Programs
                <ArrowRight size={18} />
              </Link>
              <Link to="/register" className="btn-outline-custom hero-btn-main">
                Book Your Free Trial, Now
              </Link>
            </div>

            {/* Partners */}
            <div className="hero-partners">
              <span className="partners-label">Our Learners Work At</span>
              <div className="partners-list">
                {partners.map((p) => (
                  <span key={p} className="partner-chip">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="hero-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&auto=format"
                alt="Students learning at TechVedhu"
                className="hero-image"
              />
              <div className="hero-image-overlay" />

              {/* Floating Cards */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.id}
                  className="floating-card"
                  style={card.position}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + card.delay, type: 'spring', stiffness: 120 }}
                >
                  <span className="floating-card-icon">{card.icon}</span>
                  <div>
                    <div className="floating-card-title">{card.title}</div>
                    <div className="floating-card-subtitle">{card.subtitle}</div>
                    <div className="floating-card-extra">{card.extra}</div>
                  </div>
                </motion.div>
              ))}

              {/* Live Learners Badge */}
              <div className="hero-live-badge">
                <span className="live-dot" />
                <span><strong>10.7K+</strong> Registered · <strong>10+</strong> Languages</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="hero-stat-item">
              <div className="hero-stat-icon">{stat.icon}</div>
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
              {i < stats.length - 1 && <div className="hero-stat-divider" />}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div className="modal-overlay" onClick={() => setVideoOpen(false)}>
          <motion.div
            className="video-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-modal-placeholder">
              <Play size={48} className="text-white" />
              <p className="text-white mt-3 fs-5">TechVedhu Platform Demo</p>
              <p className="text-white opacity-75">Book a free trial to see it live</p>
            </div>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>✕</button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
