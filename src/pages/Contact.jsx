import { useState } from 'react'
import api from '../services/api'
import Button from '../components/Button'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="page-header-bg" />
        <div className="container page-header-inner">
          <span className="section-tag">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have questions? Our admissions team is ready to help.</p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">We're Here for You</h2>
            <p style={{color:'var(--slate)', lineHeight:'1.7', marginBottom:'2.5rem'}}>
              Whether you're a prospective student, parent, or professional, reach out and we'll get back to you within 24 hours.
            </p>

            {[
              { icon: '📍', label: 'Address', value: '123 College Road, Bengaluru – 560001, Karnataka' },
              { icon: '📞', label: 'Phone', value: '+91 80 1234 5678' },
              { icon: '✉️', label: 'Email', value: 'admissions@nursecore.edu.in' },
              { icon: '🕐', label: 'Office Hours', value: 'Mon – Sat: 9:00 AM – 5:00 PM' },
            ].map(i => (
              <div key={i.label} className="info-item">
                <div className="info-icon">{i.icon}</div>
                <div>
                  <strong>{i.label}</strong>
                  <p>{i.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-box">
            <h3>Send a Message</h3>
            {status === 'success' && (
              <div className="alert alert-success">✅ Message sent! We'll respond within 24 hours.</div>
            )}
            {status === 'error' && (
              <div className="alert alert-error">❌ Something went wrong. Please try again.</div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Your enquiry topic" required />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Write your message here..." required />
              </div>
              <Button type="submit" variant="primary" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message →'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
