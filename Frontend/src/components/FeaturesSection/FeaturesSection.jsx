import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Video, Briefcase, Trophy, Headphones, FileCheck, BarChart3,
  CheckCircle, ArrowRight, Zap
} from 'lucide-react';
import './FeaturesSection.css';

// ─── REAL features from TechVedhu.com "Why Choose Us" ────────────────────────
const features = [
  {
    icon: <Video size={24} />,
    title: 'Live Interactive Classes',
    description: 'Learn in real-time with industry experts through fully live, interactive sessions — not pre-recorded videos.',
    color: '#4F46E5',
    bg: '#EEF2FF',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Gain Working Experience',
    description: 'Work on professional projects alongside industry practitioners, simulating real tech company environments.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    icon: <Headphones size={24} />,
    title: '1-1 Assistance',
    description: 'Get personalized support from dedicated mentors who guide you through challenges at every step of your journey.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Expert Advice',
    description: 'Learn directly from professionals who have worked at top tech companies like Zoho, Microsoft, Accenture, and Amazon.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Mock Assessments',
    description: 'Prepare confidently with comprehensive mock tests, coding challenges, and interview simulations designed to mirror real hiring processes.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Placement Guaranteed',
    description: 'We don\'t just teach — we place. Our 100+ hiring partner network ensures you land your dream tech role upon program completion.',
    color: '#EF4444',
    bg: '#FEF2F2',
  },
];

// ─── Program types from TechVedhu.com ─────────────────────────────────────
const programTypes = [
  {
    title: 'Internship / Certificate Program',
    description: 'Gain real-world experience through structured internship programs. Develop the skills they need, work on live projects, and earn a recognized certificate upon completion.',
    cta: 'Explore Programs',
    link: '/courses',
    icon: '🎓',
    color: '#4F46E5',
  },
  {
    title: 'Career Launchpad Program',
    description: 'Career Launchpad is a comprehensive career development program offering personalized guidance and resources to propel your professional journey with guaranteed referrals.',
    cta: 'Explore Launchpad',
    link: '/courses',
    icon: '🚀',
    color: '#7C3AED',
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

export default function FeaturesSection() {
  return (
    <section className="features-section section-padding bg-surface" id="features">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="section-label">Why Choose TechVedhu</p>
          <h2 className="section-title">
            Learn Like You're Already{' '}
            <span className="text-gradient">In a Tech Company</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Our work-experience-based learning model is what sets TechVedhu apart —
            every program is designed to mirror what happens inside India's best tech companies.
          </p>
          <div className="divider mx-auto" />
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="feature-icon"
                style={{ background: feature.bg, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Program Type Cards */}
        <div className="program-types mt-5">
          <div className="text-center mb-4">
            <h3 className="section-title" style={{ fontSize: 28 }}>
              Choose Your{' '}
              <span className="text-gradient">Learning Path</span>
            </h3>
          </div>
          <div className="program-types-grid">
            {programTypes.map((p, i) => (
              <motion.div
                key={p.title}
                className="program-type-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ borderColor: `${p.color}30` }}
              >
                <span className="program-type-icon">{p.icon}</span>
                <h4 className="program-type-title" style={{ color: p.color }}>{p.title}</h4>
                <p className="program-type-desc">{p.description}</p>
                <Link
                  to={p.link}
                  className="program-type-cta"
                  style={{ color: p.color, borderColor: `${p.color}30` }}
                >
                  {p.cta} →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Split Section */}
        <div className="features-split mt-5">
          <motion.div
            className="features-split-image"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=560&h=400&fit=crop"
              alt="TechVedhu Learning Experience"
              className="split-image"
            />
            <div className="dashboard-overlay">
              <div className="dashboard-card">
                <Zap size={16} style={{ color: '#F59E0B' }} />
                <div>
                  <div className="dashboard-card-title">Placement Rate</div>
                  <div className="dashboard-card-value">🔥 Guaranteed</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="features-split-content"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">The TechVedhu Advantage</p>
            <h2 className="section-title" style={{ fontSize: 28 }}>
              An Immersive, Work-Based{' '}
              <span className="text-gradient">Learning Ecosystem</span>
            </h2>
            <p className="section-subtitle">
              TechVedhu is more than just courses. It's a complete career launchpad
              with live mentorship, real projects, mock assessments, and 100+
              hiring partners ready to place you.
            </p>

            <ul className="highlights-list">
              {highlights.map((item) => (
                <li key={item} className="highlight-item">
                  <CheckCircle size={18} className="highlight-check" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/register" className="btn-primary-custom mt-4 d-inline-flex">
              Book Your Free Trial
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
