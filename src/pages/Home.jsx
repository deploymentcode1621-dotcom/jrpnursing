import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Button from '../components/Button'
import './Home.css'

const features = [
  { icon: '🏥', title: 'Clinical Excellence', desc: 'Train at 12+ partner hospitals with real patient exposure from Year 1.' },
  { icon: '🔬', title: 'Modern Labs', desc: 'State-of-the-art simulation and anatomy labs equipped with the latest technology.' },
  { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from 40+ experienced nurse educators and clinical specialists.' },
  { icon: '🌍', title: 'Global Placements', desc: 'Placement support in India, Gulf, UK, and Australia for our graduates.' },
  { icon: '📋', title: 'Accredited Programs', desc: 'All programmes approved by INC, RGUHS, and Karnataka Nursing Council.' },
  { icon: '💊', title: 'Holistic Curriculum', desc: 'Balanced academics, clinical hours, and mental wellness programmes.' },
]

const testimonials = [
  { name: 'Priya Sharma', course: 'B.Sc Nursing, 2022', text: 'The clinical exposure at NurseCore was unparalleled. I secured a position at AIIMS within 3 months of graduating.' },
  { name: 'Rahul Nair', course: 'GNM Diploma, 2023', text: 'The faculty here genuinely care about your growth. The simulation labs prepared me for real-world challenges on Day 1.' },
  { name: 'Ananya Reddy', course: 'M.Sc Nursing, 2021', text: 'I now work in the UK with a top NHS Trust. NurseCore opened doors I never imagined possible for me.' },
]

export default function Home() {
  return (
    <div className="home">
      <Hero />

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Built for Tomorrow's<br/>Healthcare Leaders</h2>
            <p className="section-subtitle">
              Every aspect of our programme is designed to produce nurses who are confident, competent, and compassionate.
            </p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Begin Your Nursing Journey?</h2>
            <p>Applications for 2025–26 are now open. Limited seats available.</p>
          </div>
          <div className="cta-actions">
            <Button as={Link} to="/apply" size="lg" variant="gold">Apply Now</Button>
            <Button as={Link} to="/contact" size="lg" variant="ghost">Talk to Us</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Hear From Our Alumni</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial-card">
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.course}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
