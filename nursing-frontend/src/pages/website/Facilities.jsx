import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════
   Theme — Green + Blue mix
══════════════════════════════════════ */
const C = {
  bg:       "#ffffff",
  bgHero:   "linear-gradient(135deg,#eafaf1 0%,#e8f4fd 60%,#eafaf1 100%)",
  bgAmen:   "linear-gradient(135deg,#f6fff9,#eff8ff)",
  bgCta:    "linear-gradient(135deg,#eafaf1,#e8f4fd)",
  green:    "#1a9b4e",
  greenD:   "#147a3c",
  greenL:   "#d4edda",
  greenB:   "#78c49a",
  blue:     "#1565c0",
  blueD:    "#0d47a1",
  blueL:    "#cce5f6",
  grad:     "linear-gradient(135deg,#1a9b4e,#1565c0)",
  gradText: "linear-gradient(90deg,#1a9b4e,#1565c0)",
  gradBadge:"linear-gradient(90deg,#d4edda,#cce5f6)",
  gradIcon: "linear-gradient(135deg,#d4edda,#cce5f6)",
  text:     "#0d1f13",
  sub:      "#2e7d52",
  muted:    "#4a6572",
  faint:    "#607d8b",
  border:   "#b8dfc8",
  borderH:  "#78c49a",
  white:    "#ffffff",
};

/* ── Updated facilities with new items ── */
const facilities = [
  {
    icon:"🔬",
    title:"Nursing Labs",
    desc:"State-of-the-art nursing simulation labs equipped with anatomical models, IV trainers, catheter manikins, and full resuscitation setups. Students practice clinical skills in a safe, realistic environment before entering hospital wards.",
    image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    tag:"Practical Training",
    points:[
      "Life-size clinical manikins for simulation",
      "IV drip & injection practice stations",
      "Wound dressing & catheterization kits",
      "Monitored by expert nursing faculty",
    ],
  },
  {
    icon:"🖥️",
    title:"Computer Lab",
    desc:"Modern, air-conditioned computer lab with the latest hardware and software. Students access medical databases, e-learning platforms, and digital health tools essential for 21st-century nursing practice.",
    image:"https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=600&q=80",
    tag:"Technology",
    points:[
      "50+ high-performance workstations",
      "High-speed internet & Wi-Fi access",
      "Medical e-library & journal subscriptions",
      "Dedicated IT support staff",
    ],
  },
  {
    icon:"📚",
    title:"Digital Library",
    desc:"A vast collection of nursing, medical, and allied health textbooks, journals, and digital resources. Our library supports in-depth academic research and continuous self-directed learning.",
    image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    tag:"Knowledge",
    points:[
      "5,000+ books & reference volumes",
      "Online journal & research paper access",
      "Quiet reading & group study zones",
      "Catalogued digital resource portal",
    ],
  },
  {
    icon:"🛏️",
    title:"Comfortable Hostel",
    desc:"Safe, clean, and well-maintained hostel exclusively for girl students. Designed to feel like home with nutritious meals, round-the-clock security, and a supportive residential community.",
    image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    tag:"Residential Living",
    points:[
      "Spacious furnished rooms with study desk",
      "24/7 security with CCTV surveillance",
      "Hygienic in-house kitchen & meals",
      "Common room, recreation & laundry",
    ],
  },
  {
    icon:"🏫",
    title:"Smart Classrooms",
    desc:"Interactive smart classrooms equipped with projectors, digital boards, and audio-visual systems. Lessons come alive with multimedia content, enabling deeper understanding of complex nursing concepts.",
    image:"https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    tag:"Smart Learning",
    points:[
      "HD projectors & interactive whiteboards",
      "Ergonomic seating for 60+ students",
      "Real-time digital note sharing",
      "Video lecture recording facility",
    ],
  },
  {
    icon:"🏥",
    title:"Clinical Training Support",
    desc:"Tie-ups with leading hospitals and healthcare centres ensure students receive hands-on clinical exposure. Supervised rotations across departments give students the confidence to excel in real-world healthcare settings.",
    image:"https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
    tag:"Clinical Exposure",
    points:[
      "Affiliated with top district hospitals",
      "Supervised rotations in 10+ departments",
      "Patient care under senior nursing staff",
      "Structured case-study & OPD exposure",
    ],
  },
];

