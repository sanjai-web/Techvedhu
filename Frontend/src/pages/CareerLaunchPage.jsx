import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CareerLaunch from '../components/CareerLaunch/CareerLaunch';
import ScholarshipBanner from '../components/ScholarshipBanner/ScholarshipBanner';
import ContactForm from '../components/ContactForm/ContactForm';
import FAQ from '../components/FAQ/FAQ';
import { careerLaunchPrograms } from '../data/courses';
import './CareerLaunchPage.css';

// Dynamic Career Launch Detail View
function CareerLaunchDetail({ course }) {
  // Generate sample syllabus weeks based on course slug
  const getSyllabus = (slug) => {
    if (slug === 'software-development') {
      return [
        { term: 'Weeks 1–4', topic: 'Programming Fundamentals & DSA', desc: 'Master core logic, advanced data structures, recursion, sorting, search algorithms, and algorithmic complexity.' },
        { term: 'Weeks 5–12', topic: 'Full-Stack Web Engineering', desc: 'Build scalable web apps using HTML5, CSS3, JavaScript ES6+, React.js, Node.js, Express, and SQL/NoSQL databases.' },
        { term: 'Weeks 13–16', topic: 'System Design & GenAI Integrations', desc: 'Learn scaling strategies, caching, database indexing, load balancers, and building GenAI workflows with LLM APIs.' },
        { term: 'Weeks 17–20', topic: 'Real-world Capstone & DevOps', desc: 'Build and deploy a microservices product using CI/CD pipelines, Docker, AWS hosting, and professional dev workflows.' },
        { term: 'Weeks 21–24', topic: 'Placement Prep & Mock Interviews', desc: 'Intensive interview training, resume audits, GitHub profiling, and live coding rounds with corporate mentors.' }
      ];
    } else if (slug === 'data-science-launch') {
      return [
        { term: 'Weeks 1–4', topic: 'Python Programming & Math Foundation', desc: 'Master Python syntax, OOP, NumPy, Pandas, linear algebra, calculus, probability, and inferential statistics.' },
        { term: 'Weeks 5–12', topic: 'Exploratory Data Analysis & Viz', desc: 'Extract insights from complex datasets using SQL, Matplotlib, Seaborn, Tableau, and automated BI tools.' },
        { term: 'Weeks 13–16', topic: 'Applied Machine Learning', desc: 'Build predictive models using regression, decision trees, random forests, SVMs, and hyperparameter tuning.' },
        { term: 'Weeks 17–20', topic: 'Deep Learning & GenAI NLP', desc: 'Learn neural networks, PyTorch, natural language processing, and prompt engineering with large language models.' },
        { term: 'Weeks 21–24', topic: 'Capstone & Recruiter Interviews', desc: 'Publish clean Kaggle projects, optimize portfolio sites, and complete live tech rounds with MNC engineers.' }
      ];
    } else {
      return [
        { term: 'Weeks 1–4', topic: 'Financial Markets & Excel Modeling', desc: 'Analyze corporate financial statements, banking systems, balance sheets, and advanced forecasting spreadsheets.' },
        { term: 'Weeks 5–12', topic: 'Digital Finance & Payments Stack', desc: 'Understand payment gateways, UPI architecture, micro-lending platforms, neobanking, and digital wallets.' },
        { term: 'Weeks 13–16', topic: 'Blockchain & Smart Contracts', desc: 'Learn crypto infrastructure, decentralized finance (DeFi) platforms, Solidity, and secure ledger led transactions.' },
        { term: 'Weeks 17–20', topic: 'GenAI in Investment Banking', desc: 'Leverage AI tools for risk analysis, stock valuation models, automated reporting, and algorithmic trading.' },
        { term: 'Weeks 21–24', topic: 'Domain Projects & Live Placement', desc: 'Build real fintech products, prepare mock case studies, and pitch to leading financial tech employers.' }
      ];
    }
  };

  const syllabus = getSyllabus(course.slug);

  return (
    <div className="cl-detail-page">
      {/* Hero */}
      <section className="cl-detail-hero" style={{ borderBottom: `3px solid ${course.color}` }}>
        <div className="container">
          <div className="cl-detail-hero-grid">
            <div className="cl-detail-hero-left">
              <div className="detail-breadcrumb">
                <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i>
                <Link to="/career-launch">Career Launch</Link> <i className="bi bi-chevron-right"></i>
                <span>{course.title}</span>
              </div>
              <div className="cl-hero-badge-row">
                <span className="cl-tag" style={{ background: `${course.color}15`, color: course.color, borderColor: `${course.color}30` }}>
                  {course.badge}
                </span>
                <span className="cl-tag tag-duration"><i className="bi bi-clock-fill"></i> {course.duration}</span>
                <span className="cl-tag tag-level"><i className="bi bi-mortarboard-fill"></i> Placement Track</span>
              </div>
              <h1 className="cl-detail-title">{course.title}</h1>
              <p className="cl-detail-subtitle">{course.description}</p>
              
              <div className="cl-hero-cta">
                <a href="#pricing" className="btn-primary-custom" style={{ background: course.gradient }}>
                  <i className="bi bi-rocket-takeoff-fill"></i> View Fee Structure
                </a>
                <Link to="/contact" className="btn-outline-custom">
                  Talk to Advisor
                </Link>
              </div>
            </div>
            
            <div className="cl-detail-hero-right">
              <div className="cl-hero-image-wrapper">
                <img src={course.image} alt={course.title} className="cl-hero-image" />
                <div className="cl-hero-icon-box" style={{ background: course.gradient }}>
                  <i className={`bi ${course.icon}`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="cl-details-body section-padding">
        <div className="container">
          <div className="cl-details-layout">
            
            {/* Left Main Column */}
            <div className="cl-details-main-col">
              
              {/* Skills Card */}
              <div className="cl-details-section-card reveal">
                <h3><i className="bi bi-shield-check" style={{ color: course.color }}></i> Skills You Will Master</h3>
                <div className="cl-skills-detail-grid">
                  {course.skills.map(s => (
                    <div key={s} className="cl-skill-detail-item">
                      <i className="bi bi-check-circle-fill" style={{ color: course.color }}></i>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Timeline */}
              <div className="cl-details-section-card reveal">
                <h3><i className="bi bi-journal-text" style={{ color: course.color }}></i> Program Curriculum</h3>
                <p className="cl-syllabus-intro">Our syllabus is updated quarterly to include the latest industry tools, architectures, and GenAI workflows.</p>
                <div className="cl-syllabus-timeline">
                  {syllabus.map((s, index) => (
                    <div key={s.topic} className="cl-syllabus-item">
                      <div className="cl-syllabus-left">
                        <span className="cl-syllabus-term" style={{ background: `${course.color}15`, color: course.color }}>{s.term}</span>
                        <div className="cl-syllabus-line" style={{ background: course.color }}></div>
                      </div>
                      <div className="cl-syllabus-right">
                        <h4 className="cl-syllabus-topic">{s.topic}</h4>
                        <p className="cl-syllabus-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div className="cl-details-section-card reveal">
                <h3><i className="bi bi-trophy" style={{ color: course.color }}></i> Career Outcomes & Portfolio</h3>
                <div className="cl-outcomes-detail-grid">
                  {course.outcomes.map(o => (
                    <div key={o} className="cl-outcome-detail-item" style={{ borderLeftColor: course.color }}>
                      <i className="bi bi-arrow-right-short" style={{ color: course.color }}></i>
                      <span>{o}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="cl-details-sidebar-col">
              <div className="cl-sidebar-sticky">
                <div className="cl-sidebar-card">
                  <h4>Program Inclusions</h4>
                  <div className="cl-inclusions-list">
                    {[
                      { icon: 'bi-person-workspace', text: '1-on-1 Mentor Reviews' },
                      { icon: 'bi-git', text: 'GitHub & Portfolio Audits' },
                      { icon: 'bi-chat-left-quote', text: 'Live Interview Simulations' },
                      { icon: 'bi-briefcase', text: 'Direct Hiring Partner Links' },
                      { icon: 'bi-cpu', text: 'GenAI Tools Subscription' },
                      { icon: 'bi-award', text: 'Professional Certification' },
                    ].map(inc => (
                      <div key={inc.text} className="cl-inclusion-item">
                        <i className={`bi ${inc.icon}`} style={{ color: course.color }}></i>
                        <span>{inc.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="cl-sidebar-separator"></div>
                  <div className="cl-sidebar-mentor-badge">
                    <i className="bi bi-patch-check-fill" style={{ color: 'var(--secondary)' }}></i>
                    <span>Taught by experts from Top MNCs</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing & Investment Timeline Section */}
      <section className="cl-pricing-section section-padding" id="pricing">
        <div className="container">
          <div className="cl-pricing-layout-grid">
            
            {/* Left Column: Let's Enroll Card */}
            <div className="cl-enroll-card reveal">
              <span className="cl-enroll-label">PROGRAM FEE</span>
              <h3 className="cl-enroll-title">Let's enroll!</h3>
              <div className="cl-enroll-badge">
                <i className="bi bi-gift-fill"></i> {course.discountBadge}
              </div>
              
              <div className="cl-pricing-box">
                <div className="cl-price-row">
                  <span className="cl-price-currency">₹</span>
                  <span className="cl-price-amount">{course.emi.replace('₹', '').split('/')[0]}</span>
                  <span className="cl-price-period">/Month</span>
                </div>
                <div className="cl-price-duration-label">({course.emiDuration})</div>
                <div className="cl-price-total">
                  Total amount <span className="price-num">{course.price}</span> <span className="price-old">{course.originalPrice}</span>
                </div>
              </div>
              
              <p className="cl-scholarship-note">
                {course.scholarshipText} <Link to="/scholarship">Learn more</Link>
              </p>
              
              <Link to="/contact" className="cl-enroll-btn">
                Enroll Now
              </Link>
            </div>

            {/* Right Column: Process Timeline Card */}
            <div className="cl-process-card reveal delay-200">
              <h3 className="cl-process-title">Invest in yourself. Grow your skills.</h3>
              <p className="cl-process-subtitle">Get your learning fee back in your first month's salary</p>
              
              <div className="cl-timeline-flow">
                
                {/* Step 1 */}
                <div className="cl-timeline-step">
                  <div className="step-circle-wrapper">
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80" alt="Enroll" className="step-avatar-img" />
                    <span className="step-number-badge">1</span>
                  </div>
                  <h4 className="step-flow-title">Enroll in track</h4>
                  <p className="step-flow-desc">Kickstart your career</p>
                </div>
                
                <div className="cl-timeline-connector solid-connector"></div>

                {/* Step 2 */}
                <div className="cl-timeline-step">
                  <div className="step-circle-wrapper">
                    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150&q=80" alt="Learn" className="step-avatar-img" />
                    <span className="step-number-badge">2</span>
                  </div>
                  <h4 className="step-flow-title">Learn with experts</h4>
                  <p className="step-flow-desc">Mentored by the best</p>
                </div>

                <div className="cl-timeline-connector solid-connector"></div>

                {/* Step 3 */}
                <div className="cl-timeline-step">
                  <div className="step-circle-wrapper">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80" alt="Placed" className="step-avatar-img" />
                    <span className="step-number-badge">3</span>
                  </div>
                  <h4 className="step-flow-title">Get placed</h4>
                  <p className="step-flow-desc">Next stop, dream job</p>
                </div>

                <div className="cl-timeline-connector dashed-connector"></div>

                {/* Step 4 */}
                <div className="cl-timeline-step">
                  <div className="step-circle-wrapper success-wrapper">
                    <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80" alt="Fee Back" className="step-avatar-img" />
                    <span className="step-number-badge success-badge">4</span>
                  </div>
                  <h4 className="step-flow-title text-success-flow">Get learning fee back</h4>
                  <p className="step-flow-desc">Paid off in first salary</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ />

      <section className="cl-contact section-padding">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <ContactForm
              title="Apply for a Career Launch Program"
              subtitle="Share your details and our career advisor will get back to you within 24 hours with a personalized plan."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Listing Page
export default function CareerLaunchPage() {
  const { slug } = useParams();
  const activeCourse = careerLaunchPrograms.find(c => c.slug === slug);

  if (slug && activeCourse) {
    return <CareerLaunchDetail course={activeCourse} />;
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="cl-hero section-padding-sm">
        <div className="container text-center">
          <div className="section-label reveal"><i className="bi bi-lightning-charge-fill"></i> Career Launch</div>
          <h1 className="section-title reveal delay-100">
            Complete Career <span className="gradient-text">Transformation Programs</span>
          </h1>
          <p className="section-subtitle reveal delay-200">
            Intensive 5–6 month programs combining technical depth, GenAI mastery, real projects, and 100% placement support to land roles at top companies.
          </p>
          <div className="cl-hero-features reveal delay-300">
            {['Industry Mentors', 'GenAI Included', '100% Placement Support', 'EMI Available'].map(f => (
              <span key={f} className="cl-feature-tag">
                <i className="bi bi-check-circle-fill"></i> {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CareerLaunch />
      <ScholarshipBanner />

      {/* Comparison Table */}
      <section className="cl-compare section-padding">
        <div className="container">
          <div className="text-center-section reveal">
            <h2 className="section-title">TechVedhu vs <span className="gradient-text">Traditional Training</span></h2>
          </div>
          <div className="compare-table reveal delay-200">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="th-techvedhu">TechVedhu</th>
                  <th>Traditional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industry Mentors', true, false],
                  ['Real Projects & Portfolio', true, false],
                  ['GenAI Skills', true, false],
                  ['Placement Guarantee', true, false],
                  ['Live MNC Collaboration', true, false],
                  ['Certificate', true, true],
                  ['Recorded Lectures', true, true],
                ].map(([feat, tv, trad]) => (
                  <tr key={feat}>
                    <td>{feat}</td>
                    <td className="td-techvedhu">
                      <i className={`bi ${tv ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'}`}></i>
                    </td>
                    <td>
                      <i className={`bi ${trad ? 'bi-check-circle-fill text-success' : 'bi-x-circle-fill text-danger'}`}></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FAQ />

      <section className="cl-contact section-padding">
        <div className="container">
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <ContactForm
              title="Apply for a Career Launch Program"
              subtitle="Share your details and our career advisor will get back to you within 24 hours with a personalized plan."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
