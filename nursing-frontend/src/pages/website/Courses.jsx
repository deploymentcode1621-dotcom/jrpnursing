import ApplyModal from "../../components/ApplyModal";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope, FaUserNurse, FaHospital, FaBookMedical, FaArrowRight,
  FaCalendarAlt, FaGraduationCap, FaChartLine, FaCheckCircle, FaClipboardList,
  FaBriefcaseMedical, FaHeartbeat, FaFileAlt, FaPhoneAlt, FaHandshake,
  FaTrophy, FaGlobe, FaFlask, FaUserMd, FaBaby, FaBrain, FaAmbulance,
  FaStar, FaShieldAlt, FaCamera,
} from "react-icons/fa";

/* ─── DATA ─────────────────────────────────────────────────────────── */
const courseCards = [
  { title: "G.N.M Nursing Program", duration: "3 Years Professional Course", desc: "Build strong clinical knowledge, patient care expertise and professional nursing skills through a career-focused curriculum.", icon: <FaUserNurse />, color: "green" },
  { title: "Advanced Clinical Training", duration: "Hospital Exposure", desc: "Gain real-time hospital experience with clinical rotations, patient interaction and supervised practical sessions.", icon: <FaStethoscope />, color: "blue" },
  { title: "Modern Nursing Laboratories", duration: "Hands-on Practice", desc: "Practice confidently in modern nursing labs equipped with advanced healthcare learning tools and demonstrations.", icon: <FaHospital />, color: "green" },
  { title: "Career & Placement Support", duration: "100% Guidance", desc: "Get expert mentorship, interview preparation and placement assistance for a successful healthcare career.", icon: <FaGraduationCap />, color: "blue" },
];

const highlights = [
  { icon: <FaHospital />, title: "Recognized & Affiliated", desc: "Approved by INC, New Delhi and affiliated to MUHS, Nashik." },
  { icon: <FaBookMedical />, title: "Expert Faculty", desc: "Learn from experienced and dedicated teaching professionals." },
  { icon: <FaStethoscope />, title: "Clinical Exposure", desc: "Hands-on training in hospitals and healthcare institutions." },
  { icon: <FaChartLine />, title: "Career Opportunities", desc: "Placement support and global career opportunities for graduates." },
];

const journeySteps = [
  { title: "Learn", desc: "Build strong nursing knowledge through structured theory classes." },
  { title: "Practice", desc: "Train in labs and affiliated hospitals with hands-on experience." },
  { title: "Serve", desc: "Develop patient care confidence through clinical rotations." },
  { title: "Grow", desc: "Prepare for a thriving healthcare career." },
];

const eligibility = [
  { label: "Minimum Qualification", value: "10+2 with Science (PCB)" },
  { label: "Minimum Marks", value: "40% aggregate in PCB" },
  { label: "Age Limit", value: "17 – 35 years" },
  { label: "Entrance", value: "Merit-based / Entrance Exam" },
  { label: "Duration", value: "3 Years + 6 Months Internship" },
];

const syllabus = [
  { year: "Year 1", subjects: ["Anatomy & Physiology", "Fundamentals of Nursing", "Nutrition & Biochemistry", "Microbiology"] },
  { year: "Year 2", subjects: ["Medical-Surgical Nursing", "Pharmacology", "Community Health Nursing", "Child Health Nursing"] },
  { year: "Year 3", subjects: ["Mental Health Nursing", "Midwifery & Obstetric Nursing", "Nursing Management", "Research & Statistics"] },
];

const eligibilityPoints = [
  { icon: <FaClipboardList />, title: "Educational Qualification", desc: "Passed 10+2 (Higher Secondary) with Physics, Chemistry and Biology as core subjects from a recognized board.", color: "green" },
  { icon: <FaChartLine />, title: "Minimum Marks Required", desc: "Must have secured at least 40% aggregate marks in PCB (Physics, Chemistry & Biology) subjects.", color: "blue" },
  { icon: <FaCalendarAlt />, title: "Age Criteria", desc: "Candidates must be between 17 to 35 years of age at the time of admission as per INC norms.", color: "green" },
  { icon: <FaFileAlt />, title: "Program Duration", desc: "3 Years of academic study followed by a compulsory 6-month internship in an affiliated hospital.", color: "blue" },
  { icon: <FaHandshake />, title: "Admission Process", desc: "Admission is based on merit or entrance examination as per the guidelines of MUHS, Nashik and INC, New Delhi.", color: "green" },
  { icon: <FaUserNurse />, title: "Language Proficiency", desc: "Basic proficiency in English and Marathi is recommended for effective communication in clinical settings.", color: "blue" },
];

