import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "../../components/ApplyModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/* ─── DATA ─────────────────────────────────────────────────────── */

const stats = [
  { value: "100%", label: "Placement Assistance", icon: "🎯", color: "#0F766E" },
  { value: "500+", label: "Students Placed", icon: "👩‍⚕️", color: "#2563EB" },
  { value: "50+",  label: "Hospital Tie-ups",  icon: "🏥", color: "#7C3AED" },
  { value: "5+",   label: "States Covered",    icon: "📍", color: "#DC2626" },
];

const placedStudents = [
  { name: "Priya Deshmukh",  course: "G.N.M. Nursing", hospital: "Apollo Hospitals, Pune",       image: "https://randomuser.me/api/portraits/women/44.jpg", package: "3.2 LPA" },
  { name: "Sunita Jadhav",   course: "G.N.M. Nursing", hospital: "Ruby Hall Clinic, Pune",       image: "https://randomuser.me/api/portraits/women/65.jpg", package: "2.8 LPA" },
  { name: "Anjali Patil",    course: "G.N.M. Nursing", hospital: "Sahyadri Hospital, Nashik",    image: "https://randomuser.me/api/portraits/women/68.jpg", package: "3.0 LPA" },
  { name: "Kavya More",      course: "G.N.M. Nursing", hospital: "Manipal Hospitals, Bangalore", image: "https://randomuser.me/api/portraits/women/72.jpg", package: "3.5 LPA" },
  { name: "Riya Sharma",     course: "B.Sc Nursing",   hospital: "Fortis Hospital, Mumbai",      image: "https://randomuser.me/api/portraits/women/55.jpg", package: "4.0 LPA" },
  { name: "Meera Kulkarni",  course: "B.Sc Nursing",   hospital: "Narayana Health, Bangalore",   image: "https://randomuser.me/api/portraits/women/31.jpg", package: "3.8 LPA" },
];

const testimonials = [
  {
    name: "Priya Deshmukh",
    hospital: "Apollo Hospitals, Pune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "The placement cell guided me every step of the way. From interview prep to resume building — they made sure I landed my dream job at Apollo. I'm forever grateful.",
    rating: 5,
    year: "2024",
  },
  {
    name: "Sunita Jadhav",
    hospital: "Ruby Hall Clinic, Pune",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote: "I never thought I'd be working at Ruby Hall so soon after graduation. The mock interviews and personality development sessions were life-changing.",
    rating: 5,
    year: "2023",
  },
  {
    name: "Kavya More",
    hospital: "Manipal Hospitals, Bangalore",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    quote: "Moving to Bangalore was a big step, but the college's placement network made it possible. The support was incredible — they treated us like family.",
    rating: 5,
    year: "2024",
  },
  {
    name: "Anjali Patil",
    hospital: "Sahyadri Hospital, Nashik",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote: "The clinical training alongside placement preparation gave me an edge. I walked into my interview confident and skilled. Truly thankful for this institution.",
    rating: 5,
    year: "2023",
  },
];

const recruiters = [
  { name: "Apollo Hospitals",    logo: "🏥", tier: "Premier" },
  { name: "Fortis Healthcare",   logo: "⚕️", tier: "Premier" },
  { name: "Ruby Hall Clinic",    logo: "🏨", tier: "Premier" },
  { name: "Manipal Hospitals",   logo: "🏣", tier: "Premier" },
  { name: "Sahyadri Hospitals",  logo: "🏪", tier: "Partner" },
  { name: "Narayana Health",     logo: "💊", tier: "Partner" },
  { name: "Wockhardt Hospitals", logo: "🩺", tier: "Partner" },
  { name: "AIIMS",               logo: "🔬", tier: "Premier" },
  { name: "Kokilaben Hospital",  logo: "🏦", tier: "Partner" },
  { name: "Hinduja Hospital",    logo: "🩻", tier: "Partner" },
  { name: "Jupiter Hospital",    logo: "💉", tier: "Partner" },
  { name: "Deloitte Health",     logo: "📊", tier: "MNC" },
];

