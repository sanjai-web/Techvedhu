import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Star, Zap, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import InternshipsSection from '../components/InternshipsSection/InternshipsSection';
import './CoursesPage.css';
import './InternshipsPage.css';

const trustPills = [
  { icon: <Users size={14} />, text: '10.7K+ Enrolled' },
  { icon: <Star size={14} fill="#F59E0B" color="#F59E0B" />, text: '4.8 Google Rating' },
  { icon: <Award size={14} />, text: 'Placement Guaranteed' },
  { icon: <TrendingUp size={14} />, text: '50% Avg Salary Hike' },
];

const outcomes = [
  'Real internship certificate on completion',
  '100+ active hiring partner companies',
  'Live classes — not pre-recorded videos',
  'Free demo before you enroll',
];

export default function InternshipsPage() {
  return (
    <div className="page-content">
      {/* ── Premium Hero ── */}
      <div className="internships-page-hero">
        <div className="internships-hero-orb internships-orb-1" />
        <div className="internships-hero-orb internships-orb-2" />
        <div className="internships-hero-dots" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="internships-hero-inner">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="internships-hero-content"
            >
              <div className="internships-live-badge">
                <span className="internships-live-dot" />
                <ShieldCheck size={13} />
                Placement Guaranteed Programs
              </div>

              <h1 className="internships-hero-title">
                Real Internships.<br />
                <span className="text-gradient">Real Certificates.</span><br />
                Real Careers.
              </h1>

              <p className="internships-hero-subtitle">
                12 industry-aligned internship programs built around how top tech
                companies actually work — with live classes, real projects, and
                100+ companies ready to hire you.
              </p>

              <ul className="internships-outcomes-list">
                {outcomes.map((o) => (
                  <li key={o} className="internships-outcome-item">
                    <CheckCircle size={15} />
                    {o}
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
                <Link to="/courses" className="btn-outline-custom">
                  Browse All Programs
                </Link>
              </div>

              {/* Trust pills */}
              <div className="internships-trust-pills">
                {trustPills.map((p) => (
                  <div key={p.text} className="internships-trust-pill">
                    {p.icon}
                    {p.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Floating person visual */}
            <motion.div
              className="internships-hero-visual"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="internships-person-stage">
                <div className="internships-blob" />
                <div className="internships-ring internships-ring-1" />
                <div className="internships-ring internships-ring-2" />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=480&fit=crop&crop=top&auto=format"
                  alt="TechVedhu intern success"
                  className="internships-person-img"
                />

                <motion.div
                  className="internships-float-badge internships-float-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🏆 Placement Guaranteed
                </motion.div>

                <motion.div
                  className="internships-float-badge internships-float-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  ⚡ Live Classes
                </motion.div>

                <motion.div
                  className="internships-float-badge internships-float-3"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  💼 Real Projects
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <InternshipsSection />
    </div>
  );
}
