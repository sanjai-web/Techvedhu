import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe, TrendingUp, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import './StatsSection.css';

const stats = [
  { icon: <BookOpen size={26} />, value: 1000, suffix: '+', label: 'Learning Hours', sub: 'Content across all programs', color: '#4F46E5' },
  { icon: <Users size={26} />, value: 10700, suffix: '+', label: 'Registered Learners', sub: 'Students enrolled to date', color: '#7C3AED' },
  { icon: <TrendingUp size={26} />, value: 50, suffix: '%', label: 'Avg Salary Hike', sub: 'Reported by our graduates', color: '#10B981' },
  { icon: <Award size={26} />, value: 100, suffix: '+', label: 'Hiring Partners', sub: 'Actively sourcing talent', color: '#F59E0B' },
  { icon: <Globe size={26} />, value: 10, suffix: '+', label: 'Languages Supported', sub: 'Multi-lingual learning', color: '#0EA5E9' },
  { icon: <Star size={26} />, value: 92, suffix: '%', label: 'Positive Career Impact', sub: 'Self-reported productivity gain', color: '#EF4444' },
];

// Using text-based partner display (more reliable than external image URLs)
const partners = [
  { name: 'Accenture', color: '#A100FF' },
  { name: 'Zoho', color: '#C8202F' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Walmart', color: '#007DC6' },
  { name: 'Cognizant', color: '#1A4CA1' },
  { name: 'Infosys', color: '#007CC3' },
  { name: 'TCS', color: '#EF1723' },
  { name: 'Wipro', color: '#342E87' },
  { name: 'HCL', color: '#005A8B' },
  { name: 'Capgemini', color: '#0070AD' },
  { name: 'IBM', color: '#1F70C1' },
];

const proofPoints = [
  'No-risk Free Trial',
  'Placement Guaranteed',
  'Industry Certified',
  'Live Expert Mentors',
];

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 2200;
    const steps = 70;
    const increment = target / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(increment * step, target);
      setCount(Math.floor(current));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [start, target]);

  const display = count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count;
  return <span>{display}{suffix}</span>;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      style={{ '--card-color': stat.color }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <div className="stat-card-icon" style={{ background: `${stat.color}12`, color: stat.color }}>
        {stat.icon}
      </div>
      <div className="stat-card-value" style={{ color: stat.color }}>
        <CountUp target={stat.value} suffix={stat.suffix} start={inView} />
      </div>
      <div className="stat-card-label">{stat.label}</div>
      <div className="stat-card-sub">{stat.sub}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-5">
          <p className="section-label">Real Outcomes</p>
          <h2 className="section-title">
            Numbers That{' '}
            <span className="text-gradient">Tell Our Story</span>
          </h2>
          <p className="section-subtitle mx-auto">
            92% of TechVedhu graduates report a measurable positive impact on their career
            within 6 months of completing a program.
          </p>
          <div className="divider mx-auto" />
        </div>

        {/* Stats grid */}
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Proof strip */}
        <motion.div
          className="partners-proof-strip"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {proofPoints.map((item) => (
            <div key={item} className="proof-strip-item">
              <CheckCircle size={16} />
              {item}
            </div>
          ))}
        </motion.div>

        {/* Partners */}
        <motion.div
          className="partners-section mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="partners-section-header">
            <div className="partners-trusted-row">
              <ShieldCheck size={18} style={{ color: '#10B981' }} />
              <span className="partners-trusted-badge">
                ✓ 100+ Companies Actively Hiring Our Graduates
              </span>
            </div>
            <p className="partners-label">Our Learners Work At</p>
          </div>

          {/* Scrolling marquee */}
          <div className="partners-track-wrapper">
            <div className="partners-track">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="partner-item">
                  <span
                    className="partner-text-fallback"
                    style={{ '--partner-color': p.color }}
                  >
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
