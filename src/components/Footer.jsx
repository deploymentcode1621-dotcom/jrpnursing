import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">✦</span>
            NurseCore <em>College</em>
          </div>
          <p>Shaping compassionate healthcare professionals since 1990. Affiliated with RGUHS, Karnataka.</p>
          <div className="footer-socials">
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="social-link">{s[0]}</a>
            ))}
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Quick Links</h4>
          <ul>
            {[['/', 'Home'], ['/about', 'About Us'], ['/courses', 'Courses'], ['/apply', 'Apply']].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Programmes</h4>
          <ul>
            {['B.Sc Nursing', 'GNM Diploma', 'Post Basic B.Sc', 'M.Sc Nursing', 'ANM Course'].map(p => (
              <li key={p}><a href="/courses">{p}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>📍 123 College Road, Bengaluru - 560001</li>
            <li>📞 +91 80 1234 5678</li>
            <li>✉️ admissions@nursecore.edu.in</li>
            <li>🕐 Mon – Sat: 9am – 5pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>© {new Date().getFullYear()} NurseCore College. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