const subjectsCovered = [
  { icon: <FaHeartbeat />, year: "Foundation (Year 1)", color: "from-blue-900 to-blue-700", subjects: [{ name: "Anatomy & Physiology", detail: "Human body structure & organ systems" }, { name: "Fundamentals of Nursing", detail: "Core nursing principles & basic procedures" }, { name: "Nutrition & Biochemistry", detail: "Dietary science & metabolic processes" }, { name: "Microbiology", detail: "Infection control & pathogen study" }, { name: "Psychology & Sociology", detail: "Human behavior & social healthcare context" }, { name: "English & Communication", detail: "Professional language & patient interaction" }] },
  { icon: <FaBriefcaseMedical />, year: "Clinical (Year 2)", color: "from-green-700 to-green-500", subjects: [{ name: "Medical-Surgical Nursing", detail: "Adult patient care & surgical procedures" }, { name: "Pharmacology", detail: "Drugs, dosage & medication administration" }, { name: "Community Health Nursing", detail: "Primary care & public health programs" }, { name: "Child Health Nursing", detail: "Pediatric care & child development" }, { name: "Mental Health Nursing", detail: "Psychiatric conditions & therapeutic care" }, { name: "First Aid & Emergency Care", detail: "Life-saving techniques & triage" }] },
  { icon: <FaUserMd />, year: "Advanced (Year 3)", color: "from-blue-700 to-green-600", subjects: [{ name: "Midwifery & Obstetric Nursing", detail: "Maternal care, labour & delivery" }, { name: "Nursing Management", detail: "Ward management & leadership skills" }, { name: "Research & Statistics", detail: "Evidence-based nursing & data analysis" }, { name: "Geriatric Nursing", detail: "Elderly patient care & chronic conditions" }, { name: "Palliative & Holistic Care", detail: "End-of-life care & patient dignity" }, { name: "Nursing Ethics & Law", detail: "Professional code of conduct & legal aspects" }] },
];

const practicalTraining = [
  { icon: <FaFlask />, title: "Nursing Skill Labs", desc: "State-of-the-art skill labs equipped with manikins, simulation beds and medical equipment to practice procedures before clinical postings.", badge: "On Campus", color: "green" },
  { icon: <FaHospital />, title: "Hospital Clinical Postings", desc: "Regular rotations in affiliated government and private hospitals covering OPD, IPD, OT, ICU, labour room and emergency wards.", badge: "Hospital Based", color: "blue" },
  { icon: <FaBaby />, title: "Midwifery & OB Training", desc: "Hands-on exposure in maternity wards including antenatal care, normal delivery assistance, postnatal care and newborn nursing.", badge: "Maternity Ward", color: "green" },
  { icon: <FaBrain />, title: "Mental Health Posting", desc: "Dedicated psychiatric nursing postings where students learn therapeutic communication, patient counselling and mental health assessment.", badge: "Psychiatry Unit", color: "blue" },
  { icon: <FaAmbulance />, title: "Emergency & ICU Training", desc: "Exposure to emergency care, life-saving procedures, ventilator care and critical patient monitoring in ICU settings.", badge: "Critical Care", color: "green" },
  { icon: <FaHeartbeat />, title: "Community Health Camps", desc: "Field postings in rural and urban communities for health education, immunization drives, maternal care and public health programs.", badge: "Community", color: "blue" },
];

const careerOpportunities = [
  { role: "Staff Nurse", place: "Government & Private Hospitals", icon: <FaHospital />, color: "blue" },
  { role: "Community Health Nurse", place: "PHC / CHC / Rural Health Centers", icon: <FaHeartbeat />, color: "green" },
  { role: "Midwife", place: "Maternity Homes & Hospitals", icon: <FaBaby />, color: "blue" },
  { role: "Nursing Tutor", place: "Nursing Colleges & Institutes", icon: <FaGraduationCap />, color: "green" },
  { role: "ICU / CCU Nurse", place: "Critical Care & Specialty Centers", icon: <FaAmbulance />, color: "blue" },
  { role: "Military / Defence Nurse", place: "Indian Army, Navy & Air Force", icon: <FaTrophy />, color: "green" },
  { role: "International Nurse", place: "Middle East, UK, Canada & Australia", icon: <FaGlobe />, color: "blue" },
  { role: "Industrial Nurse", place: "Factories, Corporates & MNCs", icon: <FaBriefcaseMedical />, color: "green" },
];

