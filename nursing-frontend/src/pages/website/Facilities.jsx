import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════
   THEME — Sky Blue + Deep Amber/Gold
══════════════════════════════════════ */
const C = {
  /* Sky Blue palette */
  sky50:  "#f0f9ff",
  sky100: "#e0f2fe",
  sky200: "#bae6fd",
  sky300: "#7dd3fc",
  sky400: "#38bdf8",
  sky500: "#0ea5e9",
  sky600: "#0284c7",
  sky700: "#0369a1",
  sky800: "#075985",
  sky900: "#0c4a6e",

  /* Amber/Gold accent */
  amber100: "#fef3c7",
  amber200: "#fde68a",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  amber700: "#b45309",

  /* Neutrals */
  white:   "#ffffff",
  slate50: "#f8fafc",
  slate100:"#f1f5f9",
  slate200:"#e2e8f0",
  slate300:"#cbd5e1",
  slate400:"#94a3b8",
  slate500:"#64748b",
  slate600:"#475569",
  slate700:"#334155",
  slate800:"#1e293b",
  slate900:"#0f172a",

  /* Semantic */
  bg:      "#f8fafc",
  text:    "#0f172a",
  textSub: "#334155",
  muted:   "#64748b",
  border:  "#e0f2fe",
  borderM: "#bae6fd",

  /* Gradients */
  gradSky:     "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
  gradGold:    "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
  gradHero:    "linear-gradient(160deg, #f0f9ff 0%, #e0f2fe 40%, #fff7ed 100%)",
  gradSection: "linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)",
  gradCard:    "linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)",
};

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const facilities = [
  {
    icon: "🔬",
    tag: "Practical Training",
    title: "Nursing Simulation Labs",
    subtitle: "Practice before you perform",
    desc: "State-of-the-art nursing simulation labs equipped with life-size anatomical models, IV trainers, catheter manikins, and full resuscitation setups. Students build clinical confidence in a safe environment before entering hospital wards.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
    stat: { value: "15+", label: "Stations" },
    points: [
      "Life-size clinical manikins for full-body simulation",
      "IV drip & injection practice stations",
      "Wound dressing & catheterization kits",
      "Supervised by experienced nursing faculty",
    ],
    accent: C.gradSky,
    accentLight: C.sky100,
    accentText: C.sky700,
  },
  {
    icon: "🖥️",
    tag: "Technology",
    title: "Modern Computer Lab",
    subtitle: "Digital-first nursing education",
    desc: "Air-conditioned computer lab with 50+ high-performance workstations. Students access medical databases, e-learning platforms, clinical simulation software, and the digital health tools shaping 21st-century nursing.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=700&q=80",
    stat: { value: "50+", label: "Systems" },
    points: [
      "50+ high-performance workstations",
      "High-speed internet & Wi-Fi campus coverage",
      "Medical e-library & peer-reviewed journal access",
      "Dedicated IT support staff available daily",
    ],
    accent: C.gradGold,
    accentLight: C.amber100,
    accentText: C.amber700,
  },
  {
    icon: "📚",
    tag: "Knowledge Hub",
    title: "Digital Library",
    subtitle: "5,000+ volumes at your fingertips",
    desc: "A vast collection of nursing, medical, and allied health textbooks, journals, and digital resources. Our library supports deep academic research and continuous self-directed learning with both physical and digital access.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80",
    stat: { value: "5K+", label: "Books" },
    points: [
      "5,000+ books, references & medical volumes",
      "Online journal & research paper subscriptions",
      "Quiet reading zones & collaborative study areas",
      "Digital catalogued resource portal & search",
    ],
    accent: C.gradSky,
    accentLight: C.sky100,
    accentText: C.sky700,
  },
  {
    icon: "🛏️",
    tag: "Residential Living",
    title: "Comfortable Girls Hostel",
    subtitle: "A safe home away from home",
    desc: "Safe, clean, and well-maintained hostel exclusively for girl students. Designed with comfort and security in mind — nutritious meals, round-the-clock surveillance, and a warm, supportive residential community.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=700&q=80",
    stat: { value: "24/7", label: "Security" },
    points: [
      "Spacious furnished rooms with study desk & storage",
      "24/7 CCTV surveillance & gated security",
      "Hygienic in-house kitchen with nutritious meals",
      "Common room, recreation areas & laundry facility",
    ],
    accent: C.gradGold,
    accentLight: C.amber100,
    accentText: C.amber700,
  },
  {
    icon: "🏫",
    tag: "Smart Learning",
    title: "Interactive Smart Classrooms",
    subtitle: "Where lessons come alive",
    desc: "HD projectors, digital interactive boards, and audio-visual systems transform every lecture. Real-time digital note sharing and video recording ensure no student falls behind.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80",
    stat: { value: "60+", label: "Seats" },
    points: [
      "HD projectors & interactive digital whiteboards",
      "Ergonomic seating for 60+ students per class",
      "Real-time digital note sharing platform",
      "Video lecture recording & replay facility",
    ],
    accent: C.gradSky,
    accentLight: C.sky100,
    accentText: C.sky700,
  },
  {
    icon: "🏥",
    tag: "Clinical Exposure",
    title: "Clinical Training & Hospital Tie-ups",
    subtitle: "Real-world experience from Day 1",
    desc: "Tie-ups with leading hospitals and healthcare centres give students hands-on clinical exposure. Supervised rotations across 10+ departments build the confidence and competence to excel in real healthcare settings.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=700&q=80",
    stat: { value: "10+", label: "Departments" },
    points: [
      "Affiliated with top district & government hospitals",
      "Supervised rotations across 10+ clinical departments",
      "Direct patient care under senior nursing staff",
      "Structured OPD case-study & ward exposure",
    ],
    accent: C.gradGold,
    accentLight: C.amber100,
    accentText: C.amber700,
  },
];

