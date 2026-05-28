import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import CourseCards from '../components/CourseCards/CourseCards';
import './CoursesPage.css';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="page-content">
      {/* Hero */}
      <div className="page-hero bg-surface">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Our Library</p>
            <h1 className="section-title">
              200+ Courses to{' '}
              <span className="text-gradient">Power Your Career</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Expertly crafted, industry-validated programs that get you job-ready.
            </p>

            {/* Search Bar */}
            <div className="courses-search-bar">
              <Search size={20} className="courses-search-icon" />
              <input
                type="text"
                className="courses-search-input"
                placeholder="Search for courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn-primary-custom courses-search-btn">
                Search
              </button>
            </div>

            {/* Quick Filters */}
            <div className="quick-filters">
              {['All', 'Free', 'Bestsellers', 'New Arrivals', 'Trending'].map((f) => (
                <button key={f} className={`filter-chip ${f === 'All' ? 'active' : ''}`}>{f}</button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <CourseCards />
    </div>
  );
}
