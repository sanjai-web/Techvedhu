import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, CheckCircle, Download, MonitorPlay, FileText, Briefcase, Play, Users, Trophy, ChevronRight, ChevronLeft, Shield, BarChart3
} from 'lucide-react';
import { internshipsData, fallbackData } from '../data/internshipsData';
import './InternshipDetailsPage.css';

const reviews = [
  { name: 'Suresh', role: 'Software Developer', text: 'Tech Vedhu\'s Java Development course was exceptional! The step-by-step guidance on OOPs concepts and in-depth modules on Spring Boot prepared me well for real-world projects.', avatar: 'https://i.pravatar.cc/80?img=11' },
  { name: 'M Jagannayagan', role: 'Full Stack Developer', text: 'Tech Vedhu\'s Python course provided me the foundation I needed in web development. The hands-on approach and expert instructors made complex topics easy to grasp.', avatar: 'https://i.pravatar.cc/80?img=12' },
];

const iconMap = {
  FileText: <FileText size={28} />,
  MonitorPlay: <MonitorPlay size={28} />,
  Briefcase: <Briefcase size={28} />,
  Play: <Play size={28} />,
  Users: <Users size={28} />,
  Shield: <Shield size={28} />,
  BarChart3: <BarChart3 size={28} /> // fallback
};

