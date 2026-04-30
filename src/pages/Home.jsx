import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─── Animated Counter ─────────────────────────── */
function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Data ──────────────────────────────────────── */
const features = [
  { emoji: "🎓", bg: "bg-blue-50",   title: "Quality Education",  desc: "Industry-oriented curriculum designed for academic and clinical excellence." },
  { emoji: "🏥", bg: "bg-green-50",  title: "Clinical Exposure",  desc: "Hands-on training in top hospitals, labs and healthcare institutions." },
  { emoji: "👩‍⚕️", bg: "bg-amber-50", title: "Expert Faculty",    desc: "Learn from experienced, highly qualified and caring professionals." },
  { emoji: "🌟", bg: "bg-purple-50", title: "Bright Future",      desc: "Strong placement support and global career guidance for every student." },
];

const stats = [
  { value: 15,   suffix: "+", label: "Years of Excellence",  icon: "🏆" },
  { value: 1200, suffix: "+", label: "Students Trained",     icon: "👩‍🎓" },
  { value: 100,  suffix: "%", label: "Placement Support",    icon: "💼" },
  { value: 20,   suffix: "+", label: "Awards & Recognition", icon: "🥇" },
];

const courses = [
  { icon: "🩺", title: "B.Sc. Nursing",    duration: "4 Years",  desc: "Comprehensive undergraduate program with clinical skills training.", path: "/courses" },
  { icon: "📋", title: "P.B. B.Sc. Nursing", duration: "2 Years", desc: "Post-basic bachelor's for diploma holders to advance their career.", path: "/courses" },
  { icon: "🔬", title: "M.Sc. Nursing",    duration: "2 Years",  desc: "Postgraduate program developing leadership and research skills.", path: "/courses" },
  { icon: "👩‍⚕️", title: "G.N.M. Nursing", duration: "3 Years",  desc: "Diploma focused on essential nursing care and clinical expertise.", path: "/courses" },
];

const testimonials = [
  { name: "Priya Deshmukh", batch: "B.Sc. Nursing 2023", text: "The clinical training and faculty support here transformed my career. I got placed in a top hospital within a month of graduating!", avatar: "P" },
  { name: "Sunita Jadhav",  batch: "G.N.M. 2022",        text: "World-class infrastructure and experienced teachers. This college gave me confidence to serve patients with compassion.", avatar: "S" },
  { name: "Anjali Patil",   batch: "M.Sc. Nursing 2024", text: "The research opportunities and expert guidance helped me secure a prestigious government job. Forever grateful!", avatar: "A" },
];

const HERO_IMAGE = "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1400&q=80";