const extras = [
  { icon:"🛡️", title:"24/7 Security",  desc:"Round-the-clock campus security ensuring every student stays safe and protected at all times." },
  { icon:"📶", title:"Wi-Fi Campus",   desc:"High-speed Wi-Fi covering every corner of the campus for seamless connectivity."                },
  { icon:"🏥", title:"Health Care",    desc:"On-campus health center staffed with qualified medical professionals for immediate support."     },
  { icon:"🚌", title:"Transport",      desc:"Safe, punctual and reliable transportation services available for all students across the city." },
  { icon:"🎤", title:"Seminar Hall",   desc:"Spacious, air-conditioned halls for seminars, workshops, cultural events and conferences."       },
  { icon:"⚽", title:"Sports & Fitness", desc:"Indoor and outdoor sports facilities for physical fitness and overall well-being of every student." },
];

const stats = [
  { value:"6+",   label:"Key Facilities"  },
  { value:"500+", label:"Students Enrolled" },
  { value:"24/7", label:"Campus Security" },
  { value:"100%", label:"Wi-Fi Coverage"  },
];

/* ── Counter hook ── */
function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const num = parseInt(target.replace(/\D/g, ""));
    if (!num) { setCount(target); return; }
    let cur = 0;
    const step = Math.ceil(num / (duration / 16));
    const iv = setInterval(() => {
      cur += step;
      if (cur >= num) { setCount(target); clearInterval(iv); }
      else setCount(cur + target.replace(/[0-9]/g, ""));
    }, 16);
    return () => clearInterval(iv);
  }, [target]);
  return count;
}

/* ══════════════════════════════════════
   NEW Professional Hero Visual
   — Split layout with illustrated grid
══════════════════════════════════════ */
function HeroVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTick(t => t + 1), 60);
    return () => clearInterval(iv);
  }, []);

  const t = tick * 0.018;
  const facilityIcons = [
    { icon:"🔬", label:"Nursing Labs" },
    { icon:"🖥️", label:"Computer Lab" },
    { icon:"📚", label:"Library" },
    { icon:"🛏️", label:"Hostel" },
    { icon:"🏫", label:"Smart Classes" },
    { icon:"🏥", label:"Clinical" },
  ];

  const pulse = 1 + Math.sin(t * 2.4) * 0.05;

  return (
    <div style={{ position:"relative", width:"380px", height:"420px", flexShrink:0 }}>
      {/* Background radial glow */}
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 40%, rgba(26,155,78,0.12) 0%, transparent 70%)", borderRadius:"24px", pointerEvents:"none" }} />

      {/* Central emblem */}
      <div style={{
        position:"absolute", left:"50%", top:"42%", transform:`translate(-50%,-50%) scale(${pulse})`,
        width:"110px", height:"110px", borderRadius:"50%",
        background:"linear-gradient(135deg,#eafaf1,#e8f4fd)",
        border:"3px solid rgba(26,155,78,0.25)",
        display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
        boxShadow:"0 8px 32px rgba(26,155,78,0.15), inset 0 2px 8px rgba(255,255,255,0.8)",
        transition:"transform 0.05s linear",
        zIndex:2,
      }}>
        <span style={{ fontSize:"34px", lineHeight:1 }}>✚</span>
        <span style={{ fontSize:"9px", fontWeight:800, color:C.green, letterSpacing:"0.1em", marginTop:"4px", textTransform:"uppercase" }}>Nursing</span>
      </div>

      {/* Orbital facility cards */}
      {facilityIcons.map((f, i) => {
        const angle = (i / 6) * Math.PI * 2 - Math.PI / 2 + t * 0.4;
        const rx = 148, ry = 130;
        const x = 190 + Math.cos(angle) * rx;
        const y = 176 + Math.sin(angle) * ry;
        const isTop = y < 176;
        return (
          <div key={f.label} style={{
            position:"absolute",
            left:`${x}px`, top:`${y}px`,
            transform:"translate(-50%,-50%)",
            display:"flex", flexDirection:"column", alignItems:"center", gap:"4px",
            zIndex:3,
          }}>
            {/* Connector line */}
            <svg style={{ position:"absolute", zIndex:1, pointerEvents:"none" }} width="200" height="200" viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg">
            </svg>
            {/* Node */}
            <div style={{
              width:"58px", height:"58px", borderRadius:"16px",
              background:"rgba(255,255,255,0.95)",
              border:"1.5px solid rgba(26,155,78,0.3)",
              boxShadow:"0 4px 16px rgba(26,155,78,0.1)",
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
              gap:"3px",
              backdropFilter:"blur(6px)",
            }}>
              <span style={{ fontSize:"20px", lineHeight:1 }}>{f.icon}</span>
              <span style={{ fontSize:"7.5px", fontWeight:700, color:C.green, textAlign:"center", lineHeight:1.2, padding:"0 3px" }}>{f.label}</span>
            </div>
          </div>
        );
      })}

      {/* Floating badge — top left */}
      <div style={{
        position:"absolute", top:"16px", left:"8px",
        background:"rgba(255,255,255,0.96)", borderRadius:"12px",
        border:"1.5px solid rgba(26,155,78,0.25)",
        padding:"8px 14px",
        boxShadow:"0 4px 18px rgba(26,155,78,0.1)",
        animation:"floatY 3.2s ease-in-out infinite",
        zIndex:4,
      }}>
        <p style={{ margin:0, fontSize:"11px", fontWeight:800, color:C.text }}>⭐ 4.9 / 5.0</p>
        <p style={{ margin:0, fontSize:"9px", color:C.faint }}>Student Rating</p>
      </div>

      {/* Floating badge — bottom right */}
      <div style={{
        position:"absolute", bottom:"24px", right:"0px",
        background:"rgba(255,255,255,0.96)", borderRadius:"12px",
        border:"1.5px solid rgba(21,101,192,0.25)",
        padding:"8px 14px",
        boxShadow:"0 4px 18px rgba(21,101,192,0.09)",
        animation:"floatY 3.8s ease-in-out infinite 1.2s",
        zIndex:4,
      }}>
        <p style={{ margin:0, fontSize:"11px", fontWeight:800, color:C.text }}>👩‍⚕️ 500+ Students</p>
        <p style={{ margin:0, fontSize:"9px", color:C.faint }}>Enrolled & Growing</p>
      </div>

      {/* Dashed orbit ring */}
      <svg style={{ position:"absolute", left:"50%", top:"42%", transform:"translate(-50%,-50%)", pointerEvents:"none", zIndex:1 }}
        width="310" height="274" viewBox="0 0 310 274">
        <ellipse cx="155" cy="137" rx="148" ry="130"
          fill="none" stroke="rgba(26,155,78,0.15)" strokeWidth="1.5" strokeDasharray="6 5" />
      </svg>
    </div>
  );
}

