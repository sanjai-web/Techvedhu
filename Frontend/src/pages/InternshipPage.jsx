import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CourseCards from '../components/CourseCards/CourseCards';
import ExploreSection from '../components/ExploreSection/ExploreSection';
import ContactForm from '../components/ContactForm/ContactForm';
import FAQ from '../components/FAQ/FAQ';
import { internshipPrograms } from '../data/courses';
import './InternshipPage.css';

function InternshipDetail({ course }) {
  return (
    <div className="intern-detail-page">
      {/* Hero */}
      <section className="intern-detail-hero">
        <div className="container">
          <div className="detail-hero-content">
            <div className="detail-breadcrumb">
              <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i>
              <Link to="/internships">Internships</Link> <i className="bi bi-chevron-right"></i>
              <span>{course.title}</span>
            </div>
            <div className="detail-top">
              <div className="detail-icon" style={{ background: `${course.color}20`, borderColor: `${course.color}40` }}>
                <i className={`bi ${course.icon}`} style={{ color: course.color }}></i>
              </div>
              <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  <span className="tag">{course.category}</span>
                  <span className="tag tag-green">{course.duration}</span>
                  <span className="tag tag-orange">{course.level}</span>
                </div>
                <h1 className="detail-title">{course.title} <span className="gradient-text">Internship Program</span></h1>
                <p className="detail-subtitle">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="intern-details-body section-padding">
        <div className="container">
          <div className="intern-details-grid">
            {/* Left */}
            <div className="intern-details-main">
              <div className="detail-section-card">
                <h3><i className="bi bi-book-fill" style={{ color: course.color }}></i> Course Overview</h3>
                <p>This comprehensive internship program is designed by industry professionals currently working at top MNCs. You'll gain hands-on experience with real-world projects, live mentoring, and industry-grade tools.</p>
                <p>The program combines structured learning with practical application — you'll work on at least 3 major projects that can be showcased in your portfolio.</p>
              </div>

              <div className="detail-section-card">
                <h3><i className="bi bi-check-circle-fill" style={{ color: course.color }}></i> Learning Outcomes</h3>
                <ul className="outcomes-list">
                  {course.outcomes.map(o => (
                    <li key={o}>
                      <i className="bi bi-arrow-right-circle-fill" style={{ color: course.color }}></i> {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section-card">
                <h3><i className="bi bi-tools" style={{ color: course.color }}></i> Industry Tools Covered</h3>
                <div className="tools-grid-detail">
                  {course.tools.map(t => (
                    <span key={t} className="tool-tag-detail" style={{ borderColor: `${course.color}40`, color: course.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-section-card">
                <h3><i className="bi bi-trophy-fill" style={{ color: course.color }}></i> Certification & Benefits</h3>
                <div className="benefits-grid">
                  {['Industry Certificate', 'LinkedIn Recommendation', 'Portfolio Projects', 'GitHub Profile Review', 'Placement Support', 'Interview Preparation'].map(b => (
                    <div key={b} className="benefit-chip">
                      <i className="bi bi-check2-circle" style={{ color: course.color }}></i> {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Sidebar */}
            <div className="intern-sidebar">
              <div className="sidebar-card sticky-card">
                <div className="sidebar-banner">
                  <img src={course.image} alt={course.title} className="sidebar-banner-img" />
                  <div className="sidebar-banner-overlay"></div>
                  <div className="sidebar-top-content">
                    <div className="sidebar-icon" style={{ backgroundColor: course.color, borderColor: course.color }}>
                      <i className={`bi ${course.icon}`} style={{ color: '#ffffff' }}></i>
                    </div>
                    <h4>Program Details</h4>
                  </div>
                </div>
                <div className="sidebar-details">
                  {[
                    { label: 'Duration', val: course.duration, icon: 'bi-clock-fill' },
                    { label: 'Level', val: course.level, icon: 'bi-bar-chart-fill' },
                    { label: 'Mode', val: 'Online + Live', icon: 'bi-laptop-fill' },
                    { label: 'Certificate', val: 'Yes, Industry', icon: 'bi-award-fill' },
                    { label: 'Placement', val: '100% Support', icon: 'bi-briefcase-fill' },
                    { label: 'Rating', val: '4.9 / 5', icon: 'bi-star-fill' },
                  ].map(d => (
                    <div key={d.label} className="sidebar-detail-row">
                      <div className="sdrow-label">
                        <i className={`bi ${d.icon}`} style={{ color: course.color }}></i>
                        <span>{d.label}</span>
                      </div>
                      <strong>{d.val}</strong>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary-custom sidebar-enroll">
                  <i className="bi bi-rocket-takeoff-fill"></i> Enroll Now — Free Counselling
                </Link>
                <p className="sidebar-note">🎁 Limited seats available. Apply today to lock your spot.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Section ── */}
      <section className="intern-pricing-section section-padding">
        <div className="container">
          <div className="text-center-section reveal">
            <div className="section-label">
              <i className="bi bi-tag-fill"></i> Program Pricing
            </div>
            <h2 className="section-title">
              Choose Your <span className="gradient-text">Learning Path</span>
            </h2>
            <p className="section-subtitle">
              Select the plan that fits your schedule and career goals. Both plans include certification and real project work.
            </p>
          </div>

          <div className="pricing-cards-grid reveal delay-100">

            {/* ── Self-Paced Card ── */}
            <div className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-plan-icon">
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <h3 className="pricing-plan-name">Self – Paced</h3>
              </div>

              <div className="pricing-divider" />

              <p className="pricing-plan-desc">
                Learn at your own pace with our extensive library of recorded classes, giving you the flexibility to study anytime, anywhere along with hands-on projects.
              </p>

              <ul className="pricing-features">
                {[
                  { icon: 'bi-camera-video-fill',    label: 'Recorded Sessions' },
                  { icon: 'bi-clock-fill',            label: '2 Months Access' },
                  { icon: 'bi-patch-check-fill',      label: 'Industry Certificate' },
                  { icon: 'bi-laptop-fill',           label: 'Hands-on Projects' },
                ].map(f => (
                  <li key={f.label} className="pricing-feature-item">
                    <i className={`bi ${f.icon}`} style={{ color: course.color }}></i>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card-footer">
                <div className="pricing-price">
                  <span className="price-symbol">₹</span>
                  <span className="price-amount">5,500</span>
                  <span className="price-slash">/–</span>
                </div>
                <Link to="/contact" className="pricing-enroll-btn" style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)` }}>
                  Enroll now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* ── Mentor-Led Card (Popular) ── */}
            <div className="pricing-card pricing-card-featured">
              <div className="pricing-popular-badge">
                <i className="bi bi-star-fill"></i> Most Popular
              </div>

              <div className="pricing-card-header">
                <div className="pricing-plan-icon pricing-plan-icon-featured">
                  <i className="bi bi-people-fill"></i>
                </div>
                <h3 className="pricing-plan-name">Mentor – Led</h3>
              </div>

              <div className="pricing-divider" />

              <p className="pricing-plan-desc">
                Experience live classes, expert mentor guidance, and enhanced placement opportunities with our mentor-led program, ensuring personalized and interactive learning.
              </p>

              <ul className="pricing-features">
                {[
                  { icon: 'bi-camera-video-fill',    label: 'Live + On-Demand Videos' },
                  { icon: 'bi-laptop-fill',           label: 'Hands-on Projects' },
                  { icon: 'bi-clock-fill',            label: '3 Months Access' },
                  { icon: 'bi-patch-check-fill',      label: 'Industry Certificate' },
                  { icon: 'bi-briefcase-fill',        label: 'Placement Assistance' },
                  { icon: 'bi-person-lines-fill',     label: 'Mock Interviews' },
                ].map(f => (
                  <li key={f.label} className="pricing-feature-item">
                    <i className={`bi ${f.icon}`} style={{ color: '#6C63FF' }}></i>
                    <span>{f.label}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-card-footer">
                <div className="pricing-price">
                  <span className="price-symbol">₹</span>
                  <span className="price-amount">8,500</span>
                  <span className="price-slash">/–</span>
                </div>
                <Link to="/contact" className="pricing-enroll-btn pricing-enroll-featured">
                  Enroll now <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

          </div>

          {/* EMI note */}
          <p className="pricing-emi-note reveal delay-200">
            <i className="bi bi-info-circle-fill"></i>
            Both plans available on easy EMI. No-cost EMI options starting from <strong>₹999/month</strong>. Talk to our advisor for scholarship eligibility.
            <Link to="/scholarship"> Apply for scholarship →</Link>
          </p>
        </div>
      </section>

      <FAQ />
    </div>
  );
}

export default function InternshipPage() {
  const { slug } = useParams();
  const course = internshipPrograms.find(c => c.slug === slug);

  if (slug && course) {
    return <InternshipDetail course={course} />;
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      {/* Page Hero */}
      <section className="intern-list-hero section-padding-sm">
        <div className="container text-center">
          <div className="section-label reveal"><i className="bi bi-mortarboard-fill"></i> All Programs</div>
          <h1 className="section-title reveal delay-100">
            Explore Our <span className="gradient-text">15+ Internship Programs</span>
          </h1>
          <p className="section-subtitle reveal delay-200">
            Each program is crafted by industry professionals and designed to give you real-world experience that top companies value.
          </p>
        </div>
      </section>

      {/* Coursera-style browse widget */}
      <ExploreSection />

      {/* Divider heading */}
      <div className="internship-grid-heading container reveal">
        <div className="section-label" style={{ marginBottom: '0' }}>
          <i className="bi bi-grid-fill"></i> Full Program Catalog
        </div>
        <div className="igh-divider"></div>
      </div>

      {/* Full grid — all programs */}
      <CourseCards showAll={true} hideHeader={true} />

      <FAQ />
    </div>
  );
}
