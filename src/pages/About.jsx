import './About.css'

const milestones = [
  { year: '1990', event: 'Founded as Nursing Training Centre under Karnataka Trust' },
  { year: '1998', event: 'Upgraded to full College status; RGUHS affiliation granted' },
  { year: '2005', event: 'Launched B.Sc Nursing programme; New campus inaugurated' },
  { year: '2012', event: 'Opened state-of-the-art simulation lab and skill centre' },
  { year: '2018', event: 'Introduced M.Sc Nursing; 1,000th graduate milestone' },
  { year: '2023', event: 'MoU signed with NHS UK for international placement pipeline' },
]

const team = [
  { name: 'Dr. Kavitha Menon', role: 'Principal', exp: '28 years' },
  { name: 'Prof. Suresh Rao', role: 'HOD – Medical-Surgical', exp: '22 years' },
  { name: 'Prof. Deepa Thomas', role: 'HOD – Obstetrics', exp: '19 years' },
  { name: 'Prof. Arun Kumar', role: 'Clinical Coordinator', exp: '15 years' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-bg" />
        <div className="container page-header-inner">
          <span className="section-tag">Our Story</span>
          <h1>About NurseCore College</h1>
          <p>Three decades of shaping nursing excellence in Karnataka and beyond.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container mv-grid">
          <div className="mv-card mission">
            <div className="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To provide high-quality, evidence-based nursing education that produces competent, compassionate, and ethically grounded healthcare professionals.</p>
          </div>
          <div className="mv-card vision">
            <div className="mv-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>To be recognised as South India's leading nursing institution, producing nurses who lead healthcare transformation nationally and globally.</p>
          </div>
          <div className="mv-card values">
            <div className="mv-icon">💛</div>
            <h3>Our Values</h3>
            <p>Compassion · Integrity · Excellence · Innovation · Community — these five pillars guide every student we shape.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'4rem'}}>
            <span className="section-tag">History</span>
            <h2 className="section-title">Our Journey</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'3rem'}}>
            <span className="section-tag">Our People</span>
            <h2 className="section-title">Meet the Faculty</h2>
          </div>
          <div className="team-grid">
            {team.map(t => (
              <div key={t.name} className="team-card">
                <div className="team-avatar">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                <h4>{t.name}</h4>
                <span className="team-role">{t.role}</span>
                <span className="team-exp">{t.exp} experience</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
