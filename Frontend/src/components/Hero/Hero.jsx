import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play, ArrowRight, Star, Users, BookOpen, Award,
  CheckCircle, TrendingUp, Sparkles
} from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '50K+', label: 'Students Enrolled', icon: <Users size={18} /> },
  { value: '200+', label: 'Expert Courses', icon: <BookOpen size={18} /> },
  { value: '95%', label: 'Placement Rate', icon: <TrendingUp size={18} /> },
  { value: '4.9★', label: 'Average Rating', icon: <Star size={18} /> },
];

const trustBadges = [
  'Industry-Recognized Certificates',
  'Live Project Experience',
  'Mentor-Led Learning',
  'Career Support',
];

const floatingCards = [
  {
    id: 1,
    icon: '🎯',
    title: 'New Course',
    subtitle: 'Full Stack Development',
    extra: '2.4k enrolled',
    position: { top: '15%', right: '-40px' },
    delay: 0,
  },
  {
    id: 2,
    icon: '🏆',
    title: 'Achievement',
    subtitle: 'Course Completed!',
    extra: 'Certificate Earned',
    position: { bottom: '25%', left: '-50px' },
    delay: 0.4,
  },
  {
    id: 3,
    icon: '⚡',
    title: 'Live Session',
    subtitle: 'AI & ML Masterclass',
    extra: 'Starting in 2h',
    position: { bottom: '10%', right: '10%' },
    delay: 0.8,
  },
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Careers', 'Skills', 'Futures', 'Dreams'];

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
              India's #1 Tech EdTech Platform — Now with AI Mentoring
            </motion.div>

            {/* Heading */}
            <h1 className="hero-heading">
              Transform Your
              <span className="hero-heading-highlight">
                {' '}
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
              </span>
              <br /> with World-Class Learning
            </h1>

            <p className="hero-subtitle">
              Join 50,000+ learners mastering in-demand tech skills through live
              mentorship, hands-on projects, and industry-recognized certifications
              built for real-world success.
            </p>

            {/* Trust Badges */}
            <div className="hero-trust">
              {trustBadges.map((badge) => (
                <span key={badge} className="hero-trust-item">
                  <CheckCircle size={14} />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-cta">
              <Link to="/courses" className="btn-primary-custom hero-btn-main">
                Explore Courses
                <ArrowRight size={18} />
              </Link>
              <button
                className="hero-play-btn"
                onClick={() => setVideoOpen(true)}
              >
                <span className="play-icon">
                  <Play size={18} fill="currentColor" />
                </span>
                <span>
                  <span className="play-label">Watch Demo</span>
                  <span className="play-sub">2 min overview</span>
                </span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                {[
                  'https://i.pravatar.cc/40?img=1',
                  'https://i.pravatar.cc/40?img=2',
                  'https://i.pravatar.cc/40?img=3',
                  'https://i.pravatar.cc/40?img=4',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Student ${i + 1}`}
                    className="avatar-item"
                    style={{ zIndex: 4 - i }}
                  />
                ))}
              </div>
              <div className="social-proof-text">
                <div className="social-proof-stars">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span>
                  <strong>4.9/5</strong> from 12,000+ reviews
                </span>
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
                alt="Students learning together"
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

              {/* Progress Ring */}
              <div className="hero-progress-ring">
                <svg width="64" height="64" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#E2E8F0" strokeWidth="5" />
                  <circle
                    cx="32" cy="32" r="28"
                    fill="none" stroke="url(#grad)" strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 28 * 0.78} ${2 * Math.PI * 28}`}
                    transform="rotate(-90 32 32)"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="progress-ring-text">78%</span>
                <span className="progress-ring-label">Complete</span>
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
              <p className="text-white mt-3 fs-5">Platform Demo Video</p>
              <p className="text-white opacity-75">Coming Soon</p>
            </div>
            <button className="video-modal-close" onClick={() => setVideoOpen(false)}>✕</button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
