import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, IndianRupee, CheckCircle } from 'lucide-react';
import './InternshipsSection.css';

// ─── REAL internship/certificate programs from TechVedhu.com ─────────────────
const internships = [
  {
    id: 1,
    role: 'Web Development',
    programType: 'Internship / Certificate Program',
    description: 'Master front-end and back-end technologies to build full-stack web applications from scratch.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
  {
    id: 2,
    role: 'Machine Learning',
    programType: 'Internship / Certificate Program',
    description: 'Dive into machine learning techniques to build predictive models using Python and TensorFlow.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
  {
    id: 3,
    role: 'Python Programming',
    programType: 'Internship / Certificate Program',
    description: 'Learn the fundamentals of Python programming, including web development, data analysis, and automation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['Python', 'Flask', 'NumPy', 'Automation'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
  {
    id: 4,
    role: 'UI/UX Design',
    programType: 'Internship / Certificate Program',
    description: 'Design intuitive user interfaces and enhance user experiences using modern design tools.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
  {
    id: 5,
    role: 'Sales and Marketing',
    programType: 'Internship / Certificate Program',
    description: 'Learn sales strategies, digital marketing, and customer relationship management.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['SEO', 'CRM', 'Social Media', 'Analytics'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
  {
    id: 6,
    role: 'Cyber Security',
    programType: 'Internship / Certificate Program',
    description: 'Identify vulnerabilities, secure networks, and understand ethical hacking techniques.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=80&h=80&fit=crop',
    type: 'Live Classes',
    schedule: '4 hr/week',
    badge: '20% Off',
    badgeColor: '#10B981',
    skills: ['Ethical Hacking', 'Network Security', 'VAPT', 'Forensics'],
    highlights: ['Live Classes', 'Real Projects', 'Certificate'],
    seats: 'Limited Seats',
  },
];

// ─── Career Launchpad programs ─────────────────────────────────────────────
const launchpadPrograms = [
  {
    id: 'fsd',
    title: 'Software Development Launchpad with Gen AI',
    shortTitle: 'FSD + Gen AI',
    icon: '💻',
    duration: '4–8 Months',
    level: 'Beginner Friendly',
    badge: 'Placement Guaranteed',
    badgeColor: '#4F46E5',
    description: 'Gain hands-on experience through real-world projects and unlock guaranteed referrals to seamlessly transition into a Full-Stack Developer role at leading product-based companies.',
    specializations: [
      'Full Stack (MERN): 7 real-world projects (MongoDB, Express, React, NodeJS)',
      'Backend (Java): 5 real-world projects (Core Java and Spring Boot)',
    ],
    highlights: [
      'Data Structure, Algorithm & System Design',
      'Internship with Tech Companies',
      'Assured Referrals',
      'Career Services Included',
    ],
    demo: 'Free Demo Available',
    scholarship: 'Assured Scholarships',
  },
  {
    id: 'dads',
    title: 'Data Analysis & Data Science Launch Track with GenAI',
    shortTitle: 'DADS + GenAI',
    icon: '📊',
    duration: '4–8 Months',
    level: 'Beginner Friendly',
    badge: 'Placement Guaranteed',
    badgeColor: '#10B981',
    description: 'Achieve expertise in Data Analysis and Data Science through specialized programs blending statistical analysis, machine learning, and visualization.',
    specializations: [
      'Excel, SQL, Python and libraries for powerful data manipulation',
      'Power BI and Tableau for interactive data visualizations',
      'Machine Learning, MLOps, Big Data & Data Engineering',
    ],
    highlights: [
      '10+ Industry-Grade Projects',
      '250+ SQL Challenges',
      '100+ Python Exercises',
      'Career Services Included',
    ],
    demo: 'Free Demo Available',
    scholarship: 'Assured Scholarships',
  },
  {
    id: 'fintech',
    title: 'FinTech & Digital Finance Launch Track with GenAI',
    shortTitle: 'FinTech + GenAI',
    icon: '💰',
    duration: '4–8 Months',
    level: 'Intermediate',
    badge: 'Placement Guaranteed',
    badgeColor: '#F59E0B',
    description: 'AI is revolutionizing Fintech. Equip yourself with future-ready skills to lead the intelligent financial transformation — from blockchain to robo-advisory.',
    specializations: [
      'AI/ML in Fintech: fraud detection, robo-advisory, credit scoring',
      'Blockchain & Smart Contracts for payments and digital assets',
      'UPI, wallets, QR/NFC, crypto and P2P systems',
    ],
    highlights: [
      '10+ Industry-Grade Projects',
      '45+ Mini Learning Modules',
      '45+ Python & ML Problems',
      'Blockchain / Smart Contract Tasks',
    ],
    demo: 'Free Demo Available',
    scholarship: 'Assured Scholarships',
  },
];

function InternshipCard({ item, index }) {
  return (
    <motion.div
      className="internship-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      {/* Header */}
      <div className="internship-card-header">
        <div className="internship-company">
          <div className="company-logo-wrap">
            <img
              src={item.image}
              alt={item.role}
              className="company-logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <div className="company-name" style={{ fontSize: 11, fontWeight: 600, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {item.programType}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
              <span className="opening-dot" />
              <span style={{ fontSize: 12, color: 'var(--success)', fontWeight: 600 }}>
                {item.seats}
              </span>
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
      <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
        {item.description}
      </p>

      {/* Meta */}
      <div className="internship-meta">
        <span className="internship-meta-item">
          <Clock size={13} />
          {item.schedule}
        </span>
        <span
          className="internship-type-badge"
          style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}
        >
          {item.type}
        </span>
      </div>

      {/* Skills */}
      <div className="internship-skills">
        {item.skills.slice(0, 4).map((skill) => (
          <span key={skill} className="skill-badge">{skill}</span>
        ))}
      </div>

      {/* Features */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {item.highlights.map((h) => (
          <span key={h} style={{
            display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)',
            background: 'var(--surface)', padding: '3px 8px',
            borderRadius: 'var(--radius-full)', border: '1px solid var(--border)'
          }}>
            <CheckCircle size={11} style={{ color: 'var(--success)' }} /> {h}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="internship-footer">
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>
          🎓 Certificate on Completion
        </span>
        <Link to={`/courses/${item.id}`} className="internship-apply-btn">
          Explore Now
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

function LaunchpadCard({ program, index }) {
  return (
    <motion.div
      className="launchpad-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="launchpad-card-header">
        <span className="launchpad-icon">{program.icon}</span>
        <div>
          <span
            className="launchpad-badge"
            style={{ background: `${program.badgeColor}15`, color: program.badgeColor }}
          >
            {program.badge}
          </span>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4 }}>
            {program.duration} · {program.level}
          </div>
        </div>
      </div>

      <h3 className="launchpad-title">{program.title}</h3>
      <p className="launchpad-description">{program.description}</p>

      <div className="launchpad-spec-label">Specializations:</div>
      <ul className="launchpad-spec-list">
        {program.specializations.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="launchpad-highlights">
        {program.highlights.map((h) => (
          <div key={h} className="launchpad-highlight-item">
            <CheckCircle size={13} style={{ color: 'var(--success)', flexShrink: 0 }} />
            {h}
          </div>
        ))}
      </div>

      <div className="launchpad-footer">
        <div className="launchpad-footer-info">
          <span className="launchpad-demo-tag">✨ {program.demo}</span>
          <span className="launchpad-scholarship-tag">🎓 {program.scholarship}</span>
        </div>
        <Link to="/courses" className="internship-apply-btn">
          Explore Now
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

        {/* ── Internship / Certificate Programs ── */}
        <div className="internships-header">
          <div>
            <p className="section-label">Internship / Certificate Programs</p>
            <h2 className="section-title">
              Build Skills.{' '}
              <span className="text-gradient">Earn Certificates.</span>
            </h2>
            <p className="section-subtitle">
              Live classes · Real projects · 4 hr/week · Limited seats with 20% off
            </p>
          </div>
          <Link to="/courses" className="btn-outline-custom d-none d-md-flex">
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="internships-grid">
          {internships.map((item, i) => (
            <InternshipCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Career Launchpad Programs ── */}
        <div className="internships-header mt-5">
          <div>
            <p className="section-label">Career Launchpad Programs</p>
            <h2 className="section-title">
              Kickstart Your{' '}
              <span className="text-gradient">Tech Career</span>
            </h2>
            <p className="section-subtitle">
              Comprehensive 4–8 month tracks with internship, assured referrals &amp; placement guarantee
            </p>
          </div>
          <Link to="/courses" className="btn-outline-custom d-none d-md-flex">
            Book Free Demo
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="launchpad-grid">
          {launchpadPrograms.map((program, i) => (
            <LaunchpadCard key={program.id} program={program} index={i} />
          ))}
        </div>

        <div className="text-center mt-4 d-md-none">
          <Link to="/courses" className="btn-outline-custom">
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
