import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "100%", label: "Placement Rate",       icon: "💼" },
  { value: "500+", label: "Students Placed",       icon: "👩‍⚕️" },
  { value: "50+",  label: "Hospital Partners",     icon: "🏥" },
  { value: "5+",   label: "Countries Placed In",   icon: "🌍" },
];

const hospitals = [
  "Apollo Hospitals", "Fortis Healthcare", "Manipal Hospitals", "Narayana Health",
  "Aster DM Healthcare", "Ruby Hall Clinic", "Sahyadri Hospitals", "Jupiter Hospital",
  "KEM Hospital", "Sassoon General Hospital", "Government Medical College", "AIIMS",
];

const testimonials = [
  { name: "Priya Deshmukh",  batch: "B.Sc. Nursing 2023", placed: "Apollo Hospitals, Pune",     text: "The placement cell helped me get placed in Apollo within 3 weeks of graduation. The mock interviews and resume workshops were incredibly helpful!", avatar: "P", salary: "₹28,000/month" },
  { name: "Sunita Jadhav",   batch: "G.N.M. 2022",        placed: "Ruby Hall Clinic, Pune",     text: "I never imagined I'd get placed in such a reputed hospital. The college's network and training made all the difference in my career.", avatar: "S", salary: "₹22,000/month" },
  { name: "Anjali Patil",    batch: "M.Sc. Nursing 2024", placed: "Government Hospital, Nashik", text: "With M.Sc. from here, I cleared the government nursing officer exam on the first attempt. The research training was exceptional!", avatar: "A", salary: "₹35,000/month" },
  { name: "Kavya More",      batch: "P.B. B.Sc. 2023",    placed: "Manipal Hospitals, Bangalore", text: "Relocated to Bangalore with a great package thanks to the placement support. The college truly cares about every student's career.", avatar: "K", salary: "₹30,000/month" },
];

const process = [
  { step: "01", title: "Resume Building",         desc: "Expert guidance on crafting professional nursing resumes and portfolios that stand out to top hospital HR teams." },
  { step: "02", title: "Interview Preparation",   desc: "Mock interviews, group discussions and personality development sessions conducted by industry professionals." },
  { step: "03", title: "Hospital Tie-ups",        desc: "Direct connections with 50+ top hospitals and healthcare institutions across Maharashtra and India." },
  { step: "04", title: "Job Placement Drive",     desc: "Dedicated campus placement drives with top recruiters visiting our college every year for direct hiring." },
];

export default function Placement() {
  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-green-400"/>Placement<span className="w-6 h-px bg-green-400"/>
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-3">
            100% <span className="text-[#4ade80]">Placement</span> Support
          </h1>
          <p className="text-blue-200/70 text-sm max-w-lg mx-auto">
            We are committed to ensuring every graduate gets placed in a reputed healthcare institution with a rewarding career.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-blue-300/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Placement</span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-4xl font-black text-[#1a4b8c] mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-4 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>Our Process<span className="w-6 h-px bg-[#16a34a]"/>
            </p>
            <h2 className="text-[#0a2342] text-3xl font-black">How We Support Your Career</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-dashed border-t-2 border-dashed border-gray-200 z-0" style={{width: "calc(100% - 3rem)", left: "calc(50% + 1.5rem)"}}/>
                )}
                <div className="bg-gray-50 rounded-2xl p-6 text-center relative z-10 hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1a4b8c] to-[#16a34a] rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-[#0a2342] font-black text-base mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hospital Partners ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#16a34a]"/>Our Partners<span className="w-6 h-px bg-[#16a34a]"/>
          </p>
          <h2 className="text-[#0a2342] text-3xl font-black">Our Recruiting Partners</h2>
          <p className="text-gray-500 text-sm mt-2">50+ hospitals and healthcare institutions trust our graduates.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {hospitals.map((h) => (
            <div
              key={h}
              className="bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100 flex items-center justify-center hover:border-[#1a4b8c] hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center text-base flex-shrink-0">🏥</div>
                <span className="text-[#0a2342] font-semibold text-xs group-hover:text-[#1a4b8c] transition-colors duration-200 leading-tight">{h}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-4 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>Success Stories<span className="w-6 h-px bg-[#16a34a]"/>
            </p>
            <h2 className="text-[#0a2342] text-3xl font-black">Our Placed Students</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#16a34a] text-3xl mb-3">"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1a4b8c] to-[#16a34a] rounded-full flex items-center justify-center text-white font-black flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#0a2342] font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.batch}</p>
                    <p className="text-[#1a4b8c] text-xs font-semibold mt-0.5">📍 {t.placed}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 font-black text-sm">{t.salary}</p>
                    <p className="text-gray-400 text-[10px]">Starting Salary</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-white text-3xl font-black mb-3">Start Your Success Story</h2>
          <p className="text-blue-200/70 text-sm mb-7 max-w-md mx-auto">Join us and benefit from our 100% placement support. Your dream nursing career is just one step away.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm">
              Apply Now →
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 text-sm border border-white/20">
              Talk to Counsellor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}