import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target, Eye, Users, Award, TrendingUp, Star,
  CheckCircle, Zap, MapPin, Phone, Mail, ArrowRight, ShieldCheck
} from 'lucide-react';
import './AboutPage.css';

const milestones = [
  { year: '2020', title: 'TechVedhu Founded', desc: 'Started with a vision to bridge the gap between academic education and industry requirements.' },
  { year: '2021', title: '1,000 Learners', desc: 'Reached our first major milestone with students from across Tamil Nadu and beyond.' },
  { year: '2022', title: '50+ Hiring Partners', desc: 'Built a robust network of companies actively hiring our graduates.' },
  { year: '2023', title: '5,000+ Placements', desc: 'Expanded our programs and helped 5,000+ learners launch successful tech careers.' },
  { year: '2024', title: '10,700+ Learners', desc: 'Scaled to become India\'s premier work-experience-based EdTech platform.' },
];

const teamValues = [
  { icon: <Target size={22} />, title: 'Mission-Driven', desc: 'Every decision is guided by our mission to make quality tech education accessible.', color: '#4F46E5' },
  { icon: <Eye size={22} />, title: 'Industry-Aligned', desc: 'Our curriculum is built with and for the companies that hire our graduates.', color: '#10B981' },
  { icon: <Users size={22} />, title: 'Student-First', desc: 'We measure success by the careers our students build, not just content delivered.', color: '#F59E0B' },
  { icon: <ShieldCheck size={22} />, title: 'Quality Guaranteed', desc: 'Every program undergoes rigorous quality review by industry practitioners.', color: '#EF4444' },
];

const statsData = [
  { value: '10.7K+', label: 'Learners Enrolled', color: '#4F46E5' },
  { value: '4.8 ★', label: 'Google Rating', color: '#F59E0B' },
  { value: '100+', label: 'Hiring Partners', color: '#10B981' },
  { value: '50%', label: 'Avg Salary Hike', color: '#EF4444' },
];

