import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHeartbeat,
  FaUserNurse,
} from "react-icons/fa";
import ApplyModal from "../components/ApplyModal";

const HERO_VIDEO = "/images/jrp_video.mp4";
const HERO_FALLBACK =
  "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1400";

const images = {
  students:
    "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1200",
  lab:
    "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200",
  hospital:
    "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="bg-[#f8fbff] overflow-hidden text-slate-800">
      {/* HERO WITH VIDEO BACKGROUND */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/75 to-green-900/40" />
        <div className="absolute inset-0 bg-black/15" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-green-300 font-bold text-xs tracking-widest uppercase border border-white/20">
              <FaHeartbeat />
              Compassion • Care • Career
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
              Building Skilled <br />
              G.N.M. Nurses <br />
              with Excellence
            </h1>

            <p className="mt-6 text-blue-50 text-lg leading-8 max-w-xl">
              A professional nursing institute focused on G.N.M. Nursing,
              clinical practice, patient care skills, discipline, and healthcare
              career growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={openModal}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg inline-flex items-center gap-2 transition"
              >
                Apply Now <FaArrowRight />
              </button>

              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-50 transition"
              >
                Contact Admission Office
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
              {["G.N.M. Nursing", "3 Years Program", "Admissions for 2026-27"].map(
                (item) => (
                  <div
                    key={item}
                    className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4"
                  >
                    <FaCheckCircle className="text-green-400 mb-2" />
                    <p className="text-sm font-extrabold">{item}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["01", "G.N.M. Focused"],
            ["02", "Clinical Training"],
            ["03", "Modern Labs"],
            ["04", "Career Support"],
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

      {/* GNM COURSE SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-green-600 font-bold uppercase tracking-widest">
              Our Program
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3 leading-tight">
              G.N.M. Nursing
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              G.N.M. Nursing is a 3-year diploma program focused on practical
              nursing care, hospital training, patient communication, and
              professional healthcare service.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "Duration: 3 Years",
                "Practical Nursing Training",
                "Hospital Exposure",
                "Patient Care Skills",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-5 rounded-2xl shadow-md border border-blue-50 flex gap-3 items-center"
                >
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span className="font-bold text-blue-900">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openModal}
              className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
            >
              Apply for G.N.M. Nursing <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-5 bg-gradient-to-r from-blue-300 to-green-300 rounded-[3rem] blur-2xl opacity-40" />

            <div className="relative bg-white rounded-[3rem] p-4 shadow-2xl">
              <img
                src={images.lab}
                alt="G.N.M. Nursing practical training"
                className="rounded-[2.4rem] h-[430px] w-full object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-2xl">
                    <FaUserNurse />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-blue-900">
                      Learn. Practice. Serve.
                    </h3>
                    <p className="text-sm text-gray-600">
                      Complete G.N.M. nursing preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Student Journey
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3">
              From Student to Professional Nurse
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Learn", "Build strong nursing knowledge."],
              ["Practice", "Train in labs and hospitals."],
              ["Serve", "Develop patient care confidence."],
              ["Grow", "Prepare for healthcare career."],
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

      {/* WHY CHOOSE US */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative grid grid-cols-2 gap-4"
          >
            <img
              src={images.students}
              alt="Nursing students"
              className="rounded-[2rem] h-72 w-full object-cover shadow-xl"
            />
            <img
              src={images.hospital}
              alt="Hospital training"
              className="rounded-[2rem] h-52 w-full object-cover shadow-xl mt-14"
            />
            <img
              src={images.lab}
              alt="Nursing lab"
              className="rounded-[2rem] h-52 w-full object-cover shadow-xl"
            />
            <img
              src={HERO_FALLBACK}
              alt="Nursing college"
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
              Focused Training for G.N.M. Nursing Students
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our college provides a caring and disciplined environment where
              students develop nursing knowledge, practical skills,
              communication confidence, and professional healthcare values.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Modern nursing labs for practical learning",
                "Hospital exposure for real patient care",
                "Experienced and supportive faculty",
                "Admission and career guidance",
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
              Start Your G.N.M. Nursing Career Today
            </h2>

            <p className="mt-5 text-blue-50 max-w-2xl mx-auto leading-8">
              Join a trusted nursing institution focused on care, education,
              clinical skills, and professional growth.
            </p>

            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <button
                onClick={openModal}
                className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Apply Now
              </button>

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

      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />
    </div>
  );
}