/* ─── Component ─────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-gray-50 font-sans overflow-x-hidden">

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative min-h-screen flex items-center pt-20 pb-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e3d]/90 via-[#0a1e3d]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e3d]/60 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div className="text-white">
            <p className="inline-flex items-center gap-2 text-[#4ade80] text-xs font-bold tracking-[0.25em] uppercase mb-4 animate-pulse">
              <span className="w-6 h-px bg-[#4ade80]" />
              Compassion · Care · Commitment
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6">
              Empowering Future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ade80] to-[#22d3ee]">
                Nurses
              </span>
              <br />with Excellence
            </h1>

            <p className="text-white/75 text-lg leading-relaxed max-w-lg mb-8">
              Join one of Maharashtra's leading nursing institutions dedicated to quality education, clinical exposure and compassionate healthcare.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-[#1a4b8c] hover:bg-[#1259b8] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-blue-900/40"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Explore Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-green-900/40"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Apply Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>

            {/* Mini stats row */}
            <div className="flex gap-8">
              {[["15+", "Years"], ["1200+", "Students"], ["100%", "Placement"]].map(([val, label]) => (
                <div key={label}>
                  <div className="text-2xl font-black text-white">{val}</div>
                  <div className="text-white/55 text-xs font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Admissions Card */}
          <div className="hidden lg:block">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3 shadow-md">
                  🎓
                </div>
                <span className="inline-block bg-gradient-to-r from-[#1a4b8c] to-[#0a2342] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-3">
                  2026 Admissions Open
                </span>
                <h3 className="text-[#0a2342] text-2xl font-black leading-tight">
                  Admissions Open 2026
                </h3>
                <p className="text-gray-400 text-xs mt-1">Limited seats — apply early to secure your spot</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-1 mb-5">
                {[
                  { icon: "👨‍🏫", bg: "bg-blue-100",  label: "Experienced Faculty" },
                  { icon: "🏛️",  bg: "bg-green-100", label: "Modern Infrastructure" },
                  { icon: "💼",  bg: "bg-amber-100", label: "100% Placement Support" },
                ].map((item, i, arr) => (
                  <div key={item.label}>
                    <div className="flex items-center gap-3 px-3 py-3">
                      <div className={`w-9 h-9 ${item.bg} rounded-full flex items-center justify-center text-base flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <span className="text-[#0a2342] text-sm font-semibold">{item.label}</span>
                      <svg className="w-4 h-4 text-green-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    {i < arr.length - 1 && <div className="h-px bg-gray-200 mx-3"/>}
                  </div>
                ))}
              </div>

              <Link
                to="/apply"
                className="flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#1a4b8c] to-[#1259b8] hover:from-[#1259b8] hover:to-[#1a4b8c] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-200"
              >
                Enquire Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <p className="text-center text-gray-400 text-xs mt-3">📞 Free counselling · No obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURE CARDS ══════════════════ */}
      <div className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {f.emoji}
              </div>
              <p className="text-[#0a2342] font-bold text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] rounded-3xl px-8 py-12 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-4xl font-black text-white mb-1">
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-blue-200 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT SNIPPET ══════════════════ */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>About Us
            </p>
            <h2 className="text-[#0a2342] text-3xl sm:text-4xl font-black leading-tight mb-5">
              Nurturing Compassion,<br/>
              <span className="text-[#1a4b8c]">Inspiring Excellence</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Swami Vivekanand Nursing College is dedicated to shaping competent, compassionate and confident nurses who can make a difference in the healthcare industry and society. We provide quality education, modern infrastructure and holistic development to empower our students for a successful and meaningful career.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "📚", label: "Quality Education",      desc: "Strong academic foundation with practical exposure." },
                { icon: "🤝", label: "Experienced Faculty",    desc: "Highly qualified and dedicated teaching members." },
                { icon: "💼", label: "Practical Training",     desc: "Hands-on training in well-equipped labs and hospitals." },
                { icon: "⭐", label: "Holistic Development",   desc: "Overall personality development and leadership skills." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#1a4b8c] font-bold text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#1a4b8c] hover:bg-[#1259b8] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80"
                alt="Nursing classroom"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Mission badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#16a34a] rounded-2xl p-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">❤️</div>
                <div>
                  <p className="text-white font-bold text-sm">Our Mission</p>
                  <p className="text-green-100 text-xs leading-relaxed">To deliver quality nursing education and healthcare services with compassion, integrity and excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ COURSES ══════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>Our Courses<span className="w-6 h-px bg-[#16a34a]"/>
            </p>
            <h2 className="text-[#0a2342] text-3xl sm:text-4xl font-black">Courses We Offer</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Programs designed to provide in-depth knowledge, practical skills and clinical exposure for a successful nursing career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => (
              <div
                key={c.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  {c.icon}
                </div>
                <h3 className="text-[#1a4b8c] font-black text-lg mb-2">{c.title}</h3>
                <span className="inline-flex items-center gap-1 text-gray-500 text-xs font-semibold mb-3">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {c.duration}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed mb-5">{c.desc}</p>
                <Link
                  to={c.path}
                  className="inline-flex items-center gap-1 border-2 border-[#1a4b8c] text-[#1a4b8c] hover:bg-[#1a4b8c] hover:text-white font-semibold text-xs px-4 py-2 rounded-xl transition-all duration-200"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#16a34a]"/>Student Stories<span className="w-6 h-px bg-[#16a34a]"/>
          </p>
          <h2 className="text-[#0a2342] text-3xl sm:text-4xl font-black">What Our Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-[#16a34a] text-2xl mb-4">"</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#1a4b8c] to-[#16a34a] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#0a2342] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.batch}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="relative bg-gradient-to-br from-[#0a2342] via-[#1a4b8c] to-[#16a34a] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-white rounded-full"/>
            <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-white rounded-full"/>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
            <div>
              <p className="text-green-300 text-xs font-bold tracking-widest uppercase mb-2">Admissions Open 2026</p>
              <h2 className="text-white text-3xl sm:text-4xl font-black leading-tight mb-3">
                Start Your Journey Towards<br/>
                <span className="text-[#4ade80]">a Brighter Future</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                Join Swami Vivekanand Nursing College and take the first step towards a rewarding career in healthcare.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 min-w-[200px]">
                <p className="text-white font-bold text-base mb-3">Apply Now</p>
                {["Admissions Open", "Limited Seats", "Enroll Today"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/80 text-xs mb-2">
                    <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {item}
                  </div>
                ))}
                <Link
                  to="/apply"
                  className="mt-4 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                >
                  Enquire Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}