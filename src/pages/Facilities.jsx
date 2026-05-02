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

const facilities = [
  { icon:"🏛️", title:"Modern Campus",      desc:"A serene, green and secure campus with advanced infrastructure and a peaceful learning environment.", image:"https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80", tag:"Infrastructure" },
  { icon:"🔬", title:"Advanced Labs",       desc:"Well-equipped laboratories for practical training and hands-on learning in all nursing disciplines.",  image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", tag:"Science"        },
  { icon:"📚", title:"Digital Library",     desc:"A vast collection of books, journals and digital resources to support academic excellence.",           image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80", tag:"Knowledge"      },
  { icon:"🛏️", title:"Comfortable Hostel",  desc:"Safe, clean hostel facilities for girls with 24/7 security and all modern amenities.",                 image:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80", tag:"Living"         },
  { icon:"🍽️", title:"Hygienic Canteen",    desc:"Nutritious and hygienic food in a clean, spacious environment for students and staff.",                image:"https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80", tag:"Dining"         },
  { icon:"⚽",  title:"Sports & Recreation", desc:"Indoor and outdoor sports facilities for physical fitness and overall well-being of every student.",    image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", tag:"Wellness"       },
];

const extras = [
  { icon:"🛡️", title:"24/7 Security",  desc:"Round-the-clock campus security ensuring every student stays safe and protected at all times." },
  { icon:"📶", title:"Wi-Fi Campus",   desc:"High-speed Wi-Fi covering every corner of the campus for seamless connectivity."                },
  { icon:"🏥", title:"Health Care",    desc:"On-campus health center staffed with qualified medical professionals for immediate support."     },
  { icon:"🚌", title:"Transport",      desc:"Safe, punctual and reliable transportation services available for all students across the city." },
  { icon:"🎤", title:"Seminar Hall",   desc:"Spacious, air-conditioned halls for seminars, workshops, cultural events and conferences."       },
  { icon:"🖥️", title:"Computer Lab",  desc:"Modern computer lab with latest systems, full internet access, and expert IT support."           },
];

const stats = [
  { value:"6+",   label:"Key Facilities"  },
  { value:"500+", label:"Students Housed" },
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
   Hero Canvas — Rotating Medical Cross
   Hexagonal frame + 6 orbital nodes
══════════════════════════════════════ */
function MedicalCrossHero() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const W = 400, H = 440;
    canvas.width  = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    const CX = W / 2, CY = H / 2 - 20;
    let t = 0;
    const raf = { id: null };

    const nodeLabels = ["🔬 Labs","📚 Library","🏛️ Campus","🛏️ Hostel","🍽️ Canteen","⚽ Sports"];

    function drawFrame() {
      ctx.clearRect(0, 0, W, H);
      ctx.save();
      ctx.translate(CX, CY);

      /* hexagon bg */
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
        i === 0
          ? ctx.moveTo(Math.cos(a) * 84, Math.sin(a) * 84)
          : ctx.lineTo(Math.cos(a) * 84, Math.sin(a) * 84);
      }
      ctx.closePath();
      const hfill = ctx.createLinearGradient(-84, -84, 84, 84);
      hfill.addColorStop(0, "rgba(212,237,218,0.55)");
      hfill.addColorStop(1, "rgba(204,229,246,0.55)");
      ctx.fillStyle = hfill;
      ctx.fill();
      ctx.strokeStyle = "rgba(26,155,78,0.22)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      /* cross arms */
      const armH = 54, armW = 18;
      [[0, -armH, armW, armH * 2], [-armH, 0, armH * 2, armW]].forEach(([x, y, w, h]) => {
        const g = ctx.createLinearGradient(x, y, x + w, y + h);
        g.addColorStop(0, "rgba(26,155,78,0.82)");
        g.addColorStop(1, "rgba(21,101,192,0.82)");
        ctx.beginPath();
        ctx.roundRect(x, y, w, h, 6);
        ctx.fillStyle = g;
        ctx.fill();
      });

      /* center circle */
      const pulse = 1 + Math.sin(t * 2.4) * 0.06;
      ctx.beginPath();
      ctx.arc(0, 0, 22 * pulse, 0, Math.PI * 2);
      const cg = ctx.createRadialGradient(0, 0, 4, 0, 0, 22 * pulse);
      cg.addColorStop(0, "rgba(255,255,255,0.96)");
      cg.addColorStop(0.5, "rgba(212,237,218,0.9)");
      cg.addColorStop(1, "rgba(204,229,246,0.75)");
      ctx.fillStyle = cg;
      ctx.fill();
      ctx.strokeStyle = "rgba(26,155,78,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.font = "bold 13px 'Segoe UI',sans-serif";
      ctx.fillStyle = "#1a6b3c";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("✚", 0, 0.5);

      /* orbital nodes */
      nodeLabels.forEach((lbl, i) => {
        const rad = ((i / 6) * 360 + t * 9) * Math.PI / 180;
        const nx = Math.cos(rad) * 122;
        const ny = Math.sin(rad) * 122;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(nx, ny);
        const lc = ctx.createLinearGradient(0, 0, nx, ny);
        lc.addColorStop(0, "rgba(26,155,78,0.12)");
        lc.addColorStop(1, "rgba(21,101,192,0.12)");
        ctx.strokeStyle = lc;
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 5]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.beginPath();
        ctx.arc(nx, ny, 17, 0, Math.PI * 2);
        const ng = ctx.createRadialGradient(nx, ny, 2, nx, ny, 17);
        ng.addColorStop(0, "rgba(212,237,218,0.96)");
        ng.addColorStop(1, "rgba(204,229,246,0.88)");
        ctx.fillStyle = ng;
        ctx.fill();
        ctx.strokeStyle = "rgba(26,155,78,0.45)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.font = "13px 'Segoe UI',sans-serif";
        ctx.fillStyle = "#1a6b3c";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(lbl.split(" ")[0], nx, ny);
      });

      ctx.restore();

      /* floating badges */
      function badge(bx, by, l1, l2) {
        ctx.beginPath();
        ctx.roundRect(bx, by, 136, 42, 9);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.strokeStyle = "rgba(26,155,78,0.38)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.font = "bold 11px 'Segoe UI',sans-serif";
        ctx.fillStyle = "#1a6b3c";
        ctx.textAlign = "left";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(l1, bx + 10, by + 17);
        ctx.font = "10px 'Segoe UI',sans-serif";
        ctx.fillStyle = "#607d8b";
        ctx.fillText(l2, bx + 10, by + 33);
      }
      badge(8,  12 + Math.sin(t) * 5,  "⭐  4.9 / 5.0",     "Avg Rating");
      badge(W - 148, H - 58 + Math.sin(t + 1.7) * 5, "👩‍⚕️  500+ Students", "Enrolled");

      t += 0.018;
      raf.id = requestAnimationFrame(drawFrame);
    }

    raf.id = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(raf.id);
  }, []);

  return <canvas ref={canvasRef} style={{ display:"block", margin:"0 auto" }} />;
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

/* ── Shared sub-components ── */
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

/* ── Facility card variants ── */
function FacilityCardLarge({ f }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:C.white, border:`1.5px solid ${hov ? C.borderH : C.border}`, borderRadius:"22px", overflow:"hidden", boxShadow: hov ? "0 14px 42px rgba(26,155,78,0.11)" : "0 2px 14px rgba(0,0,0,0.05)", transition:"all 0.3s ease", display:"flex", flexDirection:"column" }}>
      <div style={{ position:"relative", height:"250px", overflow:"hidden" }}>
        <img src={f.image} alt={f.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.55s", transform: hov ? "scale(1.05)" : "scale(1)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.28) 0%,transparent 55%)" }} />
        <span style={{ position:"absolute", top:"14px", left:"14px", background:"rgba(255,255,255,0.92)", backdropFilter:"blur(6px)", color:"#1a6b3c", fontSize:"10px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"4px 12px", borderRadius:"100px", border:`1px solid ${C.borderH}` }}>{f.tag}</span>
      </div>
      <div style={{ padding:"22px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"11px", marginBottom:"9px" }}>
          <IconBox icon={f.icon} size={42} />
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:800, color:C.text, fontFamily:"'Georgia',serif" }}>{f.title}</h3>
        </div>
        <p style={{ margin:0, color:C.muted, fontSize:"13px", lineHeight:1.65 }}>{f.desc}</p>
      </div>
    </div>
  );
}

