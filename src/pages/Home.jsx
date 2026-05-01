import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUserNurse,
  FaBookMedical,
  FaGraduationCap,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/855480/855480-hd_1920_1080_25fps.mp4";

const HERO_FALLBACK =
  "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200";

const images = {
  campus:
    "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1200",
  lab:
    "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200",
  students:
    "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hospital:
    "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const courses = [
  {
    title: "B.Sc. Nursing",
    duration: "4 Years",
    icon: <FaStethoscope />,
    desc: "Complete undergraduate nursing program with clinical exposure.",
  },
  {
    title: "P.B. B.Sc. Nursing",
    duration: "2 Years",
    icon: <FaBookMedical />,
    desc: "Upgrade program for diploma nursing students.",
  },
  {
    title: "M.Sc. Nursing",
    duration: "2 Years",
    icon: <FaGraduationCap />,
    desc: "Advanced nursing program with leadership and research.",
  },
  {
    title: "G.N.M. Nursing",
    duration: "3 Years",
    icon: <FaUserNurse />,
    desc: "Diploma program focused on practical patient care.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="bg-[#f8fbff] overflow-hidden text-slate-800">
      {/* HERO */}
      <section className="relative pt-32 pb-28 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute top-20 left-8 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-8 w-96 h-96 bg-green-200/50 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md text-green-700 font-bold text-xs tracking-widest uppercase">
              <FaHeartbeat />
              Compassion • Care • Career
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
              Shaping Nurses <br />
              Who Care, Serve <br />
              and Lead
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">
              A modern nursing college experience with clinical practice,
              expert faculty, trusted approvals, and career-focused learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-full font-bold shadow-lg inline-flex items-center gap-2 transition"
              >
                Explore Courses <FaArrowRight />
              </Link>

              <Link
                to="/apply"
                className="bg-white border border-blue-700 text-blue-800 px-7 py-4 rounded-full font-bold shadow-md hover:bg-blue-900 hover:text-white transition"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="absolute -inset-5 bg-gradient-to-r from-blue-300 to-green-300 rounded-[3.5rem] blur-2xl opacity-50" />

            <div className="relative bg-white p-4 rounded-[3.5rem] shadow-2xl">
              <video
                src={HERO_VIDEO}
                poster={HERO_FALLBACK}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "block";
                }}
                className="w-full h-[500px] object-cover rounded-[3rem]"
              />

              <img
                src={HERO_FALLBACK}
                alt="Nursing students"
                className="hidden w-full h-[500px] object-cover rounded-[3rem]"
              />

              <div className="absolute -bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 grid sm:grid-cols-3 gap-4">
                {["INC Approved", "MUHS Affiliated", "Admissions 2026"].map(
                  (item) => (
                    <div key={item} className="text-center">
                      <FaCheckCircle className="text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-extrabold text-blue-900">
                        {item}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["01", "Expert Faculty"],
            ["02", "Clinical Training"],
            ["03", "Modern Labs"],
            ["04", "Placement Support"],
          ].map(([no, title], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-6 shadow-xl border border-blue-50 hover:-translate-y-2 transition"
            >
              <h3 className="text-5xl font-black text-blue-100">{no}</h3>
              <p className="mt-3 text-xl font-extrabold text-blue-900">
                {title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="relative py-24 bg-blue-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-[#f8fbff] rounded-b-[60%]" />
        <div className="absolute -top-20 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-green-400 font-bold uppercase tracking-widest">
              Our Programs
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
              Choose Your Nursing Path
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-xl border border-white/15 rounded-[2rem] p-6 hover:bg-white hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-20 h-20 rounded-2xl bg-white text-blue-900 flex items-center justify-center text-4xl">
                    {course.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-900">
                      {course.title}
                    </h3>

                    <p className="mt-2 text-green-300 font-bold group-hover:text-green-700">
                      Duration: {course.duration}
                    </p>

                    <p className="mt-3 text-blue-100 leading-7 group-hover:text-gray-600">
                      {course.desc}
                    </p>

                    <Link
                      to="/courses"
                      className="mt-5 inline-flex items-center gap-2 text-green-300 group-hover:text-blue-800 font-bold"
                    >
                      View Details <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-green-600 font-bold uppercase tracking-widest">
              Nursing Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3">
              From Classroom to Healthcare Career
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Learn", "Strong academic foundation."],
              ["Practice", "Hands-on clinical training."],
              ["Serve", "Build patient care confidence."],
              ["Grow", "Career and placement support."],
            ].map(([title, desc], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: index % 2 === 0 ? 60 : -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.14 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-7 shadow-xl border border-blue-50 text-center hover:-translate-y-2 transition"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-blue-900 font-black text-xl mb-5">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-extrabold text-blue-900">
                  {title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT COLLAGE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <img
              src={images.campus}
              alt="Campus"
              className="rounded-[2rem] h-72 w-full object-cover shadow-xl"
            />
            <img
              src={images.lab}
              alt="Lab"
              className="rounded-[2rem] h-52 w-full object-cover shadow-xl mt-14"
            />
            <img
              src={images.students}
              alt="Students"
              className="rounded-[2rem] h-52 w-full object-cover shadow-xl"
            />
            <img
              src={images.hospital}
              alt="Hospital"
              className="rounded-[2rem] h-72 w-full object-cover shadow-xl -mt-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-bold uppercase tracking-widest">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3 leading-tight">
              A Calm, Caring and Professional Learning Environment
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our college focuses on academic excellence, real clinical exposure,
              discipline, communication skills and confident healthcare service.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Modern nursing labs with practical learning",
                "Hospital exposure for real patient care",
                "Experienced and supportive faculty",
                "Career guidance and placement preparation",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-2xl shadow-md p-5 flex gap-3 items-center border border-blue-50"
                >
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span className="font-bold text-blue-900">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto overflow-hidden rounded-[3rem] bg-gradient-to-r from-green-600 to-blue-800 p-10 md:p-16 text-center shadow-2xl"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white">
              Start Your Nursing Career Today
            </h2>

            <p className="mt-5 text-blue-50 max-w-2xl mx-auto leading-8">
              Join a trusted nursing institution focused on care, education,
              clinical skills and professional growth.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Link
                to="/apply"
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Apply Now
              </Link>

              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-900 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}