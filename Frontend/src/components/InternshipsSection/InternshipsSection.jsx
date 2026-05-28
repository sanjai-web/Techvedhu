import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, Building2, Star, IndianRupee } from 'lucide-react';
import './InternshipsSection.css';

const internships = [
  {
    id: 1,
    role: 'Frontend Developer Intern',
    company: 'Zoho Corporation',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Zoho_Corporation_Logo.png/120px-Zoho_Corporation_Logo.png',
    location: 'Chennai',
    type: 'On-site',
    duration: '3 Months',
    stipend: '₹15,000/month',
    skills: ['React', 'JavaScript', 'CSS'],
    openings: 8,
    deadline: 'June 15, 2026',
    category: 'web',
    badge: 'High Demand',
    badgeColor: '#EF4444',
  },
  {
    id: 2,
    role: 'Data Science Intern',
    company: 'Infosys BPM',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/120px-Infosys_logo.svg.png',
    location: 'Bangalore',
    type: 'Hybrid',
    duration: '6 Months',
    stipend: '₹20,000/month',
    skills: ['Python', 'ML', 'SQL'],
    openings: 5,
    deadline: 'June 20, 2026',
    category: 'data',
    badge: 'Trending',
    badgeColor: '#4F46E5',
  },
  {
    id: 3,
    role: 'Cloud DevOps Intern',
    company: 'TCS Digital',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/120px-Tata_Consultancy_Services_Logo.svg.png',
    location: 'Mumbai',
    type: 'Remote',
    duration: '3 Months',
    stipend: '₹18,000/month',
    skills: ['AWS', 'Docker', 'Linux'],
    openings: 12,
    deadline: 'July 1, 2026',
    category: 'cloud',
    badge: 'Remote OK',
    badgeColor: '#10B981',
  },
];

function InternshipCard({ item, index }) {
  const typeColors = {
    'On-site': { bg: '#ECFDF5', color: '#10B981' },
    'Remote': { bg: '#EEF2FF', color: '#4F46E5' },
    'Hybrid': { bg: '#FFFBEB', color: '#F59E0B' },
  };
  const tc = typeColors[item.type] || typeColors['Hybrid'];

  return (
    <motion.div
      className="internship-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Header */}
      <div className="internship-card-header">
        <div className="internship-company">
          <div className="company-logo-wrap">
            <img
              src={item.companyLogo}
              alt={item.company}
              className="company-logo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div>
            <div className="company-name">{item.company}</div>
            <div className="company-openings">
              <span className="opening-dot" />
              {item.openings} openings
            </div>
          </div>
        </div>
        <span
          className="internship-badge"
          style={{ background: `${item.badgeColor}15`, color: item.badgeColor }}
        >
          {item.badge}
        </span>
      </div>

      {/* Role */}
      <h3 className="internship-role">{item.role}</h3>

      {/* Meta */}
      <div className="internship-meta">
        <span className="internship-meta-item">
          <MapPin size={13} />
          {item.location}
        </span>
        <span
          className="internship-type-badge"
          style={{ background: tc.bg, color: tc.color }}
        >
          {item.type}
        </span>
        <span className="internship-meta-item">
          <Clock size={13} />
          {item.duration}
        </span>
      </div>

      {/* Stipend */}
      <div className="internship-stipend">
        <IndianRupee size={16} />
        <span className="stipend-amount">{item.stipend}</span>
        <span className="stipend-label">Stipend</span>
      </div>

      {/* Skills */}
      <div className="internship-skills">
        {item.skills.map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>

      {/* Footer */}
      <div className="internship-footer">
        <div className="internship-deadline">
          <span className="deadline-label">Apply by</span>
          <span className="deadline-date">{item.deadline}</span>
        </div>
        <Link to={`/internships/${item.id}`} className="internship-apply-btn">
          Apply Now
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function InternshipsSection() {
  return (
    <section className="internships-section section-padding" id="internships">
      <div className="container">
        <div className="internships-header">
          <div>
            <p className="section-label">Internship Opportunities</p>
            <h2 className="section-title">
              Kickstart Your{' '}
              <span className="text-gradient">Tech Career</span>
            </h2>
            <p className="section-subtitle">
              Exclusive internship placements at India's top tech companies,
              reserved for TechVedhu graduates.
            </p>
          </div>
          <Link to="/internships" className="btn-outline-custom d-none d-md-flex">
            View All Internships
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="internships-grid">
          {internships.map((item, i) => (
            <InternshipCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className="text-center mt-4 d-md-none">
          <Link to="/internships" className="btn-outline-custom">
            View All Internships
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
