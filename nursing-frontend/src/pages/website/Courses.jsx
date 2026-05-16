import Modal from "../../components/ui/Modal";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaUserNurse,
  FaHospital,
  FaBookMedical,
  FaArrowRight,
  FaCalendarAlt,
  FaGraduationCap,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaBriefcaseMedical,
  FaHeartbeat,
  FaFileAlt,
  FaPhoneAlt,
  FaHandshake,
  FaTrophy,
  FaGlobe,
  FaFlask,
  FaUserMd,
  FaBaby,
  FaBrain,
  FaAmbulance,
} from "react-icons/fa";

const courseCards = [
  {
    title: "G.N.M Nursing Program",
    duration: "3 Years Professional Course",
    desc: "Build strong clinical knowledge, patient care expertise and professional nursing skills through a career-focused curriculum.",
    icon: <FaUserNurse />,
    color: "green",
  },
  {
    title: "Advanced Clinical Training",
    duration: "Hospital Exposure",
    desc: "Gain real-time hospital experience with clinical rotations, patient interaction and supervised practical sessions.",
    icon: <FaStethoscope />,
    color: "blue",
  },
  {
    title: "Modern Nursing Laboratories",
    duration: "Hands-on Practice",
    desc: "Practice confidently in modern nursing labs equipped with advanced healthcare learning tools and demonstrations.",
    icon: <FaHospital />,
    color: "green",
  },
  {
    title: "Career & Placement Support",
    duration: "100% Guidance",
    desc: "Get expert mentorship, interview preparation and placement assistance for a successful healthcare career.",
    icon: <FaGraduationCap />,
    color: "blue",
  },
];


const highlights = [
  {
    icon: <FaHospital />,
    title: "Recognized & Affiliated",
    desc: "Approved by INC, New Delhi and affiliated to MUHS, Nashik.",
  },
  {
    icon: <FaBookMedical />,
    title: "Expert Faculty",
    desc: "Learn from experienced and dedicated teaching professionals.",
  },
  {
    icon: <FaStethoscope />,
    title: "Clinical Exposure",
    desc: "Hands-on training in hospitals and healthcare institutions.",
  },
  {
    icon: <FaChartLine />,
    title: "Career Opportunities",
    desc: "Placement support and global career opportunities for graduates.",
  },
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
  {
    year: "Year 1",
    subjects: [
      "Anatomy & Physiology",
      "Fundamentals of Nursing",
      "Nutrition & Biochemistry",
      "Microbiology",
    ],
  },
  {
    year: "Year 2",
    subjects: [
      "Medical-Surgical Nursing",
      "Pharmacology",
      "Community Health Nursing",
      "Child Health Nursing",
    ],
  },
  {
    year: "Year 3",
    subjects: [
      "Mental Health Nursing",
      "Midwifery & Obstetric Nursing",
      "Nursing Management",
      "Research & Statistics",
    ],
  },
];

// ─── NEW DATA ───────────────────────────────────────────────────────────────

const eligibilityPoints = [
  {
    icon: <FaClipboardList />,
    title: "Educational Qualification",
    desc: "Passed 10+2 (Higher Secondary) with Physics, Chemistry and Biology as core subjects from a recognized board.",
    color: "green",
  },
  {
    icon: <FaChartLine />,
    title: "Minimum Marks Required",
    desc: "Must have secured at least 40% aggregate marks in PCB (Physics, Chemistry & Biology) subjects.",
    color: "blue",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Age Criteria",
    desc: "Candidates must be between 17 to 35 years of age at the time of admission as per INC norms.",
    color: "green",
  },
  {
    icon: <FaFileAlt />,
    title: "Program Duration",
    desc: "3 Years of academic study followed by a compulsory 6-month internship in an affiliated hospital.",
    color: "blue",
  },
  {
    icon: <FaHandshake />,
    title: "Admission Process",
    desc: "Admission is based on merit or entrance examination as per the guidelines of MUHS, Nashik and INC, New Delhi.",
    color: "green",
  },
  {
    icon: <FaUserNurse />,
    title: "Language Proficiency",
    desc: "Basic proficiency in English and Marathi is recommended for effective communication in clinical settings.",
    color: "blue",
  },
];

