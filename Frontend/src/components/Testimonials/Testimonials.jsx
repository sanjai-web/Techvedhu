import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Full Stack Developer',
    company: 'Flipkart',
    avatar: 'https://i.pravatar.cc/80?img=11',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/NowFloats_Boost_logo.png/120px-NowFloats_Boost_logo.png',
    rating: 5,
    text: 'TechVedhu completely transformed my career trajectory. Within 6 months of completing the Full Stack Development course, I landed a ₹18 LPA package at Flipkart. The mentorship and live projects were absolutely invaluable.',
    course: 'Full Stack Web Development',
    salaryBefore: '₹4 LPA',
    salaryAfter: '₹18 LPA',
  },
  {
    id: 2,
    name: 'Priya Subramaniam',
    role: 'Data Scientist',
    company: 'Wipro Technologies',
    avatar: 'https://i.pravatar.cc/80?img=5',
    rating: 5,
    text: 'The Data Science course curriculum at TechVedhu is miles ahead of any other platform. Real datasets, real problems, and an incredible community. I went from a non-tech background to being a professional data scientist in just 8 months!',
    course: 'Data Science & Analytics',
    salaryBefore: '₹3.5 LPA',
    salaryAfter: '₹14 LPA',
  },
  {
    id: 3,
    name: 'Rahul Gupta',
    role: 'Cloud Solutions Architect',
    company: 'TCS Digital',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: 5,
    text: 'Got my AWS certification and doubled my salary! The instructors at TechVedhu are not just teachers — they are active industry practitioners who know exactly what the job market demands.',
    course: 'AWS Cloud Practitioner',
    salaryBefore: '₹6 LPA',
    salaryAfter: '₹15 LPA',
  },
  {
    id: 4,
    name: 'Sneha Iyer',
    role: 'AI/ML Engineer',
    company: 'Zoho Corporation',
    avatar: 'https://i.pravatar.cc/80?img=20',
    rating: 5,
    text: 'From a mechanical engineering student to an AI engineer — TechVedhu made this dream a reality. The AI & ML curriculum is cutting-edge and the placement support is unmatched.',
    course: 'Machine Learning & AI',
    salaryBefore: '₹3 LPA',
    salaryAfter: '₹16 LPA',
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
          <p className="section-label">Student Success Stories</p>
          <h2 className="section-title">
            Real People.{' '}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Join thousands of professionals who transformed their careers
            through TechVedhu's industry-aligned programs.
          </p>
          <div className="divider mx-auto" />
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
                    Course: <strong>{t.course}</strong>
                  </div>
                </div>

                {/* Right */}
                <div className="testimonial-right">
                  <div className="testimonial-profile">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                      <div className="testimonial-company">{t.company}</div>
                    </div>
                  </div>

                  {/* Salary Growth */}
                  <div className="salary-card">
                    <div className="salary-label">Career Growth</div>
                    <div className="salary-row">
                      <div className="salary-before">
                        <span className="salary-tag">Before</span>
                        <span className="salary-value">{t.salaryBefore}</span>
                      </div>
                      <div className="salary-arrow">→</div>
                      <div className="salary-after">
                        <span className="salary-tag after">After</span>
                        <span className="salary-value after">{t.salaryAfter}</span>
                      </div>
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
                <div className="thumb-company">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
