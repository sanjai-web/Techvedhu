import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Globe, TrendingUp, Star } from 'lucide-react';
import './StatsSection.css';

const stats = [
  { icon: <Users size={28} />, value: 50000, suffix: '+', label: 'Active Learners', color: '#4F46E5' },
  { icon: <BookOpen size={28} />, value: 200, suffix: '+', label: 'Expert Courses', color: '#7C3AED' },
  { icon: <Award size={28} />, value: 95, suffix: '%', label: 'Placement Rate', color: '#10B981' },
  { icon: <Globe size={28} />, value: 48, suffix: '+', label: 'Countries Reached', color: '#F59E0B' },
  { icon: <TrendingUp size={28} />, value: 3.5, suffix: 'x', label: 'Avg Salary Hike', color: '#0EA5E9' },
  { icon: <Star size={28} />, value: 4.9, suffix: '/5', label: 'Student Rating', color: '#EF4444' },
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

  return (
    <span>{count}{suffix}</span>
  );
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

const partners = [
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/120px-Google_2015_logo.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/120px-Microsoft_logo.svg.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/120px-Amazon_logo.svg.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/120px-IBM_logo.svg.png' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/120px-Meta_Platforms_Inc._logo.svg.png' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/120px-Infosys_logo.svg.png' },
];

export default function StatsSection() {
  return (
    <section className="stats-section section-padding bg-surface">
      <div className="container">
        {/* Stats */}
        <div className="text-center mb-5">
          <p className="section-label">Our Impact</p>
          <h2 className="section-title">
            Numbers That{' '}
            <span className="text-gradient">Tell Our Story</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Partners */}
        <div className="partners-section mt-5">
          <p className="partners-label">Trusted by learners from top companies</p>
          <div className="partners-track-wrapper">
            <div className="partners-track">
              {[...partners, ...partners].map((p, i) => (
                <div key={i} className="partner-item">
                  <img src={p.logo} alt={p.name} className="partner-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
