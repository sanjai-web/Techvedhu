import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe, TrendingUp, Star } from 'lucide-react';
import './StatsSection.css';

// ─── REAL stats from TechVedhu.com ──────────────────────────────────────────
const stats = [
  { icon: <BookOpen size={28} />, value: 1000, suffix: '+', label: 'Learning Hours', color: '#4F46E5' },
  { icon: <Users size={28} />, value: 10700, suffix: '+', label: 'Registered Learners', color: '#7C3AED' },
  { icon: <TrendingUp size={28} />, value: 50, suffix: '%', label: 'Average Salary Hike', color: '#10B981' },
  { icon: <Award size={28} />, value: 100, suffix: '+', label: 'Hiring Partners', color: '#F59E0B' },
  { icon: <Globe size={28} />, value: 10, suffix: '+', label: 'Languages Supported', color: '#0EA5E9' },
  { icon: <Star size={28} />, value: 92, suffix: '%', label: 'Positive Impact on Productivity', color: '#EF4444' },
];

// ─── Companies where TechVedhu learners work ───────────────────────────────
const partners = [
  {
    name: 'Accenture',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/120px-Accenture.svg.png',
  },
  {
    name: 'Zoho',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zoho_Corporation_Logo.png/120px-Zoho_Corporation_Logo.png',
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png',
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png',
  },
  {
    name: 'Walmart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Walmart_Spark.svg/120px-Walmart_Spark.svg.png',
  },
  {
    name: 'Cognizant',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Cognizant_logo_2022.svg/120px-Cognizant_logo_2022.svg.png',
  },
];

function CountUp({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const isFloat = !Number.isInteger(target);
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <div className="stat-card-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
        {stat.icon}
      </div>
      <div className="stat-card-value" style={{ color: stat.color }}>
        <CountUp target={stat.value} suffix={stat.suffix} start={inView} />
      </div>
      <div className="stat-card-label">{stat.label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats-section section-padding bg-surface">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="section-label">Our Impact</p>
          <h2 className="section-title">
            Numbers That{' '}
            <span className="text-gradient">Tell Our Story</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real outcomes from real learners — 92% report a positive impact
            on their career productivity after joining TechVedhu.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Partners */}
        <div className="partners-section mt-5">
          <p className="partners-label">Our Learners Work At</p>
          <div className="partners-track-wrapper">
            <div className="partners-track">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="partner-item">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="partner-logo"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="partner-text-fallback" style={{ display: 'none' }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
