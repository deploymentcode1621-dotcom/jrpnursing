import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import './Courses.css'

const courses = [
  {
    id: 1, category: 'undergraduate',
    title: 'B.Sc Nursing', duration: '4 Years', seats: 60,
    fee: '₹75,000/yr', badge: 'Most Popular',
    desc: 'Comprehensive undergraduate degree covering medical-surgical, paediatric, community, and mental health nursing.',
    subjects: ['Anatomy & Physiology', 'Microbiology', 'Medical-Surgical Nursing', 'Community Health', 'Paediatric Nursing'],
    eligibility: '10+2 with PCB (45% min); NEET qualified',
  },
  {
    id: 2, category: 'diploma',
    title: 'GNM Diploma', duration: '3.5 Years', seats: 40,
    fee: '₹55,000/yr', badge: null,
    desc: 'General Nursing and Midwifery diploma — the classic route to becoming a registered nurse with strong hospital demand.',
    subjects: ['Fundamentals of Nursing', 'Midwifery', 'Medical-Surgical Nursing', 'Mental Health', 'Orthopaedics'],
    eligibility: '10+2 with Science (40% min)',
  },
  {
    id: 3, category: 'undergraduate',
    title: 'Post Basic B.Sc Nursing', duration: '2 Years', seats: 30,
    fee: '₹60,000/yr', badge: null,
    desc: 'Lateral entry B.Sc programme for registered GNM nurses seeking to upgrade their qualifications.',
    subjects: ['Advanced Nursing Practice', 'Research in Nursing', 'Nursing Management', 'Speciality Nursing'],
    eligibility: 'GNM with 2 years experience; INC registration',
  },
  {
    id: 4, category: 'postgraduate',
    title: 'M.Sc Nursing', duration: '2 Years', seats: 20,
    fee: '₹90,000/yr', badge: 'Research Track',
    desc: 'Advanced postgraduate specialisation in Medical-Surgical or Obstetric nursing with a research dissertation.',
    subjects: ['Advanced Pathophysiology', 'Nursing Education', 'Nursing Research & Statistics', 'Speciality Clinical Practicum'],
    eligibility: 'B.Sc Nursing with 60% marks; 1 year experience',
  },
  {
    id: 5, category: 'diploma',
    title: 'ANM Certificate', duration: '2 Years', seats: 30,
    fee: '₹35,000/yr', badge: null,
    desc: 'Auxiliary Nurse-Midwife training for community healthcare roles, especially in rural and primary health settings.',
    subjects: ['Health Promotion', 'Maternal & Child Health', 'Family Planning', 'Community Nursing'],
    eligibility: '10th pass; Female candidates only',
  },
]

const categories = ['all', 'undergraduate', 'postgraduate', 'diploma']

export default function Courses() {
  const [filter, setFilter] = useState('all')
  const [expanded, setExpanded] = useState(null)

  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter)

  return (
    <div className="courses-page">
      <div className="page-header">
        <div className="page-header-bg" />
        <div className="container page-header-inner">
          <span className="section-tag">Programmes</span>
          <h1>Our Courses</h1>
          <p>INC-approved nursing programmes across undergraduate, postgraduate, and diploma levels.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${filter === c ? 'active' : ''}`}
                onClick={() => setFilter(c)}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>

          <div className="courses-list">
            {filtered.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-card-header">
                  <div>
                    {course.badge && <span className="course-badge">{course.badge}</span>}
                    <h3>{course.title}</h3>
                    <p className="course-desc">{course.desc}</p>
                  </div>
                  <div className="course-meta">
                    <div className="meta-item"><strong>{course.duration}</strong><span>Duration</span></div>
                    <div className="meta-item"><strong>{course.seats}</strong><span>Seats</span></div>
                    <div className="meta-item"><strong>{course.fee}</strong><span>Fee</span></div>
                  </div>
                </div>

                <div className="course-card-footer">
                  <button
                    className="toggle-btn"
                    onClick={() => setExpanded(expanded === course.id ? null : course.id)}
                  >
                    {expanded === course.id ? '▲ Less info' : '▼ More info'}
                  </button>
                  <Button as={Link} to="/apply" size="sm" variant="primary">Apply →</Button>
                </div>

                {expanded === course.id && (
                  <div className="course-expanded">
                    <div className="expanded-col">
                      <h5>Key Subjects</h5>
                      <ul>{course.subjects.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                    <div className="expanded-col">
                      <h5>Eligibility</h5>
                      <p>{course.eligibility}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
