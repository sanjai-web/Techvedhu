import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { stats, hiringPartners } from '../../data/courses';
import './Hero.css';

const words = ['Internships', 'Mentorship', 'Placements', 'Skills', 'Careers'];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const inc = target / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating icon badges for the hero visual
const floatingBadges = [
  { icon: 'bi-code-slash',    label: 'Coding',     cls: 'fb-1', color: '#2563EB' },
  { icon: 'bi-briefcase-fill', label: 'Placement', cls: 'fb-2', color: '#2563EB' },
  { icon: 'bi-wifi',          label: 'Live',       cls: 'fb-3', color: '#2563EB' },
  { icon: 'bi-people-fill',   label: 'Community',  cls: 'fb-4', color: '#2563EB' },
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx(i => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Ambient Background */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-two-col">

        {/* ── LEFT: Text Content ── */}
        <div className="hero-left reveal">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            🚀 India's #1 Industry-Driven Internship Platform
          </div>

          <h1 className="hero-title">
            Real-World
            <span className="word-rotate-wrapper">
              <span className="word-rotate" key={wordIdx}>{words[wordIdx]}</span>
            </span>
            <br />
            <span className="gradient-text">That Launch Careers</span>
          </h1>

          <p className="hero-subtitle">
            Learn directly from professionals at <strong>Google, Microsoft, Amazon</strong> & top MNCs.
            Get internship experience, build real projects, and land your dream job.
          </p>

          <div className="hero-cta-group">
            <Link to="/internships" className="btn-primary-custom btn-lg-custom">
              <i className="bi bi-rocket-takeoff-fill"></i> Explore Programs
            </Link>
            <Link to="/career-launch" className="btn-outline-custom btn-lg-custom">
              <i className="bi bi-play-circle"></i> Career Launch Tracks
            </Link>
          </div>

          {/* Social Proof */}
          <div className="hero-social-proof">
            <div className="avatar-group">
              {[
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80',
                'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
              ].map((src, i) => <img key={i} src={src} alt="student" className="proof-avatar" />)}
            </div>
            <div className="proof-content">
              <div className="proof-stars">
                {[1,2,3,4,5].map(s => <i key={s} className="bi bi-star-fill"></i>)}
              </div>
              <p className="proof-text">Loved by <strong>5,000+</strong> ambitious learners</p>
            </div>
          </div>

          {/* Trust bar */}
          <div className="hero-trust">
            <div className="trust-item">
              <i className="bi bi-shield-check-fill" style={{ color: '#10b981' }}></i>
              <span>Industry Certified</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <i className="bi bi-people-fill" style={{ color: '#2563EB' }}></i>
              <span>5000+ Placed</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <i className="bi bi-star-fill" style={{ color: '#F59E0B' }}></i>
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Person Visual ── */}
        <div className="hero-right reveal delay-200">
          
          {/* SVG Swirl left */}
          <svg className="hero-swirl hero-swirl-left" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 380 C20 340, 20 260, 80 220 C140 180, 160 120, 100 80 C60 50, 30 80, 50 120 C70 160, 120 150, 110 100" stroke="rgba(37,99,235,0.2)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>

          {/* SVG Swirl right */}
          <svg className="hero-swirl hero-swirl-right" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 380 C160 340, 170 260, 110 220 C50 180, 30 110, 100 70 C150 40, 180 80, 160 120 C140 160, 90 145, 105 95" stroke="rgba(249,115,22,0.18)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>

          {/* Plus/dot cross pattern */}
          <div className="hero-cross-pattern">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="cross-dot">+</span>
            ))}
          </div>

          {/* Person cutout */}
          <div className="hero-person-wrap">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&h=780&q=85"
              alt="Tech student"
              className="hero-person-img"
            />

            {/* Floating icon badges */}
            {floatingBadges.map(b => (
              <div key={b.cls} className={`hero-float-badge ${b.cls}`} title={b.label}>
                <i className={`bi ${b.icon}`}></i>
              </div>
            ))}

            {/* Stats overlay card */}
            <div className="hero-stats-float-card">
              <div className="hfc-stat">
                <span className="hfc-label">Students Placed</span>
                <span className="hfc-num hfc-blue">5,000+</span>
              </div>
              <div className="hfc-divider"></div>
              <div className="hfc-stat">
                <span className="hfc-label">Programs</span>
                <span className="hfc-num hfc-orange">15+</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Partners marquee — full width below */}
      <div className="hero-partners-bar">
        <div className="container">
          <p className="partners-label">Our Learners Work At</p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...hiringPartners, ...hiringPartners].map((partner, i) => (
                <div key={i} className="partner-logo">
                  <img src={partner.logo} alt={partner.name} className="partner-logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
