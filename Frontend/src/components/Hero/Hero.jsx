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

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx(i => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const p = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 8,
    }));
    setParticles(p);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Ambient Background */}
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`, top: `${p.y}%`,
              width: `${p.size}px`, height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        <div className="hero-badge reveal">
          <span className="badge-dot"></span>
          🚀 India's #1 Industry-Driven Internship Platform
        </div>

        <h1 className="hero-title reveal delay-100">
          Real-World
          <span className="word-rotate-wrapper">
            <span className="word-rotate" key={wordIdx}>
              {words[wordIdx]}
            </span>
          </span>
          <br />
          <span className="gradient-text">That Launch Careers</span>
        </h1>

        <p className="hero-subtitle reveal delay-200">
          Learn directly from professionals at <strong>Google, Microsoft, Amazon</strong> & top MNCs.
          Get internship experience, build real projects, and land your dream job.
        </p>

        <div className="hero-cta-group reveal delay-300">
          <Link to="/internships" className="btn-primary-custom btn-lg-custom">
            <i className="bi bi-rocket-takeoff-fill"></i> Explore Programs
          </Link>
          <Link to="/career-launch" className="btn-outline-custom btn-lg-custom">
            <i className="bi bi-play-circle"></i> Career Launch Tracks
          </Link>
        </div>

        {/* Stacked Face Avatars & Social Proof */}
        <div className="hero-social-proof reveal delay-350">
          <div className="avatar-group">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80" alt="student" className="proof-avatar" />
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=80&h=80&q=80" alt="student" className="proof-avatar" />
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80" alt="student" className="proof-avatar" />
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80" alt="student" className="proof-avatar" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80" alt="student" className="proof-avatar" />
          </div>
          <div className="proof-content">
            <div className="proof-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <p className="proof-text">Loved by <strong>5,000+</strong> ambitious learners</p>
          </div>
        </div>

        <div className="hero-trust reveal delay-400">
          <div className="trust-item">
            <i className="bi bi-shield-check-fill" style={{ color: '#00D4AA' }}></i>
            <span>Industry Certified</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <i className="bi bi-people-fill" style={{ color: '#6C63FF' }}></i>
            <span>5000+ Placed</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <i className="bi bi-star-fill" style={{ color: '#FFD93D' }}></i>
            <span>4.9/5 Rating</span>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <div className={`stat-card reveal delay-${(i + 1) * 100}`} key={stat.label}>
              <div className="stat-icon">
                <i className={`bi ${stat.icon}`}></i>
              </div>
              <div className="stat-value">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hiring Partners Marquee */}
        <div className="hero-partners reveal">
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