const hiringPartners = ['Accenture', 'Zoho', 'Microsoft', 'Amazon', 'Walmart', 'Cognizant', 'Infosys', 'TCS', 'Wipro', 'HCL'];

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ── Hero Section ── */}
      <section className="about-hero">
        <div className="about-hero-orb about-orb-1" />
        <div className="about-hero-orb about-orb-2" />
        <div className="about-hero-dots" />

        <div className="container">
          <div className="about-hero-inner">

            {/* Left: Content */}
            <motion.div
              className="about-hero-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-hero-badge">
                <ShieldCheck size={14} />
                Trusted by 10,700+ Learners
              </div>

              <h1 className="about-hero-title">
                We Don't Just Teach —<br />
                <span className="text-gradient">We Place.</span>
              </h1>

              <p className="about-hero-subtitle">
                TechVedhu is Tamil Nadu's leading work-experience-based learning platform.
                Founded with a single belief: learning should mirror how the best tech
                companies actually work.
              </p>

              <div className="about-hero-checks">
                {['Live classes by industry practitioners', 'Real projects, not toy exercises', 'Placement guaranteed with 100+ partner network'].map((item) => (
                  <div key={item} className="about-hero-check-item">
                    <CheckCircle size={16} className="about-check-icon" />
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
                <a href="https://wa.me/919363603504" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                  <Zap size={16} fill="currentColor" />
                  Book Free Trial
                  <ArrowRight size={16} />
                </a>
                <Link to="/courses" className="btn-outline-custom">
                  View Programs
                </Link>
              </div>
            </motion.div>

            {/* Right: Person + floating elements */}
            <motion.div
              className="about-hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="about-person-stage">
                <div className="about-person-blob" />
                <div className="about-person-ring about-ring-1" />
                <div className="about-person-ring about-ring-2" />

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=420&h=560&fit=crop&crop=top&auto=format"
                  alt="TechVedhu Mentor"
                  className="about-person-img"
                />

                {/* Floating stat bubbles */}
                <motion.div
                  className="about-float-card about-float-card-1"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="about-float-icon">🏆</span>
                  <div>
                    <div className="about-float-value">4.8/5</div>
                    <div className="about-float-label">Google Rating</div>
                  </div>
                </motion.div>

                <motion.div
                  className="about-float-card about-float-card-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <span className="about-float-icon">🚀</span>
                  <div>
                    <div className="about-float-value">10.7K+</div>
                    <div className="about-float-label">Learners</div>
                  </div>
                </motion.div>

                <motion.div
                  className="about-float-card about-float-card-3"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <span className="about-float-icon">💼</span>
                  <div>
                    <div className="about-float-value">100+</div>
                    <div className="about-float-label">Companies Hiring</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="about-stats-bar">
        <div className="container">
          <div className="about-stats-inner">
            {statsData.map((s, i) => (
              <React.Fragment key={s.label}>
                <motion.div
                  className="about-stat-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="about-stat-value" style={{ color: s.color }}>{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </motion.div>
                {i < statsData.length - 1 && <div className="about-stat-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="about-mv-grid">
            <motion.div
              className="about-mv-card about-mv-mission"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-mv-icon-wrap" style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                <Target size={28} />
              </div>
              <h2 className="about-mv-title">Our Mission</h2>
              <p className="about-mv-text">
                To democratize tech education and empower every learner — regardless of
                background — to break into India's fastest-growing industry through
                immersive, work-experience-based learning that mirrors the real world.
              </p>
            </motion.div>

            <motion.div
              className="about-mv-card about-mv-vision"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="about-mv-icon-wrap" style={{ background: '#ECFDF5', color: '#10B981' }}>
                <Eye size={28} />
              </div>
              <h2 className="about-mv-title">Our Vision</h2>
              <p className="about-mv-text">
                To be India's most trusted career launchpad — where every graduate
                is sought after by top companies, commands a premium salary, and has
                the confidence to lead in an AI-first world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">
              Built on <span className="text-gradient">Principles That Matter</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
          <div className="about-values-grid">
            {teamValues.map((v, i) => (
              <motion.div
                key={v.title}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="about-value-icon" style={{ background: `${v.color}12`, color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story / Timeline ── */}
      <section className="section-padding" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">
              From a Vision to <span className="text-gradient">10,700+ Lives Changed</span>
            </h2>
            <div className="divider mx-auto" />
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className={`about-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="about-timeline-card">
                  <span className="about-timeline-year">{m.year}</span>
                  <h3 className="about-timeline-title">{m.title}</h3>
                  <p className="about-timeline-desc">{m.desc}</p>
                </div>
                <div className="about-timeline-dot" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Partners ── */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Our Network</p>
            <h2 className="section-title">
              Our Graduates Work at <span className="text-gradient">India's Best</span>
            </h2>
            <p className="section-subtitle mx-auto">
              100+ companies actively source talent from our alumni network.
            </p>
            <div className="divider mx-auto" />
          </div>
          <div className="about-partners-grid">
            {hiringPartners.map((company, i) => (
              <motion.div
                key={company}
                className="about-partner-chip"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {company}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="about-contact section-padding">
        <div className="container">
          <motion.div
            className="about-contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="about-contact-content">
              <h2 className="about-contact-title">Ready to Start Your Journey?</h2>
              <p className="about-contact-subtitle">
                Talk to our admissions team. Free demo, no pressure, no commitment.
              </p>
              <div className="about-contact-links">
                <a href="tel:+919363630504" className="about-contact-item">
                  <div className="about-contact-icon-wrap"><Phone size={18} /></div>
                  <div>
                    <div className="about-contact-item-label">Call Us</div>
                    <div className="about-contact-item-val">+91 93636 30504</div>
                  </div>
                </a>
                <a href="mailto:support@techvedhu.com" className="about-contact-item">
                  <div className="about-contact-icon-wrap"><Mail size={18} /></div>
                  <div>
                    <div className="about-contact-item-label">Email Us</div>
                    <div className="about-contact-item-val">support@techvedhu.com</div>
                  </div>
                </a>
                <a href="https://maps.google.com/?q=Salem+Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="about-contact-item">
                  <div className="about-contact-icon-wrap"><MapPin size={18} /></div>
                  <div>
                    <div className="about-contact-item-label">Visit Us</div>
                    <div className="about-contact-item-val">Salem, Tamil Nadu</div>
                  </div>
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/919363603504"
              target="_blank"
              rel="noopener noreferrer"
              className="about-contact-cta"
            >
              <Zap size={18} fill="currentColor" />
              Book Free Trial on WhatsApp
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