/* ── Stat Item ── */
function StatItem({ value, label }) {
  const count = useCounter(value);
  return (
    <div style={{ textAlign:"center" }}>
      <p style={{ margin:0, fontSize:"32px", fontWeight:900, background:C.gradText, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontFamily:"'Georgia',serif" }}>{count}</p>
      <p style={{ margin:"4px 0 0", fontSize:"11px", color:C.faint, fontWeight:600, letterSpacing:"0.13em", textTransform:"uppercase" }}>{label}</p>
    </div>
  );
}

/* ── Icon Box ── */
function IconBox({ icon, size = 36 }) {
  return (
    <div style={{ width:`${size}px`, height:`${size}px`, background:C.gradIcon, borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:`${Math.round(size * 0.48)}px`, border:`1px solid ${C.borderH}`, flexShrink:0 }}>
      {icon}
    </div>
  );
}

/* ── Amenity Card ── */
function AmenityCard({ e, index }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "rgba(26,155,78,0.04)" : C.white,
        border:`1.5px solid ${hov ? C.borderH : C.border}`,
        borderRadius:"20px", padding:"34px 22px", textAlign:"center",
        cursor:"default",
        transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        transform: hov ? "translateY(-10px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hov ? "0 18px 44px rgba(26,155,78,0.11)" : "0 2px 10px rgba(0,0,0,0.04)",
        animation:"fadeUp 0.5s ease both",
        animationDelay:`${index * 0.07}s`,
      }}
    >
      <div style={{ width:"62px", height:"62px", margin:"0 auto 16px", background:C.gradIcon, border:`2px solid ${C.borderH}`, borderRadius:"18px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px", transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)", transform:hov ? "rotate(-8deg) scale(1.16)" : "none" }}>
        {e.icon}
      </div>
      <p style={{ margin:"0 0 7px", fontSize:"15px", fontWeight:800, color: hov ? C.green : C.text, fontFamily:"'Georgia',serif", transition:"color 0.3s" }}>{e.title}</p>
      <p style={{ margin:0, fontSize:"13px", color:C.muted, lineHeight:1.7 }}>{e.desc}</p>
    </div>
  );
}

