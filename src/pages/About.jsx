import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+",   label: "Years of Excellence",  icon: "🏆" },
  { value: "1200+", label: "Students Trained",      icon: "👩‍🎓" },
  { value: "100%",  label: "Placement Support",     icon: "💼" },
  { value: "20+",   label: "Awards & Recognition",  icon: "🥇" },
];

const values = [
  { icon: "📚", bg: "bg-blue-50",   color: "text-blue-600",  title: "Quality Education",    desc: "We provide a strong academic foundation with practical exposure that prepares students for real-world healthcare challenges." },
  { icon: "🤝", bg: "bg-green-50",  color: "text-green-600", title: "Experienced Faculty",  desc: "Learn from highly qualified, dedicated faculty members with decades of clinical and teaching experience." },
  { icon: "💼", bg: "bg-amber-50",  color: "text-amber-600", title: "Practical Training",   desc: "Hands-on training in well-equipped labs and leading hospitals gives students real clinical confidence." },
  { icon: "⭐", bg: "bg-purple-50", color: "text-purple-600",title: "Holistic Development", desc: "We focus on overall personality development, leadership skills and emotional intelligence of every student." },
];

const faculty = [
  { name: "Dr. Sunita Patil",    role: "Principal",           qual: "Ph.D. in Nursing",                  exp: "25+ Years Experience", avatar: "SP" },
  { name: "Mrs. Neha Sharma",    role: "Vice Principal",      qual: "M.Sc. Nursing",                     exp: "20+ Years Experience", avatar: "NS" },
  { name: "Dr. Rajesh Kumar",    role: "Professor",           qual: "Ph.D. in Medical Surgical Nursing", exp: "18+ Years Experience", avatar: "RK" },
  { name: "Mrs. Priya Deshmukh", role: "Professor",           qual: "M.Sc. Community Health Nursing",    exp: "16+ Years Experience", avatar: "PD" },
  { name: "Mrs. Kavita More",    role: "Associate Professor", qual: "M.Sc. Obstetrics & Gynaecology",    exp: "14+ Years Experience", avatar: "KM" },
  { name: "Mr. Amit Yadav",      role: "Assistant Professor", qual: "M.Sc. Mental Health Nursing",       exp: "10+ Years Experience", avatar: "AY" },
];

export default function About() {
  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-green-400"/>About Us<span className="w-6 h-px bg-green-400"/>
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-4">
            Nurturing Compassion,<br/>
            <span className="text-[#4ade80]">Inspiring Excellence</span>
          </h1>
          <p className="text-blue-200/70 text-sm max-w-xl mx-auto">
            Shaping competent, compassionate and confident nurses who make a difference in healthcare and society.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-blue-300/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* ── About Content ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>Who We Are
            </p>
            <h2 className="text-[#0a2342] text-3xl sm:text-4xl font-black leading-tight mb-5">
              Dedicated to Shaping<br/>
              <span className="text-[#1a4b8c]">Future Healthcare Heroes</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Swami Vivekanand Nursing College is dedicated to shaping competent, compassionate and confident nurses who can make a difference in the healthcare industry and society. We provide quality education, modern infrastructure and holistic development to empower our students for a successful and meaningful career.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Established with a vision to provide world-class nursing education, our institution has grown to become one of the most respected nursing colleges in Maharashtra. We are approved by INC, New Delhi and affiliated to Maharashtra University of Health Sciences (MUHS), Nashik.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className={`${v.bg} rounded-2xl p-4`}>
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <p className={`font-bold text-sm ${v.color} mb-1`}>{v.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80"
                alt="Nursing classroom"
                className="w-full h-[480px] object-cover"
              />
            </div>
            {/* Floating dots decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="inline-block w-1.5 h-1.5 bg-[#1a4b8c] rounded-full m-1.5"/>
              ))}
            </div>
            {/* Mission card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#16a34a] rounded-2xl p-5 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">❤️</div>
                <div>
                  <p className="text-white font-bold text-sm mb-1">Our Mission</p>
                  <p className="text-green-100 text-xs leading-relaxed">To deliver quality nursing education and healthcare services with compassion, integrity and excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-4 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] rounded-3xl px-8 py-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-4xl font-black text-white mb-1">{s.value}</div>
                <div className="text-blue-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>Our Foundation<span className="w-6 h-px bg-[#16a34a]"/>
            </p>
            <h2 className="text-[#0a2342] text-3xl font-black">Vision, Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔭", title: "Our Vision", color: "border-blue-500", bg: "bg-blue-50", text: "To be a premier nursing institution recognized for academic excellence, clinical competence and compassionate care — producing nurses who lead and inspire the healthcare community." },
              { icon: "🎯", title: "Our Mission", color: "border-green-500", bg: "bg-green-50", text: "To deliver quality nursing education and healthcare services with compassion, integrity and excellence by providing a strong academic foundation, clinical training and holistic development." },
              { icon: "💎", title: "Our Values", color: "border-purple-500", bg: "bg-purple-50", text: "Compassion, Integrity, Excellence, Teamwork, Innovation and Respect for human dignity guide every decision we make and every student we nurture in our institution." },
            ].map((item) => (
              <div key={item.title} className={`${item.bg} border-t-4 ${item.color} rounded-2xl p-7 shadow-sm`}>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[#0a2342] font-black text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Faculty ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#16a34a]"/>Our Faculty<span className="w-6 h-px bg-[#16a34a]"/>
          </p>
          <h2 className="text-[#0a2342] text-3xl font-black">Meet Our Expert Team</h2>
          <p className="text-gray-500 mt-2 text-sm">Experienced mentors dedicated to shaping compassionate and competent nurses.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {faculty.map((f) => (
            <div key={f.name} className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a4b8c] to-[#16a34a] rounded-full flex items-center justify-center text-white font-black text-lg mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                {f.avatar}
              </div>
              <p className="text-[#0a2342] font-bold text-xs leading-tight">{f.name}</p>
              <p className="text-[#16a34a] text-[10px] font-semibold mt-0.5">{f.role}</p>
              <p className="text-gray-400 text-[10px] mt-1 leading-snug">{f.qual}</p>
              <p className="text-blue-500 text-[10px] font-medium mt-1">{f.exp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-white text-3xl font-black mb-3">Ready to Join Our Family?</h2>
          <p className="text-blue-200/70 text-sm mb-7 max-w-md mx-auto">Take the first step towards a rewarding career in nursing. Admissions for 2026 are open now.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm">
              Apply Now →
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 text-sm border border-white/20">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}