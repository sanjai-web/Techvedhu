import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ title = 'Get In Touch', subtitle = 'Fill in your details and our team will reach out within 24 hours.' }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const courses = ['Python Programming','Cloud Computing','Artificial Intelligence','Cyber Security','Data Science','App Development','Web Development','Digital Marketing','Machine Learning','Java Programming','UI/UX Design','Finance','Stock Market','Software Dev Launch Track','Data Science Launch Track','FinTech Launch Track'];

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <div className="success-icon"><i className="bi bi-check-circle-fill"></i></div>
        <h3>Thank You! 🎉</h3>
        <p>Your enquiry has been received. Our team will reach out within <strong>24 hours</strong>.</p>
        <button className="btn-primary-custom" onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',course:'',message:'' }); }}>
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="contact-form-wrapper">
      <h3 className="form-title">{title}</h3>
      <p className="form-subtitle">{subtitle}</p>
      <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number *</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Program of Interest</label>
            <select name="course" value={form.course} onChange={handleChange}>
              <option value="">Select a program</option>
              {courses.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label>Message (Optional)</label>
          <textarea name="message" placeholder="Tell us about your goals..." value={form.message} onChange={handleChange} rows={4}></textarea>
        </div>
        <button type="submit" className="btn-primary-custom form-submit">
          <i className="bi bi-send-fill"></i> Send Enquiry
        </button>
      </form>
    </div>
  );
}
