import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, CheckCircle, Download, MonitorPlay, FileText,
  Briefcase, Play, Users, Trophy, Shield, BarChart3, Star,
  Zap, ArrowRight, Phone, Award, Clock, BookOpen, TrendingUp
} from 'lucide-react';
import { internshipsData, fallbackData } from '../data/internshipsData';
import './InternshipDetailsPage.css';

const reviews = [
  { name: 'Suresh K.', role: 'Software Developer @ Accenture', text: 'TechVedhu transformed my career. The hands-on projects and live mentorship prepared me for real-world challenges from day one.', avatar: 'https://i.pravatar.cc/80?img=11', company: 'Accenture', rating: 5 },
  { name: 'M. Jagannayagan', role: 'Full Stack Developer @ Zoho', text: 'The curriculum is industry-aligned and the mentors are practitioners. Got placed within 6 weeks of completing the program!', avatar: 'https://i.pravatar.cc/80?img=12', company: 'Zoho', rating: 5 },
  { name: 'Priya S.', role: 'Data Analyst @ Amazon', text: 'Best decision of my career. The real projects gave me a portfolio that impressed every interviewer I met.', avatar: 'https://i.pravatar.cc/80?img=5', company: 'Amazon', rating: 5 },
];

const whyItems = [
  { icon: <Users size={22} />, value: '100+', label: 'Hiring Partners', color: '#4F46E5' },
  { icon: <MonitorPlay size={22} />, value: 'LMS', label: 'Portal Access', color: '#10B981' },
  { icon: <FileText size={22} />, value: 'Mock', label: 'Interviews', color: '#F59E0B' },
  { icon: <Trophy size={22} />, value: '20+', label: 'Industry Mentors', color: '#EF4444' },
  { icon: <Users size={22} />, value: '1:1', label: 'Career Support', color: '#7C3AED' },
  { icon: <Briefcase size={22} />, value: 'Real', label: 'Projects', color: '#0EA5E9' },
];

const iconMap = {
  FileText: <FileText size={24} />,
  MonitorPlay: <MonitorPlay size={24} />,
  Briefcase: <Briefcase size={24} />,
  Play: <Play size={24} />,
  Users: <Users size={24} />,
  Shield: <Shield size={24} />,
  BarChart3: <BarChart3 size={24} />,
};

const heroImages = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=640&fit=crop&crop=top',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=640&fit=crop&crop=top',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=640&fit=crop&crop=top',
];

