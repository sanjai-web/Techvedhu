import React from 'react';
import { mentors } from '../../data/courses';
import './Mentors.css';

const patterns = [
  // Dots grid
  `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='rgba(255,255,255,0.15)'/%3E%3C/svg%3E")`,
  // Diagonal lines
  `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20L20 0' stroke='rgba(255,255,255,0.12)' stroke-width='1.5'/%3E%3C/svg%3E")`,
  // Cross grid
  `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='1.5' fill='rgba(255,255,255,0.12)'/%3E%3Ccircle cx='0' cy='0' r='1.5' fill='rgba(255,255,255,0.12)'/%3E%3Ccircle cx='24' cy='24' r='1.5' fill='rgba(255,255,255,0.12)'/%3E%3C/svg%3E")`,
  // Hexagon pattern
  `url("data:image/svg+xml,%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14 2L24 8V20L14 26L4 20V8Z' stroke='rgba(255,255,255,0.1)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
  // Small circles
  `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3' stroke='rgba(255,255,255,0.12)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
  // Plus signs
  `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 4V16M4 10H16' stroke='rgba(255,255,255,0.12)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
];

export default function Mentors() {
  return (
    <section className="mentors-section section-padding" id="mentors">
      <div className="container">
        <div className="text-center-section reveal">
          <div className="section-label">
            <i className="bi bi-person-badge-fill"></i> Industry Mentors
          </div>
          <h2 className="section-title">
            Learn From <span className="gradient-text">Real MNC Professionals</span>
          </h2>
          <p className="section-subtitle">
            Our mentors are actively working at Google, Microsoft, Amazon, and other top global companies — bringing live industry knowledge to every session.
          </p>
        </div>

        <div className="mentors-grid">
          {mentors.map((mentor, i) => (
            <div key={mentor.id} className={`mentor-card reveal delay-${(i % 3 + 1) * 100}`}>
              {/* Animated pattern background */}
              <div
                className="mentor-pattern-bg"
                style={{
                  background: `linear-gradient(135deg, ${mentor.color}cc 0%, ${mentor.color}88 100%)`,
                  backgroundImage: `${patterns[i % patterns.length]}, linear-gradient(135deg, ${mentor.color}dd 0%, ${mentor.color}99 100%)`,
                }}
              >
                {/* Animated floating orbs */}
                <div className="mentor-orb mentor-orb-1" style={{ background: `${mentor.color}55` }}></div>
                <div className="mentor-orb mentor-orb-2" style={{ background: `rgba(255,255,255,0.1)` }}></div>
                <div className="mentor-orb mentor-orb-3" style={{ background: `${mentor.color}33` }}></div>
              </div>

              {/* Cutout portrait image */}
              <div className="mentor-portrait-wrap">
                <img
                  src={mentor.avatar.replace('w=150&h=150', 'w=400&h=500').replace('fit=crop', 'fit=crop&crop=faces,top')}
                  alt={mentor.name}
                  className="mentor-portrait-img"
                />
              </div>

              {/* Info overlay */}
              <div className="mentor-info-overlay">
                <div className="mentor-company-badge" style={{ background: `rgba(0,0,0,0.6)`, borderColor: `${mentor.color}66` }}>
                  <i className="bi bi-building" style={{ color: mentor.color }}></i>
                  <strong style={{ color: '#ffffff' }}>{mentor.company}</strong>
                </div>
                <h4 className="mentor-name-new">{mentor.name}</h4>
                <p className="mentor-role-new">{mentor.role}</p>
                <div className="mentor-tags-new">
                  <span className="mentor-tag-new" style={{ borderColor: `${mentor.color}55`, color: mentor.color }}>
                    {mentor.domain}
                  </span>
                  <span className="mentor-tag-exp">
                    <i className="bi bi-clock"></i> {mentor.exp}
                  </span>
                </div>
                <a href={mentor.linkedin} className="mentor-connect-btn" target="_blank" rel="noopener noreferrer"
                  style={{ background: mentor.color }}>
                  <i className="bi bi-linkedin"></i> Connect
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mentor-bottom reveal">
          <div className="mentor-stat-row">
            {[
              { icon: 'bi-people-fill', val: '30+', label: 'Expert Mentors' },
              { icon: 'bi-building', val: '15+', label: 'Partner Companies' },
              { icon: 'bi-clock-history', val: '500+', label: 'Live Sessions / Month' },
              { icon: 'bi-star-fill', val: '4.9/5', label: 'Mentor Rating' },
            ].map(s => (
              <div key={s.label} className="mentor-stat">
                <i className={`bi ${s.icon}`}></i>
                <span className="mstat-val">{s.val}</span>
                <span className="mstat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
