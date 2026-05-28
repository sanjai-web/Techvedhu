import React from 'react';
import { Link } from 'react-router-dom';
import { careerLaunchPrograms } from '../../data/courses';
import './CareerLaunch.css';

export default function CareerLaunch() {
  return (
    <section className="career-launch-section section-padding" id="career-launch">
      <div className="container">
        <div className="text-center-section reveal">
          <div className="section-label">
            <i className="bi bi-lightning-charge-fill"></i> Career Launch Programs
          </div>
          <h2 className="section-title">
            Complete <span className="gradient-text">Career Transformation</span>
          </h2>
          <p className="section-subtitle">
            Intensive placement-focused programs combining technical mastery, GenAI skills, mentor-led projects, and guaranteed interview support.
          </p>
        </div>

        <div className="launch-grid">
          {careerLaunchPrograms.map((prog, i) => (
            <div key={prog.id} className={`launch-card reveal delay-${(i + 1) * 100}`}>
              {/* Image Banner */}
              <div className="launch-card-banner">
                <img src={prog.image} alt={prog.title} className="launch-banner-img" />
                <div className="launch-badge" style={{ background: prog.gradient, color: '#ffffff', border: 'none', position: 'absolute', top: '12px', left: '12px', zIndex: 3 }}>
                  {prog.badge}
                </div>
                <div className="launch-icon" style={{ backgroundColor: prog.color, borderColor: prog.color, color: '#ffffff', position: 'absolute', bottom: '-20px', left: '20px', zIndex: 3 }}>
                  <i className={`bi ${prog.icon}`}></i>
                </div>
              </div>

              {/* Gradient Bar */}
              <div className="launch-gradient-bar" style={{ background: prog.gradient }}></div>

              <div className="launch-card-body">
                <h3 className="launch-title">{prog.title}</h3>
                <p className="launch-subtitle-text" style={{ color: prog.color }}>{prog.subtitle}</p>
                <p className="launch-desc">{prog.description}</p>

              {/* Skills */}
              <div className="launch-skills">
                {prog.skills.map(skill => (
                  <span key={skill} className="skill-chip">
                    <i className="bi bi-check-circle-fill" style={{ color: prog.color }}></i> {skill}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="launch-pricing">
                <div className="price-block">
                  <span className="price-current">{prog.emi}</span>
                  <span className="price-emi-duration">({prog.emiDuration})</span>
                </div>
                <div className="price-duration">
                  <i className="bi bi-clock"></i> {prog.duration}
                </div>
              </div>

              <div className="launch-cta-group">
                <Link to="/contact" className="btn-primary-custom launch-btn" style={{ '--btn-color': prog.color }}>
                  <i className="bi bi-rocket-takeoff"></i> Enroll Now
                </Link>
                <Link to={`/career-launch/${prog.slug}`} className="btn-outline-custom launch-btn-outline">
                  Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}
