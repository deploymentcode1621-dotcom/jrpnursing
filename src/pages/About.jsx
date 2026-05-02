import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApplyModal from "../components/ApplyModal";

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -45 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 45 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const stats = [
  { value: "33+", label: "Years of Excellence" },
  { value: "1200+", label: "Students Trained" },
  { value: "100%", label: "Placement Support" },
  { value: "20+", label: "Awards & Recognition" },
];

const chooseUs = [
  {
    no: "01",
    title: "Quality Education",
    desc: "Strong academic foundation with practical exposure that prepares students for real-world healthcare challenges.",
  },
  {
    no: "02",
    title: "Experienced Faculty",
    desc: "Highly qualified faculty members with strong clinical and teaching experience guide every student.",
  },
  {
    no: "03",
    title: "Practical Training",
    desc: "Hands-on training in well-equipped labs and leading hospitals builds real clinical confidence.",
  },
  {
    no: "04",
    title: "Holistic Development",
    desc: "We focus on personality development, leadership skills and emotional intelligence.",
  },
];

const journey = [
  {
    year: "1992",
    title: "Foundation Stone Laid",
    desc: "Swami Vivekanand Nursing College was established with a vision to uplift nursing education in Maharashtra.",
  },
  {
    year: "1995",
    title: "First Batch Graduates",
    desc: "Our pioneering first batch of GNM nurses graduated and stepped into healthcare across the country.",
  },
  {
    year: "2000",
    title: "INC Recognition",
    desc: "Received prestigious recognition from the Indian Nursing Council (INC), New Delhi.",
  },
  {
    year: "2005",
    title: "MUHS Affiliation",
    desc: "Formally affiliated with Maharashtra University of Health Sciences (MUHS), Nashik.",
  },
  {
    year: "2010",
    title: "Hospital Tie-ups Expanded",
    desc: "Partnered with leading hospitals and healthcare institutions for enhanced clinical training.",
  },
  {
    year: "2018",
    title: "Modern Lab Infrastructure",
    desc: "Inaugurated nursing skill labs, simulation rooms and a digital library.",
  },
  {
    year: "2025",
    title: "33 Years & Counting",
    desc: "Over 1200+ nurses trained. A legacy of compassion and clinical excellence.",
  },
];

const clinicalAreas = [
  "Medical-Surgical Nursing",
  "Paediatric & Neonatal Care",
  "Obstetrics & Midwifery",
  "Mental Health Nursing",
  "Emergency & Critical Care",
  "Community Health Nursing",
];

const hospitals = [
  { name: "Civil Hospital, Bhiwandi", type: "Government", beds: "500+ Beds" },
  { name: "Indira Gandhi Memorial Hospital", type: "Government", beds: "300+ Beds" },
  { name: "Apex Multispeciality Hospital", type: "Private", beds: "200+ Beds" },
  { name: "Sanjeevani Medical Centre", type: "Private", beds: "150+ Beds" },
  { name: "Community Health Centre", type: "PHC/CHC", beds: "Rural Wing" },
  { name: "Metro Care Hospital", type: "Private", beds: "250+ Beds" },
];

const faculty = [
  { name: "Dr. Sunita Patil", role: "Principal", qual: "Ph.D. in Nursing", exp: "25+ Years", avatar: "SP" },
  { name: "Mrs. Neha Sharma", role: "Vice Principal", qual: "M.Sc. Nursing", exp: "20+ Years", avatar: "NS" },
  { name: "Dr. Rajesh Kumar", role: "Professor", qual: "Ph.D. Medical Surgical Nursing", exp: "18+ Years", avatar: "RK" },
  { name: "Mrs. Priya Deshmukh", role: "Professor", qual: "M.Sc. Community Health Nursing", exp: "16+ Years", avatar: "PD" },
  { name: "Mrs. Kavita More", role: "Associate Professor", qual: "M.Sc. Obstetrics & Gynaecology", exp: "14+ Years", avatar: "KM" },
  { name: "Mr. Amit Yadav", role: "Assistant Professor", qual: "M.Sc. Mental Health Nursing", exp: "10+ Years", avatar: "AY" },
];

