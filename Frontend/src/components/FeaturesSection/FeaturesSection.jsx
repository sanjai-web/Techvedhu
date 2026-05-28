import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, Video, FileCheck, Headphones, Trophy, Briefcase,
  Lightbulb, BarChart3, Shield, Zap, CheckCircle, ArrowRight
} from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: <Video size={24} />,
    title: 'Live Interactive Sessions',
    description: 'Join real-time classes with industry experts, ask questions, and collaborate with peers worldwide.',
    color: '#4F46E5',
    bg: '#EEF2FF',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Guaranteed Internships',
    description: 'Every program includes a guaranteed internship placement with our 200+ hiring partner companies.',
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    icon: <Trophy size={24} />,
    title: 'Industry Certifications',
    description: 'Earn globally recognized certificates that are valued by top-tier tech companies and startups.',
    color: '#F59E0B',
    bg: '#FFFBEB',
  },
  {
    icon: <Headphones size={24} />,
    title: '1:1 Mentor Sessions',
    description: 'Get personalized guidance from dedicated mentors who help you navigate your learning journey.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <FileCheck size={24} />,
    title: 'Real-World Projects',
    description: 'Build production-ready portfolio projects that demonstrate your skills to potential employers.',
    color: '#0EA5E9',
    bg: '#F0F9FF',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Progress Analytics',
    description: 'Track your learning progress with detailed analytics and get AI-powered personalized recommendations.',
    color: '#EF4444',
    bg: '#FEF2F2',
  },
];

const highlights = [
  'Learn at your own pace with lifetime course access',
  'Mobile-friendly learning on any device, anywhere',
  'Downloadable resources and offline access',
  'Community forums with 50,000+ active learners',
  'Weekly live doubt-clearing sessions',
  'Job referrals to 200+ partner companies',
];

export default function FeaturesSection() {
  return (
    <section className="features-section section-padding bg-surface" id="features">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="section-label">Why TechVedhu</p>
          <h2 className="section-title">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed in Tech</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A complete ecosystem designed to take you from beginner to
            industry-ready professional with unmatched support.
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
              alt="Learning Dashboard"
              className="split-image"
            />
            {/* Dashboard Overlay */}
            <div className="dashboard-overlay">
              <div className="dashboard-card">
                <Zap size={16} className="text-warning" />
                <div>
                  <div className="dashboard-card-title">Learning Streak</div>
                  <div className="dashboard-card-value">🔥 28 Days</div>
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
            <p className="section-label">The Full Package</p>
            <h2 className="section-title">
              An Immersive Learning{' '}
              <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="section-subtitle">
              TechVedhu is more than just video courses. It's a complete
              career launchpad with tools, mentorship, and community support
              every step of the way.
            </p>

            <ul className="highlights-list">
              {highlights.map((item) => (
                <li key={item} className="highlight-item">
                  <CheckCircle size={18} className="highlight-check" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/courses" className="btn-primary-custom mt-4 d-inline-flex">
              Start Learning Today
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