const admissionSteps = [
  { step: "01", title: "Check Eligibility", desc: "Verify you meet the qualification criteria — 10+2 with PCB, minimum 40% marks and age between 17–35 years.", icon: <FaClipboardList />, color: "blue" },
  { step: "02", title: "Fill Application Form", desc: "Complete the online or offline application form with accurate personal, academic and contact details.", icon: <FaFileAlt />, color: "green" },
  { step: "03", title: "Submit Documents", desc: "Upload or submit 10th & 12th marksheets, transfer certificate, ID proof, passport photos and caste certificate if applicable.", icon: <FaBookMedical />, color: "blue" },
  { step: "04", title: "Merit / Entrance", desc: "Admission is finalized based on merit list or entrance examination score as per MUHS and INC guidelines.", icon: <FaChartLine />, color: "green" },
  { step: "05", title: "Counselling & Seat Allotment", desc: "Attend counselling session for seat confirmation. Selected candidates receive an admission offer letter.", icon: <FaHandshake />, color: "blue" },
  { step: "06", title: "Pay Fees & Confirm", desc: "Pay the admission fee, complete the formalities and confirm your seat. Your nursing journey begins!", icon: <FaTrophy />, color: "green" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

/* ─── PHOTO COLLAGE BACKGROUND ──────────────────────────────────────── */
// Unsplash nursing/medical photos used as faint collage tiles
const bgPhotos = [
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=60", // nurse with patient
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=60", // hospital corridor
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=60", // nursing student
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=60", // doctor stethoscope
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&q=60", // medical lab
  "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&q=60", // nursing care
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=400&q=60", // hospital room
  "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&q=60", // graduation nurses
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=60", // clinical training
  "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=400&q=60", // medical students
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=60", // stethoscope closeup
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&q=60", // hospital ward
];

const PhotoCollageBg = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* 3-column photo grid covering the full hero */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "3px",
        opacity: 0.22,
        filter: "saturate(0.4) brightness(0.55)",
      }}
    >
      {bgPhotos.map((src, i) => (
        <div
          key={i}
          style={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </div>
      ))}
    </div>

    {/* Dark blue-teal overlay — matches gallery reference */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(160deg, rgba(4,30,50,0.88) 0%, rgba(6,42,60,0.82) 30%, rgba(7,55,65,0.80) 60%, rgba(5,35,52,0.90) 100%)",
      }}
    />

    {/* Subtle teal vignette glow at center */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(13,148,136,0.10) 0%, transparent 70%)",
      }}
    />

    {/* Bottom fade to page bg */}
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "120px",
        background: "linear-gradient(to top, #f8fbff, transparent)",
      }}
    />
  </div>
);

/* ─── HERO SVG CIRCUIT LINES (adapted for dark bg) ──────────────────── */
const HeroCircuitLines = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 900"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    style={{ zIndex: 3 }}
  >
    <path d="M-100 900 Q400 200 900 400 Q1200 550 1600 100" stroke="#0d9488" strokeWidth="1.5" opacity="0.13" fill="none" />
    <path d="M0 600 Q300 100 800 300 Q1100 450 1500 0" stroke="#06b6d4" strokeWidth="1" opacity="0.10" fill="none" />
    <line x1="0" y1="180" x2="340" y2="180" stroke="#0d9488" strokeWidth="1" opacity="0.14" />
    <line x1="0" y1="360" x2="280" y2="360" stroke="#0d9488" strokeWidth="1" opacity="0.10" />
    <line x1="120" y1="0" x2="120" y2="900" stroke="#0d9488" strokeWidth="1" opacity="0.07" />
    <circle cx="340" cy="180" r="4" fill="#0d9488" opacity="0.25" />
    <circle cx="280" cy="360" r="3" fill="#0d9488" opacity="0.20" />
    <circle cx="120" cy="540" r="5" fill="#06b6d4" opacity="0.18" />
    <circle cx="1200" cy="150" r="180" stroke="#0d9488" strokeWidth="1.5" opacity="0.10" fill="none" />
    <circle cx="1200" cy="150" r="130" stroke="#0d9488" strokeWidth="1" opacity="0.08" fill="none" />
    <circle cx="1200" cy="150" r="80" stroke="#0d9488" strokeWidth="1" opacity="0.10" fill="none" />
    <polyline
      points="0,820 150,820 180,780 210,860 240,795 270,845 300,820 500,820 530,770 560,870 590,790 620,840 650,820 900,820 930,775 960,865 990,800 1020,840 1050,820 1300,820 1330,780 1360,860 1390,810 1440,820"
      stroke="#0d9488" strokeWidth="2" fill="none" opacity="0.16" strokeLinecap="round" strokeLinejoin="round"
    />
    <rect x="1330" y="60" width="36" height="120" rx="10" fill="#0d9488" opacity="0.09" />
    <rect x="1290" y="100" width="116" height="36" rx="10" fill="#0d9488" opacity="0.09" />
    <path d="M1380 300 Q1400 370 1380 440 Q1360 510 1380 580" stroke="#06b6d4" strokeWidth="2" fill="none" strokeDasharray="8 5" opacity="0.12" />
    <path d="M1410 300 Q1390 370 1410 440 Q1430 510 1410 580" stroke="#0d9488" strokeWidth="2" fill="none" strokeDasharray="8 5" opacity="0.12" />
  </svg>
);