export default function About() {
  const [activeHospital, setActiveHospital] = useState(null);
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="bg-[#f7fbfb] pt-20 overflow-hidden">
      {/* SPLIT HERO */}
      <section className="relative bg-[#eef9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeLeft} initial="hidden" animate="show">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-5">
              <span className="w-2 h-2 bg-[#0f9f8f] rounded-full" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#0f766e]">
                About Our Institution
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#102a43] leading-tight mb-6">
              Building Skilled Nurses With{" "}
              <span className="text-[#0f9f8f]">Compassion</span>
            </h1>

            <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-8">
              Shaping competent, compassionate and confident nurses who make a difference in healthcare and society.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-slate-500 hover:text-[#0f9f8f]">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <span className="font-bold text-[#102a43]">About Us</span>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" animate="show" className="relative">
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#b7f7e9]" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#bfdbfe]" />

            <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80"
                alt="Nursing education"
                className="w-full h-[430px] object-cover rounded-[2rem]"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-7 left-8 bg-[#102a43] text-white rounded-3xl px-7 py-5 shadow-xl"
              >
                <p className="text-4xl font-black">33+</p>
                <p className="text-xs text-slate-200 font-semibold">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO + STATS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8"
        >
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg border border-[#dff3ee]">
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-4">
              Who We Are
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43] mb-6">
              Dedicated to Shaping Future Healthcare Heroes
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              Swami Vivekanand Nursing College is dedicated to shaping competent, compassionate and confident nurses who can make a difference in the healthcare industry and society. We provide quality education, modern infrastructure and holistic development to empower our students for a successful and meaningful career.
            </p>

            <p className="text-slate-600 leading-relaxed mb-7">
              Established with a vision to provide world-class nursing education, our institution has grown to become one of the most respected nursing colleges in Maharashtra. We are approved by INC, New Delhi and affiliated to Maharashtra University of Health Sciences (MUHS), Nashik.
            </p>

            <div className="flex flex-wrap gap-3">
              {["INC Approved", "MUHS Affiliated", "GNM Nursing", "Clinical Training"].map((item) => (
                <span
                  key={item}
                  className="bg-[#ecfdf5] text-[#0f766e] px-4 py-2 rounded-full text-xs font-black border border-[#b7f7e9]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-6 shadow-md border border-[#dff3ee]"
              >
                <p className="text-3xl font-black text-[#0f9f8f]">{s.value}</p>
                <p className="text-slate-500 text-xs font-bold mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="py-20 bg-[#102a43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-6 shadow-2xl"
          >
            <div className="h-80 rounded-[1.5rem] bg-gradient-to-br from-[#dff3ee] to-[#dbeafe] flex items-center justify-center text-7xl font-black text-[#0f9f8f]">
              SP
            </div>
            <div className="pt-5 text-center">
              <h3 className="text-[#102a43] font-black text-xl">Dr. Sunita Patil</h3>
              <p className="text-[#0f9f8f] font-bold text-sm">Principal</p>
              <p className="text-slate-500 text-xs mt-1">Ph.D. in Nursing • 25+ Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-[#7dd3c7] text-xs font-black tracking-[0.22em] uppercase mb-4">
              Principal Message
            </p>

            <h2 className="text-white text-3xl sm:text-4xl font-black mb-6">
              Education With Discipline, Care & Clinical Confidence
            </h2>

            <p className="text-slate-300 leading-relaxed mb-5">
              Our aim is to create nurses who are not only academically strong but also compassionate, disciplined and confident in clinical practice. We believe nursing is a noble profession where knowledge, skill and humanity work together.
            </p>

            <p className="text-slate-300 leading-relaxed mb-7">
              Through quality teaching, hospital exposure and value-based learning, we prepare students to serve society with dedication and excellence.
            </p>

            <div className="font-serif text-3xl text-white">Dr. Sunita Patil</div>
            <p className="text-[#7dd3c7] text-sm font-bold mt-1">Principal</p>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#f7fbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43]">
              A Professional Pathway Into Nursing
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {chooseUs.map((item) => (
              <motion.div
                key={item.no}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="bg-white rounded-3xl p-6 sm:p-7 shadow-md border border-[#dff3ee] flex flex-col sm:flex-row gap-5 sm:items-center"
              >
                <div className="text-5xl font-black text-[#dff3ee]">{item.no}</div>
                <div>
                  <h3 className="text-[#102a43] font-black text-xl mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Our Legacy
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43]">
              33 Years of Shaping Nurses
            </h2>
          </motion.div>

          <div className="relative border-l-4 border-[#0f9f8f] pl-8 space-y-8">
            {journey.map((item) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative bg-[#f7fbfb] rounded-3xl p-6 shadow-md border border-[#dff3ee]"
              >
                <div className="absolute -left-[51px] top-7 w-9 h-9 rounded-full bg-[#0f9f8f] border-4 border-white shadow-lg" />
                <span className="inline-block bg-[#102a43] text-white px-4 py-1 rounded-full text-xs font-black mb-3">
                  {item.year}
                </span>
                <h3 className="text-[#102a43] font-black text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL TRAINING */}
      <section className="py-20 bg-[#eef9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Clinical Training
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43] mb-8">
              Training Areas Covered
            </h2>

            <div className="space-y-4">
              {clinicalAreas.map((area, index) => (
                <motion.div
                  key={area}
                  whileHover={{ x: 8 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-[#dff3ee] flex items-center gap-4"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#0f9f8f] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </span>
                  <p className="font-bold text-[#102a43]">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Hospital Affiliations
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43] mb-8">
              Practical Exposure Network
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hospitals.map((h, i) => (
                <motion.div
                  key={h.name}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveHospital(activeHospital === i ? null : i)}
                  className="bg-white rounded-3xl p-5 shadow-md border border-[#dff3ee] cursor-pointer"
                >
                  <p className="font-black text-[#102a43] text-sm mb-2">{h.name}</p>
                  <p className="text-[#0f9f8f] text-xs font-bold">{h.type}</p>

                  {activeHospital === i && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-500 text-xs mt-3"
                    >
                      Capacity: <b>{h.beds}</b>
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Our Foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43]">
              Vision, Mission & Values
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Our Vision",
                text: "To be a premier nursing institution recognized for academic excellence, clinical competence and compassionate care.",
              },
              {
                title: "Our Mission",
                text: "To deliver quality nursing education and healthcare services with compassion, integrity and excellence.",
              },
              {
                title: "Our Values",
                text: "Compassion, Integrity, Excellence, Teamwork, Innovation and Respect for human dignity guide every decision.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={zoomIn}
                whileHover={{ y: -10 }}
                className="rounded-[2rem] bg-[#f7fbfb] p-8 border border-[#dff3ee] shadow-md"
              >
                <h3 className="text-[#102a43] font-black text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-20 bg-[#f7fbfb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
            <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
              Our Faculty
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#102a43]">
              Meet Our Expert Team
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {faculty.map((f) => (
              <motion.div
                key={f.name}
                variants={zoomIn}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-5 shadow-md border border-[#dff3ee] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0f9f8f] text-white flex items-center justify-center mx-auto mb-4 font-black">
                  {f.avatar}
                </div>
                <h3 className="text-[#102a43] font-black text-xs">{f.name}</h3>
                <p className="text-[#0f9f8f] font-bold text-[10px] mt-1">{f.role}</p>
                <p className="text-slate-400 text-[10px] mt-1">{f.qual}</p>
                <p className="text-slate-500 text-[10px] font-bold mt-1">{f.exp}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#eef9f7] px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 sm:p-14 shadow-xl border border-[#dff3ee] text-center"
        >
          <p className="text-[#0f9f8f] text-xs font-black tracking-[0.22em] uppercase mb-3">
            Admissions Open
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#102a43] mb-4">
            Start Your Nursing Journey With Us
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto mb-8">
            Take the first step towards a rewarding career in nursing. Admissions for 2026 are open now.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={openModal}
              className="bg-[#0f9f8f] text-white px-8 py-3 rounded-xl font-black text-sm shadow-lg hover:bg-[#0f766e] transition-all"
            >
              Apply Now →
            </button>

            <Link
              to="/contact"
              className="bg-[#102a43] text-white px-8 py-3 rounded-xl font-black text-sm shadow-lg hover:bg-[#1f3f5f] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />
    </div>
  );
}