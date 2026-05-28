import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { internshipPrograms } from '../../data/courses';
import './ExploreSection.css';

/* ── Tab definitions ── */
const TABS = [
  { label: 'All',             value: 'All' },
  { label: 'Programming',     value: 'Programming' },
  { label: 'AI / ML',         value: 'AI/ML' },
  { label: 'Cloud',           value: 'Cloud' },
  { label: 'Data & Analytics',value: 'Data' },
  { label: 'Design',          value: 'Design' },
  { label: 'Business',        value: 'Business' },
  { label: 'Finance',         value: 'Finance' },
  { label: 'Security',        value: 'Security' },
];

/* ── Gradient per category ── */
const CAT_GRADIENT = {
  Programming:  ['#6C63FF', '#A29BFE'],
  'AI/ML':      ['#FF6B6B', '#FF9F43'],
  Cloud:        ['#00D4AA', '#0077AA'],
  Data:         ['#A29BFE', '#6C63FF'],
  Development:  ['#6C63FF', '#00D4AA'],
  Design:       ['#FF6B6B', '#A29BFE'],
  Business:     ['#FF9F43', '#FFD93D'],
  Finance:      ['#FFD93D', '#FF9F43'],
  Security:     ['#FF9F43', '#FF6B6B'],
  Marketing:    ['#00D4AA', '#A29BFE'],
};

/* ── Single card ── */
function EpCard({ course }) {
  const [from, to] = CAT_GRADIENT[course.category] || ['#6C63FF', '#00D4AA'];

  return (
    <Link to={`/internships/${course.slug}`} className="ep-card">
      {/* Thumbnail */}
      <div className="ep-thumb">
        <img src={course.image} alt={course.title} className="ep-thumb-img" />
        <div className="ep-thumb-overlay"></div>
        <div className="ep-thumb-icon" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
          <i className={`bi ${course.icon}`}></i>
        </div>
        <span className="ep-thumb-badge">{course.duration}</span>
      </div>

      {/* Body */}
      <div className="ep-body">
        <div className="ep-provider">
          <div className="ep-provider-dot" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
            <i className={`bi ${course.icon}`}></i>
          </div>
          <span>TechVedhu</span>
        </div>

        <h4 className="ep-title">{course.title}</h4>

        <div className="ep-type">
          <i className="bi bi-award-fill"></i> Internship Certificate
        </div>

        <div className="ep-footer">
          <div className="ep-stars">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} style={{ color: i < 4 ? '#FFD93D' : 'rgba(255,211,61,0.3)' }}>{s}</span>
            ))}
          </div>
          <span className="ep-rating">4.9</span>
          <span className="ep-enrolled">· 250+ enrolled</span>
        </div>
      </div>
    </Link>
  );
}

/* ── Main component ── */
export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState('All');
  const trackRef = useRef(null);
  const location = useLocation();
  const isInternshipsPage = location.pathname === '/internships';

  const filtered = activeTab === 'All'
    ? internshipPrograms
    : internshipPrograms.filter(c => c.category === activeTab);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 330, behavior: 'smooth' });
    }
  };

  const handleExploreClick = (e) => {
    if (isInternshipsPage) {
      e.preventDefault();
      const grid = document.getElementById('courses');
      if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="explore-section" id="explore-programs">
      <div className="container">
        <div className="explore-wrapper reveal">

          {/* ══ LEFT PANEL ══ */}
          <div className="explore-left">
            <div className="explore-left-inner">
              {/* Eyebrow */}
              <span className="explore-eyebrow">
                <i className="bi bi-mortarboard-fill"></i>&nbsp; 15 Internship Programs
              </span>

              <h2 className="explore-heading">
                Get industry-ready with a real internship experience
              </h2>

              <p className="explore-sub">
                No prior experience needed to get started. Learn from MNC professionals and build a placement-winning portfolio.
              </p>

              <Link
                to="/internships"
                className="explore-cta-btn"
                onClick={handleExploreClick}
              >
                Explore programs <i className="bi bi-arrow-right"></i>
              </Link>


            </div>
          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="explore-right">

            {/* Tab row */}
            <div className="explore-tabs-row">
              <div className="explore-tabs">
                {TABS.map(tab => (
                  <button
                    key={tab.value}
                    className={`explore-tab${activeTab === tab.value ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="explore-arrows">
                <button className="ep-arrow" onClick={() => scroll(-1)} aria-label="Scroll left">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button className="ep-arrow" onClick={() => scroll(1)} aria-label="Scroll right">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Cards track */}
            <div className="explore-track" ref={trackRef}>
              {filtered.map(course => (
                <EpCard key={course.id} course={course} />
              ))}
            </div>

            {/* Footer row */}
            <div className="explore-panel-footer">
              <span className="explore-count">
                <strong>{filtered.length}</strong> of <strong>{internshipPrograms.length}</strong> programs
              </span>
              <Link
                to="/internships"
                className="explore-view-all"
                onClick={handleExploreClick}
              >
                View all programs <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