const trainingPrograms = [
  {
    icon: "🎤",
    title: "Communication & Soft Skills",
    desc: "Structured sessions on patient communication, team collaboration, and bedside manner that hospitals look for in top nursing candidates.",
    badge: "12 Sessions",
    color: "#0F766E",
  },
  {
    icon: "📝",
    title: "Resume & LinkedIn Building",
    desc: "Expert-guided resume workshops tailored for healthcare roles. Create profiles that get noticed by hospital HR departments.",
    badge: "1-on-1 Support",
    color: "#2563EB",
  },
  {
    icon: "🎯",
    title: "Mock Interviews",
    desc: "Panel mock interviews simulating real hospital HR processes. Get detailed feedback from industry professionals to sharpen your confidence.",
    badge: "3 Rounds",
    color: "#7C3AED",
  },
  {
    icon: "🏥",
    title: "Hospital Orientation",
    desc: "Pre-placement hospital visits to understand ward culture, shift systems and professional expectations before your first day.",
    badge: "10+ Hospitals",
    color: "#DC2626",
  },
  {
    icon: "💻",
    title: "Digital Health Literacy",
    desc: "Training on hospital management software, EMR systems and digital patient records used across modern healthcare facilities.",
    badge: "Certified",
    color: "#D97706",
  },
  {
    icon: "🌐",
    title: "Career Counselling",
    desc: "One-on-one sessions with career advisors to map your nursing path — whether clinical, admin, community health or abroad opportunities.",
    badge: "Personalized",
    color: "#059669",
  },
];

