import React, { useState } from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "bsc",
    icon: "🩺",
    title: "B.Sc. Nursing",
    duration: "4 Years",
    seats: "60 Seats",
    eligibility: "10+2 with PCB, Min 45%",
    color: "border-blue-500",
    bg: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    desc: "An undergraduate program that prepares students with comprehensive knowledge and clinical skills in nursing.",
    highlights: [
      "Comprehensive nursing theory and practice",
      "Clinical training in affiliated hospitals",
      "Community health nursing exposure",
      "Research methodology & evidence-based practice",
      "Leadership and management skills",
    ],
    subjects: ["Anatomy & Physiology", "Microbiology", "Medical-Surgical Nursing", "Obstetric Nursing", "Community Health", "Pediatric Nursing", "Mental Health Nursing", "Nursing Research"],
  },
  {
    id: "pbbsc",
    icon: "📋",
    title: "P.B. B.Sc. Nursing",
    duration: "2 Years",
    seats: "30 Seats",
    eligibility: "GNM with 1 Year Experience",
    color: "border-green-500",
    bg: "bg-green-50",
    badge: "bg-green-100 text-green-700",
    desc: "A post-basic bachelor's program for diploma holders to upgrade their knowledge and advance their career.",
    highlights: [
      "Designed specifically for GNM diploma holders",
      "Advanced clinical nursing practice",
      "Nursing education & administration",
      "Research and evidence-based care",
      "Enhanced career advancement opportunities",
    ],
    subjects: ["Nursing Education", "Nursing Administration", "Advanced Nursing Practice", "Community Health", "Nursing Research", "Clinical Specializations"],
  },
  {
    id: "msc",
    icon: "🔬",
    title: "M.Sc. Nursing",
    duration: "2 Years",
    seats: "20 Seats",
    eligibility: "B.Sc. Nursing with 1 Year Experience",
    color: "border-purple-500",
    bg: "bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
    desc: "A postgraduate program that develops advanced knowledge, leadership and research skills.",
    highlights: [
      "Advanced specialization in nursing",
      "Clinical leadership and management",
      "Nursing research and evidence-based practice",
      "Teaching and educational methodologies",
      "Global career opportunities",
    ],
    subjects: ["Advanced Nursing Practice", "Nursing Research", "Biostatistics", "Nursing Education", "Clinical Specialization", "Thesis & Dissertation"],
  },
  {
    id: "gnm",
    icon: "👩‍⚕️",
    title: "G.N.M. Nursing",
    duration: "3 Years",
    seats: "40 Seats",
    eligibility: "10+2 with PCB, Min 40%",
    color: "border-amber-500",
    bg: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
    desc: "A diploma program focused on providing essential nursing care and clinical expertise.",
    highlights: [
      "Core nursing skills and patient care",
      "Hospital and community clinical training",
      "Practical hands-on approach",
      "Affordable and career-focused program",
      "Strong job market demand",
    ],
    subjects: ["Basic Nursing", "Anatomy & Physiology", "Medical-Surgical Nursing", "Midwifery", "Pediatric Nursing", "Community Health Nursing"],
  },
];

const bottomFeatures = [
  { icon: "🏥", title: "Recognized & Affiliated",     desc: "Approved by INC, New Delhi and affiliated to MUHS, Nashik." },
  { icon: "📚", title: "Expert Faculty",               desc: "Learn from experienced and dedicated teaching professionals." },
  { icon: "🩺", title: "Clinical Exposure",            desc: "Hands-on training in top hospitals and healthcare institutions." },
  { icon: "📈", title: "Bright Career Opportunities",  desc: "100% placement support and global career opportunities." },
];

export default function Courses() {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-green-400"/>Our Courses
              </p>
              <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight mb-4">
                Courses <span className="text-[#4ade80]">We Offer</span>
              </h1>
              <p className="text-blue-200/70 leading-relaxed text-sm max-w-lg">
                Our programs are designed to provide in-depth knowledge, practical skills and clinical exposure to build a strong foundation for a successful nursing career.
              </p>
              <div className="flex items-center gap-2 mt-5 text-xs text-blue-300/60">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-white">Courses</span>
              </div>
            </div>
            <div className="hidden lg:block rounded-3xl overflow-hidden shadow-2xl h-64">
              <img
                src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=700&q=80"
                alt="Nursing students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Cards ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#0a2342] text-3xl font-black">Our Nursing Programs</h2>
          <p className="text-gray-500 text-sm mt-2">Click on any course to see detailed information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {courses.map((c) => (
            <div key={c.id} className={`bg-white rounded-2xl shadow-md border-t-4 ${c.color} overflow-hidden transition-all duration-300 hover:shadow-xl`}>
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 ${c.bg} rounded-2xl flex items-center justify-center text-3xl`}>
                    {c.icon}
                  </div>
                  <div className="text-right">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${c.badge} mb-1`}>
                      ⏱ {c.duration}
                    </span>
                    <br/>
                    <span className="text-gray-400 text-xs">{c.seats}</span>
                  </div>
                </div>

                <h3 className="text-[#0a2342] text-xl font-black mb-1">{c.title}</h3>
                <p className="text-gray-500 text-xs mb-1">
                  <span className="font-semibold text-gray-600">Eligibility:</span> {c.eligibility}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mt-3 mb-4">{c.desc}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-gray-600">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Toggle subjects */}
                <button
                  onClick={() => setActive(active === c.id ? null : c.id)}
                  className="text-[#1a4b8c] font-semibold text-xs flex items-center gap-1 hover:text-blue-700 transition-colors mb-4"
                >
                  {active === c.id ? "▲ Hide Subjects" : "▼ View Subjects"}
                </button>

                {active === c.id && (
                  <div className={`${c.bg} rounded-xl p-4 mb-4 grid grid-cols-2 gap-2`}>
                    {c.subjects.map((s) => (
                      <span key={s} className="text-[10px] font-medium text-gray-700 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0"/>
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <Link
                  to="/apply"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1a4b8c] to-[#1259b8] text-white font-bold text-sm py-3 rounded-xl hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  Apply for {c.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom Features ── */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {bottomFeatures.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-3">{f.icon}</div>
              <p className="text-[#1a4b8c] font-bold text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-white text-3xl font-black mb-3">Ready to Begin Your Nursing Journey?</h2>
          <p className="text-blue-200/70 text-sm mb-7 max-w-md mx-auto">Admissions for 2026 are open. Limited seats available — secure yours today!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm">
              Apply Now →
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 text-sm border border-white/20">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}