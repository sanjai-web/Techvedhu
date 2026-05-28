import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock, Users, Star, BookOpen, ArrowRight,
  Play, Heart, BadgeCheck, Monitor, Brain,
  TrendingUp, Code2, Palette, ShoppingBag, Globe, Shield
} from 'lucide-react';
import './CourseCards.css';

const categories = [
  { id: 'all', label: 'All Programs' },
  { id: 'internship', label: 'Internship Programs' },
  { id: 'launchpad', label: 'Career Launchpad' },
];

// ─── REAL courses from TechVedhu.com ────────────────────────────────────────
const courses = [
  // ── Internship / Certificate Programs ──
  {
    id: 1,
    category: 'internship',
    title: 'Web Development',
    description: 'Master front-end and back-end technologies to build full-stack web applications.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=11',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 1240,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['HTML', 'CSS', 'React', 'Node.js'],
    icon: <Code2 size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 2,
    category: 'internship',
    title: 'Machine Learning',
    description: 'Dive into machine learning techniques to build predictive models using Python and TensorFlow.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=5',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 987,
    schedule: '4 hr/week',
    level: 'Intermediate',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Python', 'TensorFlow', 'Pandas', 'ML'],
    icon: <Brain size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 3,
    category: 'internship',
    title: 'Python Programming',
    description: 'Learn the fundamentals of Python programming, including web development, data analysis, and automation.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=33',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 1542,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Python', 'NumPy', 'Pandas', 'OOP'],
    icon: <Code2 size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 4,
    category: 'internship',
    title: 'UI/UX Design',
    description: 'Design intuitive user interfaces and enhance user experiences using modern tools.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=20',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 876,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'UX Research'],
    icon: <Palette size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 5,
    category: 'internship',
    title: 'Sales and Marketing',
    description: 'Learn sales strategies, digital marketing, and customer relationship management.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=67',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 654,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['SEO', 'CRM', 'Digital Marketing', 'Sales'],
    icon: <TrendingUp size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 6,
    category: 'internship',
    title: 'Data Science',
    description: 'Master data analysis, visualization, and machine learning techniques for actionable insights.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=9',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 1123,
    schedule: '4 hr/week',
    level: 'Intermediate',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Python', 'SQL', 'Power BI', 'Statistics'],
    icon: <TrendingUp size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 7,
    category: 'internship',
    title: 'Cloud Computing',
    description: 'Understand cloud infrastructure, deployment, and services from leading cloud providers.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=15',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 743,
    schedule: '4 hr/week',
    level: 'Intermediate',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['AWS', 'Azure', 'GCP', 'DevOps'],
    icon: <Globe size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 8,
    category: 'internship',
    title: 'Cyber Security',
    description: 'Learn to identify vulnerabilities, secure networks, and understand ethical hacking techniques.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=60',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 832,
    schedule: '4 hr/week',
    level: 'Intermediate',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Ethical Hacking', 'Network Security', 'SIEM', 'Penetration Testing'],
    icon: <Shield size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 9,
    category: 'internship',
    title: 'App Development',
    description: 'Build cross-platform mobile applications using modern frameworks and tools.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=25',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 598,
    schedule: '4 hr/week',
    level: 'Intermediate',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Flutter', 'React Native', 'Firebase', 'Dart'],
    icon: <Monitor size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 10,
    category: 'internship',
    title: 'Digital Marketing',
    description: 'Master SEO, social media marketing, content strategy, and performance advertising.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=30',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=240&fit=crop',
    rating: 4.6,
    reviewCount: 476,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    icon: <TrendingUp size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 11,
    category: 'internship',
    title: 'Java Programming',
    description: 'Learn core Java, OOP principles, Spring Boot framework, and backend development.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=45',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 689,
    schedule: '4 hr/week',
    level: 'Beginner',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['Java', 'Spring Boot', 'OOP', 'REST APIs'],
    icon: <Code2 size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },
  {
    id: 12,
    category: 'internship',
    title: 'Artificial Intelligence',
    description: 'Explore AI fundamentals, neural networks, NLP, and real-world AI application development.',
    instructor: 'TechVedhu Expert',
    instructorAvatar: 'https://i.pravatar.cc/40?img=50',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 921,
    schedule: '4 hr/week',
    level: 'Advanced',
    tag: '20% Off',
    tagColor: '#10B981',
    seats: 'Limited Seats',
    skills: ['AI', 'Neural Networks', 'NLP', 'Computer Vision'],
    icon: <Brain size={16} />,
    features: ['Live Classes', 'Projects', 'Certificate'],
  },

  // ── Career Launchpad Programs ──
  {
    id: 13,
    category: 'launchpad',
    title: 'Software Development Launchpad with Gen AI (FSD)',
    description: 'Gain hands-on experience through real-world projects and unlock guaranteed referrals to seamlessly transition into a Full-Stack Developer role at leading product-based companies.',
    instructor: 'TechVedhu Mentors',
    instructorAvatar: 'https://i.pravatar.cc/40?img=11',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 2100,
    duration: '4–8 Months',
    level: 'Beginner',
    tag: 'Free Demo',
    tagColor: '#4F46E5',
    seats: 'Assured Scholarship',
    skills: ['MERN Stack', 'DSA', 'System Design', 'Gen AI', 'Spring Boot'],
    icon: <Code2 size={16} />,
    features: ['7 Real Projects', 'Internship', 'Assured Referrals', 'Career Services'],
    highlight: true,
  },
  {
    id: 14,
    category: 'launchpad',
    title: 'Data Analysis & Data Science Launch Track with GenAI (DADS)',
    description: 'Achieve expertise in Data Analysis and Data Science through specialized programs blending statistical analysis, machine learning, and visualization.',
    instructor: 'TechVedhu Mentors',
    instructorAvatar: 'https://i.pravatar.cc/40?img=5',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 1780,
    duration: '4–8 Months',
    level: 'Beginner',
    tag: 'Free Demo',
    tagColor: '#4F46E5',
    seats: 'Assured Scholarship',
    skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Tableau', 'ML', 'GenAI'],
    icon: <TrendingUp size={16} />,
    features: ['10+ Industry Projects', '250+ SQL Challenges', 'Career Services', 'Internship'],
    highlight: true,
  },
  {
    id: 15,
    category: 'launchpad',
    title: 'FinTech & Digital Finance Launch Track with GenAI',
    description: 'AI is revolutionizing Fintech by automating transactions and powering smart, customer-centric systems — equip yourself with future-ready skills to lead this intelligent financial transformation.',
    instructor: 'TechVedhu Mentors',
    instructorAvatar: 'https://i.pravatar.cc/40?img=33',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 943,
    duration: '4–8 Months',
    level: 'Intermediate',
    tag: 'Free Demo',
    tagColor: '#4F46E5',
    seats: 'Assured Scholarship',
    skills: ['Blockchain', 'Smart Contracts', 'AI/ML', 'FinTech', 'Python'],
    icon: <TrendingUp size={16} />,
    features: ['10+ Projects', '45+ Modules', 'Career Services', 'Internship'],
    highlight: true,
  },
];