export default function InternshipDetailsPage() {
  const { id } = useParams();
  const [openAccordion, setOpenAccordion] = useState(0);
  const [activeReview, setActiveReview] = useState(0);

  const rawData = internshipsData[id] || fallbackData;
  const data = { ...rawData };
  if (!internshipsData[id] && id) {
    data.title = id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  const heroImg = heroImages[Object.keys(internshipsData).indexOf(id) % 3] || heroImages[0];

  return (
    <div className="idp-page">

      {/* ── HERO ── */}
      <section className="idp-hero">
        <div className="idp-hero-orb idp-orb-1" />
        <div className="idp-hero-orb idp-orb-2" />
        <div className="idp-hero-dots" />

        <div className="container">
          <div className="idp-hero-inner">
            {/* Left */}
            <motion.div className="idp-hero-left" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="idp-hero-badge">
                <span className="idp-live-dot" />
                <Zap size={12} fill="currentColor" />
                Enrollment Open · Limited Seats
              </div>

              <h1 className="idp-hero-title">
                {data.title}<br />
                <span className="text-gradient">Internship Program</span>
              </h1>

              <p className="idp-hero-desc">{data.description}</p>

              <div className="idp-hero-trust-row">
                {[
                  { icon: <Star size={13} fill="#F59E0B" color="#F59E0B" />, text: '4.8 Google Rating' },
                  { icon: <Users size={13} />, text: '10.7K+ Enrolled' },
                  { icon: <Award size={13} />, text: '100+ Hiring Partners' },
                ].map(t => (
                  <span key={t.text} className="idp-trust-chip">{t.icon}{t.text}</span>
                ))}
              </div>

              <div className="idp-hero-actions">
                <a href="https://wa.me/919363603504" target="_blank" rel="noopener noreferrer" className="btn-primary-custom">
                  <Zap size={16} fill="currentColor" />
                  Book Free Demo
                  <ArrowRight size={16} />
                </a>
                <a href="tel:+919363630504" className="idp-call-btn">
                  <Phone size={15} />
                  Call Us Now
                </a>
              </div>

              <div className="idp-hero-stats-row">
                {[
                  { v: '50+', l: 'Hours Learning' },
                  { v: '3 Mo', l: 'Duration' },
                  { v: '100%', l: 'Certificate' },
                  { v: '4 hr', l: 'Per Week' },
                ].map(s => (
                  <div key={s.l} className="idp-mini-stat">
                    <span className="idp-mini-stat-v">{s.v}</span>
                    <span className="idp-mini-stat-l">{s.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Person Visual */}
            <motion.div className="idp-hero-right" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <div className="idp-person-stage">
                <div className="idp-person-blob" />
                <div className="idp-ring idp-ring-1" />
                <div className="idp-ring idp-ring-2" />
                <img src={heroImg} alt="TechVedhu Student" className="idp-person-img" />

                <motion.div className="idp-float-card idp-fc-1" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                  <span>🏆</span>
                  <div><div className="idp-fc-val">4.8/5</div><div className="idp-fc-lbl">Google</div></div>
                </motion.div>

                <motion.div className="idp-float-card idp-fc-2" animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                  <span>🚀</span>
                  <div><div className="idp-fc-val">Hired!</div><div className="idp-fc-lbl">Alumni placed</div></div>
                </motion.div>

                <motion.div className="idp-float-card idp-fc-3" animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}>
                  <span>✅</span>
                  <div><div className="idp-fc-val">Certificate</div><div className="idp-fc-lbl">Verified</div></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="idp-stats-bar">
        <div className="container">
          <div className="idp-stats-inner">
            {[
              { v: '50+', l: 'Hours of Learning', icon: <Clock size={18} /> },
              { v: 'Industry', l: 'Certificate Included', icon: <Award size={18} /> },
              { v: '3 Months', l: 'Program Duration', icon: <BookOpen size={18} /> },
              { v: 'Placement', l: 'Assistance Provided', icon: <TrendingUp size={18} /> },
              { v: '100+', l: 'Hiring Partners', icon: <Users size={18} /> },
            ].map((s, i) => (
              <React.Fragment key={s.l}>
                <motion.div className="idp-stat-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <div className="idp-stat-icon">{s.icon}</div>
                  <div className="idp-stat-val">{s.v}</div>
                  <div className="idp-stat-lbl">{s.l}</div>
                </motion.div>
                {i < 4 && <div className="idp-stat-sep" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TECHVEDHU ── */}
      <section className="idp-section idp-why">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Why TechVedhu?</p>
            <h2 className="section-title">Everything You Need to <span className="text-gradient">Launch Your Career</span></h2>
            <p className="section-subtitle mx-auto">Secure your career with cutting-edge resources and transformative learning experiences.</p>
            <div className="divider mx-auto" />
          </div>
          <div className="idp-why-grid">
            {whyItems.map((item, i) => (
              <motion.div key={item.label} className="idp-why-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }}>
                <div className="idp-why-icon" style={{ background: `${item.color}15`, color: item.color }}>{item.icon}</div>
                <div className="idp-why-val">{item.value}</div>
                <div className="idp-why-lbl">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className="idp-section idp-curriculum" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">What You'll Learn</p>
            <h2 className="section-title">Course <span className="text-gradient">Curriculum</span></h2>
            <div className="divider mx-auto" />
          </div>
          <div className="idp-curriculum-inner">
            {/* Left: Image */}
            <motion.div className="idp-curriculum-visual" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="idp-curriculum-img-wrap">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=500&fit=crop" alt="Learning" />
                <div className="idp-curriculum-img-badge">
                  <CheckCircle size={16} />
                  Industry-Aligned Curriculum
                </div>
              </div>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="idp-accordion">
                {data.curriculum.map((item, index) => (
                  <div key={index} className={`idp-acc-item ${openAccordion === index ? 'open' : ''}`}>
                    <button className="idp-acc-header" onClick={() => setOpenAccordion(openAccordion === index ? null : index)}>
                      <div className="idp-acc-num">{String(index + 1).padStart(2, '0')}</div>
                      <span className="idp-acc-title">{item.title}</span>
                      <ChevronDown size={16} className="idp-acc-arrow" />
                    </button>
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="idp-acc-body">
                          <p>{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <button className="idp-download-btn">
                <Download size={16} />
                Download Full Brochure
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="idp-section idp-projects">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Hands-On Experience</p>
            <h2 className="section-title">Real-World <span className="text-gradient">Projects You'll Build</span></h2>
            <p className="section-subtitle mx-auto">Not toy exercises — production-grade projects that impress employers.</p>
            <div className="divider mx-auto" />
          </div>
          <div className="idp-projects-grid">
            {data.projects.map((proj, i) => (
              <motion.div key={i} className="idp-project-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}>
                <div className="idp-project-icon">{iconMap[proj.icon] || <FileText size={24} />}</div>
                <h3 className="idp-project-title">{proj.title}</h3>
                <p className="idp-project-desc">{proj.desc}</p>
                <div className="idp-project-tag">Real Project</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section className="idp-section idp-tools" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="text-center mb-4">
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">Industry Tools <span className="text-gradient">You'll Master</span></h2>
            <div className="divider mx-auto" />
          </div>
          <div className="idp-tools-grid">
            {data.tools.map((tool, i) => (
              <motion.div key={i} className="idp-tool-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4, scale: 1.05 }}>
                <img src={tool.logo} alt={tool.name} />
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION ── */}
      <section className="idp-certification">
        <div className="idp-cert-orb idp-cert-orb-1" />
        <div className="idp-cert-orb idp-cert-orb-2" />
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Career Proof</p>
            <h2 className="section-title" style={{ color: 'white' }}>Get <span style={{ color: '#A5B4FC' }}>Certified</span> by Industry</h2>
            <div className="divider mx-auto" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div className="idp-cert-inner">
            <motion.div className="idp-cert-left" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <ul className="idp-cert-list">
                {[
                  'Enhances your resume — get noticed by top recruiters',
                  'Globally recognized certificate from TechVedhu',
                  'LinkedIn-shareable digital credential',
                  'Validates real project experience, not just coursework',
                  'Reference it in every future job application',
                ].map(item => (
                  <li key={item}>
                    <CheckCircle size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919363603504" target="_blank" rel="noopener noreferrer" className="idp-cert-cta">
                <Zap size={16} fill="currentColor" />
                Get Your Certificate
                <ArrowRight size={16} />
              </a>
            </motion.div>
            <motion.div className="idp-cert-right" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <div className="idp-cert-img-wrap">
                <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&h=400&fit=crop" alt="Certificate" />
                <div className="idp-cert-watermark">SAMPLE</div>
                <div className="idp-cert-badge"><Award size={14} /> Industry Verified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="idp-section idp-pricing">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Flexible Options</p>
            <h2 className="section-title">Choose Your <span className="text-gradient">Learning Mode</span></h2>
            <div className="divider mx-auto" />
          </div>
          <div className="idp-pricing-grid">
            {/* Self-Paced */}
            <motion.div className="idp-pricing-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="idp-pricing-header">
                <div className="idp-pricing-icon idp-pricing-icon-free">📚</div>
                <h3 className="idp-pricing-name">SELF-PACED</h3>
                <p className="idp-pricing-sub">Learn at your own schedule</p>
              </div>
              <ul className="idp-pricing-features">
                {['Recorded Sessions', '3 Months Access', 'Mini Projects', 'Study Material', 'Certificate'].map(f => (
                  <li key={f}><CheckCircle size={15} />{f}</li>
                ))}
              </ul>
              <div className="idp-pricing-footer">
                <div className="idp-pricing-price">₹999<span>/month</span></div>
                <Link to="/register" className="idp-enroll-btn idp-enroll-outline">Enroll Now</Link>
              </div>
            </motion.div>

            {/* Mentor-Led (Featured) */}
            <motion.div className="idp-pricing-card idp-pricing-featured" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="idp-pricing-popular-badge">⭐ Most Popular</div>
              <div className="idp-pricing-header">
                <div className="idp-pricing-icon idp-pricing-icon-pro">🚀</div>
                <h3 className="idp-pricing-name">MENTOR-LED</h3>
                <p className="idp-pricing-sub">Live classes + placement support</p>
              </div>
              <ul className="idp-pricing-features">
                {['Live + Recorded Classes', 'Real-Time Projects', '6 Months Access', 'Industry Certificate', 'Placement Assistance', 'Mock Interviews', '1:1 Career Mentoring'].map(f => (
                  <li key={f}><CheckCircle size={15} />{f}</li>
                ))}
              </ul>
              <div className="idp-pricing-footer">
                <div className="idp-pricing-price">₹1999<span>/month</span></div>
                <Link to="/register" className="idp-enroll-btn idp-enroll-primary">Enroll Now</Link>
              </div>
            </motion.div>
          </div>
          <p className="idp-pricing-note">
            🎁 Free demo session before you commit. No credit card required.
          </p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="idp-section idp-reviews" style={{ background: '#F8FAFF' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="section-label">Student Success</p>
            <h2 className="section-title">Our Students, <span className="text-gradient">Making Us Proud</span></h2>
            <div className="divider mx-auto" />
          </div>

          <div className="idp-reviews-inner">
            {/* Google Rating Card */}
            <div className="idp-google-card">
              <div className="idp-google-logo">
                <span style={{ color: '#4285F4', fontWeight: 900, fontSize: 20 }}>G</span>
              </div>
              <div className="idp-google-score">4.8</div>
              <div className="idp-google-stars">
                {Array(5).fill(0).map((_, i) => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <div className="idp-google-label">Rating on Google</div>
              <div className="idp-google-count">Based on 500+ reviews</div>
            </div>

            {/* Reviews */}
            <div className="idp-reviews-cards">
              <div className="idp-reviews-grid">
                {reviews.map((rev, i) => (
                  <motion.div key={i} className="idp-review-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="idp-review-stars">
                      {Array(rev.rating).fill(0).map((_, j) => <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />)}
                    </div>
                    <p className="idp-review-text">"{rev.text}"</p>
                    <div className="idp-review-author">
                      <img src={rev.avatar} alt={rev.name} />
                      <div>
                        <div className="idp-review-name">{rev.name}</div>
                        <div className="idp-review-role">{rev.role}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="idp-final-cta">
        <div className="idp-final-orb" />
        <div className="container">
          <motion.div className="idp-final-inner" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="idp-final-title">Ready to Start Your {data.title} Journey?</h2>
            <p className="idp-final-sub">Join 10,700+ learners. Free demo, no commitment, no credit card.</p>
            <div className="idp-final-actions">
              <a href="https://wa.me/919363603504" target="_blank" rel="noopener noreferrer" className="idp-final-btn-primary">
                <Zap size={18} fill="currentColor" />
                Book Free Demo Now
                <ArrowRight size={18} />
              </a>
              <a href="tel:+919363630504" className="idp-final-btn-secondary">
                <Phone size={16} />
                +91 93636 30504
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