const amenities = [
  { icon: "🛡️", title: "24/7 Security",    desc: "Round-the-clock campus security & CCTV ensuring every student stays safe." },
  { icon: "📶", title: "Wi-Fi Campus",      desc: "High-speed Wi-Fi blanketing every corner of the campus for seamless learning." },
  { icon: "🏥", title: "Health Center",     desc: "On-campus health center staffed with qualified medical professionals for immediate care." },
  { icon: "🚌", title: "Student Transport", desc: "Safe, punctual, and reliable bus services available across the city every day." },
  { icon: "🎤", title: "Seminar Hall",      desc: "Spacious air-conditioned halls for seminars, workshops, and cultural events." },
  { icon: "⚽", title: "Sports & Fitness",  desc: "Indoor and outdoor sports facilities for physical fitness and all-round well-being." },
];

const stats = [
  { value: "6",    suffix: "+", label: "Core Facilities",   icon: "🏛️" },
  { value: "500",  suffix: "+", label: "Students Enrolled", icon: "👩‍⚕️" },
  { value: "100",  suffix: "%", label: "Wi-Fi Coverage",    icon: "📶" },
  { value: "10",   suffix: "+", label: "Hospital Tie-ups",  icon: "🏥" },
];

/* ══════════════════════════════════════
   ANIMATED COUNTER
══════════════════════════════════════ */
function useCounter(target, suffix = "", duration = 1800) {
  const [val, setVal] = useState(0);
  const started = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        let cur = 0;
        const step = Math.ceil(target / (duration / 16));
        const iv = setInterval(() => {
          cur += step;
          if (cur >= target) { setVal(target); clearInterval(iv); }
          else setVal(cur);
        }, 16);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
}