function CourseCard({ course, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className={`course-card ${course.highlight ? 'course-card-highlight' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
    >
      {/* Image */}
      <div className="course-card-image-wrap">
        <img src={course.image} alt={course.title} className="course-card-image" loading="lazy" />
        <div className="course-card-overlay">
          <button className="course-preview-btn">
            <Play size={14} fill="white" />
            Preview
          </button>
        </div>
        <span className="course-tag" style={{ background: `${course.tagColor}20`, color: course.tagColor }}>
          {course.tag}
        </span>
        {course.seats && (
          <span className="course-seats-badge">🔥 {course.seats}</span>
        )}
        <button
          className={`course-wishlist ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart size={16} fill={liked ? '#EF4444' : 'none'} color={liked ? '#EF4444' : '#64748B'} />
        </button>
      </div>

      {/* Content */}
      <div className="course-card-body">
        {/* Skills */}
        <div className="course-skills">
          {course.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="course-skill-tag">{skill}</span>
          ))}
          {course.skills.length > 3 && (
            <span className="course-skill-tag">+{course.skills.length - 3}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>

        {/* Features */}
        <div className="course-features">
          {(course.features || []).map((f) => (
            <span key={f} className="course-feature-pill">
              <BadgeCheck size={12} />
              {f}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="course-rating">
          <span className="rating-value">{course.rating}</span>
          <div className="star-rating">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(course.rating) ? '#F59E0B' : '#E2E8F0'}
                color={i < Math.floor(course.rating) ? '#F59E0B' : '#E2E8F0'}
              />
            ))}
          </div>
          <span className="rating-count">({course.reviewCount.toLocaleString()})</span>
        </div>

        {/* Meta */}
        <div className="course-meta">
          <span className="course-meta-item">
            <Clock size={13} />
            {course.schedule || course.duration}
          </span>
          <span className="course-meta-dot" />
          <span className={`course-level course-level-${course.level.toLowerCase().replace(/\s/g,'').replace('–','')}`}>
            {course.level}
          </span>
        </div>

        {/* Footer */}
        <div className="course-footer">
          <div className="course-cta-label">
            {course.highlight ? 'Free Demo Available' : 'Limited Seats'}
          </div>
          <Link to={`/courses/${course.id}`} className="course-enroll-btn">
            Explore Now
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CourseCards() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="section-padding" id="courses">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="section-label">Our Programs</p>
          <h2 className="section-title">
            Supercharge Your Career{' '}
            <span className="text-gradient">Right Away</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From internship-based certificate programs to comprehensive career launchpad
            tracks — all with live classes, real projects, and placement support.
          </p>
          <div className="divider mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="course-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="courses-grid">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link to="/courses" className="btn-outline-custom">
            <BookOpen size={18} />
            View All Programs
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
