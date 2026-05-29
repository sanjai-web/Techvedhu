import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { internshipPrograms } from '../../data/courses';
import './CourseCards.css';

const categories = ['All', 'Programming', 'AI/ML', 'Cloud', 'Data', 'Development', 'Design', 'Business', 'Finance', 'Security', 'Marketing'];

export default function CourseCards({ showAll = false, limit = 6, hideHeader = false }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = activeCategory === 'All'
    ? internshipPrograms
    : internshipPrograms.filter(c => c.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, limit);

  return (
    <section className="courses-section section-padding" id="courses">
      <div className="container">
        {!hideHeader && (
          <div className="text-center-section reveal">
            <div className="section-label">
              <i className="bi bi-mortarboard-fill"></i> Internship Programs
            </div>
            <h2 className="section-title">
              Industry-Driven <span className="gradient-text">Internship Programs</span>
            </h2>
            <p className="section-subtitle">
              15 specialized programs designed by professionals from Google, Microsoft, Amazon and top MNCs — combining real-world skills with hands-on project experience.
            </p>
          </div>
        )}

        {/* Category Filter */}
        <div className="category-filters reveal delay-100">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="courses-grid">
          {displayed.map((course, i) => (
            <div
              key={course.id}
              className={`course-card reveal delay-${Math.min((i % 3 + 1) * 100, 300)}`}
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${course.color}33 0%, transparent 60%)` }}></div>

              <div className="course-card-banner">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="course-banner-img" 
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=400&q=80';
                  }}
                />
                <div className="course-duration-badge">{course.duration}</div>
                <div className="course-icon-wrap" style={{ backgroundColor: course.color, borderColor: course.color }}>
                  <i className={`bi ${course.icon}`} style={{ color: '#ffffff' }}></i>
                </div>
              </div>

              <div className="course-card-body">
                <div className="course-meta">
                  <span className="tag">{course.category}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.description}</p>

                <div className="course-tools">
                  {course.tools.slice(0, 4).map(tool => (
                    <span key={tool} className="tool-tag">{tool}</span>
                  ))}
                  {course.tools.length > 4 && <span className="tool-tag">+{course.tools.length - 4}</span>}
                </div>

                <div className="card-footer">
                  <div className="card-stats">
                    <span><i className="bi bi-people-fill"></i> 250+ Enrolled</span>
                    <span><i className="bi bi-star-fill" style={{ color: '#FFD93D' }}></i> 4.9</span>
                  </div>
                  <Link to={`/internships/${course.slug}`} className="btn-secondary-custom card-cta">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-4 reveal">
            <Link to="/internships" className="btn-outline-custom">
              View All 15 Programs <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
