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
} from "react-icons/fa";
import ApplyModal from "../components/ApplyModal";

const courseCards = [
  {
    title: "G.N.M. Focused",
    duration: "Single Course Excellence",
    desc: "Dedicated nursing education focused on practical learning, discipline and professional healthcare skills.",
    icon: <FaUserNurse />,
    color: "green",
  },
  {
    title: "Clinical Training",
    duration: "From Year 1",
    desc: "Real hospital exposure, clinical rotations and hands-on patient care training for students.",
    icon: <FaStethoscope />,
    color: "blue",
  },
  {
    title: "Modern Labs",
    duration: "Practical Learning",
    desc: "Well-equipped nursing skill labs for demonstrations, practice and confidence building.",
    icon: <FaHospital />,
    color: "green",
  },
  {
    title: "Career Support",
    duration: "Placement Guidance",
    desc: "Admission guidance, career support and job assistance for healthcare career growth.",
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
  {
    title: "Learn",
    desc: "Build strong nursing knowledge through structured theory classes.",
  },
  {
    title: "Practice",
    desc: "Train in labs and affiliated hospitals with hands-on experience.",
  },
  {
    title: "Serve",
    desc: "Develop patient care confidence through clinical rotations.",
  },
  {
    title: "Grow",
    desc: "Prepare for a thriving healthcare career.",
  },
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

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 45 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

export default function Courses() {
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="min-h-screen bg-[#f8fbff] overflow-hidden">
      {/* HERO SECTION - UNIQUE COURSES DESIGN */}
      <section className="relative pt-28 pb-24 bg-[#f7fbff] overflow-hidden">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-[#e0f7ef] to-[#dbeafe] rounded-bl-[160px]" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/40 rounded-full blur-2xl" />
        <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-white shadow-sm border border-green-100 rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-green-700 text-xs font-bold tracking-widest uppercase">
                  Admission Open
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-[#082f49] leading-tight">
                G.N.M. Nursing <br />
                <span className="text-green-600">Career Program</span>
              </h1>

              <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
                Build your nursing career through practical training, clinical
                exposure, patient care skills and professional healthcare guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={openModal}
                  className="bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition inline-flex items-center gap-2"
                >
                  Apply Now <FaArrowRight />
                </button>

                <a
                  href="#eligibility"
                  className="bg-white text-[#082f49] border border-slate-200 px-8 py-4 rounded-xl font-bold hover:border-green-500 transition"
                >
                  View Eligibility
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <div className="bg-white rounded-[2rem] shadow-2xl p-6 border border-slate-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#083344] to-[#0f766e] p-8 text-white">
                  <FaUserNurse className="text-6xl text-green-300 mb-8" />

                  <p className="text-green-200 text-xs font-bold tracking-widest uppercase mb-3">
                    Course Details
                  </p>

                  <h2 className="text-3xl font-black mb-6">
                    General Nursing & Midwifery
                  </h2>

                  <div className="space-y-4">
                    {[
                      ["Duration", "3 Years + 6 Months Internship"],
                      ["Eligibility", "10+2 Science (PCB)"],
                      ["Minimum Marks", "40% Aggregate"],
                      ["Admission", "Merit / Entrance Based"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="flex justify-between gap-4 border-b border-white/15 pb-3"
                      >
                        <span className="text-green-100 text-sm">{label}</span>
                        <span className="font-bold text-sm text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xl font-black text-green-700">01</p>
                    <p className="text-xs text-gray-500">Course</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-xl font-black text-blue-800">3+</p>
                    <p className="text-xs text-gray-500">Years</p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xl font-black text-green-700">100%</p>
                    <p className="text-xs text-gray-500">Practical</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COURSE CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courseCards.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -14 }}
              className="group bg-white rounded-[2rem] p-7 text-center shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <div
                className={`absolute inset-x-0 bottom-0 h-2 ${
                  course.color === "blue" ? "bg-blue-700" : "bg-green-600"
                }`}
              />

              <div
                className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-6 ${
                  course.color === "blue"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-700"
                } group-hover:scale-110 transition`}
              >
                {course.icon}
              </div>

              <h2
                className={`text-2xl font-extrabold mb-3 ${
                  course.color === "blue" ? "text-blue-900" : "text-green-700"
                }`}
              >
                {course.title}
              </h2>

              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold text-gray-700 mb-5">
                <FaCalendarAlt />
                {course.duration}
              </div>

              <p className="text-gray-600 leading-7 text-sm min-h-[130px]">
                {course.desc}
              </p>

              <button
                onClick={openModal}
                className={`mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl border font-bold transition ${
                  course.color === "blue"
                    ? "border-blue-700 text-blue-800 hover:bg-blue-800"
                    : "border-green-600 text-green-700 hover:bg-green-600"
                } hover:text-white`}
              >
                Apply Now <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT PROGRAM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">
              About Course
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">
              G.N.M. Nursing Program
            </h2>

            <p className="text-gray-600 leading-8 mb-7">
              G.N.M. Nursing is a 3-year diploma program focused on practical
              nursing care, hospital training, patient communication and
              professional healthcare service.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Duration: 3 Years + Internship",
                "Practical Nursing Training",
                "Hospital Exposure",
                "Patient Care Skills",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <FaCheckCircle className="text-green-600" />
                  <p className="text-sm font-semibold text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8"
          >
            <FaGraduationCap className="text-5xl text-green-600 mb-5" />
            <h3 className="text-2xl font-extrabold text-blue-900 mb-4">
              Learn. Practice. Serve.
            </h3>
            <p className="text-gray-600 leading-7">
              Our college provides a caring and disciplined environment where
              students develop nursing knowledge, practical skills, communication
              confidence and professional healthcare values.
            </p>

            <button
              onClick={openModal}
              className="mt-7 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition"
            >
              Apply for Admission <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* STUDENT JOURNEY */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">
              Student Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              From Student to Professional Nurse
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((item, index) => (
              <motion.div
                key={item.title}
                {...fadeUp(index * 0.1)}
                className="bg-white rounded-2xl p-7 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-green-100 text-green-700 font-black flex items-center justify-center mb-5">
                  {index + 1}
                </div>

                <h3 className="text-xl font-extrabold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">
              Admission Details
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">
              Eligibility Criteria
            </h2>

            <p className="text-gray-600 leading-8">
              Students who want to start a professional healthcare career can
              apply after completing the required eligibility criteria.
            </p>

            <button
              onClick={openModal}
              className="mt-7 bg-[#0f766e] hover:bg-[#115e59] text-white px-8 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition"
            >
              Apply Now <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="bg-white rounded-[2rem] shadow-xl border border-green-100 p-8"
          >
            {eligibility.map((row) => (
              <div
                key={row.label}
                className="flex justify-between gap-5 py-4 border-b border-gray-100 last:border-0"
              >
                <p className="text-gray-500 font-semibold text-sm">{row.label}</p>
                <p className="text-blue-900 font-extrabold text-sm text-right">
                  {row.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SYLLABUS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">
              Curriculum
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
              Year-wise Syllabus Overview
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {syllabus.map((year, index) => (
              <motion.div
                key={year.year}
                {...fadeUp(index * 0.12)}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-900 to-green-700 px-6 py-5">
                  <h3 className="text-white text-xl font-extrabold">
                    {year.year}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  {year.subjects.map((subject) => (
                    <div key={subject} className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 text-sm" />
                      <p className="text-gray-700 font-semibold text-sm">
                        {subject}
                      </p>
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
        <motion.div
          {...fadeUp(0)}
          className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-green-100 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-4 rounded-2xl hover:bg-green-50 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-2xl text-blue-800">
                {item.icon}
              </div>

              <div>
                <h3 className="font-extrabold text-blue-900 mb-1">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              Start Your G.N.M. Nursing Career Today
            </h2>

            <p className="text-blue-100 text-base mb-10 leading-7">
              Join a nursing institute focused on care, clinical skills and
              professional healthcare growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={openModal}
                className="bg-white text-blue-900 font-bold px-9 py-4 rounded-full hover:bg-blue-50 transition shadow-lg flex items-center gap-2"
              >
                Apply Now <FaArrowRight />
              </button>

              <a
                href="/contact"
                className="border-2 border-white text-white font-bold px-9 py-4 rounded-full hover:bg-white/10 transition"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />
    </div>
  );
}