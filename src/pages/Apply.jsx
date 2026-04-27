import { useState } from 'react'
import api from '../services/api'
import Button from '../components/Button'
import './Apply.css'

const STEPS = ['Personal Info', 'Academic Details', 'Course Selection', 'Review & Submit']

const initialForm = {
  firstName: '', lastName: '', dob: '', gender: '', phone: '', email: '',
  address: '', city: '', state: '', pincode: '',
  tenthPercent: '', twelfthPercent: '', twelfthStream: '', neetScore: '',
  course: '', hostelRequired: '', scholarshipRequired: '',
  declaration: false,
}

export default function Apply() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const next = () => setStep(s => Math.min(s + 1, 3))
  const prev = () => setStep(s => Math.max(s - 1, 0))

  const submit = async () => {
    setLoading(true)
    try {
      await api.post('/applications', form)
      setSubmitted(true)
    } catch {
      alert('Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return (
    <div className="apply-success">
      <div className="success-box">
        <div className="success-icon">🎉</div>
        <h2>Application Submitted!</h2>
        <p>Thank you, <strong>{form.firstName}</strong>. Your application has been received. Our admissions team will contact you at <strong>{form.email}</strong> within 3 working days.</p>
        <p className="ref">Reference ID: <strong>NC-{Date.now().toString().slice(-6)}</strong></p>
      </div>
    </div>
  )

  return (
    <div className="apply-page">
      <div className="page-header">
        <div className="page-header-bg" />
        <div className="container page-header-inner">
          <span className="section-tag">Admissions 2025–26</span>
          <h1>Apply Online</h1>
          <p>Complete the form below to submit your application. Takes 5–10 minutes.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="apply-layout">
            {/* Stepper */}
            <div className="stepper">
              {STEPS.map((s, i) => (
                <div key={s} className={`step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                  <div className="step-num">{i < step ? '✓' : i + 1}</div>
                  <span>{s}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="apply-form-box">
              <h3 className="step-title">{STEPS[step]}</h3>

              {step === 0 && (
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group"><label>First Name</label><input name="firstName" value={form.firstName} onChange={handle} placeholder="First name" required /></div>
                    <div className="form-group"><label>Last Name</label><input name="lastName" value={form.lastName} onChange={handle} placeholder="Last name" required /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Date of Birth</label><input type="date" name="dob" value={form.dob} onChange={handle} required /></div>
                    <div className="form-group"><label>Gender</label>
                      <select name="gender" value={form.gender} onChange={handle}>
                        <option value="">Select</option>
                        <option>Female</option><option>Male</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>Phone</label><input name="phone" value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX" required /></div>
                    <div className="form-group"><label>Email</label><input type="email" name="email" value={form.email} onChange={handle} placeholder="you@example.com" required /></div>
                  </div>
                  <div className="form-group"><label>Address</label><input name="address" value={form.address} onChange={handle} placeholder="Street address" /></div>
                  <div className="form-row">
                    <div className="form-group"><label>City</label><input name="city" value={form.city} onChange={handle} placeholder="City" /></div>
                    <div className="form-group"><label>State</label><input name="state" value={form.state} onChange={handle} placeholder="State" /></div>
                    <div className="form-group"><label>Pincode</label><input name="pincode" value={form.pincode} onChange={handle} placeholder="560001" /></div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="form-section">
                  <div className="form-row">
                    <div className="form-group"><label>10th % / CGPA</label><input name="tenthPercent" value={form.tenthPercent} onChange={handle} placeholder="e.g. 85%" /></div>
                    <div className="form-group"><label>12th % / Marks</label><input name="twelfthPercent" value={form.twelfthPercent} onChange={handle} placeholder="e.g. 78%" /></div>
                  </div>
                  <div className="form-row">
                    <div className="form-group"><label>12th Stream</label>
                      <select name="twelfthStream" value={form.twelfthStream} onChange={handle}>
                        <option value="">Select</option>
                        <option>Science (PCB)</option><option>Science (PCM)</option><option>Commerce</option><option>Arts</option>
                      </select>
                    </div>
                    <div className="form-group"><label>NEET Score (if applicable)</label><input name="neetScore" value={form.neetScore} onChange={handle} placeholder="e.g. 350" /></div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-section">
                  <div className="form-group">
                    <label>Choose Programme</label>
                    <select name="course" value={form.course} onChange={handle} required>
                      <option value="">Select a programme</option>
                      <option>B.Sc Nursing</option>
                      <option>GNM Diploma</option>
                      <option>Post Basic B.Sc Nursing</option>
                      <option>M.Sc Nursing</option>
                      <option>ANM Certificate</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Hostel Required?</label>
                    <select name="hostelRequired" value={form.hostelRequired} onChange={handle}>
                      <option value="">Select</option>
                      <option>Yes</option><option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Scholarship Required?</label>
                    <select name="scholarshipRequired" value={form.scholarshipRequired} onChange={handle}>
                      <option value="">Select</option>
                      <option>Yes</option><option>No</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="review-section">
                  <div className="review-group">
                    <h5>Personal Information</h5>
                    <div className="review-grid">
                      <div><span>Name</span><strong>{form.firstName} {form.lastName}</strong></div>
                      <div><span>Email</span><strong>{form.email}</strong></div>
                      <div><span>Phone</span><strong>{form.phone}</strong></div>
                      <div><span>DOB</span><strong>{form.dob}</strong></div>
                    </div>
                  </div>
                  <div className="review-group">
                    <h5>Academic & Course</h5>
                    <div className="review-grid">
                      <div><span>10th %</span><strong>{form.tenthPercent}</strong></div>
                      <div><span>12th %</span><strong>{form.twelfthPercent}</strong></div>
                      <div><span>Programme</span><strong>{form.course}</strong></div>
                      <div><span>Hostel</span><strong>{form.hostelRequired}</strong></div>
                    </div>
                  </div>
                  <div className="declaration-check">
                    <input type="checkbox" name="declaration" id="declaration" checked={form.declaration} onChange={handle} />
                    <label htmlFor="declaration">I declare that all information provided is true and correct to the best of my knowledge.</label>
                  </div>
                </div>
              )}

              <div className="form-nav">
                {step > 0 && <Button variant="secondary" size="md" onClick={prev}>← Previous</Button>}
                {step < 3 && <Button variant="primary" size="md" onClick={next}>Next →</Button>}
                {step === 3 && (
                  <Button variant="gold" size="md" onClick={submit} disabled={!form.declaration || loading}>
                    {loading ? 'Submitting...' : 'Submit Application ✓'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