function FacilityCardHoriz({ f }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:C.white, border:`1.5px solid ${hov ? C.borderH : C.border}`, borderRadius:"16px", overflow:"hidden", boxShadow: hov ? "0 8px 28px rgba(26,155,78,0.09)" : "0 2px 8px rgba(0,0,0,0.04)", transition:"all 0.3s ease", transform: hov ? "translateX(5px)" : "none", display:"flex", flex:1 }}>
      <div style={{ width:"115px", flexShrink:0, overflow:"hidden" }}>
        <img src={f.image} alt={f.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.55s", transform: hov ? "scale(1.08)" : "scale(1)" }} />
      </div>
      <div style={{ padding:"16px 18px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"7px" }}>
          <span style={{ fontSize:"16px" }}>{f.icon}</span>
          <h3 style={{ margin:0, fontSize:"14px", fontWeight:800, color:C.text, fontFamily:"'Georgia',serif" }}>{f.title}</h3>
        </div>
        <p style={{ margin:0, color:C.muted, fontSize:"12px", lineHeight:1.6 }}>{f.desc}</p>
      </div>
    </div>
  );
}

function FacilityCardSmall({ f }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background:C.white, border:`1.5px solid ${hov ? C.borderH : C.border}`, borderRadius:"18px", overflow:"hidden", boxShadow: hov ? "0 14px 36px rgba(26,155,78,0.1)" : "0 2px 10px rgba(0,0,0,0.04)", transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)", transform: hov ? "translateY(-7px)" : "none" }}>
      <div style={{ position:"relative", height:"155px", overflow:"hidden" }}>
        <img src={f.image} alt={f.title} style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.55s", transform: hov ? "scale(1.07)" : "scale(1)" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(0,0,0,0.25) 0%,transparent 60%)" }} />
        <span style={{ position:"absolute", bottom:"10px", left:"10px", background:"rgba(255,255,255,0.92)", backdropFilter:"blur(6px)", color:"#1a6b3c", fontSize:"9px", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", padding:"3px 9px", borderRadius:"100px", border:`1px solid ${C.borderH}` }}>{f.tag}</span>
      </div>
      <div style={{ padding:"16px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"9px", marginBottom:"7px" }}>
          <IconBox icon={f.icon} size={34} />
          <h3 style={{ margin:0, fontSize:"14px", fontWeight:800, color:C.text, fontFamily:"'Georgia',serif" }}>{f.title}</h3>
        </div>
        <p style={{ margin:0, color:C.muted, fontSize:"12px", lineHeight:1.6 }}>{f.desc}</p>
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
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ padding:"52px 24px 64px", zIndex:1 }}>
        <div style={{
          maxWidth:"1200px", margin:"0 auto",
          background:C.bgHero, borderRadius:"28px",
          padding:"52px",
          border:`1px solid ${C.border}`,
          display:"grid", gridTemplateColumns:"1fr auto", gap:"32px", alignItems:"center",
          boxShadow:"0 8px 40px rgba(26,155,78,0.07)",
        }}>
          <div style={{ animation:"fadeUp 0.7s ease both" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:"7px",
              background:C.gradBadge, color:"#1a6b3c",
              fontSize:"11px", fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase",
              padding:"7px 18px", borderRadius:"100px", marginBottom:"22px",
              border:`1px solid ${C.borderH}`,
            }}>✦ Our Facilities</span>

            <h1 style={{ fontSize:"clamp(30px,4vw,52px)", fontWeight:900, lineHeight:1.1, margin:"0 0 14px", fontFamily:"'Georgia',serif", color:C.text }}>
              Bestest Nursing<br />
              <span style={{ background:C.gradText, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>College In Latur</span><br />
              Maharashtra
            </h1>

            <p style={{ color:C.sub, fontSize:"16px", fontWeight:600, lineHeight:1.7, maxWidth:"440px", margin:"0 0 8px" }}>
              Apply Your Bright Future Here
            </p>
            <p style={{ color:C.muted, fontSize:"14px", lineHeight:1.8, maxWidth:"440px", margin:"0 0 30px" }}>
              Get the best knowledge from world-class faculties. State-of-the-art infrastructure designed for exceptional education, hands-on training, and holistic development.
            </p>

            <div style={{ display:"flex", gap:"7px", alignItems:"center", fontSize:"13px" }}>
              <Link to="/" style={{ color:C.green, textDecoration:"none", fontWeight:600 }}>Home</Link>
              <span style={{ color:C.border }}>›</span>
              <span style={{ color:C.faint }}>Facilities</span>
            </div>
          </div>

          <div style={{ animation:"fadeUp 0.9s ease both 0.1s" }}>
            <MedicalCrossHero />
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ background:C.white, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:"26px 24px" }}>
        <div style={{ maxWidth:"1200px", margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }}>
          {stats.map(s => <StatItem key={s.label} value={s.value} label={s.label} />)}
        </div>
      </section>

      {/* ══ MAIN FACILITIES ══ */}
      <section style={{ padding:"72px 24px 16px", maxWidth:"1200px", margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:"48px" }}>
          <p style={{ color:C.green, fontSize:"11px", fontWeight:700, letterSpacing:"0.24em", textTransform:"uppercase", margin:"0 0 11px" }}>✦ Infrastructure ✦</p>
          <h2 style={{ fontSize:"clamp(24px,4vw,40px)", fontWeight:900, color:C.text, margin:"0 0 11px", fontFamily:"'Georgia',serif" }}>Our Key Facilities</h2>
          <p style={{ color:C.muted, fontSize:"14px", maxWidth:"450px", margin:"0 auto", lineHeight:1.7 }}>Everything you need for a complete nursing education — under one roof.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1.4fr 1fr", gap:"18px", marginBottom:"18px" }}>
          <FacilityCardLarge f={facilities[0]} />
          <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
            <FacilityCardHoriz f={facilities[1]} />
            <FacilityCardHoriz f={facilities[2]} />
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"18px" }}>
          {facilities.slice(3).map(f => <FacilityCardSmall key={f.title} f={f} />)}
        </div>
      </section>

      {/* ══ AMENITIES ══ */}
      <section style={{ padding:"48px 24px 72px", background:C.bgAmen, marginTop:"56px" }}>
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