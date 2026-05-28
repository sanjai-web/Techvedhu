import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Clock, Users, Star, BookOpen, ArrowRight,
  Play, Heart, BadgeCheck, TrendingUp, Zap, Code2, Brain, Globe
} from 'lucide-react';
import './CourseCards.css';

const categories = [
  { id: 'all', label: 'All Courses' },
  { id: 'web', label: 'Web Dev' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'data', label: 'Data Science' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'cloud', label: 'Cloud' },
];

const courses = [
  {
    id: 1,
    category: 'web',
    title: 'Full Stack Web Development Bootcamp',
    instructor: 'Rajesh Kumar',
    instructorAvatar: 'https://i.pravatar.cc/40?img=11',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 2847,
    students: 12400,
    duration: '48 hours',
    level: 'Beginner',
    price: '₹2,499',
    originalPrice: '₹9,999',
    tag: 'Bestseller',
    tagColor: '#F59E0B',
    skills: ['React', 'Node.js', 'MongoDB'],
    icon: <Code2 size={16} />,
  },
  {
    id: 2,
    category: 'ai',
    title: 'Machine Learning & AI with Python',
    instructor: 'Dr. Priya Sharma',
    instructorAvatar: 'https://i.pravatar.cc/40?img=5',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 1923,
    students: 8700,
    duration: '52 hours',
    level: 'Intermediate',
    price: '₹3,299',
    originalPrice: '₹12,999',
    tag: 'Hot',
    tagColor: '#EF4444',
    skills: ['Python', 'TensorFlow', 'Pandas'],
    icon: <Brain size={16} />,
  },
  {
    id: 3,
    category: 'data',
    title: 'Data Science & Analytics Masterclass',
    instructor: 'Arun Patel',
    instructorAvatar: 'https://i.pravatar.cc/40?img=33',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 1542,
    students: 6300,
    duration: '40 hours',
    level: 'Intermediate',
    price: '₹2,999',
    originalPrice: '₹11,999',
    tag: 'New',
    tagColor: '#10B981',
    skills: ['SQL', 'Python', 'Power BI'],
    icon: <TrendingUp size={16} />,
  },
  {
    id: 4,
    category: 'cloud',
    title: 'AWS Cloud Practitioner & Solutions Architect',
    instructor: 'Meera Nair',
    instructorAvatar: 'https://i.pravatar.cc/40?img=20',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop',
    rating: 4.9,
    reviewCount: 987,
    students: 4200,
    duration: '36 hours',
    level: 'Beginner',
    price: '₹3,499',
    originalPrice: '₹13,999',
    tag: 'Trending',
    tagColor: '#4F46E5',
    skills: ['AWS', 'Cloud', 'DevOps'],
    icon: <Globe size={16} />,
  },
  {
    id: 5,
    category: 'web',
    title: 'React & Next.js Advanced Patterns',
    instructor: 'Vikram Singh',
    instructorAvatar: 'https://i.pravatar.cc/40?img=67',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop',
    rating: 4.8,
    reviewCount: 1234,
    students: 5900,
    duration: '28 hours',
    level: 'Advanced',
    price: '₹2,799',
    originalPrice: '₹10,999',
    tag: 'Popular',
    tagColor: '#7C3AED',
    skills: ['React', 'Next.js', 'TypeScript'],
    icon: <Zap size={16} />,
  },
  {
    id: 6,
    category: 'mobile',
    title: 'Flutter Mobile App Development',
    instructor: 'Divya Krishnan',
    instructorAvatar: 'https://i.pravatar.cc/40?img=9',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop',
    rating: 4.7,
    reviewCount: 876,
    students: 3800,
    duration: '44 hours',
    level: 'Intermediate',
    price: '₹2,699',
    originalPrice: '₹9,999',
    tag: 'New',
    tagColor: '#10B981',
    skills: ['Flutter', 'Dart', 'Firebase'],
    icon: <Code2 size={16} />,
  },
];

function CourseCard({ course, index }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      className="course-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
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
          {course.skills.map((skill) => (
            <span key={skill} className="course-skill-tag">{skill}</span>
          ))}
        </div>

        {/* Title */}
        <h3 className="course-title">{course.title}</h3>

        {/* Instructor */}
        <div className="course-instructor">
          <img src={course.instructorAvatar} alt={course.instructor} className="instructor-avatar" />
          <span className="instructor-name">{course.instructor}</span>
          <BadgeCheck size={14} className="text-primary" />
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
            {course.duration}
          </span>
          <span className="course-meta-dot" />
          <span className="course-meta-item">
            <Users size={13} />
            {course.students.toLocaleString()}
          </span>
          <span className="course-meta-dot" />
          <span className={`course-level course-level-${course.level.toLowerCase()}`}>
            {course.level}
          </span>
        </div>

        {/* Price */}
        <div className="course-footer">
          <div className="course-price">
            <span className="price-current">{course.price}</span>
            <span className="price-original">{course.originalPrice}</span>
          </div>
          <Link to={`/courses/${course.id}`} className="course-enroll-btn">
            Enroll
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
          <p className="section-label">Our Courses</p>
          <h2 className="section-title">
            Learn from India's Best{' '}
            <span className="text-gradient">Tech Experts</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hands-on, project-based courses designed by industry professionals
            to get you job-ready fast.
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
            View All 200+ Courses
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
