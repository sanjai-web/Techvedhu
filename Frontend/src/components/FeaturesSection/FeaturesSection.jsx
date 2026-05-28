import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Video, Briefcase, Trophy, Headphones, FileCheck, BarChart3,
  CheckCircle, ArrowRight, Zap, Star, Users, Award
} from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: <Video size={22} />,
    title: 'Live Interactive Classes',
    description: 'Real-time sessions with industry experts. Ask questions, collaborate, and learn — not pre-recorded videos.',
    color: '#4F46E5',
    bg: '#EEF2FF',
    tag: 'Core Feature',
  },
  {
    icon: <Briefcase size={22} />,
    title: 'Real Work Experience',
    description: 'Build professional projects alongside practitioners, simulating how top tech companies actually work.',
    color: '#10B981',
    bg: '#ECFDF5',
    tag: 'Unique to TechVedhu',
  },
  {
    icon: <Headphones size={22} />,
    title: '1-on-1 Mentorship',
    description: 'Dedicated mentors guide you personally. Get unstuck faster and grow with someone in your corner.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    tag: 'Personal Support',
  },
  {
    icon: <Trophy size={22} />,
    title: 'Expert-Led Learning',
    description: 'Learn from engineers and managers who\'ve worked at Zoho, Microsoft, Accenture, Amazon and Walmart.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    tag: 'Industry Experts',
  },
  {
    icon: <FileCheck size={22} />,
    title: 'Mock Interviews & Tests',
    description: 'Comprehensive coding challenges, aptitude tests and interview simulations — exactly like real hiring.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
    tag: 'Placement Prep',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Placement Guaranteed',
    description: '100+ hiring partner network ensures you land your dream role. We don\'t just teach — we place.',
    color: '#EF4444',
    bg: '#FEF2F2',
    tag: 'Our Promise',
  },
];

const highlights = [
  'Work-experience-based learning model',
  '10+ languages supported',
  'Live classes with real-time Q&A',
  '100+ hiring partner companies',
  'Assured scholarships available',
  'Free demo session before you enroll',
];

// Proof numbers displayed inside the split section
const splitStats = [
  { value: '10.7K+', label: 'Learners Enrolled', color: '#4F46E5' },
  { value: '4.8★', label: 'Google Rating', color: '#F59E0B' },
  { value: '100+', label: 'Hiring Partners', color: '#10B981' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function FeaturesSection() {
  return (
    <section className="features-section section-padding bg-surface" id="features">
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-5">
          <p className="section-label">Why TechVedhu</p>
          <h2 className="section-title">
            Learn the Way the Best Companies{' '}
            <span className="text-gradient">Actually Work</span>
          </h2>
          <p className="section-subtitle mx-auto">
            TechVedhu's work-experience model is what sets us apart — every program mirrors
            the real workflows of India's top tech companies.
          </p>
          <div className="divider mx-auto" />
        </div>

        {/* ── Features Grid ── */}
        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(79,70,229,0.12)' }}
            >
              <div className="feature-card-top">
                <div
                  className="feature-icon"
                  style={{ background: feature.bg, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <span
                  className="feature-tag"
                  style={{ background: `${feature.color}12`, color: feature.color }}
                >
                  {feature.tag}
                </span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-card-footer">
                <span className="feature-learn-more" style={{ color: feature.color }}>
                  Learn more →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Split Section: Image + Highlights ── */}
        <div className="features-split mt-5 pt-4">

          {/* Left: Visual proof block */}
          <motion.div
            className="features-split-image"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="split-image-stack">
              <img
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=560&h=420&fit=crop&auto=format"
                alt="TechVedhu mentorship session"
                className="split-image"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=top&auto=format"
                alt="Happy TechVedhu student"
                className="split-image-inset"
              />
            </div>

            {/* Floating mini stats */}
            <motion.div
              className="split-stat-float"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {splitStats.map((s) => (
                <div key={s.label} className="split-stat-item">
                  <span className="split-stat-value" style={{ color: s.color }}>{s.value}</span>
                  <span className="split-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Google rating bubble */}
            <motion.div
              className="split-rating-bubble"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="split-rating-stars">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <span className="split-rating-text">
                <strong>4.8/5</strong> on Google Reviews
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="features-split-content"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">The TechVedhu Advantage</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px, 3vw, 34px)' }}>
              An Immersive Ecosystem Built{' '}
              <span className="text-gradient">for Your Career</span>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 28 }}>
              TechVedhu is more than courses. It's a complete career launchpad
              with live mentorship, real projects, mock assessments, and 100+
              hiring partners ready to place you.
            </p>

            <ul className="highlights-list">
              {highlights.map((item) => (
                <li key={item} className="highlight-item">
                  <div className="highlight-check-wrap">
                    <CheckCircle size={16} className="highlight-check" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <a
                href="https://wa.me/919363603504"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom"
              >
                <Zap size={16} fill="currentColor" />
                Book Free Trial
                <ArrowRight size={16} />
              </a>
              <Link to="/about" className="btn-outline-custom">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