/* ══════════════════════════════════════
   FLOWING FACILITY SECTION
   — alternating layout with bullet points
══════════════════════════════════════ */
function FacilityRow({ f, index }) {
  const [hov, setHov] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
      gap:"48px",
      alignItems:"center",
      padding:"52px 0",
      borderBottom:`1px solid ${C.border}`,
      animation:"fadeUp 0.6s ease both",
      animationDelay:`${index * 0.08}s`,
    }}>
      {/* Image side */}
      <div style={{ order: isEven ? 0 : 1 }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
        <div style={{
          position:"relative", borderRadius:"22px", overflow:"hidden",
          boxShadow: hov ? "0 20px 56px rgba(26,155,78,0.14)" : "0 6px 30px rgba(0,0,0,0.07)",
          transition:"box-shadow 0.4s ease",
          height:"300px",
        }}>
          <img src={f.image} alt={f.title}
            style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.6s ease", transform: hov ? "scale(1.06)" : "scale(1)" }} />
          {/* Overlay gradient */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,31,19,0.32) 0%,transparent 50%)", pointerEvents:"none" }} />
          {/* Tag badge */}
          <span style={{
            position:"absolute", top:"16px", left:"16px",
            background:"rgba(255,255,255,0.94)", backdropFilter:"blur(6px)",
            color:"#1a6b3c", fontSize:"10px", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase",
            padding:"5px 14px", borderRadius:"100px", border:`1px solid ${C.borderH}`,
          }}>{f.tag}</span>
          {/* Icon pill bottom */}
          <div style={{
            position:"absolute", bottom:"16px", left:"16px",
            background:"rgba(255,255,255,0.94)", backdropFilter:"blur(6px)",
            borderRadius:"12px", padding:"8px 14px", display:"flex", alignItems:"center", gap:"8px",
            border:`1px solid rgba(26,155,78,0.2)`,
          }}>
            <span style={{ fontSize:"18px" }}>{f.icon}</span>
            <span style={{ fontSize:"13px", fontWeight:700, color:C.text }}>{f.title}</span>
          </div>
        </div>
      </div>

      {/* Content side */}
      <div style={{ order: isEven ? 1 : 0 }}>
        {/* Number label */}
        <p style={{
          margin:"0 0 10px",
          fontSize:"11px", fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase",
          color:C.green,
        }}>
          {String(index + 1).padStart(2,"0")} ✦ {f.tag}
        </p>

        {/* Title */}
        <h3 style={{
          margin:"0 0 14px",
          fontSize:"clamp(22px,3vw,30px)", fontWeight:900, lineHeight:1.2,
          fontFamily:"'Georgia',serif", color:C.text,
        }}>{f.title}</h3>

        {/* Description */}
        <p style={{ margin:"0 0 24px", fontSize:"14px", color:C.muted, lineHeight:1.8 }}>{f.desc}</p>

        {/* Bullet points */}
        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          {f.points.map((pt, pi) => (
            <div key={pi} style={{ display:"flex", alignItems:"flex-start", gap:"12px" }}>
              <div style={{
                width:"22px", height:"22px", borderRadius:"8px", flexShrink:0, marginTop:"1px",
                background:C.gradIcon, border:`1px solid ${C.borderH}`,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                <span style={{ fontSize:"10px", color:C.green, fontWeight:800 }}>✓</span>
              </div>
              <span style={{ fontSize:"14px", color:C.text, lineHeight:1.6, fontWeight:500 }}>{pt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════
   Main Page Export
══════════════════════════════════════ */
export default function Facilities() {
  return (
    <div style={{ background:C.bg, minHeight:"100vh", paddingTop:"80px", fontFamily:"'Segoe UI',system-ui,sans-serif", color:C.text }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes floatY {
          0%,100% { transform:translateY(0);   }
          50%     { transform:translateY(-8px); }
        }
        @keyframes pulse-ring {
          0%   { transform:scale(0.92); opacity:0.7; }
          100% { transform:scale(1.14); opacity:0;   }
        }
      `}</style>

      {/* ══ PROFESSIONAL HERO ══ */}
      <section style={{ padding:"52px 24px 64px" }}>
        <div style={{
          maxWidth:"1200px", margin:"0 auto",
          background:C.bgHero,
          borderRadius:"32px",
          border:`1px solid ${C.border}`,
          boxShadow:"0 8px 48px rgba(26,155,78,0.08)",
          overflow:"hidden",
          position:"relative",
        }}>
          {/* Decorative background shapes */}
          <div style={{ position:"absolute", top:"-60px", right:"-60px", width:"320px", height:"320px", borderRadius:"50%", background:"rgba(26,155,78,0.05)", pointerEvents:"none" }} />
          <div style={{ position:"absolute", bottom:"-40px", left:"-40px", width:"220px", height:"220px", borderRadius:"50%", background:"rgba(21,101,192,0.05)", pointerEvents:"none" }} />

          <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"32px", alignItems:"center", padding:"60px 52px", position:"relative", zIndex:1 }}>

            {/* Left — copy */}
            <div style={{ animation:"fadeUp 0.7s ease both" }}>

              {/* Breadcrumb */}
              <div style={{ display:"flex", gap:"7px", alignItems:"center", fontSize:"13px", marginBottom:"22px" }}>
                <Link to="/" style={{ color:C.green, textDecoration:"none", fontWeight:600 }}>Home</Link>
                <span style={{ color:C.border }}>›</span>
                <span style={{ color:C.faint }}>Facilities</span>
              </div>

              {/* Badge */}
              <span style={{
                display:"inline-flex", alignItems:"center", gap:"7px",
                background:C.gradBadge, color:"#1a6b3c",
                fontSize:"11px", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase",
                padding:"7px 18px", borderRadius:"100px", marginBottom:"22px",
                border:`1px solid ${C.borderH}`,
              }}>✦ World-Class Infrastructure</span>

              {/* Headline */}
              <h1 style={{ fontSize:"clamp(28px,4vw,52px)", fontWeight:900, lineHeight:1.1, margin:"0 0 8px", fontFamily:"'Georgia',serif", color:C.text }}>
                The Best Nursing
              </h1>
              <h1 style={{ fontSize:"clamp(28px,4vw,52px)", fontWeight:900, lineHeight:1.1, margin:"0 0 16px", fontFamily:"'Georgia',serif" }}>
                <span style={{ background:C.gradText, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>College in Latur,</span>
              </h1>
              <h1 style={{ fontSize:"clamp(20px,3vw,38px)", fontWeight:800, lineHeight:1.1, margin:"0 0 22px", fontFamily:"'Georgia',serif", color:C.sub }}>
                Maharashtra
              </h1>

              {/* Sub tagline */}
              <p style={{ color:C.muted, fontSize:"15px", lineHeight:1.8, maxWidth:"460px", margin:"0 0 32px" }}>
                Our campus is designed for <strong style={{ color:C.text }}>exceptional education, hands-on training,</strong> and holistic development — with every facility a nursing professional needs.
              </p>

              {/* Feature chips */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:"10px", marginBottom:"36px" }}>
                {["🔬 Nursing Labs","🖥️ Computer Lab","📚 Library","🛏️ Hostel","🏫 Smart Classes","🏥 Clinical Training"].map(chip => (
                  <span key={chip} style={{
                    background:C.white, border:`1.5px solid ${C.border}`,
                    color:C.text, fontSize:"12px", fontWeight:600,
                    padding:"6px 14px", borderRadius:"100px",
                    boxShadow:"0 2px 8px rgba(26,155,78,0.06)",
                  }}>{chip}</span>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display:"flex", gap:"12px", flexWrap:"wrap", alignItems:"center" }}>
                <Link to="/contact"
                  style={{ background:C.grad, color:"white", fontWeight:800, padding:"14px 28px", borderRadius:"12px", textDecoration:"none", fontSize:"15px", boxShadow:"0 8px 24px rgba(26,155,78,0.28)", display:"inline-block" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 14px 36px rgba(26,155,78,0.36)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 24px rgba(26,155,78,0.28)"; }}
                >Book Campus Tour →</Link>
                <Link to="/apply"
                  style={{ background:C.white, color:C.green, fontWeight:700, padding:"14px 28px", borderRadius:"12px", textDecoration:"none", fontSize:"15px", border:`1.5px solid ${C.borderH}`, display:"inline-block" }}
                  onMouseEnter={e => { e.currentTarget.style.background=C.greenL; }}
                  onMouseLeave={e => { e.currentTarget.style.background=C.white; }}
                >Apply Now</Link>
              </div>
            </div>

            {/* Right — animated visual */}
            <div style={{ animation:"fadeUp 0.9s ease both 0.12s" }}>
              <HeroVisual />
            </div>
          </div>

          {/* Bottom accent strip */}
          <div style={{
            background:"linear-gradient(90deg,rgba(26,155,78,0.08),rgba(21,101,192,0.08))",
            borderTop:`1px solid ${C.border}`,
            padding:"16px 52px",
            display:"flex", gap:"40px", alignItems:"center",
          }}>
            {[
              { icon:"✦", text:"Affiliated & Recognized" },
              { icon:"✦", text:"6 Core Facilities" },
              { icon:"✦", text:"Expert Faculty" },
              { icon:"✦", text:"Hospital Tie-ups" },
            ].map(b => (
              <span key={b.text} style={{ fontSize:"12px", fontWeight:600, color:C.green, display:"flex", gap:"6px", alignItems:"center", whiteSpace:"nowrap" }}>
                <span style={{ fontSize:"8px" }}>{b.icon}</span>{b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background:C.white, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:"26px 24px" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }}>
          {stats.map(s => <StatItem key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* ══ FLOWING FACILITIES SECTION ══ */}
      <section style={{ padding:"80px 24px 24px", maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"56px" }}>
          <p style={{ color:C.green, fontSize:"11px", fontWeight:700, letterSpacing:"0.24em", textTransform:"uppercase", margin:"0 0 11px" }}>✦ Infrastructure ✦</p>
          <h2 style={{ fontSize:"clamp(24px,4vw,42px)", fontWeight:900, color:C.text, margin:"0 0 12px", fontFamily:"'Georgia',serif" }}>Our Key Facilities</h2>
          <p style={{ color:C.muted, fontSize:"15px", maxWidth:"500px", margin:"0 auto", lineHeight:1.75 }}>
            Everything you need for a complete, modern nursing education — thoughtfully designed and built under one roof.
          </p>
        </div>

        <div>
          {facilities.map((f, i) => (
            <FacilityRow key={f.title} f={f} index={i} />
          ))}
        </div>
      </section>

      {/* ══ AMENITIES ══ */}
      <section style={{ padding:"72px 24px 72px", background:C.bgAmen, marginTop:"56px" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:"44px" }}>
            <p style={{ color:C.green, fontSize:"11px", fontWeight:700, letterSpacing:"0.24em", textTransform:"uppercase", margin:"0 0 11px" }}>✦ Amenities ✦</p>
            <h2 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:900, color:C.text, margin:"0 0 10px", fontFamily:"'Georgia',serif" }}>Additional Amenities</h2>
            <p style={{ color:C.muted, fontSize:"14px", margin:0 }}>Supporting services that make campus life complete and comfortable.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
            {extras.map((e, i) => <AmenityCard key={e.title} e={e} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding:"40px 24px 80px", maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{
          background:C.bgCta, borderRadius:"26px", padding:"60px 44px", textAlign:"center",
          border:`1px solid ${C.border}`, boxShadow:"0 16px 56px rgba(26,155,78,0.08)", position:"relative", overflow:"hidden",
        }}>
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 0%,rgba(26,155,78,0.07) 0%,transparent 65%)", pointerEvents:"none" }} />
          <span style={{ fontSize:"38px", display:"block", marginBottom:"16px", animation:"floatY 3s ease infinite" }}>🎓</span>
          <h2 style={{ color:C.text, fontSize:"clamp(22px,4vw,40px)", fontWeight:900, margin:"0 0 12px", fontFamily:"'Georgia',serif", position:"relative" }}>
            Experience It{" "}
            <span style={{ background:C.gradText, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Yourself</span>
          </h2>
          <p style={{ color:C.muted, fontSize:"15px", margin:"0 auto 30px", maxWidth:"430px", position:"relative", lineHeight:1.75 }}>
            Visit our campus and see our world-class facilities firsthand. Book a free campus tour today and start your bright future.
          </p>
          <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
            <Link to="/contact"
              style={{ background:C.grad, color:"white", fontWeight:800, padding:"14px 30px", borderRadius:"12px", textDecoration:"none", fontSize:"15px", boxShadow:"0 8px 24px rgba(26,155,78,0.28)", display:"inline-block", transition:"transform 0.2s,box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 14px 38px rgba(26,155,78,0.38)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 8px 24px rgba(26,155,78,0.28)"; }}
            >Book Campus Tour →</Link>
            <Link to="/apply"
              style={{ background:C.white, color:C.green, fontWeight:700, padding:"14px 30px", borderRadius:"12px", textDecoration:"none", fontSize:"15px", border:`1.5px solid ${C.borderH}`, display:"inline-block", transition:"background 0.2s,border-color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background=C.greenL; e.currentTarget.style.borderColor=C.green; }}
              onMouseLeave={e => { e.currentTarget.style.background=C.white; e.currentTarget.style.borderColor=C.borderH; }}
            >Apply Now</Link>
          </div>
        </div>
      </section>

    </div>
  );
}