/* ─── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function Courses() {
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="min-h-screen bg-[#f8fbff] overflow-hidden">

      {/* ══════════════════════════════════════════════════════════
           HERO — Dark Blue Photo Collage Background (Gallery Style)
      ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "100vh" }}>

        {/* ── PHOTO COLLAGE + DARK BLUE OVERLAY ── */}
        <PhotoCollageBg />

        {/* ── SVG CIRCUIT DECORATIONS ── */}
        <HeroCircuitLines />

        {/* Top 3px teal accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 z-30" />

        {/* Ambient soft glows on top of photo */}
        <div className="absolute pointer-events-none" style={{ top: -80, right: "20%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.08) 0%, transparent 70%)", zIndex: 4 }} />
        <div className="absolute pointer-events-none" style={{ bottom: -60, left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", zIndex: 4 }} />

        {/* ── GALLERY LABEL — like reference top center ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 border border-teal-400/40 rounded-full px-5 py-2 bg-white/5 backdrop-blur-sm"
        >
          <FaCamera className="text-teal-400 text-xs" />
          <span className="text-teal-300 text-xs font-black tracking-[0.25em] uppercase">Courses & Programs</span>
        </motion.div>

        {/* ─── MAIN HERO CONTENT ─────────────────────────── */}
        <div
          className="relative px-6 pt-24 pb-10 max-w-7xl mx-auto"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 10,
            position: "relative",
          }}
        >

          {/* ── TOP STRIP: Breadcrumb + Admission Pill ── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-wrap items-center justify-between gap-4 mb-10"
          >
            {/* Breadcrumb — white text for dark bg */}
            <nav className="flex items-center gap-2 text-sm font-semibold text-white/50">
              <span className="hover:text-teal-300 cursor-pointer transition-colors">Home</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
              <span className="text-white font-black">Courses</span>
            </nav>
            {/* Admission pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-teal-400/40 rounded-full px-5 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-60" />
                <span className="w-2.5 h-2.5 bg-teal-400 rounded-full" />
              </span>
              <span className="text-teal-300 text-xs font-black tracking-[0.16em] uppercase">Admission Open 2025–26</span>
            </div>
          </motion.div>

          {/* ── MAIN 3-COLUMN LAYOUT ── */}
          <div className="grid lg:grid-cols-[1fr_2px_420px] gap-0 xl:gap-0 items-start mb-10">

            {/* ── LEFT COLUMN: Heading + badges + CTAs ── */}
            <div className="pr-0 lg:pr-12 xl:pr-16">

              {/* Eyebrow label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-[3px] w-10 rounded-full bg-teal-400" />
                <span className="text-teal-300 text-xs font-black tracking-[0.22em] uppercase">G.N.M. Diploma Program</span>
                <div className="h-[3px] w-6 rounded-full bg-teal-500/50" />
              </motion.div>

              {/* Giant heading — white on dark */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.20 }}
                className="font-black leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.6rem, 5.2vw, 4.4rem)" }}
              >
                <span className="block text-white">Shape Your</span>
                <span
                  className="block text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(120deg, #2dd4bf 0%, #38bdf8 50%, #34d399 100%)" }}
                >
                  Nursing Career
                </span>
                <span className="block text-white/80" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 700, marginTop: "0.2em" }}>
                  with a World-Class G.N.M. Program
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }}
                className="text-white/60 text-base leading-[1.9] max-w-[500px] mb-7"
              >
                A rigorous 3-year diploma blending compassionate patient care, advanced hospital training, and clinical excellence — launching you into a respected, lifelong healthcare career.
              </motion.p>

              {/* Trust badges row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.34 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {[
                  { icon: <FaShieldAlt />, text: "INC Approved", cls: "bg-teal-500/15 border-teal-400/40 text-teal-300" },
                  { icon: <FaGraduationCap />, text: "MUHS Affiliated", cls: "bg-sky-500/15 border-sky-400/40 text-sky-300" },
                  { icon: <FaStar />, text: "100% Placement", cls: "bg-amber-500/15 border-amber-400/40 text-amber-300" },
                  { icon: <FaHospital />, text: "10+ Hospitals", cls: "bg-emerald-500/15 border-emerald-400/40 text-emerald-300" },
                ].map((b) => (
                  <span key={b.text} className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${b.cls}`}>
                    <span className="text-[10px]">{b.icon}</span>{b.text}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <button
                  onClick={openModal}
                  className="group relative bg-teal-500 hover:bg-teal-400 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl shadow-teal-500/30 transition-all duration-300 inline-flex items-center gap-2.5 text-sm overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FaUserNurse className="text-teal-100 group-hover:scale-110 transition text-base" />
                  Apply Now — 2025
                  <FaArrowRight className="group-hover:translate-x-1 transition text-xs" />
                </button>
                <a
                  href="#eligibility"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white font-bold px-6 py-4 rounded-2xl border border-white/25 hover:border-teal-400/60 hover:bg-white/15 transition-all duration-300 text-sm"
                >
                  View Eligibility <FaArrowRight className="text-xs" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white/50 hover:text-teal-300 font-semibold text-sm transition-colors duration-200"
                >
                  <FaPhoneAlt className="text-xs" /> Contact Us
                </a>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
                className="flex items-center gap-4 pt-6 border-t border-white/10"
              >
                <div className="flex -space-x-2">
                  {["#0d9488", "#0891b2", "#10b981", "#06b6d4", "#0f766e"].map((c, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white/20 flex items-center justify-center text-white text-[10px] font-black" style={{ background: c }}>
                      {["A", "P", "R", "S", "M"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(s => <FaStar key={s} className="text-amber-400 text-[10px]" />)}
                    <span className="text-amber-400 text-xs font-bold ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-white/40 font-semibold">500+ nurses trained & placed across India</p>
                </div>
              </motion.div>
            </div>

            {/* ── DIVIDER LINE ── */}
            <div className="hidden lg:block w-[2px] self-stretch mx-6 xl:mx-8" style={{ background: "linear-gradient(to bottom, transparent, rgba(153,246,228,0.25) 20%, rgba(153,246,228,0.25) 80%, transparent)" }} />

            {/* ── RIGHT COLUMN: Program Card ── */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Floating badge — top left */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.0, ease: "easeInOut" }}
                className="absolute -top-5 -left-4 z-20 bg-[#071f2e]/90 backdrop-blur-md rounded-2xl shadow-lg border border-teal-500/30 px-3 py-2.5 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <FaHeartbeat className="text-red-400 text-sm" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-wide">Hands-On</p>
                  <p className="text-xs font-black text-white">Patient Care Training</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom right */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-3 z-20 bg-[#071f2e]/90 backdrop-blur-md rounded-2xl shadow-lg border border-teal-500/30 px-3 py-2.5 flex items-center gap-2.5"
              >
                <div className="w-8 h-8 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <FaGlobe className="text-teal-400 text-sm" />
                </div>
                <div>
                  <p className="text-[9px] text-white/40 font-bold uppercase tracking-wide">Career</p>
                  <p className="text-xs font-black text-white">India & International</p>
                </div>
              </motion.div>

              {/* Main Program Card — glassmorphism on dark bg */}
              <div className="bg-white/8 backdrop-blur-xl rounded-[2.2rem] border border-white/15 shadow-2xl shadow-black/40 overflow-hidden">

                {/* Card banner */}
                <div
                  className="relative overflow-hidden px-7 py-7"
                  style={{ background: "linear-gradient(135deg, #0f766e 0%, #0891b2 55%, #065f46 100%)" }}
                >
                  <div className="absolute inset-0 opacity-[0.045]">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="hd" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                          <circle cx="2" cy="2" r="1.1" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#hd)" />
                    </svg>
                  </div>
                  <div className="absolute right-4 top-4 opacity-[0.09]">
                    <svg width="90" height="90" viewBox="0 0 160 160" fill="none">
                      <circle cx="80" cy="80" r="74" stroke="white" strokeWidth="4" />
                      <circle cx="80" cy="80" r="54" stroke="white" strokeWidth="3" />
                      <circle cx="80" cy="80" r="34" stroke="white" strokeWidth="2.5" />
                      <circle cx="80" cy="80" r="14" fill="white" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center shrink-0">
                        <FaUserNurse className="text-white text-xl" />
                      </div>
                      <div>
                        <span className="text-[9px] font-black tracking-[0.22em] uppercase text-teal-200 block mb-1">Diploma Program</span>
                        <h2 className="text-white text-lg font-black leading-tight">General Nursing &<br />Midwifery (G.N.M.)</h2>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        ["Duration", "3 Years + 6 Months Internship", <FaCalendarAlt />],
                        ["Eligibility", "10+2 Science (PCB)", <FaCheckCircle />],
                        ["Min. Marks", "40% Aggregate", <FaChartLine />],
                        ["Admission", "Merit / Entrance Based", <FaClipboardList />],
                      ].map(([label, value, icon]) => (
                        <div key={label} className="flex justify-between items-center gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2">
                            <span className="text-teal-300 text-xs">{icon}</span>
                            <span className="text-teal-100/70 text-xs">{label}</span>
                          </div>
                          <span className="text-white font-bold text-xs text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stat tiles */}
                <div className="grid grid-cols-3 gap-2.5 p-4">
                  {[
                    { val: "3+", label: "Years Program", color: "text-teal-300", bg: "bg-teal-500/15 border-teal-400/25" },
                    { val: "500+", label: "Clinical Hours", color: "text-sky-300", bg: "bg-sky-500/15 border-sky-400/25" },
                    { val: "100%", label: "Placement", color: "text-emerald-300", bg: "bg-emerald-500/15 border-emerald-400/25" },
                  ].map((s) => (
                    <div key={s.label} className={`${s.bg} border rounded-2xl p-3 text-center`}>
                      <p className={`text-xl font-black ${s.color}`}>{s.val}</p>
                      <p className="text-[10px] text-white/50 font-semibold mt-0.5 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA inside card */}
                <div className="px-4 pb-4">
                  <button
                    onClick={openModal}
                    className="w-full bg-teal-500 hover:bg-teal-400 text-white font-extrabold py-3.5 rounded-2xl transition-all shadow-lg shadow-teal-500/20 flex items-center justify-center gap-2 text-sm"
                  >
                    <FaUserNurse /> Enroll Now — Seats Limited <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── FULL-WIDTH INFO STRIP ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.45 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
          >
            {[
              { icon: <FaCalendarAlt />, label: "Duration", value: "3 Yrs + 6 Mo Internship", accent: "bg-teal-500" },
              { icon: <FaCheckCircle />, label: "Eligibility", value: "10+2 PCB — Min. 40%", accent: "bg-sky-500" },
              { icon: <FaUserNurse />, label: "Age Limit", value: "17 to 35 Years", accent: "bg-emerald-500" },
              { icon: <FaClipboardList />, label: "Admission", value: "Merit / Entrance Based", accent: "bg-cyan-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 bg-white/8 backdrop-blur-md rounded-2xl px-4 py-3.5 border border-white/15 shadow-sm relative overflow-hidden group hover:border-teal-400/40 transition-colors">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.accent} rounded-l-2xl`} />
                <span className="text-teal-400 text-sm shrink-0 ml-1">{item.icon}</span>
                <div>
                  <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wide leading-none mb-0.5">{item.label}</p>
                  <p className="text-xs font-bold text-white leading-tight">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── BOTTOM STATS BAR ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.58 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {[
              { num: "3+", label: "Years Program", icon: <FaCalendarAlt />, bg: "bg-teal-500/12 border-teal-400/25", iconBg: "bg-teal-500/20 text-teal-300", num_c: "text-teal-300" },
              { num: "500+", label: "Clinical Hours", icon: <FaStethoscope />, bg: "bg-sky-500/12 border-sky-400/25", iconBg: "bg-sky-500/20 text-sky-300", num_c: "text-sky-300" },
              { num: "10+", label: "Partner Hospitals", icon: <FaHospital />, bg: "bg-emerald-500/12 border-emerald-400/25", iconBg: "bg-emerald-500/20 text-emerald-300", num_c: "text-emerald-300" },
              { num: "24/7", label: "Learning Support", icon: <FaBookMedical />, bg: "bg-cyan-500/12 border-cyan-400/25", iconBg: "bg-cyan-500/20 text-cyan-300", num_c: "text-cyan-300" },
            ].map((s) => (
              <div key={s.label} className={`flex items-center gap-3 ${s.bg} border rounded-2xl px-5 py-4 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow`}>
                <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center text-base shrink-0`}>{s.icon}</div>
                <div>
                  <p className={`text-2xl font-black ${s.num_c} leading-none`}>{s.num}</p>
                  <p className="text-xs text-white/40 font-semibold mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
           ALL REMAINING SECTIONS — unchanged
      ══════════════════════════════════════════════════════════ */}

      {/* COURSE CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCards.map((course, index) => (
            <motion.div key={course.title} initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }} whileHover={{ y: -14 }} className="group bg-white rounded-[2rem] p-7 text-center shadow-xl border border-gray-100 relative overflow-hidden">
              <div className={`absolute inset-x-0 bottom-0 h-2 ${course.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
              <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 ${course.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"} group-hover:scale-110 transition`}>{course.icon}</div>
              <h2 className={`text-2xl font-extrabold mb-3 ${course.color === "blue" ? "text-blue-900" : "text-green-700"}`}>{course.title}</h2>
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-5"><FaCalendarAlt />{course.duration}</div>
              <p className="text-gray-600 leading-7 text-sm min-h-[130px]">{course.desc}</p>
              <button onClick={openModal} className={`mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl border font-bold transition ${course.color === "blue" ? "border-blue-700 text-blue-800 hover:bg-blue-800" : "border-green-600 text-green-700 hover:bg-green-600"} hover:text-white`}>Apply Now <FaArrowRight /></button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PROGRAM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">About Course</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">G.N.M. Nursing Program</h2>
            <p className="text-gray-600 leading-8 mb-7">G.N.M. Nursing is a 3-year diploma program focused on practical nursing care, hospital training, patient communication and professional healthcare service.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Duration: 3 Years + Internship", "Practical Nursing Training", "Hospital Exposure", "Patient Care Skills"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"><FaCheckCircle className="text-green-600" /><p className="text-sm font-semibold text-gray-700">{item}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.15)} className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
            <FaGraduationCap className="text-5xl text-green-600 mb-5" />
            <h3 className="text-2xl font-extrabold text-blue-900 mb-4">Learn. Practice. Serve.</h3>
            <p className="text-gray-600 leading-7">Our college provides a caring and disciplined environment where students develop nursing knowledge, practical skills, communication confidence and professional healthcare values.</p>
            <button onClick={openModal} className="mt-7 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition">Apply for Admission <FaArrowRight /></button>
          </motion.div>
        </div>
      </section>

      {/* STUDENT JOURNEY */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Student Journey</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">From Student to Professional Nurse</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((item, index) => (
              <motion.div key={item.title} {...fadeUp(index * 0.1)} className="bg-white rounded-2xl p-7 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition">
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 text-green-700 font-black flex items-center justify-center mb-5">{index + 1}</div>
                <h3 className="text-xl font-extrabold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Who Can Apply</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Eligibility & Duration</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">G.N.M. Nursing is open to students who meet the criteria set by INC, New Delhi and MUHS, Nashik.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {eligibilityPoints.map((point, index) => (
            <motion.div key={point.title} {...fadeUp(index * 0.1)} className="bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-1 h-full rounded-l-[1.5rem] ${point.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${point.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>{point.icon}</div>
              <h3 className={`text-lg font-extrabold mb-2 ${point.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{point.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{point.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.1)} className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 rounded-[2rem] p-8 text-white">
          <p className="text-green-300 font-bold tracking-widest uppercase text-xs mb-4 text-center">Program Timeline</p>
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[{ label: "Year 1", detail: "Foundation Theory & Lab", icon: "📚" }, { label: "Year 2", detail: "Clinical Postings Begin", icon: "🏥" }, { label: "Year 3", detail: "Advanced Specializations", icon: "🎓" }, { label: "+6 Months", detail: "Compulsory Internship", icon: "🩺" }].map((t) => (
              <div key={t.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
                <p className="text-3xl mb-2">{t.icon}</p>
                <p className="font-black text-lg">{t.label}</p>
                <p className="text-green-200 text-xs mt-1">{t.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SUBJECTS COVERED */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Subjects Covered</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">A comprehensive 3-year curriculum designed to build theoretical knowledge, clinical competence and professional confidence.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {subjectsCovered.map((yr, index) => (
              <motion.div key={yr.year} {...fadeUp(index * 0.12)} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                <div className={`bg-gradient-to-r ${yr.color} px-6 py-6 flex items-center gap-4`}>
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl text-white">{yr.icon}</div>
                  <div>
                    <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Curriculum</p>
                    <h3 className="text-white text-xl font-extrabold">{yr.year}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {yr.subjects.map((sub) => (
                    <div key={sub.name} className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition">
                      <FaCheckCircle className="text-green-600 text-sm mt-1 shrink-0" />
                      <div>
                        <p className="text-gray-800 font-bold text-sm">{sub.name}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{sub.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICAL TRAINING */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Hands-On Learning</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Practical Training</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">Theory alone doesn't make great nurses. Our training gives students maximum real-world clinical exposure from Day 1.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicalTraining.map((item, index) => (
            <motion.div key={item.title} {...fadeUp(index * 0.1)} className="group bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition relative overflow-hidden">
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-[1.5rem] ${item.color === "blue" ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-gradient-to-r from-green-600 to-green-400"}`} />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>{item.icon}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>{item.badge}</span>
              </div>
              <h3 className="text-lg font-extrabold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.15)} className="mt-14 bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[{ value: "500+", label: "Clinical Hours", color: "text-green-700" }, { value: "10+", label: "Affiliated Hospitals", color: "text-blue-800" }, { value: "6", label: "Dept. Rotations", color: "text-green-700" }, { value: "100%", label: "Internship Completion", color: "text-blue-800" }].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className={`text-4xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">After Graduation</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Career Opportunities</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">A G.N.M. degree opens doors to a wide range of rewarding healthcare roles across India and internationally.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {careerOpportunities.map((item, index) => (
              <motion.div key={item.role} {...fadeUp(index * 0.08)} className="group bg-white rounded-[1.5rem] p-6 shadow-xl border border-gray-100 hover:-translate-y-2 transition text-center relative overflow-hidden">
                <div className={`absolute inset-x-0 bottom-0 h-1 ${item.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"} group-hover:scale-110 transition`}>{item.icon}</div>
                <h3 className={`font-extrabold text-base mb-1 ${item.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{item.role}</h3>
                <p className="text-gray-500 text-xs leading-5">{item.place}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(0.1)} className="bg-gradient-to-br from-[#083344] to-[#0f766e] rounded-[2rem] p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Build Your Healthcare Career?</h3>
              <p className="text-green-200 leading-7 max-w-xl">Our placement cell actively assists graduates with job placements in top hospitals, government institutions and international healthcare opportunities.</p>
            </div>
            <button onClick={openModal} className="shrink-0 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-green-100 transition shadow-lg flex items-center gap-2 whitespace-nowrap">Apply Now <FaArrowRight /></button>
          </motion.div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">How to Join</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Admission Process</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">Our admission process is simple, transparent and student-friendly. Follow these easy steps to secure your seat.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {admissionSteps.map((step, index) => (
            <motion.div key={step.step} {...fadeUp(index * 0.1)} className="group bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition relative overflow-hidden">
              <div className={`absolute top-6 right-6 text-6xl font-black opacity-5 ${step.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{step.step}</div>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${step.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>{step.icon}</div>
                <span className={`text-2xl font-black ${step.color === "blue" ? "text-blue-200" : "text-green-200"}`}>{step.step}</span>
              </div>
              <h3 className={`text-lg font-extrabold mb-3 ${step.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{step.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeUp(0.1)} className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-xl"><FaFileAlt /></div>
            <h3 className="text-2xl font-extrabold text-blue-900">Documents Required</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["10th Marksheet & Certificate", "12th (PCB) Marksheet & Certificate", "Transfer Certificate (TC)", "Aadhar Card / Government ID Proof", "Passport-size Photographs (6 copies)", "Caste Certificate (if applicable)", "Medical Fitness Certificate", "Migration Certificate (if applicable)", "Character Certificate from School"].map((doc) => (
              <div key={doc} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <FaCheckCircle className="text-green-600 shrink-0" />
                <p className="text-sm font-semibold text-gray-700">{doc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={openModal} className="bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition">Start Application <FaArrowRight /></button>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-blue-900 px-8 py-4 rounded-xl font-bold hover:border-green-500 transition"><FaPhoneAlt /> Contact Admission Office</a>
          </div>
        </motion.div>
      </section>

      {/* ELIGIBILITY COMPACT */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Admission Details</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">Eligibility Criteria</h2>
              <p className="text-gray-600 leading-8">Students who want to start a professional healthcare career can apply after completing the required eligibility criteria.</p>
              <button onClick={openModal} className="mt-7 bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition">Apply Now <FaArrowRight /></button>
            </motion.div>
            <motion.div {...fadeUp(0.15)} className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
              {eligibility.map((row) => (
                <div key={row.label} className="flex justify-between gap-5 py-4 border-b border-gray-100 last:border-0">
                  <p className="text-gray-500 font-semibold text-sm">{row.label}</p>
                  <p className="text-blue-900 font-extrabold text-sm text-right">{row.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Year-wise Syllabus Overview</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {syllabus.map((year, index) => (
              <motion.div key={year.year} {...fadeUp(index * 0.12)} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                <div className="bg-gradient-to-r from-blue-900 to-green-700 px-6 py-5">
                  <h3 className="text-white text-xl font-extrabold">{year.year}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {year.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 text-sm" />
                      <p className="text-gray-700 font-semibold text-sm">{subject}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT BAR */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-green-100 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-green-50 transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-2xl text-blue-800">{item.icon}</div>
              <div>
                <h3 className="font-extrabold text-blue-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-700 to-blue-900" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">Start Your G.N.M. Nursing Career Today</h2>
            <p className="text-blue-100 text-base mb-10 leading-7">Join a nursing institute focused on care, clinical skills and professional healthcare growth.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openModal} className="bg-white text-blue-900 font-bold px-9 py-4 rounded-full hover:bg-blue-50 transition shadow-lg flex items-center gap-2">Apply Now <FaArrowRight /></button>
              <a href="/contact" className="border-2 border-white text-white font-bold px-9 py-4 rounded-full hover:bg-white/10 transition">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      <ApplyModal open={openApplyModal} onClose={() => setOpenApplyModal(false)} />
    </div>
  );
}