const yearwisePlacements = [
  { year: "2020-21", pct: 72 },
  { year: "2021-22", pct: 80 },
  { year: "2022-23", pct: 85 },
  { year: "2023-24", pct: 91 },
  { year: "2024-25", pct: 97 },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function Placement() {
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial(p => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden" style={{ background: "#F7F9FC", fontFamily: "'Georgia', serif" }}>

      {/* ══════════════════════════════════════
          HERO — Dark Command-Center aesthetic
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-20" style={{ minHeight: "100vh", background: "linear-gradient(135deg, #020C10 0%, #041E24 40%, #062C30 70%, #0A3D47 100%)" }}>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(#1fae9622 1px, transparent 1px), linear-gradient(90deg, #1fae9622 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }} />

        {/* Glowing orbs */}
        <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0F766E, transparent 70%)" }} />
        <div className="absolute -bottom-20 -left-32 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />

        {/* Floating stat badges — decorative */}
        <div className="absolute top-32 right-10 hidden lg:flex flex-col gap-3" style={{ animation: "floatY 4s ease-in-out infinite" }}>
          {["100% Placed", "50+ Hospitals", "5 States"].map((t, i) => (
            <div key={i} className="px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md text-white border" style={{ background: "rgba(15,118,110,0.25)", borderColor: "#0F766E55", fontFamily: "sans-serif", animationDelay: `${i * 0.3}s` }}>
              ✦ {t}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 min-h-screen py-20">

          {/* LEFT — Text */}
          <div className="flex-1 text-center lg:text-left" style={{ animation: "slideRight 0.9s ease-out" }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "sans-serif", background: "rgba(31,174,150,0.12)", borderColor: "#1fae9640", color: "#5EDBC8" }}>
              <span className="w-2 h-2 rounded-full bg-[#1fae96] animate-pulse" />
              Placement Cell — Active 2024–25
            </div>

            <h1 className="font-black leading-[1.05] mb-6 text-white" style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}>
              Launch Your
              <br />
              <span style={{
                backgroundImage: "linear-gradient(90deg, #5EDBC8, #60A5FA, #5EDBC8)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "200%",
                animation: "shimmer 4s linear infinite",
              }}>
                Nursing Career
              </span>
              <br />
              <span className="text-white">With Confidence.</span>
            </h1>

            <p className="text-white/65 leading-7 max-w-lg mx-auto lg:mx-0 mb-8 text-sm sm:text-base" style={{ fontFamily: "sans-serif" }}>
              From day one to your first posting — our dedicated placement cell provides 100% support with interview training, hospital connections and career counselling across India.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start" style={{ fontFamily: "sans-serif" }}>
              <button
                onClick={() => setOpenApplyModal(true)}
                className="group relative px-8 py-3.5 rounded-full font-bold text-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-white"
                style={{ background: "linear-gradient(135deg, #0F766E, #2563EB)", boxShadow: "0 8px 32px #0F766E55" }}
              >
                <span className="relative z-10">Apply Now →</span>
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full font-bold text-sm border text-white/80 hover:text-white hover:border-[#5EDBC8] transition-all duration-300"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                Contact Placement Cell
              </Link>
            </div>

            {/* Mini trust bar */}
            <div className="mt-10 flex flex-wrap gap-6 items-center justify-center lg:justify-start" style={{ fontFamily: "sans-serif" }}>
              {["Apollo", "Fortis", "Manipal", "AIIMS"].map((h, i) => (
                <span key={i} className="text-white/35 text-xs font-semibold tracking-wider uppercase">{h}</span>
              ))}
              <span className="text-white/20 text-xs">+ 46 more</span>
            </div>
          </div>

          {/* RIGHT — Visual card stack */}
          <div className="flex-1 flex items-center justify-center relative w-full max-w-md">
            <div className="relative w-full aspect-square max-w-sm">

              {/* Main image */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl border border-white/10" style={{ animation: "floatY 5s ease-in-out infinite" }}>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                  alt="Nursing placement"
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.85)" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #020C10cc, transparent 50%)" }} />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-xs font-semibold" style={{ fontFamily: "sans-serif" }}>⭐ 4.9/5 Student Satisfaction</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl" style={{ animation: "floatY 4s ease-in-out infinite 0.5s" }}>
                <p className="text-[#0F766E] font-black text-3xl">97%</p>
                <p className="text-slate-500 text-xs" style={{ fontFamily: "sans-serif" }}>Placement Rate 2024</p>
              </div>

              {/* Floating badge card */}
              <div className="absolute -top-3 -right-4 bg-[#0F766E] rounded-2xl px-4 py-3 shadow-xl text-white" style={{ animation: "floatY 4.5s ease-in-out infinite 1s" }}>
                <p className="font-black text-xl">500+</p>
                <p className="text-white/75 text-xs" style={{ fontFamily: "sans-serif" }}>Students Placed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", height: "80px" }}>
            <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill="#F7F9FC" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS — Diagonal split cards
      ══════════════════════════════════════ */}
      <section ref={statsRef} className="relative -mt-2 z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-400 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Diagonal accent */}
                <div
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ background: s.color }}
                />
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: s.color }}
                />

                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="font-black text-3xl md:text-4xl" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="text-slate-500 text-xs mt-1 font-semibold uppercase tracking-widest" style={{ fontFamily: "sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLACEMENT CHART — Year-wise bar
      ══════════════════════════════════════ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0F766E] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>Track Record</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">Year-wise Placement %</h2>
            <p className="text-slate-400 text-sm mt-2" style={{ fontFamily: "sans-serif" }}>Consistent growth every academic year</p>
          </div>
          <div className="flex items-end justify-center gap-4 md:gap-8 h-56">
            {yearwisePlacements.map((y, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-[80px]">
                <span className="text-[#0F766E] font-black text-sm" style={{ fontFamily: "sans-serif" }}>{y.pct}%</span>
                <div
                  className="w-full rounded-t-xl relative overflow-hidden transition-all duration-700"
                  style={{
                    height: countersVisible ? `${(y.pct / 100) * 180}px` : "0px",
                    background: `linear-gradient(180deg, #0F766E, #2563EB)`,
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  <div className="absolute inset-0 opacity-30" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3), transparent)" }} />
                </div>
                <span className="text-slate-400 text-xs text-center" style={{ fontFamily: "sans-serif" }}>{y.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CAREER TRAINING PROGRAMS
      ══════════════════════════════════════ */}
      <section className="py-20 px-4" style={{ background: "#F7F9FC" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0F766E] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>Skill Development</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">Career Training Programs</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-xl mx-auto" style={{ fontFamily: "sans-serif" }}>
              Comprehensive preparation beyond academics — we train you for real hospital environments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 shadow-md hover:shadow-xl border border-slate-100 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden"
              >
                {/* Top colored bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: p.color }} />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: p.color + "18", border: `2px solid ${p.color}30` }}>
                  {p.icon}
                </div>

                {/* Badge */}
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3" style={{ background: p.color + "18", color: p.color, fontFamily: "sans-serif" }}>
                  {p.badge}
                </span>

                <h3 className="text-[#0F172A] font-black text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-6" style={{ fontFamily: "sans-serif" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLACED STUDENTS CAROUSEL
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0F766E] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">Our Placed Students</h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-10"
          >
            {placedStudents.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
                  {/* Image with gradient */}
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #020C10cc, transparent 40%)" }} />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: "#0F766Ecc", fontFamily: "sans-serif" }}>
                        {s.package}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-[#0F172A] text-lg">{s.name}</h3>
                    <p className="text-slate-400 text-xs mt-0.5" style={{ fontFamily: "sans-serif" }}>{s.course}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[#0F766E] text-lg">🏥</span>
                      <p className="text-[#0F766E] text-sm font-bold" style={{ fontFamily: "sans-serif" }}>{s.hospital}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS — Spotlight card
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #020C10, #041E24 40%, #062C30)" }}>

        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #0F766E, transparent 70%)" }} />
        <div className="absolute -right-20 top-1/3 w-60 h-60 rounded-full opacity-15" style={{ background: "radial-gradient(circle, #2563EB, transparent 70%)" }} />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#5EDBC8] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>What They Say</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Student Testimonials</h2>
          </div>

          {/* Main testimonial */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center transition-all duration-500">
              <div className="text-6xl text-[#0F766E]/40 font-black leading-none mb-4" style={{ fontFamily: "sans-serif" }}>"</div>
              <p className="text-white/90 text-base md:text-lg leading-8 italic mb-8" style={{ fontFamily: "sans-serif" }}>
                {testimonials[activeTestimonial].quote}
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0F766E]"
                />
                <div className="text-left">
                  <p className="text-white font-black">{testimonials[activeTestimonial].name}</p>
                  <p className="text-[#5EDBC8] text-xs" style={{ fontFamily: "sans-serif" }}>{testimonials[activeTestimonial].hospital}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? "28px" : "8px",
                    height: "8px",
                    background: i === activeTestimonial ? "#0F766E" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail row */}
          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((t, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)} className={`transition-all duration-300 ${i === activeTestimonial ? "scale-110" : "opacity-50 hover:opacity-75"}`}>
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2" style={{ borderColor: i === activeTestimonial ? "#0F766E" : "transparent" }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PAST RECRUITERS
      ══════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#0F766E] font-bold text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "sans-serif" }}>Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A]">Our Recruiting Partners</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto" style={{ fontFamily: "sans-serif" }}>
              50+ leading hospitals and healthcare organisations across India actively recruit from our placement cell.
            </p>
          </div>

          {/* Tier labels */}
          <div className="flex flex-wrap justify-center gap-3 mb-8" style={{ fontFamily: "sans-serif" }}>
            {["Premier", "Partner", "MNC"].map((tier, i) => {
              const colors = { Premier: "#0F766E", Partner: "#2563EB", MNC: "#7C3AED" };
              return (
                <div key={i} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: colors[tier] + "15", color: colors[tier] }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors[tier] }} />
                  {tier}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {recruiters.map((r, i) => {
              const tierColors = { Premier: "#0F766E", Partner: "#2563EB", MNC: "#7C3AED" };
              const c = tierColors[r.tier];
              return (
                <div
                  key={i}
                  className="group relative bg-white border border-slate-100 rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: c }} />
                  <div className="text-3xl mb-3">{r.logo}</div>
                  <p className="text-[#0F172A] font-black text-sm">{r.name}</p>
                  <span className="inline-block text-xs font-bold mt-1 px-2 py-0.5 rounded-full" style={{ background: c + "15", color: c, fontFamily: "sans-serif" }}>{r.tier}</span>
                </div>
              );
            })}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8" style={{ fontFamily: "sans-serif" }}>+ 38 more hospitals across Maharashtra, Karnataka, Tamil Nadu & beyond</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA — Final
      ══════════════════════════════════════ */}
      <section className="px-4 py-20" style={{ background: "#F7F9FC" }}>
        <div
          className="max-w-5xl mx-auto rounded-[32px] p-10 md:p-16 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #062C30, #0F766E 50%, #2563EB)" }}
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-[#CCFBF1] font-bold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: "sans-serif" }}>Begin Your Journey</p>
            <h2 className="text-white font-black text-3xl md:text-4xl mb-4">Start Your Nursing Career Today</h2>
            <p className="text-white/75 text-sm md:text-base max-w-xl mx-auto mb-8 leading-7" style={{ fontFamily: "sans-serif" }}>
              Our placement team is ready to guide you from admission to your first hospital posting. Don't wait — your nursing career starts here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center" style={{ fontFamily: "sans-serif" }}>
              <button
                onClick={() => setOpenApplyModal(true)}
                className="bg-white text-[#0F766E] font-bold px-8 py-3.5 rounded-full hover:bg-[#CCFBF1] transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Apply Now →
              </button>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white font-bold px-8 py-3.5 rounded-full hover:border-white/70 transition-all duration-300"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ApplyModal open={openApplyModal} onClose={() => setOpenApplyModal(false)} />

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}