const subjectsCovered = [
  {
    icon: <FaHeartbeat />,
    year: "Foundation (Year 1)",
    color: "from-blue-900 to-blue-700",
    subjects: [
      { name: "Anatomy & Physiology", detail: "Human body structure & organ systems" },
      { name: "Fundamentals of Nursing", detail: "Core nursing principles & basic procedures" },
      { name: "Nutrition & Biochemistry", detail: "Dietary science & metabolic processes" },
      { name: "Microbiology", detail: "Infection control & pathogen study" },
      { name: "Psychology & Sociology", detail: "Human behavior & social healthcare context" },
      { name: "English & Communication", detail: "Professional language & patient interaction" },
    ],
  },
  {
    icon: <FaBriefcaseMedical />,
    year: "Clinical (Year 2)",
    color: "from-green-700 to-green-500",
    subjects: [
      { name: "Medical-Surgical Nursing", detail: "Adult patient care & surgical procedures" },
      { name: "Pharmacology", detail: "Drugs, dosage & medication administration" },
      { name: "Community Health Nursing", detail: "Primary care & public health programs" },
      { name: "Child Health Nursing", detail: "Pediatric care & child development" },
      { name: "Mental Health Nursing", detail: "Psychiatric conditions & therapeutic care" },
      { name: "First Aid & Emergency Care", detail: "Life-saving techniques & triage" },
    ],
  },
  {
    icon: <FaUserMd />,
    year: "Advanced (Year 3)",
    color: "from-blue-700 to-green-600",
    subjects: [
      { name: "Midwifery & Obstetric Nursing", detail: "Maternal care, labour & delivery" },
      { name: "Nursing Management", detail: "Ward management & leadership skills" },
      { name: "Research & Statistics", detail: "Evidence-based nursing & data analysis" },
      { name: "Geriatric Nursing", detail: "Elderly patient care & chronic conditions" },
      { name: "Palliative & Holistic Care", detail: "End-of-life care & patient dignity" },
      { name: "Nursing Ethics & Law", detail: "Professional code of conduct & legal aspects" },
    ],
  },
];

