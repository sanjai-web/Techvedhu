import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import {
  ArrowRight, Star, Users, Award, CheckCircle,
  TrendingUp, Sparkles, Clock, Code2, Briefcase, Wifi, Zap
} from 'lucide-react';
import './Hero.css';

// ─── Trust signals — the "5-second test" must communicate these ───────────────
const trustBadges = [
  { icon: <Code2 size={16} />, label: 'Tech Skills' },
  { icon: <Briefcase size={16} />, label: 'Real Projects' },
  { icon: <Wifi size={16} />, label: 'Live Classes' },
  { icon: <Users size={16} />, label: 'Community' },
];

const stats = [
  { value: '10.7K+', label: 'Registered', color: '#4F46E5', sub: 'Active Learners' },
  { value: '10+', label: 'Languages', color: '#F59E0B', sub: 'Supported' },
  { value: '50%', label: 'Salary Hike', color: '#10B981', sub: 'Average' },
  { value: '100+', label: 'Partners', color: '#EF4444', sub: 'Hiring Companies' },
];

const floatingBadges = [
  { icon: '💼', text: 'Real Projects', color: '#4F46E5', top: '12%', right: '4%', delay: 0.6 },
  { icon: '🏆', text: 'Placement Guaranteed', color: '#F59E0B', bottom: '30%', left: '-5%', delay: 0.9 },
  { icon: '⚡', text: 'Live Classes', color: '#10B981', top: '55%', right: '-2%', delay: 1.2 },
];

// Rotating words for the animated headline
const words = ['Career', 'Skills', 'Future', 'Dream'];

// Trust reviews — real-feeling social proof
const microReviews = [
  { name: 'Arjun K.', avatar: '👨‍💻', text: 'Got placed at Accenture!', stars: 5 },
  { name: 'Priya S.', avatar: '👩‍💼', text: 'Best investment I made', stars: 5 },
  { name: 'Rahul M.', avatar: '🧑‍🎓', text: 'Loved the live classes', stars: 5 },
];

