import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';
import './BlogPage.css';

const posts = [
  {
    id: 1,
    title: '10 High-Paying Tech Skills to Learn in 2026',
    excerpt: 'The tech industry is evolving rapidly. Here are the skills that employers are paying top salaries for in 2026.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=400&h=240&fit=crop',
    category: 'Career Tips',
    readTime: '6 min read',
    date: 'May 20, 2026',
    author: { name: 'Priya Subramaniam', avatar: 'https://i.pravatar.cc/32?img=5' },
    badge: 'Trending',
    badgeColor: '#EF4444',
  },
  {
    id: 2,
    title: 'How I Went from ₹3 LPA to ₹16 LPA in 8 Months',
    excerpt: 'A real story of career transformation through focused learning, consistent practice, and the right mentorship.',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=400&h=240&fit=crop',
    category: 'Success Stories',
    readTime: '8 min read',
    date: 'May 15, 2026',
    author: { name: 'Arjun Mehta', avatar: 'https://i.pravatar.cc/32?img=11' },
    badge: 'Popular',
    badgeColor: '#4F46E5',
  },
  {
    id: 3,
    title: 'The Complete Roadmap to Becoming a Full Stack Developer',
    excerpt: 'A step-by-step guide for beginners to master HTML, CSS, JavaScript, React, Node.js, and databases.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=240&fit=crop',
    category: 'Learning Guides',
    readTime: '12 min read',
    date: 'May 10, 2026',
    author: { name: 'Karthik Rajan', avatar: 'https://i.pravatar.cc/32?img=33' },
    badge: 'Guide',
    badgeColor: '#10B981',
  },
  {
    id: 4,
    title: 'AI & Machine Learning: Is Now the Right Time to Learn?',
    excerpt: 'Understanding the current AI job market, what skills to focus on, and how to position yourself for AI roles.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=240&fit=crop',
    category: 'Industry Insights',
    readTime: '7 min read',
    date: 'May 5, 2026',
    author: { name: 'Divya Krishnan', avatar: 'https://i.pravatar.cc/32?img=9' },
    badge: 'New',
    badgeColor: '#F59E0B',
  },
  {
    id: 5,
    title: 'Top 5 Projects to Build for Your Tech Portfolio in 2026',
    excerpt: 'Stand out to employers with these impressive portfolio projects that showcase real-world skills.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=240&fit=crop',
    category: 'Learning Guides',
    readTime: '10 min read',
    date: 'April 28, 2026',
    author: { name: 'Arjun Mehta', avatar: 'https://i.pravatar.cc/32?img=11' },
    badge: 'Must Read',
    badgeColor: '#7C3AED',
  },
  {
    id: 6,
    title: 'Understanding Cloud Computing: AWS vs Azure vs GCP',
    excerpt: 'A comprehensive comparison of the big three cloud platforms to help you choose the right certification path.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop',
    category: 'Tech Deep Dives',
    readTime: '9 min read',
    date: 'April 22, 2026',
    author: { name: 'Karthik Rajan', avatar: 'https://i.pravatar.cc/32?img=33' },
    badge: 'Deep Dive',
    badgeColor: '#0EA5E9',
  },
];

export default function BlogPage() {
  return (
    <div className="page-content">
      <div className="page-hero bg-surface">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="section-label">TechVedhu Blog</p>
            <h1 className="section-title">
              Insights, Guides &{' '}
              <span className="text-gradient">Career Advice</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Expert-written articles on technology, career growth, and learning strategies
              to accelerate your journey in tech.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          {/* Featured Post */}
          <div className="blog-featured mb-5">
            <div className="blog-featured-image">
              <img src={posts[0].image} alt={posts[0].title} />
            </div>
            <div className="blog-featured-content">
              <span className="badge-primary mb-3">{posts[0].category}</span>
              <h2 className="blog-featured-title">{posts[0].title}</h2>
              <p className="blog-featured-excerpt">{posts[0].excerpt}</p>
              <div className="blog-author">
                <img src={posts[0].author.avatar} alt={posts[0].author.name} />
                <span>{posts[0].author.name}</span>
                <span className="blog-meta-dot" />
                <Clock size={13} />
                <span>{posts[0].readTime}</span>
                <span className="blog-meta-dot" />
                <span>{posts[0].date}</span>
              </div>
              <Link to={`/blog/${posts[0].id}`} className="btn-primary-custom mt-4">
                Read Article
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Grid */}
          <h3 className="mb-4" style={{ fontSize: 20, fontWeight: 700 }}>More Articles</h3>
          <div className="blog-grid">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="blog-card-image-wrap">
                  <img src={post.image} alt={post.title} className="blog-card-image" />
                  <span
                    className="blog-tag"
                    style={{ background: `${post.badgeColor}18`, color: post.badgeColor }}
                  >
                    {post.badge}
                  </span>
                </div>
                <div className="blog-card-body">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="blog-author">
                      <img src={post.author.avatar} alt={post.author.name} />
                      <span>{post.author.name}</span>
                    </div>
                    <div className="blog-meta">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
