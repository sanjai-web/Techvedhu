import React, { useState, useEffect, useRef } from 'react';
import { testimonials } from '../../data/courses';
import './Testimonials.css';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const activeEl = track.querySelector('.testi-carousel-card.active');
    if (activeEl) {
      const trackWidth = track.clientWidth;
      const activeWidth = activeEl.clientWidth;
      const activeLeft = activeEl.offsetLeft;
      track.scrollTo({
        left: activeLeft - trackWidth / 2 + activeWidth / 2,
        behavior: 'smooth'
      });
    }
  }, [active]);

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        
        {/* Stories that inspire heading */}
        <div className="text-center-section reveal">
          <div className="section-label">
            <i className="bi bi-chat-quote-fill"></i> Student Stories
          </div>
          <h2 className="stories-title">
            Stories that <span className="inspire-highlight">inspire<span className="inspire-line"></span></span>
          </h2>
          <p className="section-subtitle">
            Hear from our alumni who transformed their careers and landed dream jobs at leading companies.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="testi-featured-container reveal">
          <div className="featured-card-grid">
            
            {/* Left Media Column */}
            <div className="featured-media-col">
              <div className="featured-video-wrapper">
                <img 
                  src={testimonials[active].videoThumbnail || 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=400&q=80'} 
                  alt={testimonials[active].name} 
                  className="featured-video-img" 
                />
                <div className="play-button-overlay">
                  <i className="bi bi-play-fill"></i>
                </div>
              </div>
            </div>

            {/* Right Quote Column */}
            <div className="featured-quote-col">
              <div className="purple-quote-icon">
                <i className="bi bi-quote"></i>
              </div>
              <p className="featured-quote-text">
                "{testimonials[active].text}"
              </p>
              <div className="featured-student-info">
                <h4 className="featured-student-name">{testimonials[active].name}</h4>
                <p className="featured-student-achievement">{testimonials[active].achievement}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel Row */}
        <div className="testi-carousel-wrapper reveal delay-200">
          <div className="testi-carousel-track" ref={trackRef}>
            {testimonials.map((t, i) => (
              <div 
                key={t.id} 
                className={`testi-carousel-card ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
              >
                {t.videoThumbnail ? (
                  <div className="card-video-thumb">
                    <img src={t.videoThumbnail} alt={t.name} className="thumb-video-img" />
                    <div className="play-button-overlay-small">
                      <i className="bi bi-play-fill"></i>
                    </div>
                    <div className="thumb-video-name-tag">{t.name}</div>
                  </div>
                ) : (
                  <div className="card-text-quote-wrapper">
                    <p className="card-text-quote">
                      "{t.text.length > 110 ? t.text.substring(0, 110) + '...' : t.text}"
                    </p>
                  </div>
                )}

                <div className="card-student-footer">
                  <img src={t.avatar} alt={t.name} className="card-student-avatar" />
                  <div className="card-student-meta">
                    <div className="card-student-name-row">
                      <span className="card-student-name">{t.name}</span>
                      <span className="student-badge">Student</span>
                    </div>
                    <span className="card-student-achievement">{t.achievement.split('(')[0].trim()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="carousel-nav-btn prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="carousel-nav-btn next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="carousel-indicators">
          {testimonials.map((_, i) => (
            <span 
              key={i} 
              className={`indicator-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