export default function InternshipDetailsPage() {
  const { id } = useParams();
  const [openAccordion, setOpenAccordion] = useState(0);

  // Get data for this specific internship, or use fallback
  const rawData = internshipsData[id] || fallbackData;
  
  // Create a copy of the data to avoid mutating the fallback
  const data = { ...rawData };
  
  // If it's the fallback, dynamically set the title based on the slug
  if (!internshipsData[id] && id) {
    data.title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  return (
    <div className="internship-details-page">
      {/* Hero Section */}
      <section className="details-hero">
        <div className="details-hero-blob"></div>
        <div className="container">
          <div className="details-hero-content">
            <motion.h1 
              className="details-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {data.title}
            </motion.h1>
            <motion.p 
              className="details-hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/register" className="details-hero-btn">
                Explore course now
              </Link>
            </motion.div>
          </div>
          <div className="details-hero-image-wrap">
            <motion.img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&auto=format" 
              alt="Student" 
              className="details-hero-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ borderRadius: '50%', width: 400, height: 400, objectFit: 'cover', border: '8px solid white', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="details-stats-bar">
        <div className="container details-stats-grid">
          <div className="details-stat-item">
            <div className="details-stat-value">50+</div>
            <div className="details-stat-label">Hours of Learning</div>
          </div>
          <div className="details-stat-divider"></div>
          <div className="details-stat-item">
            <div className="details-stat-value">Certification</div>
            <div className="details-stat-label">Industry Recognition</div>
          </div>
          <div className="details-stat-divider"></div>
          <div className="details-stat-item">
            <div className="details-stat-value">3 Months</div>
            <div className="details-stat-label">Program Duration</div>
          </div>
          <div className="details-stat-divider"></div>
          <div className="details-stat-item">
            <div className="details-stat-value">Placement</div>
            <div className="details-stat-label">Assistance</div>
          </div>
        </div>
      </section>

      {/* Why choose Tech Vedhu? */}
      <section className="details-why-choose">
        <div className="container">
          <h2 className="details-section-title">Why choose Tech Vedhu?</h2>
          <p className="details-section-subtitle">
            Secure the future: Secure your career with Tech Vedhu cutting-edge resources and transformative learning experiences.
          </p>
          <div className="details-why-grid">
            <div className="details-why-item">
              <div className="details-why-icon"><Users size={24} /></div>
              <div className="details-why-text">150+<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Hiring partners</span></div>
            </div>
            <div className="details-why-item">
              <div className="details-why-icon"><MonitorPlay size={24} /></div>
              <div className="details-why-text">LMS<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Portal access</span></div>
            </div>
            <div className="details-why-item">
              <div className="details-why-icon"><FileText size={24} /></div>
              <div className="details-why-text">Mock<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Test</span></div>
            </div>
            <div className="details-why-item">
              <div className="details-why-icon"><Trophy size={24} /></div>
              <div className="details-why-text">20+<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Industry Mentors</span></div>
            </div>
            <div className="details-why-item">
              <div className="details-why-icon"><Users size={24} /></div>
              <div className="details-why-text">1:1<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Career support</span></div>
            </div>
            <div className="details-why-item">
              <div className="details-why-icon"><Briefcase size={24} /></div>
              <div className="details-why-text">Real Time<br/><span style={{fontSize: 12, fontWeight: 500, color: 'var(--text-muted)'}}>Projects</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="details-curriculum">
        <div className="container">
          <h2 className="details-section-title">Course Curriculum</h2>
          <div className="curriculum-content">
            <div className="curriculum-image">
              <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=600&h=400&fit=crop" alt="Curriculum Illustration" />
            </div>
            <div className="curriculum-accordion-wrap">
              <div className="curriculum-accordion">
                {data.curriculum.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button 
                      className="accordion-header"
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    >
                      {item.title}
                      <ChevronDown 
                        size={16} 
                        style={{ transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} 
                      />
                    </button>
                    <AnimatePresence>
                      {openAccordion === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="accordion-content"
                        >
                          <div style={{ paddingTop: 10 }}>{item.content}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <button className="download-brochure-btn">
                <Download size={18} style={{ marginRight: 8 }} />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="details-projects">
        <div className="container">
          <h2 className="details-section-title">Our Projects</h2>
          <div className="projects-grid">
            {data.projects.map((proj, i) => (
              <div key={i} className="project-card">
                <div className="project-icon">{iconMap[proj.icon] || <FileText size={28} />}</div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Used */}
      <section className="details-tools">
        <div className="container">
          <h2 className="details-section-title">Tools Used</h2>
          <div className="tools-grid">
            {data.tools.map((tool, i) => (
              <div key={i} className="tool-card">
                <img src={tool.logo} alt={tool.name} title={tool.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="details-certification">
        <div className="container">
          <h2 className="details-section-title" style={{ color: 'white', marginBottom: 60 }}>Certification</h2>
          <div className="cert-content">
            <div className="cert-info">
              <ul className="cert-list">
                <li><CheckCircle size={18} /> Enhance your resume/cv to get more job opportunities.</li>
                <li><CheckCircle size={18} /> Reference your certification for future job search underway.</li>
                <li><CheckCircle size={18} /> Certificate generated globally for learners.</li>
                <li><CheckCircle size={18} /> Enhance credibility to your skill set, body of knowledge, and subject expertise.</li>
              </ul>
            </div>
            <div className="cert-image-wrap">
              <img src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&h=400&fit=crop" alt="Sample Certificate" />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: 48, fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: 4, textTransform: 'uppercase', pointerEvents: 'none' }}>
                Sample
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="details-pricing">
        <div className="container">
          <h2 className="details-section-title">Choose Your Learning Mode</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3 className="pricing-title">SELF - PACED</h3>
                <p className="pricing-desc">Learn at your own pace with access to recorded sessions and learning materials. Ideal for self-driven learners.</p>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> Recorded Sessions</li>
                <li><CheckCircle size={16} /> 3 Months Access</li>
                <li><CheckCircle size={16} /> Mini Projects</li>
                <li><CheckCircle size={16} /> Material Access</li>
              </ul>
              <div className="pricing-footer">
                <div className="pricing-amount">₹999/-</div>
                <Link to="/register" className="pricing-btn">Enroll Now</Link>
              </div>
            </div>
            
            <div className="pricing-card" style={{ borderColor: '#3B82F6', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.2)' }}>
              <div className="pricing-header">
                <h3 className="pricing-title">MENTOR - LED</h3>
                <p className="pricing-desc">Learn with live classes, get 1-1 mentorship, and work on real-time projects. Comprehensive career support.</p>
              </div>
              <ul className="pricing-features">
                <li><CheckCircle size={16} /> Live + Recorded Classes</li>
                <li><CheckCircle size={16} /> Real-time Projects</li>
                <li><CheckCircle size={16} /> 6 Months Access</li>
                <li><CheckCircle size={16} /> Certification</li>
                <li><CheckCircle size={16} /> Placement Assistance</li>
                <li><CheckCircle size={16} /> Mock Interviews</li>
              </ul>
              <div className="pricing-footer">
                <div className="pricing-amount">₹1999/-</div>
                <Link to="/register" className="pricing-btn">Enroll Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="details-reviews">
        <div className="container">
          <h2 className="details-section-title">Our Students, Making Us Proud Every Day</h2>
          <div className="reviews-container">
            <div className="google-rating-card">
              <div className="label" style={{ marginBottom: 12 }}>Rating on Google</div>
              <div className="stars">
                {Array(5).fill(0).map((_, i) => <svg key={i} viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <div className="score">4.8</div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="logo" />
            </div>
            
            <div className="reviews-slider-wrap">
              <div className="review-slider-inner">
                {reviews.map((rev, i) => (
                  <div key={i} className="review-card">
                    <div className="review-card-header">
                      <img src={rev.avatar} alt={rev.name} className="review-avatar" />
                      <div>
                        <div className="review-author-name">{rev.name}</div>
                        <div className="review-author-role">{rev.role}</div>
                      </div>
                    </div>
                    <p className="review-text">"{rev.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
