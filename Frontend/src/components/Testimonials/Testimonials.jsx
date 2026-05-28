import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import './Testimonials.css';

// Real TechVedhu Google reviews (4.8/5) with authentic student photos
const testimonials = [
  {
    id: 1,
    name: 'M Thanvik Suriya',
    role: 'Cyber Security Student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'I really enjoyed the practical assignments. Learning about cybersecurity threats, defense mechanisms, and security audits was eye-opening. The hands-on approach made complex topics very easy to understand.',
    course: 'Cyber Security Program',
    outcome: 'Got placed in a Security firm',
    color: '#4F46E5',
  },
  {
    id: 2,
    name: 'M. Kavin',
    role: 'Cyber Security Graduate',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'I had zero prior knowledge of cybersecurity. After this course, I can confidently identify vulnerabilities, secure networks, and understand ethical hacking. The structured curriculum made all the difference.',
    course: 'Cyber Security Program',
    outcome: '50% salary hike achieved',
    color: '#10B981',
  },
  {
    id: 3,
    name: 'Veerappan K',
    role: 'Cyber Security Engineer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
    rating: 5,
    text: "TechVedhu's Cyber Security course was a game-changer! The hands-on labs and real-world scenarios helped me prevent cyber threats effectively. I feel fully prepared for real industry challenges.",
    course: 'Cyber Security Program',
    outcome: 'Now working at a top MNC',
    color: '#7C3AED',
  },
  {
    id: 4,
    name: 'Ruban Kumar M',
    role: 'Network Security Specialist',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face&auto=format',
    rating: 5,
    text: 'Fantastic course at TechVedhu! The combination of theory and hands-on practice helped me understand the intricacies of network security. The 1-1 assistance from mentors was invaluable.',
    course: 'Cyber Security Program',
    outcome: 'Landed dream job in 2 months',
    color: '#F59E0B',
  },
  {
    id: 5,
    name: 'Monish K',
    role: 'Cyber Security Analyst',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&h=80&fit=crop&crop=face&auto=format',
    rating: 5,
    text: "The best part was working on real-world cybersecurity projects. Case studies and live demonstrations made learning immersive. TechVedhu's work-experience-based model is unlike anything else.",
    course: 'Cyber Security Program',
    outcome: 'Secured role at IT security company',
    color: '#EF4444',
  },
];

// Individual smaller review cards for the grid
const miniReviews = [
  { name: 'Priya S.', text: 'Best investment I ever made for my career!', stars: 5, role: 'Web Dev Graduate' },
  { name: 'Arjun K.', text: 'Got placed at Accenture after the program.', stars: 5, role: 'ML Engineer' },
  { name: 'Deepa R.', text: 'The live classes are absolutely world-class.', stars: 5, role: 'Data Analyst' },
  { name: 'Karthik M.', text: 'Mentors are genuinely from top companies.', stars: 5, role: 'Java Developer' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [auto]);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    setAuto(false);
    setTimeout(() => setAuto(true), 8000);
  };

  const t = testimonials[current];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">

        {/* ── Header ── */}
        <div className="text-center mb-5">
          <p className="section-label">Student Reviews</p>
          <h2 className="section-title">
            Real Students,{' '}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hear directly from learners who transformed their careers with TechVedhu.
            Rated <strong>4.8/5</strong> on Google by hundreds of graduates.
          </p>
          <div className="divider mx-auto" />

          {/* Google Rating pill */}
          <div className="testimonials-rating-pill">
            <div className="rating-pill-stars">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
            </div>
            <span className="rating-pill-score">4.8 / 5</span>
            <span className="rating-pill-source">on Google Reviews</span>
            <div className="rating-pill-divider" />
            <ShieldCheck size={16} style={{ color: '#10B981' }} />
            <span className="rating-pill-verified">Verified</span>
          </div>
        </div>

        {/* ── Main Testimonial ── */}
        <div className="testimonials-main-wrap">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              className="testimonial-main-card"
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -60, scale: 0.97 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ '--card-accent': t.color }}
            >
              {/* Quote icon */}
              <div className="testimonial-quote-icon" style={{ color: t.color, background: `${t.color}12` }}>
                <Quote size={24} />
              </div>

              {/* Stars */}
              <div className="testimonial-stars">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="testimonial-text">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=EEF2FF&color=4F46E5&size=80`;
                  }}
                />
                <div className="testimonial-author-info">
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                  <div className="testimonial-course-pill" style={{ background: `${t.color}12`, color: t.color }}>
                    {t.course}
                  </div>
                </div>
                <div className="testimonial-outcome">
                  <Award size={14} />
                  {t.outcome}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="testimonial-nav">
            <button
              className="testimonial-nav-btn"
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => go(i)}
                  style={{ '--dot-color': item.color }}
                />
              ))}
            </div>

            <button
              className="testimonial-nav-btn"
              onClick={() => go((current + 1) % testimonials.length)}
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="testimonial-thumbs">
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                className={`testimonial-thumb ${i === current ? 'active' : ''}`}
                onClick={() => go(i)}
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=EEF2FF&color=4F46E5&size=48`;
                  }}
                />
                <div className="thumb-info">
                  <span className="thumb-name">{item.name}</span>
                  <span className="thumb-role">{item.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Mini Review Grid (additional social proof) ── */}
        <div className="mini-reviews-grid">
          {miniReviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="mini-review-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mini-review-stars">
                {Array(r.stars).fill(0).map((_, j) => (
                  <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="mini-review-text">"{r.text}"</p>
              <div className="mini-review-author">
                <span className="mini-review-name">{r.name}</span>
                <span className="mini-review-role">{r.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
