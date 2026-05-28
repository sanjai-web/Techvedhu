import React from 'react';
import { motion } from 'framer-motion';
import InternshipsSection from '../components/InternshipsSection/InternshipsSection';
import './CoursesPage.css';

export default function InternshipsPage() {
  return (
    <div className="page-content">
      <div className="page-hero bg-surface">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">Career Launchpad</p>
            <h1 className="section-title">
              Internships at{' '}
              <span className="text-gradient">Top Tech Companies</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Exclusive internship opportunities reserved for TechVedhu graduates
              at 200+ partner companies across India.
            </p>
          </motion.div>
        </div>
      </div>
      <InternshipsSection />
    </div>
  );
}
