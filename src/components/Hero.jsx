import { Link } from 'react-router-dom'
import Button from './Button'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner container">
        <div className="hero-content">
          <span className="hero-tag">Admissions Open 2025–26</span>
          <h1 className="hero-title">
            Shape Lives Through
            <em> Expert Nursing</em>
          </h1>
          <p className="hero-desc">
            Join India's premier nursing institution. Build clinical excellence,
            compassion, and a career that transforms communities.
          </p>
          <div className="hero-actions">
            <Button as={Link} to="/apply" size="lg" variant="gold">
              Apply Now →
            </Button>
            <Button as={Link} to="/courses" size="lg" variant="ghost">
              Explore Courses
            </Button>
          </div>
          <div className="hero-stats">
            {[
              { value: '2,400+', label: 'Alumni Placed' },
              { value: '18+', label: 'Programmes' },
              { value: '94%', label: 'Pass Rate' },
              { value: '35 Yrs', label: 'Excellence' },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card main-card">
            <div className="card-icon">🩺</div>
            <h3>Clinical Training</h3>
            <p>Hands-on learning at 12+ partner hospitals</p>
          </div>
          <div className="hero-card side-card top-card">
            <span>🎓</span>
            <p>RGUHS Affiliated</p>
          </div>
          <div className="hero-card side-card bottom-card">
            <span>💉</span>
            <p>Modern Simulation Labs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
