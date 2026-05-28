import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Award, TrendingUp, Star } from 'lucide-react';
import CourseCards from '../components/CourseCards/CourseCards';
import './CoursesPage.css';

const trustPills = [
  { icon: <Users size={14} />, text: '10.7K+ Enrolled' },
  { icon: <Star size={14} fill="#F59E0B" color="#F59E0B" />, text: '4.8 Rating' },
  { icon: <Award size={14} />, text: '100+ Hiring Partners' },
  { icon: <TrendingUp size={14} />, text: '50% Avg Salary Hike' },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="page-content">
      {/* ── Premium Hero ── */}
      <div className="courses-hero">
        {/* Background decorations */}
        <div className="courses-hero-orb courses-hero-orb-1" />
        <div className="courses-hero-orb courses-hero-orb-2" />
        <div className="courses-hero-dots" />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="courses-hero-badge">
              <span className="courses-hero-live-dot" />
              Programs Open for Enrollment
            </div>

            <h1 className="courses-hero-title">
              Find the Program That<br />
              <span className="text-gradient">Launches Your Career</span>
            </h1>
            <p className="courses-hero-subtitle">
              12 Internship programs + 3 Career Launchpad tracks — all with live classes,
              real projects, mentorship, and guaranteed placement support.
            </p>

            {/* Trust pills */}
            <div className="courses-trust-pills">
              {trustPills.map((p) => (
                <div key={p.text} className="courses-trust-pill">
                  {p.icon}
                  {p.text}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="courses-search-bar">
              <Search size={20} className="courses-search-icon" />
              <input
                type="text"
                className="courses-search-input"
                placeholder="Search programs, skills, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn-primary-custom courses-search-btn">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <CourseCards />
    </div>
  );
}
