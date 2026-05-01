import React from "react";
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
} from "react-icons/fa";

const courses = [
  {
    title: "B.Sc. Nursing",
    duration: "4 Years",
    desc: "An undergraduate program that builds strong nursing knowledge, clinical skills, and professional healthcare confidence.",
    icon: <FaStethoscope />,
    color: "blue",
  },
  {
    title: "P.B. B.Sc. Nursing",
    duration: "2 Years",
    desc: "A post-basic bachelor’s program for diploma holders to upgrade skills and advance their nursing career.",
    icon: <FaBookMedical />,
    color: "green",
  },
  {
    title: "M.Sc. Nursing",
    duration: "2 Years",
    desc: "A postgraduate program focused on advanced clinical knowledge, leadership, teaching, and research skills.",
    icon: <FaGraduationCap />,
    color: "blue",
  },
  {
    title: "G.N.M. Nursing",
    duration: "3 Years",
    desc: "A diploma program designed to provide essential nursing care, hospital training, and clinical expertise.",
    icon: <FaUserNurse />,
    color: "green",
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
    desc: "Hands-on training in top hospitals and healthcare institutions.",
  },
  {
    icon: <FaChartLine />,
    title: "Bright Career Opportunities",
    desc: "Placement support and global career opportunities.",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#f8fbff] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/40 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-green-600 font-bold tracking-widest uppercase mb-3">
              Our Courses
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-900">
              Courses We Offer
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              Our programs are designed to provide in-depth knowledge,
              practical skills, and clinical exposure to build a strong
              foundation for a successful nursing career.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-full font-semibold shadow-lg transition">
                Explore Courses
              </button>
              <button className="border border-blue-700 text-blue-800 px-7 py-4 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
                Contact Us
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-5 bg-gradient-to-r from-blue-300 to-green-300 rounded-[3rem] blur-2xl opacity-40"></div>

            <img
              src="/images/courses-hero.jpg"
              alt="Nursing Students"
              className="relative w-full h-[420px] object-cover rounded-[3rem] shadow-2xl"
            />

            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-4">
              <h3 className="text-3xl font-extrabold text-green-600">100%</h3>
              <p className="text-sm text-gray-600 font-medium">
                Career Focused Learning
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COURSES CARDS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
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
              ></div>

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
                className={`mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl border font-bold transition ${
                  course.color === "blue"
                    ? "border-blue-700 text-blue-800 hover:bg-blue-800"
                    : "border-green-600 text-green-700 hover:bg-green-600"
                } hover:text-white`}
              >
                Learn More <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT BAR */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
    </div>
  );
}