// Hiring partners
const partners = ['Accenture', 'Zoho', 'Microsoft', 'Amazon', 'Walmart', 'Cognizant', 'Infosys'];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const wordTimer = setInterval(() => setCurrentWord((p) => (p + 1) % words.length), 2500);
    const reviewTimer = setInterval(() => setCurrentReview((p) => (p + 1) % microReviews.length), 3000);
    return () => { clearInterval(wordTimer); clearInterval(reviewTimer); };
  }, []);

  return (
    <section className="hero-section" ref={constraintsRef}>
      {/* ── Animated Background ── */}
      <div className="hero-bg">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-gradient-orb orb-3" />
        <div className="hero-dots-grid" />
        {/* Decorative curves like in uploaded design */}
        <svg className="hero-curve hero-curve-left" viewBox="0 0 200 400" fill="none">
          <path d="M160 20 C 60 80, 40 180, 140 240 C 240 300, 80 360, 60 400" stroke="#4F46E5" strokeWidth="2" opacity="0.08" />
          <path d="M140 0 C 40 100, 60 200, 120 260 C 200 330, 60 380, 80 420" stroke="#7C3AED" strokeWidth="1.5" opacity="0.05" />
        </svg>
        <svg className="hero-curve hero-curve-right" viewBox="0 0 200 400" fill="none">
          <path d="M40 20 C 140 80, 160 180, 60 240 C -40 300, 120 360, 140 400" stroke="#F59E0B" strokeWidth="2" opacity="0.08" />
        </svg>
        {/* Dot pattern (like the uploaded reference) */}
        <div className="hero-dot-pattern dot-pattern-1" />
        <div className="hero-dot-pattern dot-pattern-2" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-inner">

          {/* ─── LEFT: Content ─── */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Live badge */}
            <motion.div
              className="hero-live-pill"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="live-pulse-ring" />
              <span className="live-dot-inner" />
              <Sparkles size={13} />
              <span>India's #1 Work-Experience Platform</span>
            </motion.div>

            {/* Main headline */}
            <h1 className="hero-heading">
              Supercharge Your{' '}
              <span className="hero-word-wrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    className="hero-word-gradient"
                    initial={{ y: 30, opacity: 0, rotateX: -30 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -30, opacity: 0, rotateX: 30 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    {words[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              <span className="hero-heading-sub">Land Your Dream Tech Job</span>
            </h1>

            <p className="hero-subtitle">
              Live classes · Real projects · 1-1 Mentorship · Placement Guaranteed.<br />
              Learn the way top tech companies in India actually work.
            </p>

            {/* Trust checkpoints */}
            <div className="hero-trust-row">
              {[
                'Free demo session — no commitment',
                '100+ companies actively hiring',
                'Certificate recognized by top firms',
              ].map((item) => (
                <div key={item} className="hero-trust-item">
                  <CheckCircle size={15} className="trust-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <motion.a
                href="https://wa.me/919363603504"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Zap size={18} fill="currentColor" />
                Book Your Free Trial
                <ArrowRight size={18} />
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Link to="/courses" className="hero-cta-secondary">
                  Explore Programs →
                </Link>
              </motion.div>
            </div>

            {/* Micro-social proof — review ticker */}
            <div className="hero-social-proof">
              <div className="review-avatars">
                {['🧑‍💻', '👩‍💼', '🧑‍🎓', '👨‍💻'].map((a, i) => (
                  <span key={i} className="review-avatar-bubble" style={{ zIndex: 4 - i }}>
                    {a}
                  </span>
                ))}
              </div>
              <div className="review-ticker-wrap">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    className="review-ticker"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="review-stars">
                      {Array(5).fill(0).map((_, i) => <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />)}
                    </div>
                    <span className="review-text">
                      "<strong>{microReviews[currentReview].name}</strong> — {microReviews[currentReview].text}"
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="google-proof">
                <span className="google-score">4.8</span>
                <span className="google-label">on Google</span>
              </div>
            </div>

            {/* Hiring partners strip */}
            <div className="hero-partners-strip">
              <span className="partners-strip-label">Our learners work at</span>
              <div className="partners-scroll-track">
                {[...partners, ...partners].map((p, i) => (
                  <span key={i} className="partner-name-badge">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── RIGHT: Visual (person + floating elements like the reference) ─── */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Background shape */}
            <div className="hero-person-stage">
              <div className="person-stage-blob" />
              <div className="person-stage-ring person-stage-ring-1" />
              <div className="person-stage-ring person-stage-ring-2" />

              {/* Person Image — cut out style */}
              <div className="hero-person-wrap">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=680&fit=crop&crop=top&auto=format"
                  alt="TechVedhu student"
                  className="hero-person-img"
                />

                {/* Stat card overlay — like the reference image */}
                <motion.div
                  className="hero-stat-overlay"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                >
                  <div className="hero-stat-overlay-inner">
                    <div className="stat-overlay-item">
                      <span className="stat-overlay-label">Registered</span>
                      <span className="stat-overlay-value" style={{ color: '#4F46E5' }}>10.7k</span>
                    </div>
                    <div className="stat-overlay-divider" />
                    <div className="stat-overlay-item">
                      <span className="stat-overlay-label">Languages</span>
                      <span className="stat-overlay-value" style={{ color: '#F59E0B' }}>10+</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating trust badges around the person (like the reference) */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  className="hero-floating-badge"
                  style={{
                    top: badge.top,
                    right: badge.right,
                    bottom: badge.bottom,
                    left: badge.left,
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: badge.delay, type: 'spring', stiffness: 120 }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className="floating-badge-inner"
                  >
                    <span className="floating-badge-icon">{badge.icon}</span>
                    <span className="floating-badge-text">{badge.text}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Circular icon badges — matching reference design */}
              {[
                { icon: <Code2 size={20} />, top: '5%', left: '35%', delay: 0.5, color: '#4F46E5' },
                { icon: <Briefcase size={20} />, top: '28%', left: '5%', delay: 0.7, color: '#4F46E5' },
                { icon: <Wifi size={20} />, top: '18%', right: '5%', delay: 0.9, color: '#4F46E5' },
                { icon: <Users size={20} />, bottom: '18%', right: '5%', delay: 1.1, color: '#4F46E5' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="hero-icon-bubble"
                  style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: badge.delay, type: 'spring', stiffness: 150 }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="icon-bubble-inner"
                    style={{ color: badge.color }}
                  >
                    {badge.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom Stats Bar ─── */}
        <motion.div
          className="hero-stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          {stats.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className="hero-stats-item">
                <span className="stats-item-value" style={{ color: s.color }}>{s.value}</span>
                <div className="stats-item-meta">
                  <span className="stats-item-label">{s.label}</span>
                  <span className="stats-item-sub">{s.sub}</span>
                </div>
              </div>
              {i < stats.length - 1 && <div className="stats-bar-divider" />}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