const practicalTraining = [
  {
    icon: <FaFlask />,
    title: "Nursing Skill Labs",
    desc: "State-of-the-art skill labs equipped with manikins, simulation beds and medical equipment to practice procedures before clinical postings.",
    badge: "On Campus",
    color: "green",
  },
  {
    icon: <FaHospital />,
    title: "Hospital Clinical Postings",
    desc: "Regular rotations in affiliated government and private hospitals covering OPD, IPD, OT, ICU, labour room and emergency wards.",
    badge: "Hospital Based",
    color: "blue",
  },
  {
    icon: <FaBaby />,
    title: "Midwifery & OB Training",
    desc: "Hands-on exposure in maternity wards including antenatal care, normal delivery assistance, postnatal care and newborn nursing.",
    badge: "Maternity Ward",
    color: "green",
  },
  {
    icon: <FaBrain />,
    title: "Mental Health Posting",
    desc: "Dedicated psychiatric nursing postings where students learn therapeutic communication, patient counselling and mental health assessment.",
    badge: "Psychiatry Unit",
    color: "blue",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency & ICU Training",
    desc: "Exposure to emergency care, life-saving procedures, ventilator care and critical patient monitoring in ICU settings.",
    badge: "Critical Care",
    color: "green",
  },
  {
    icon: <FaHeartbeat />,
    title: "Community Health Camps",
    desc: "Field postings in rural and urban communities for health education, immunization drives, maternal care and public health programs.",
    badge: "Community",
    color: "blue",
  },
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
  {
    step: "01",
    title: "Check Eligibility",
    desc: "Verify you meet the qualification criteria — 10+2 with PCB, minimum 40% marks and age between 17–35 years.",
    icon: <FaClipboardList />,
    color: "blue",
  },
  {
    step: "02",
    title: "Fill Application Form",
    desc: "Complete the online or offline application form with accurate personal, academic and contact details.",
    icon: <FaFileAlt />,
    color: "green",
  },
  {
    step: "03",
    title: "Submit Documents",
    desc: "Upload or submit 10th & 12th marksheets, transfer certificate, ID proof, passport photos and caste certificate if applicable.",
    icon: <FaBookMedical />,
    color: "blue",
  },
  {
    step: "04",
    title: "Merit / Entrance",
    desc: "Admission is finalized based on merit list or entrance examination score as per MUHS and INC guidelines.",
    icon: <FaChartLine />,
    color: "green",
  },
  {
    step: "05",
    title: "Counselling & Seat Allotment",
    desc: "Attend counselling session for seat confirmation. Selected candidates receive an admission offer letter.",
    icon: <FaHandshake />,
    color: "blue",
  },
  {
    step: "06",
    title: "Pay Fees & Confirm",
    desc: "Pay the admission fee, complete the formalities and confirm your seat. Your nursing journey begins!",
    icon: <FaTrophy />,
    color: "green",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function Courses() {
  const [openApplyModal, setOpenApplyModal] = useState(false);
  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="min-h-screen bg-[#f8fbff] overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-24 bg-[#f7fbff] overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-[#e0f7ef] to-[#dbeafe] rounded-bl-[160px]" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/40 rounded-full blur-2xl" />
        <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-green-100 rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-700 text-xs font-bold tracking-widest uppercase">Admission Open</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#082f49] leading-tight">
                G.N.M. Nursing <br /><span className="text-green-600">Career Program</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
                Build your nursing career through practical training, clinical exposure, patient care skills and professional healthcare guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={openModal} className="bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition inline-flex items-center gap-2">
                  Apply Now <FaArrowRight />
                </button>
                <a href="#eligibility" className="bg-white text-[#082f49] border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-green-500 transition">
                  View Eligibility
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.9 }} className="relative">
              <div className="bg-white rounded-[2rem] shadow-2xl p-6 border border-slate-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#083344] to-[#0f766e] p-8 text-white">
                  <FaUserNurse className="text-6xl text-green-300 mb-8" />
                  <p className="text-green-200 text-xs font-bold tracking-widest uppercase mb-3">Course Details</p>
                  <h2 className="text-3xl font-black mb-6">General Nursing & Midwifery</h2>
                  <div className="space-y-4">
                    {[
                      ["Duration", "3 Years + 6 Months Internship"],
                      ["Eligibility", "10+2 Science (PCB)"],
                      ["Minimum Marks", "40% Aggregate"],
                      ["Admission", "Merit / Entrance Based"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-4 border-b border-white/15 pb-3">
                        <span className="text-green-100 text-sm">{label}</span>
                        <span className="font-bold text-sm text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="bg-green-50 rounded-xl p-4"><p className="text-xl font-black text-green-700">01</p><p className="text-xs text-gray-500">Course</p></div>
                  <div className="bg-blue-50 rounded-xl p-4"><p className="text-xl font-black text-blue-800">3+</p><p className="text-xs text-gray-500">Years</p></div>
                  <div className="bg-green-50 rounded-xl p-4"><p className="text-xl font-black text-green-700">100%</p><p className="text-xs text-gray-500">Practical</p></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COURSE CARDS ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCards.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="group bg-white rounded-[2rem] p-7 text-center shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div className={`absolute inset-x-0 bottom-0 h-2 ${course.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
              <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 ${course.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"} group-hover:scale-110 transition`}>
                {course.icon}
              </div>
              <h2 className={`text-2xl font-extrabold mb-3 ${course.color === "blue" ? "text-blue-900" : "text-green-700"}`}>{course.title}</h2>
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-5">
                <FaCalendarAlt />{course.duration}
              </div>
              <p className="text-gray-600 leading-7 text-sm min-h-[130px]">{course.desc}</p>
              <button onClick={openModal} className={`mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl border font-bold transition ${course.color === "blue" ? "border-blue-700 text-blue-800 hover:bg-blue-800" : "border-green-600 text-green-700 hover:bg-green-600"} hover:text-white`}>
                Apply Now <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ABOUT PROGRAM ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">About Course</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">G.N.M. Nursing Program</h2>
            <p className="text-gray-600 leading-8 mb-7">
              G.N.M. Nursing is a 3-year diploma program focused on practical nursing care, hospital training, patient communication and professional healthcare service.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Duration: 3 Years + Internship", "Practical Nursing Training", "Hospital Exposure", "Patient Care Skills"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <FaCheckCircle className="text-green-600" />
                  <p className="text-sm font-semibold text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
            <FaGraduationCap className="text-5xl text-green-600 mb-5" />
            <h3 className="text-2xl font-extrabold text-blue-900 mb-4">Learn. Practice. Serve.</h3>
            <p className="text-gray-600 leading-7">
              Our college provides a caring and disciplined environment where students develop nursing knowledge, practical skills, communication confidence and professional healthcare values.
            </p>
            <button onClick={openModal} className="mt-7 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition">
              Apply for Admission <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── STUDENT JOURNEY ──────────────────────────────────────────────── */}
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

      {/* ══════════════════════════════════════════════════════════════════════
          ✅ NEW SECTION 1 — ELIGIBILITY & DURATION (DETAILED)
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="eligibility" className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Who Can Apply</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Eligibility & Duration</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            G.N.M. Nursing is open to students who meet the criteria set by INC, New Delhi and MUHS, Nashik. Check if you qualify below.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {eligibilityPoints.map((point, index) => (
            <motion.div
              key={point.title}
              {...fadeUp(index * 0.1)}
              className="bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-1 h-full rounded-l-[1.5rem] ${point.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 ${point.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>
                {point.icon}
              </div>
              <h3 className={`text-lg font-extrabold mb-2 ${point.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{point.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{point.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Duration Timeline Banner */}
        <motion.div {...fadeUp(0.1)} className="bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 rounded-[2rem] p-8 text-white">
          <p className="text-green-300 font-bold tracking-widest uppercase text-xs mb-4 text-center">Program Timeline</p>
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            {[
              { label: "Year 1", detail: "Foundation Theory & Lab", icon: "📚" },
              { label: "Year 2", detail: "Clinical Postings Begin", icon: "🏥" },
              { label: "Year 3", detail: "Advanced Specializations", icon: "🎓" },
              { label: "+6 Months", detail: "Compulsory Internship", icon: "🩺" },
            ].map((t) => (
              <div key={t.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
                <p className="text-3xl mb-2">{t.icon}</p>
                <p className="font-black text-lg">{t.label}</p>
                <p className="text-green-200 text-xs mt-1">{t.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ✅ NEW SECTION 2 — SUBJECTS COVERED
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Curriculum</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Subjects Covered</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
              A comprehensive 3-year curriculum designed to build theoretical knowledge, clinical competence and professional confidence in every student.
            </p>
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

      {/* ══════════════════════════════════════════════════════════════════════
          ✅ NEW SECTION 3 — PRACTICAL TRAINING
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Hands-On Learning</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Practical Training</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            Theory alone doesn't make great nurses. Our training is structured to give students maximum real-world clinical exposure from Day 1.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practicalTraining.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp(index * 0.1)}
              className="group bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition relative overflow-hidden"
            >
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-[1.5rem] ${item.color === "blue" ? "bg-gradient-to-r from-blue-600 to-blue-400" : "bg-gradient-to-r from-green-600 to-green-400"}`} />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-blue-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div {...fadeUp(0.15)} className="mt-14 bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Clinical Hours", color: "text-green-700" },
              { value: "10+", label: "Affiliated Hospitals", color: "text-blue-800" },
              { value: "6", label: "Dept. Rotations", color: "text-green-700" },
              { value: "100%", label: "Internship Completion", color: "text-blue-800" },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className={`text-4xl font-black ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-gray-500 text-sm font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ✅ NEW SECTION 4 — CAREER OPPORTUNITIES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">After Graduation</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Career Opportunities</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
              A G.N.M. degree opens doors to a wide range of rewarding healthcare roles across India and internationally.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {careerOpportunities.map((item, index) => (
              <motion.div
                key={item.role}
                {...fadeUp(index * 0.08)}
                className="group bg-white rounded-[1.5rem] p-6 shadow-xl border border-gray-100 hover:-translate-y-2 transition text-center relative overflow-hidden"
              >
                <div className={`absolute inset-x-0 bottom-0 h-1 ${item.color === "blue" ? "bg-blue-700" : "bg-green-600"}`} />
                <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 ${item.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"} group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <h3 className={`font-extrabold text-base mb-1 ${item.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{item.role}</h3>
                <p className="text-gray-500 text-xs leading-5">{item.place}</p>
              </motion.div>
            ))}
          </div>

          {/* Career CTA Card */}
          <motion.div {...fadeUp(0.1)} className="bg-gradient-to-br from-[#083344] to-[#0f766e] rounded-[2rem] p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">Ready to Build Your Healthcare Career?</h3>
              <p className="text-green-200 leading-7 max-w-xl">
                Our placement cell actively assists graduates with job placements in top hospitals, government institutions and international healthcare opportunities.
              </p>
            </div>
            <button onClick={openModal} className="shrink-0 bg-white text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-green-100 transition shadow-lg flex items-center gap-2 whitespace-nowrap">
              Apply Now <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          ✅ NEW SECTION 5 — ADMISSION PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="text-green-600 font-bold tracking-widest uppercase mb-3">How to Join</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Admission Process</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-7">
            Our admission process is simple, transparent and student-friendly. Follow these easy steps to secure your seat in the G.N.M. program.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.step}
              {...fadeUp(index * 0.1)}
              className="group bg-white rounded-[1.5rem] p-7 shadow-xl border border-gray-100 hover:-translate-y-2 transition relative overflow-hidden"
            >
              <div className={`absolute top-6 right-6 text-6xl font-black opacity-5 ${step.color === "blue" ? "text-blue-900" : "text-green-800"}`}>
                {step.step}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${step.color === "blue" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-700"}`}>
                  {step.icon}
                </div>
                <span className={`text-2xl font-black ${step.color === "blue" ? "text-blue-200" : "text-green-200"}`}>{step.step}</span>
              </div>
              <h3 className={`text-lg font-extrabold mb-3 ${step.color === "blue" ? "text-blue-900" : "text-green-800"}`}>{step.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Documents Required */}
        <motion.div {...fadeUp(0.1)} className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8">
          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 text-xl"><FaFileAlt /></div>
            <h3 className="text-2xl font-extrabold text-blue-900">Documents Required</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "10th Marksheet & Certificate",
              "12th (PCB) Marksheet & Certificate",
              "Transfer Certificate (TC)",
              "Aadhar Card / Government ID Proof",
              "Passport-size Photographs (6 copies)",
              "Caste Certificate (if applicable)",
              "Medical Fitness Certificate",
              "Migration Certificate (if applicable)",
              "Character Certificate from School",
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <FaCheckCircle className="text-green-600 shrink-0" />
                <p className="text-sm font-semibold text-gray-700">{doc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={openModal} className="bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition">
              Start Application <FaArrowRight />
            </button>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white border border-gray-200 text-blue-900 px-8 py-4 rounded-xl font-bold hover:border-green-500 transition">
              <FaPhoneAlt /> Contact Admission Office
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── ELIGIBILITY (Original Compact Table) ─────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-green-600 font-bold tracking-widest uppercase mb-3">Admission Details</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">Eligibility Criteria</h2>
              <p className="text-gray-600 leading-8">
                Students who want to start a professional healthcare career can apply after completing the required eligibility criteria.
              </p>
              <button onClick={openModal} className="mt-7 bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition">
                Apply Now <FaArrowRight />
              </button>
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

      {/* ── SYLLABUS ─────────────────────────────────────────────────────── */}
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

      {/* ── HIGHLIGHT BAR ────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div {...fadeUp(0)} className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-green-100 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-green-50 transition">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-2xl text-blue-800">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-blue-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-700 to-blue-900" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Start Your G.N.M. Nursing Career Today
            </h2>
            <p className="text-blue-100 text-base mb-10 leading-7">
              Join a nursing institute focused on care, clinical skills and professional healthcare growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={openModal} className="bg-white text-blue-900 font-bold px-9 py-4 rounded-full hover:bg-blue-50 transition shadow-lg flex items-center gap-2">
                Apply Now <FaArrowRight />
              </button>
              <a href="/contact" className="border-2 border-white text-white font-bold px-9 py-4 rounded-full hover:bg-white/10 transition">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

   <Modal
  open={openApplyModal}
  onClose={() => setOpenApplyModal(false)}
/>
    </div>
  );
}