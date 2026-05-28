import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

// ─── REAL testimonials from TechVedhu.com (Google Reviews 4.8/5) ─────────────
const testimonials = [
  {
    id: 1,
    name: 'M Thanvik Suriya',
    role: 'Cyber Security Student',
    company: 'TechVedhu',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: 'I really enjoyed the practical assignments. Learning about cybersecurity threats, defense mechanisms, and security audits was eye-opening and extremely useful. The hands-on approach made complex topics very easy to understand.',
    course: 'Cyber Security Program',
  },
  {
    id: 2,
    name: 'M. Kavin',
    role: 'Cyber Security Graduate',
    company: 'TechVedhu',
    avatar: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'I had no prior knowledge of cybersecurity, but after this course, I can confidently identify vulnerabilities, secure networks, and understand ethical hacking techniques! The structured curriculum and expert guidance made all the difference.',
    course: 'Cyber Security Program',
  },
  {
    id: 3,
    name: 'Veerappan K',
    role: 'Cyber Security Engineer',
    company: 'TechVedhu',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: 5,
    text: "Tech Vedhu's Cyber Security course was a game-changer! The hands-on labs and real-world scenarios helped me understand how to prevent cyber threats effectively. I feel fully prepared for real industry challenges.",
    course: 'Cyber Security Program',
  },
  {
    id: 4,
    name: 'Ruban Kumar M',
    role: 'Network Security Specialist',
    company: 'TechVedhu',
    avatar: 'https://i.pravatar.cc/80?img=20',
    rating: 5,
    text: 'This Cyber Security course at Tech Vedhu was fantastic! The combination of theory and hands-on practice helped me understand the intricacies of network security. The 1-1 assistance from mentors was invaluable throughout.',
    course: 'Cyber Security Program',
  },
  {
    id: 5,
    name: 'Monish K',
    role: 'Cyber Security Analyst',
    company: 'TechVedhu',
    avatar: 'https://i.pravatar.cc/80?img=67',
    rating: 5,
    text: 'The best part was working on real-world cybersecurity projects. The case studies and live demonstrations made the learning experience truly immersive. TechVedhu\'s work-experience-based model is unlike anything else.',
    course: 'Cyber Security Program',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-label">Student Reviews</p>
          <h2 className="section-title">
            What Our Learners{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Rated <strong>4.8 / 5</strong> on Google Reviews by learners across India.
            Real stories from students who transformed their careers with TechVedhu.
          </p>
          <div className="divider mx-auto" />
          {/* Google Rating Banner */}
          <div className="google-rating-banner">
            <div className="google-rating-stars">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={20} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className="google-rating-score">4.8 / 5</span>
            <span className="google-rating-label">Google Reviews</span>
          </div>
        </div>

        <div className="testimonial-wrapper">
          {/* Main Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              className="testimonial-card"
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <div className="testimonial-card-inner">
                {/* Left */}
                <div className="testimonial-left">
                  <div className="testimonial-quote">
                    <Quote size={32} />
                  </div>
                  <p className="testimonial-text">{t.text}</p>

                  {/* Stars */}
                  <div className="testimonial-rating">
                    {Array(t.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* Course Badge */}
                  <div className="testimonial-course">
                    Program: <strong>{t.course}</strong>
                  </div>
                </div>

                {/* Right */}
                <div className="testimonial-right">
                  <div className="testimonial-profile">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                      <div className="testimonial-company">TechVedhu Graduate</div>
                    </div>
                  </div>

                  {/* TechVedhu Promise Card */}
                  <div className="salary-card">
                    <div className="salary-label">TechVedhu Promise</div>
                    <div className="promise-list">
                      {[
                        '✓ Live Interactive Classes',
                        '✓ Real-World Projects',
                        '✓ 1-1 Mentorship',
                        '✓ Placement Guaranteed',
                      ].map((item) => (
                        <div key={item} className="promise-item">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="testimonial-controls">
            <button className="testimonial-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={20} />
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === current ? 'active' : ''}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                />
              ))}
            </div>

            <button className="testimonial-btn" onClick={next} aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="testimonial-thumbs">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial-thumb ${i === current ? 'active' : ''}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
            >
              <img src={t.avatar} alt={t.name} />
              <div>
                <div className="thumb-name">{t.name}</div>
                <div className="thumb-company">{t.course}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