/* ══════════════════════════════════════
   STAT CARD
══════════════════════════════════════ */
function StatCard({ s, delay }) {
  const { val, ref } = useCounter(parseInt(s.value), s.suffix);
  return (
    <div ref={ref} style={{
      background: C.white,
      borderRadius: "20px",
      border: `1px solid ${C.border}`,
      padding: "28px 24px",
      textAlign: "center",
      boxShadow: "0 2px 20px rgba(14,165,233,0.07)",
      animation: "slideUp 0.6s ease both",
      animationDelay: `${delay}s`,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-6px)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(14,165,233,0.14)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 2px 20px rgba(14,165,233,0.07)"; }}
    >
      <div style={{ fontSize: "28px", marginBottom: "10px" }}>{s.icon}</div>
      <p style={{ margin: 0, fontSize: "38px", fontWeight: 900, lineHeight: 1, fontFamily: "'Playfair Display', Georgia, serif", background: C.gradSky, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        {val}{s.suffix}
      </p>
      <p style={{ margin: "8px 0 0", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: C.muted }}>{s.label}</p>
    </div>
  );
}

/* ══════════════════════════════════════
   HERO — Dark Photo Collage Background
   (same style as Courses page hero)
══════════════════════════════════════ */

/* Facilities-related Unsplash photos for the collage */
const heroBgPhotos = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=60",   // nursing sim lab
  "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=400&q=60",   // computer lab
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=60",   // library
  "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=60",      // hostel/dorm
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=60",   // smart classroom
  "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&q=60",   // hospital clinical
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=60",      // nurse with patient
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=60",   // hospital corridor
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=60",      // medical lab
  "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=60",   // nursing care
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=60",   // stethoscope
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=60",   // hospital ward
];

function PhotoCollageBg() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* 4×3 photo grid */}
      <div style={{
        position: "absolute", inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "3px",
        opacity: 0.22,
        filter: "saturate(0.4) brightness(0.55)",
      }}>
        {heroBgPhotos.map((src, i) => (
          <div key={i} style={{ overflow: "hidden", position: "relative" }}>
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        ))}
      </div>

      {/* Dark blue-teal overlay — same as Courses hero */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(160deg, rgba(4,30,50,0.88) 0%, rgba(6,42,60,0.82) 30%, rgba(7,55,65,0.80) 60%, rgba(5,35,52,0.90) 100%)",
      }} />

      {/* Subtle teal glow at center */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(14,165,233,0.10) 0%, transparent 70%)",
      }} />

      {/* SVG circuit lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 3 }} viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M-100 900 Q400 200 900 400 Q1200 550 1600 100" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.13" fill="none" />
        <path d="M0 600 Q300 100 800 300 Q1100 450 1500 0" stroke="#38bdf8" strokeWidth="1" opacity="0.10" fill="none" />
        <line x1="0" y1="180" x2="340" y2="180" stroke="#0ea5e9" strokeWidth="1" opacity="0.14" />
        <line x1="0" y1="360" x2="280" y2="360" stroke="#0ea5e9" strokeWidth="1" opacity="0.10" />
        <line x1="120" y1="0" x2="120" y2="900" stroke="#0ea5e9" strokeWidth="1" opacity="0.07" />
        <circle cx="340" cy="180" r="4" fill="#0ea5e9" opacity="0.25" />
        <circle cx="280" cy="360" r="3" fill="#0ea5e9" opacity="0.20" />
        <circle cx="120" cy="540" r="5" fill="#38bdf8" opacity="0.18" />
        <circle cx="1200" cy="150" r="180" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.10" fill="none" />
        <circle cx="1200" cy="150" r="130" stroke="#0ea5e9" strokeWidth="1" opacity="0.08" fill="none" />
        <circle cx="1200" cy="150" r="80" stroke="#0ea5e9" strokeWidth="1" opacity="0.10" fill="none" />
        <polyline
          points="0,820 150,820 180,780 210,860 240,795 270,845 300,820 500,820 530,770 560,870 590,790 620,840 650,820 900,820 930,775 960,865 990,800 1020,840 1050,820 1300,820 1330,780 1360,860 1390,810 1440,820"
          stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.16" strokeLinecap="round" strokeLinejoin="round"
        />
        <rect x="1330" y="60" width="36" height="120" rx="10" fill="#0ea5e9" opacity="0.09" />
        <rect x="1290" y="100" width="116" height="36" rx="10" fill="#0ea5e9" opacity="0.09" />
        <path d="M1380 300 Q1400 370 1380 440 Q1360 510 1380 580" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="8 5" opacity="0.12" />
        <path d="M1410 300 Q1390 370 1410 440 Q1430 510 1410 580" stroke="#0ea5e9" strokeWidth="2" fill="none" strokeDasharray="8 5" opacity="0.12" />
      </svg>

      {/* Bottom fade to page bg */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to top, #f8fafc, transparent)",
      }} />
    </div>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "80px",
    }}>
      {/* Dark photo collage background */}
      <PhotoCollageBg />

      {/* Top 3px sky/teal accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px", zIndex: 30,
        background: "linear-gradient(to right, #38bdf8, #0ea5e9, #0369a1)",
      }} />

      {/* ── CONTENT ── */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1280px", width: "100%",
        margin: "0 auto", padding: "80px 40px",
        display: "grid",
        gridTemplateColumns: "1fr 480px",
        gap: "60px",
        alignItems: "center",
      }}>

        {/* LEFT — Text content */}
        <div>
          {/* Top label pill — like gallery reference */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "1px solid rgba(56,189,248,0.4)",
              borderRadius: "100px", padding: "7px 20px",
              background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)",
            }}>
              <span style={{ fontSize: "12px" }}>🏛️</span>
              <span style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>World-Class Facilities</span>
            </div>
          </div>

          {/* Breadcrumb — white on dark */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "28px" }}>
            <Link to="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "13px", fontWeight: 600, transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#7dd3fc"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
            >Home</Link>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>›</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 700 }}>Facilities</span>
          </div>

          {/* Eyebrow line */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ height: "3px", width: "40px", borderRadius: "2px", background: "linear-gradient(to right, #38bdf8, #0ea5e9)" }} />
            <span style={{ color: "#7dd3fc", fontSize: "11px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase" }}>Infrastructure & Campus</span>
            <div style={{ height: "3px", width: "20px", borderRadius: "2px", background: "rgba(56,189,248,0.4)" }} />
          </div>

          {/* Headline */}
          <div style={{ marginBottom: "24px" }}>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)",
              fontWeight: 900, lineHeight: 1.04,
              margin: "0 0 4px", color: "#ffffff",
            }}>
              The Best
            </h1>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)",
              fontWeight: 900, lineHeight: 1.04,
              margin: "0 0 8px",
              background: "linear-gradient(120deg, #38bdf8 0%, #7dd3fc 50%, #34d399 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}>
              Nursing College
            </h1>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: 700, lineHeight: 1.1,
              margin: 0, color: "rgba(255,255,255,0.75)",
            }}>
              in Latur, Maharashtra
            </h2>
          </div>

          {/* Description */}
          <p style={{
            fontSize: "16px", color: "rgba(255,255,255,0.60)",
            lineHeight: 1.85, maxWidth: "500px", marginBottom: "32px",
          }}>
            Our campus is designed for <strong style={{ color: "rgba(255,255,255,0.85)" }}>exceptional education, hands-on training,</strong> and holistic development — with every facility a future nursing professional needs.
          </p>

          {/* Feature pills — glassmorphism on dark */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
            {[
              { label: "🔬 Nursing Labs",     bg: "rgba(14,165,233,0.15)", border: "rgba(56,189,248,0.35)", color: "#7dd3fc" },
              { label: "🖥️ Computer Lab",    bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.30)", color: "#fcd34d" },
              { label: "📚 Digital Library",  bg: "rgba(14,165,233,0.15)", border: "rgba(56,189,248,0.35)", color: "#7dd3fc" },
              { label: "🛏️ Girls Hostel",    bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.30)", color: "#fcd34d" },
              { label: "🏫 Smart Classes",    bg: "rgba(14,165,233,0.15)", border: "rgba(56,189,248,0.35)", color: "#7dd3fc" },
              { label: "🏥 Clinical Training",bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.30)", color: "#fcd34d" },
            ].map(chip => (
              <span key={chip.label} style={{
                background: chip.bg, color: chip.color,
                fontSize: "12px", fontWeight: 700,
                padding: "7px 16px", borderRadius: "100px",
                border: `1.5px solid ${chip.border}`,
                backdropFilter: "blur(8px)",
              }}>{chip.label}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
            <Link to="/contact" style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
              color: "#ffffff",
              fontWeight: 800, padding: "16px 34px", borderRadius: "14px",
              textDecoration: "none", fontSize: "15px",
              boxShadow: "0 8px 28px rgba(14,165,233,0.38)",
              display: "inline-block", transition: "all 0.3s ease",
              fontFamily: "inherit",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(14,165,233,0.48)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(14,165,233,0.38)"; }}
            >Book Campus Tour →</Link>
            <Link to="/apply" style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
              color: "#ffffff",
              fontWeight: 800, padding: "16px 34px", borderRadius: "14px",
              textDecoration: "none", fontSize: "15px",
              boxShadow: "0 8px 24px rgba(245,158,11,0.35)",
              display: "inline-block", transition: "all 0.3s ease",
              fontFamily: "inherit",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
            >Apply Now ✦</Link>
          </div>

          {/* Trust bar */}
          <div style={{
            display: "flex", gap: "28px", paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.10)", flexWrap: "wrap",
          }}>
            {[
              { icon: "✦", text: "INC Affiliated" },
              { icon: "✦", text: "Govt. Recognized" },
              { icon: "✦", text: "Expert Faculty" },
              { icon: "⭐", text: "4.9 / 5.0 Rating" },
            ].map(b => (
              <span key={b.text} style={{ display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", fontWeight: 700, color: "#7dd3fc" }}>
                <span style={{ fontSize: "9px", color: "#fcd34d" }}>{b.icon}</span>{b.text}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — Glassmorphism program card (matching Courses page right-side card) */}
        <div style={{ position: "relative" }}>

          {/* Floating badge top-left */}
          <div style={{
            position: "absolute", top: "-20px", left: "-16px", zIndex: 20,
            background: "rgba(7,31,46,0.90)", backdropFilter: "blur(12px)",
            borderRadius: "16px", border: "1px solid rgba(56,189,248,0.30)",
            padding: "12px 18px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", gap: "10px",
            animation: "floatA 3s ease-in-out infinite",
          }}>
            <div style={{ width: "32px", height: "32px", background: "rgba(14,165,233,0.20)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🔬</div>
            <div>
              <p style={{ margin: 0, fontSize: "9px", color: "rgba(255,255,255,0.40)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Labs</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: 800, color: "#ffffff" }}>15+ Lab Stations</p>
            </div>
          </div>

          {/* Floating badge bottom-right */}
          <div style={{
            position: "absolute", bottom: "-16px", right: "-12px", zIndex: 20,
            background: "rgba(7,31,46,0.90)", backdropFilter: "blur(12px)",
            borderRadius: "16px", border: "1px solid rgba(56,189,248,0.30)",
            padding: "12px 18px", boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            display: "flex", alignItems: "center", gap: "10px",
            animation: "floatB 3.6s ease-in-out infinite 0.5s",
          }}>
            <div style={{ width: "32px", height: "32px", background: "rgba(251,191,36,0.20)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>🏥</div>
            <div>
              <p style={{ margin: 0, fontSize: "9px", color: "rgba(255,255,255,0.40)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Clinical</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: 800, color: "#ffffff" }}>10+ Hospital Tie-ups</p>
            </div>
          </div>

          {/* Main glass card */}
          <div style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
            borderRadius: "2.2rem",
            border: "1px solid rgba(255,255,255,0.14)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.40)",
            overflow: "hidden",
          }}>

            {/* Card banner */}
            <div style={{
              position: "relative", overflow: "hidden",
              padding: "28px",
              background: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 55%, #075985 100%)",
            }}>
              {/* Dot pattern overlay */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.045 }}>
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="fdots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fdots)" />
                </svg>
              </div>
              {/* Rings decoration */}
              <div style={{ position: "absolute", right: "16px", top: "16px", opacity: 0.09 }}>
                <svg width="90" height="90" viewBox="0 0 160 160" fill="none">
                  <circle cx="80" cy="80" r="74" stroke="white" strokeWidth="4" />
                  <circle cx="80" cy="80" r="54" stroke="white" strokeWidth="3" />
                  <circle cx="80" cy="80" r="34" stroke="white" strokeWidth="2.5" />
                  <circle cx="80" cy="80" r="14" fill="white" />
                </svg>
              </div>

              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px" }}>
                  <div style={{
                    width: "48px", height: "48px", borderRadius: "16px",
                    background: "rgba(255,255,255,0.20)", border: "1px solid rgba(255,255,255,0.30)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0,
                  }}>🏛️</div>
                  <div>
                    <span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#bae6fd", display: "block", marginBottom: "4px" }}>Campus Infrastructure</span>
                    <h2 style={{ margin: 0, color: "#ffffff", fontSize: "18px", fontWeight: 900, lineHeight: 1.25, fontFamily: "'Playfair Display', Georgia, serif" }}>
                      World-Class<br />Nursing Facilities
                    </h2>
                  </div>
                </div>

                {/* Info rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    ["Simulation Labs",    "15+ Stations",       "🔬"],
                    ["Computer Systems",   "50+ Workstations",   "🖥️"],
                    ["Library Volumes",    "5,000+ Books",       "📚"],
                    ["Hospital Tie-ups",   "10+ Departments",    "🏥"],
                  ].map(([label, value, icon]) => (
                    <div key={label} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      gap: "12px", borderBottom: "1px solid rgba(255,255,255,0.10)",
                      paddingBottom: "8px",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "12px" }}>{icon}</span>
                        <span style={{ color: "rgba(186,230,253,0.70)", fontSize: "12px" }}>{label}</span>
                      </div>
                      <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "12px" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stat tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", padding: "16px" }}>
              {[
                { val: "6+",   label: "Facilities",  color: "#38bdf8", bg: "rgba(14,165,233,0.15)", border: "rgba(56,189,248,0.25)" },
                { val: "500+", label: "Students",    color: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.25)" },
                { val: "24/7", label: "Support",     color: "#fcd34d", bg: "rgba(252,211,77,0.12)", border: "rgba(252,211,77,0.25)" },
              ].map(s => (
                <div key={s.label} style={{
                  background: s.bg, border: `1px solid ${s.border}`,
                  borderRadius: "16px", padding: "12px", textAlign: "center",
                }}>
                  <p style={{ margin: 0, fontSize: "20px", fontWeight: 900, color: s.color }}>{s.val}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "10px", color: "rgba(255,255,255,0.50)", fontWeight: 600 }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA inside card */}
            <div style={{ padding: "0 16px 16px" }}>
              <Link to="/contact" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                background: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
                color: "#ffffff", fontWeight: 800, fontSize: "14px",
                padding: "14px", borderRadius: "16px", textDecoration: "none",
                boxShadow: "0 8px 24px rgba(14,165,233,0.25)",
                transition: "all 0.3s ease", fontFamily: "inherit",
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                🏛️ Book a Campus Tour →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Info strip at bottom — same as Courses hero info strip */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: "1280px", width: "100%", margin: "0 auto",
        padding: "0 40px 40px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px",
      }}>
        {[
          { icon: "🔬", label: "Simulation Labs",   value: "15+ Stations",       accent: "#0ea5e9" },
          { icon: "📚", label: "Library",            value: "5,000+ Books",        accent: "#38bdf8" },
          { icon: "🛏️", label: "Girls Hostel",      value: "24/7 Secure",         accent: "#34d399" },
          { icon: "🏥", label: "Hospital Tie-ups",   value: "10+ Departments",     accent: "#fbbf24" },
        ].map(item => (
          <div key={item.label} style={{
            display: "flex", alignItems: "center", gap: "12px",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px", padding: "14px 16px",
            border: "1px solid rgba(255,255,255,0.12)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0, width: "4px",
              background: item.accent, borderRadius: "16px 0 0 16px",
            }} />
            <span style={{ fontSize: "18px", marginLeft: "8px" }}>{item.icon}</span>
            <div>
              <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.40)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</p>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: 800, color: "#ffffff" }}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   FACILITY CARD — unchanged
══════════════════════════════════════ */
function FacilityCard({ f, index }) {
  const [hov, setHov] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
      gap: "0",
      borderRadius: "28px",
      overflow: "hidden",
      border: `1px solid ${C.border}`,
      boxShadow: hov ? "0 24px 72px rgba(14,165,233,0.14)" : "0 4px 24px rgba(14,165,233,0.06)",
      transition: "box-shadow 0.4s ease",
      background: C.white,
      animation: "slideUp 0.7s ease both",
      animationDelay: `${index * 0.1}s`,
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Image side */}
      <div style={{ order: isEven ? 0 : 1, position: "relative", height: "420px", overflow: "hidden" }}>
        <img src={f.image} alt={f.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", transform: hov ? "scale(1.07)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: isEven ? "linear-gradient(to right, transparent 40%, rgba(248,250,252,0.95) 100%)" : "linear-gradient(to left, transparent 40%, rgba(248,250,252,0.95) 100%)" }} />

        <div style={{
          position: "absolute", top: "20px", [isEven ? "left" : "right"]: "20px",
          fontSize: "72px", fontWeight: 900, lineHeight: 1,
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "rgba(255,255,255,0.2)",
          WebkitTextStroke: "2px rgba(255,255,255,0.35)",
        }}>
          {String(index + 1).padStart(2, "0")}
        </div>

        <div style={{
          position: "absolute", bottom: "20px", [isEven ? "left" : "right"]: "20px",
          background: isEven ? C.gradSky : C.gradGold,
          color: C.white, fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em",
          textTransform: "uppercase", padding: "6px 16px", borderRadius: "100px",
          boxShadow: isEven ? "0 4px 16px rgba(14,165,233,0.4)" : "0 4px 16px rgba(245,158,11,0.4)",
        }}>{f.tag}</div>
      </div>

      {/* Content side */}
      <div style={{ order: isEven ? 1 : 0, padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div style={{
            width: "56px", height: "56px", borderRadius: "16px",
            background: f.accentLight, border: `1.5px solid ${isEven ? C.sky200 : C.amber200}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
          }}>{f.icon}</div>
          <div style={{
            background: f.accentLight, borderRadius: "12px", padding: "8px 16px",
            textAlign: "right", border: `1px solid ${isEven ? C.sky200 : C.amber200}`,
          }}>
            <p style={{ margin: 0, fontSize: "22px", fontWeight: 900, color: f.accentText, fontFamily: "'Playfair Display', Georgia, serif" }}>{f.stat.value}</p>
            <p style={{ margin: 0, fontSize: "10px", fontWeight: 700, color: f.accentText, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.8 }}>{f.stat.label}</p>
          </div>
        </div>

        <p style={{ margin: "0 0 6px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: f.accentText }}>{f.subtitle}</p>

        <h3 style={{
          margin: "0 0 16px",
          fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, lineHeight: 1.2,
          fontFamily: "'Playfair Display', Georgia, serif", color: C.slate900,
        }}>{f.title}</h3>

        <div style={{ height: "3px", width: "48px", background: isEven ? C.gradSky : C.gradGold, borderRadius: "2px", marginBottom: "16px" }} />

        <p style={{ margin: "0 0 24px", fontSize: "14px", color: C.muted, lineHeight: 1.8 }}>{f.desc}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {f.points.map((pt, pi) => (
            <div key={pi} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <div style={{
                width: "20px", height: "20px", borderRadius: "6px", flexShrink: 0, marginTop: "2px",
                background: isEven ? C.gradSky : C.gradGold,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "9px", color: C.white, fontWeight: 900 }}>✓</span>
              </div>
              <span style={{ fontSize: "13.5px", color: C.textSub, lineHeight: 1.65, fontWeight: 500 }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   AMENITY CARD — unchanged
══════════════════════════════════════ */
function AmenityCard({ e, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      background: hov ? C.sky50 : C.white,
      border: `1px solid ${hov ? C.sky300 : C.border}`,
      borderRadius: "20px", padding: "32px 24px",
      transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      transform: hov ? "translateY(-10px)" : "none",
      boxShadow: hov ? "0 20px 50px rgba(14,165,233,0.13)" : "0 2px 12px rgba(14,165,233,0.04)",
      cursor: "default",
      animation: "slideUp 0.6s ease both",
      animationDelay: `${index * 0.08}s`,
      position: "relative", overflow: "hidden",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{ position: "absolute", top: 0, left: "20px", right: "20px", height: "3px", background: hov ? C.gradSky : C.gradGold, borderRadius: "0 0 4px 4px", transition: "background 0.3s", opacity: hov ? 1 : 0.4 }} />

      <div style={{
        width: "56px", height: "56px", borderRadius: "16px", marginBottom: "16px",
        background: hov ? C.sky100 : C.slate100,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px",
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "rotate(-8deg) scale(1.12)" : "none",
        border: `1.5px solid ${hov ? C.sky200 : C.slate200}`,
      }}>{e.icon}</div>

      <p style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 800, color: hov ? C.sky800 : C.slate900, fontFamily: "'Playfair Display', Georgia, serif", transition: "color 0.3s" }}>{e.title}</p>
      <p style={{ margin: 0, fontSize: "13.5px", color: C.muted, lineHeight: 1.75 }}>{e.desc}</p>
    </div>
  );
}

/* ══════════════════════════════════════
   MAIN PAGE — unchanged except Hero
══════════════════════════════════════ */
export default function Facilities() {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif", color: C.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:wght@400;500;600;700;800&display=swap');
        @keyframes slideUp {
          from { opacity:0; transform:translateY(30px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes floatA {
          0%,100% { transform:translateY(0) rotate(-1deg); }
          50%     { transform:translateY(-10px) rotate(1deg); }
        }
        @keyframes floatB {
          0%,100% { transform:translateY(0) rotate(1deg); }
          50%     { transform:translateY(-12px) rotate(-1deg); }
        }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── HERO (replaced) ── */}
      <Hero />

      {/* ── STATS BAND — unchanged ── */}
      <section style={{ background: C.white, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "40px 40px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {stats.map((s, i) => <StatCard key={s.label} s={s} delay={i * 0.1} />)}
        </div>
      </section>

      {/* ── SECTION HEADER — unchanged ── */}
      <section style={{ padding: "100px 40px 60px", maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end", marginBottom: "72px" }}>
          <div>
            <p style={{ margin: "0 0 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.sky500 }}>
              ✦ Infrastructure ✦
            </p>
            <h2 style={{
              margin: 0, fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.1, color: C.slate900,
            }}>
              Our <span style={{ color: C.sky600, fontStyle: "italic" }}>6 Core</span><br />
              Facilities
            </h2>
          </div>
          <div>
            <div style={{ height: "3px", width: "60px", background: C.gradGold, borderRadius: "2px", marginBottom: "16px" }} />
            <p style={{ margin: 0, fontSize: "15px", color: C.muted, lineHeight: 1.85 }}>
              Everything you need for a complete, modern nursing education — thoughtfully designed and built to the highest standards. Each facility is staffed by experts committed to your success.
            </p>
          </div>
        </div>

        {/* ── FACILITY CARDS — unchanged ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {facilities.map((f, i) => <FacilityCard key={f.title} f={f} index={i} />)}
        </div>
      </section>

      {/* ── AMENITIES — unchanged ── */}
      <section style={{ padding: "80px 40px", background: `linear-gradient(180deg, ${C.sky50} 0%, ${C.white} 100%)`, borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ margin: "0 0 12px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: C.amber500 }}>✦ Amenities ✦</p>
            <h2 style={{ margin: "0 0 14px", fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: C.slate900 }}>
              Campus Life,{" "}
              <span style={{ background: C.gradSky, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Complete</span>
            </h2>
            <p style={{ margin: "0 auto", fontSize: "15px", color: C.muted, maxWidth: "480px", lineHeight: 1.75 }}>
              Supporting services that make campus life safe, comfortable, and enriching every single day.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "22px" }}>
            {amenities.map((e, i) => <AmenityCard key={e.title} e={e} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — unchanged ── */}
      <section style={{ padding: "60px 40px 100px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{
            borderRadius: "32px",
            background: "linear-gradient(145deg, #0369a1 0%, #0ea5e9 50%, #38bdf8 100%)",
            padding: "80px 60px",
            textAlign: "center",
            position: "relative", overflow: "hidden",
            boxShadow: "0 24px 80px rgba(14,165,233,0.32)",
          }}>
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(251,191,36,0.15)", pointerEvents: "none" }} />
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "52px", display: "block", marginBottom: "20px", animation: "floatA 3s ease-in-out infinite" }}>🎓</span>
              <h2 style={{
                color: C.white, fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.1,
              }}>
                Experience It{" "}
                <span style={{ color: C.amber300, fontStyle: "italic" }}>Yourself</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "16px", margin: "0 auto 36px", maxWidth: "440px", lineHeight: 1.8 }}>
                Visit our campus and see our world-class facilities firsthand. Book a free campus tour today and take the first step toward your bright future.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/contact" style={{
                  background: C.white, color: C.sky700,
                  fontWeight: 800, padding: "16px 36px", borderRadius: "14px",
                  textDecoration: "none", fontSize: "15px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
                  display: "inline-block", transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.15)"; }}
                >Book Campus Tour →</Link>
                <Link to="/apply" style={{
                  background: C.gradGold, color: C.white,
                  fontWeight: 800, padding: "16px 36px", borderRadius: "14px",
                  textDecoration: "none", fontSize: "15px",
                  boxShadow: "0 8px 24px rgba(245,158,11,0.4)",
                  display: "inline-block", transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
                >Apply Now ✦</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}