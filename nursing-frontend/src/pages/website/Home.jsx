import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaHeartbeat,
  FaUserNurse,
  FaFlask,
  FaBed,
  FaBook,
  FaWifi,
  FaHospital,
  FaStethoscope,
  FaSyringe,
  FaBaby,
  FaBrain,
  FaAmbulance,
  FaLeaf,
  FaStar,
  FaQuoteLeft,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import ApplyModal from "../../components/ApplyModal";

const HERO_VIDEO = "/images/jrp_video.mp4";

const images = {
  students: "/images/students.png",
  lab: "/images/nursing lab.png",
  hospital: "/images/nursing hospital.png",
  about: "/images/about_img.jpeg",
  clinical: "/images/clinic.png",
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Priya Sharma",
    batch: "GNM Batch 2022",
    hospital: "Now working at Civil Hospital, Nashik",
    text: "Swami Vivekanand Nursing College gave me the confidence and clinical skills I needed.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Anjali Patil",
    batch: "GNM Batch 2021",
    hospital: "Now working at Apollo Hospital, Pune",
    text: "The practical training here is exceptional and highly professional.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Sunita Deshmukh",
    batch: "GNM Batch 2023",
    hospital: "Currently pursuing higher studies",
    text: "The teachers genuinely care about every student's growth.",
    rating: 5,
    avatar: "SD",
  },
];

const facilities = [
  {
    icon: <FaFlask className="text-2xl" />,
    title: "Modern Skill Labs",
    desc: "Advanced simulation labs with practical nursing equipment.",
    color: "from-blue-100 to-blue-50",
    accent: "text-blue-700",
    border: "border-blue-100",
  },

  {
    icon: <FaBed className="text-2xl" />,
    title: "Hostel Facility",
    desc: "Safe and comfortable hostel accommodation for students.",
    color: "from-green-100 to-green-50",
    accent: "text-green-700",
    border: "border-green-100",
  },

  {
    icon: <FaBook className="text-2xl" />,
    title: "Digital Library",
    desc: "Well-stocked nursing books, journals, and study materials.",
    color: "from-purple-100 to-purple-50",
    accent: "text-purple-700",
    border: "border-purple-100",
  },

  {
    icon: <FaWifi className="text-2xl" />,
    title: "Smart Classrooms",
    desc: "Interactive classrooms with modern digital learning tools.",
    color: "from-orange-100 to-orange-50",
    accent: "text-orange-700",
    border: "border-orange-100",
  },

  {
    icon: <FaHospital className="text-2xl" />,
    title: "Hospital Network",
    desc: "Clinical exposure with hospital tie-ups and training.",
    color: "from-teal-100 to-teal-50",
    accent: "text-teal-700",
    border: "border-teal-100",
  },

  {
    icon: <FaLeaf className="text-2xl" />,
    title: "Green Campus",
    desc: "Clean and peaceful campus atmosphere for students.",
    color: "from-lime-100 to-lime-50",
    accent: "text-lime-700",
    border: "border-lime-100",
  },
];

const clinicalAreas = [
  { icon: <FaStethoscope />, label: "Medical-Surgical Nursing" },
  { icon: <FaBaby />, label: "Paediatric & Neonatal Care" },
  { icon: <FaUserNurse />, label: "Obstetrics & Midwifery" },
  { icon: <FaBrain />, label: "Mental Health Nursing" },
  { icon: <FaAmbulance />, label: "Emergency & Critical Care" },
  { icon: <FaSyringe />, label: "Community Health Nursing" },
];

export default function Home() {
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  return (
    <div className="bg-[#f8fbff] overflow-hidden text-slate-800">

      {/* =====================================================
          PREMIUM HERO SECTION
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden flex items-end">

        {/* VIDEO */}
        <video
          src={HERO_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-blue-950/50 to-black/40" />
        <div className="absolute inset-0 bg-black/10" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-4xl"
          >

            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl border border-white/20 px-5 py-2 rounded-full text-white text-xs font-black tracking-widest uppercase">
              <FaHeartbeat className="text-green-400" />
              Compassion • Care • Career
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black text-white leading-tight">
              Building Future
              <br />
              Healthcare Heroes
            </h1>

            <p className="mt-6 text-blue-50 text-lg md:text-xl leading-8 max-w-2xl">
              Premium nursing education with advanced infrastructure,
              practical training, clinical excellence, and compassionate care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                onClick={openModal}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold shadow-2xl inline-flex items-center gap-2 transition"
              >
                Apply Now <FaArrowRight />
              </button>

              <Link
                to="/contact"
                className="bg-white/15 backdrop-blur-xl border border-white/25 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-950 transition"
              >
                Contact Admission Office
              </Link>

            </div>
          </motion.div>

          {/* STATS — placed before the curve in DOM, z-index above curve */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
            style={{ position: "relative", zIndex: 30 }}
          >
            {[
              ["33+", "Years of Excellence"],
              ["1200+", "Nurses Trained"],
              ["6+", "Hospital Tie-ups"],
              ["100%", "Career Support"],
            ].map(([value, label]) => (

              <motion.div
                key={label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white/12 backdrop-blur-xl border border-white/15 rounded-[1.7rem] p-5 shadow-xl"
              >

                <h3 className="text-3xl md:text-4xl font-black text-white">
                  {value}
                </h3>

                <p className="text-blue-100 text-sm mt-2 font-semibold">
                  {label}
                </p>

              </motion.div>

            ))}
          </div>

          {/* BOTTOM CURVE — pointer-events: none so it never blocks clicks */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20"
            style={{ pointerEvents: "none" }}
          >
            <svg
              className="relative block w-full h-[120px] md:h-[160px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#f8fbff"
                fillOpacity="1"
                d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURES SECTION
      ===================================================== */}

      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-extrabold tracking-wide uppercase shadow-sm">
            Excellence in Nursing Education
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-950 leading-tight">
            Empowering Future
            <br className="hidden sm:block" />
            Healthcare Professionals
          </h2>

          <p className="mt-6 text-gray-500 max-w-3xl mx-auto leading-8 text-base md:text-lg">
            Our nursing college combines practical training, advanced facilities,
            clinical exposure, and career-focused education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-7">

          {[
            {
              no: "01",
              title: "G.N.M. Focused Education",
              desc: "Professional nursing curriculum designed for healthcare excellence.",
              icon: <FaUserNurse />,
              gradient: "from-blue-700 to-cyan-500",
              bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
            },

            {
              no: "02",
              title: "Advanced Clinical Training",
              desc: "Hands-on hospital training with expert supervision.",
              icon: <FaHospital />,
              gradient: "from-green-600 to-emerald-500",
              bg: "bg-gradient-to-br from-green-50 to-emerald-50",
            },

            {
              no: "03",
              title: "Modern Nursing Laboratories",
              desc: "Advanced nursing simulation and practical learning tools.",
              icon: <FaFlask />,
              gradient: "from-purple-600 to-pink-500",
              bg: "bg-gradient-to-br from-purple-50 to-pink-50",
            },

            {
              no: "04",
              title: "Placement & Career Support",
              desc: "Career guidance and placement opportunities for students.",
              icon: <FaHeartbeat />,
              gradient: "from-orange-500 to-red-500",
              bg: "bg-gradient-to-br from-orange-50 to-red-50",
            },

          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className={`relative overflow-hidden rounded-[2.8rem] p-8 md:p-10 ${item.bg} border border-white shadow-[0_15px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2`}>

                <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl`} />

                <div className="relative z-10 flex items-start justify-between">

                  <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-3xl shadow-2xl`}>
                    {item.icon}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-black text-slate-100">
                    {item.no}
                  </h1>

                </div>

                <div className="relative z-10 mt-10">

                  <h3 className="text-2xl md:text-3xl font-black text-blue-950 leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-gray-600 leading-8">
                    {item.desc}
                  </p>

                  <button className={`mt-8 inline-flex items-center gap-3 bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-full font-bold shadow-lg`}>
                    Explore More
                    <FaArrowRight />
                  </button>

                </div>
              </div>
            </motion.div>

          ))}
        </div>
      </section>

      {/* =====================================================
          INFRASTRUCTURE SECTION
      ===================================================== */}

      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-green-50 relative overflow-hidden">

        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >

            <span className="inline-flex bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-extrabold tracking-wide uppercase">
              Campus Infrastructure
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-black text-blue-950">
              Student Life & Campus Infrastructure
            </h2>

            <p className="mt-5 text-gray-500 leading-8">
              Creating modern spaces for nursing education, practical learning,
              clinical confidence, discipline, and student well-being.
            </p>

          </motion.div>

          <div className="grid grid-cols-12 gap-4 auto-rows-[230px]">

            {[
              {
                img: images.students,
                title: "Student Activities",
                className: "col-span-12 md:col-span-4",
              },

              {
                img: images.lab,
                title: "Nursing Skill Lab",
                className: "col-span-12 md:col-span-3",
              },

              {
                img: images.about,
                title: "Smart Classrooms",
                className: "col-span-12 md:col-span-5 md:row-span-2",
              },

              {
                img: images.clinical,
                title: "Clinical Practice",
                className: "col-span-12 md:col-span-3",
              },

              {
                img: images.hospital,
                title: "Hospital Exposure",
                className: "col-span-12 md:col-span-4",
              },

            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`${item.className} group relative overflow-hidden rounded-[2rem] shadow-xl`}
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="text-white text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="text-blue-100 text-sm mt-2">
                    Premium facilities for complete nursing growth.
                  </p>

                </div>
              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EVENTS / GALLERY SECTION
      ===================================================== */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-14">

            <div>

              <p className="text-green-600 font-bold uppercase tracking-widest">
                Our Gallery
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-black text-blue-950">
                Events & Campus Moments
              </h2>

              <p className="mt-4 text-gray-500 max-w-2xl leading-8">
                A glimpse of workshops, nursing activities, practical sessions,
                student life, and memorable college events.
              </p>

            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-blue-900 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
            >
              Explore More <FaArrowRight />
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                image: images.students,
                title: "Student Engagement Program",
              },

              {
                image: images.lab,
                title: "Nursing Practical Workshop",
              },

              {
                image: images.clinical,
                title: "Clinical Training Session",
              },

            ].map((event, index) => (

              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[2.3rem] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.09)] hover:-translate-y-3 transition duration-500"
              >

                <div className="h-[310px] overflow-hidden">

                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-7">

                  <span className="text-xs font-black uppercase tracking-widest text-green-600">
                    Campus Event
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-blue-950">
                    {event.title}
                  </h3>

                  <p className="mt-3 text-gray-500 leading-7">
                    Explore the vibrant academic and practical learning
                    environment of our nursing college.
                  </p>

                </div>

              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT COLLEGE SECTION
      ===================================================== */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="absolute -inset-5 bg-gradient-to-br from-green-200 to-blue-200 rounded-[3rem] blur-2xl opacity-40" />

            <div className="relative bg-white rounded-[3rem] p-4 shadow-2xl">

              <img
                src={images.about}
                alt="About College"
                className="rounded-[2.4rem] h-[430px] w-full object-cover"
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 right-8 bg-blue-900 text-white rounded-2xl px-6 py-4 shadow-xl"
              >

                <p className="text-3xl font-black">33+</p>

                <p className="text-xs text-blue-200 font-semibold">
                  Years of Excellence
                </p>

              </motion.div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="text-green-600 font-bold uppercase tracking-widest">
              About Our College
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3 leading-tight">
              Swami Vivekanand Nursing College
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Established in 1992, our college has been shaping skilled and
              compassionate healthcare professionals with quality nursing
              education and practical learning.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              {[
                "INC Approved",
                "MUHS Affiliated",
                "Government Recognised",
                "100% Placement Support",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-white p-4 rounded-2xl shadow-md border border-blue-50 flex gap-3 items-center"
                >

                  <FaCheckCircle className="text-green-600 shrink-0" />

                  <span className="font-bold text-blue-900 text-sm">
                    {item}
                  </span>

                </div>

              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
            >
              Learn More <FaArrowRight />
            </Link>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FACILITIES SECTION
      ===================================================== */}

      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >

            <p className="text-green-600 font-bold uppercase tracking-widest">
              Our Facilities
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3">
              Everything You Need to Excel
            </h2>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {facilities.map((f, index) => (

              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${f.color} rounded-[2rem] p-7 border ${f.border} shadow-lg hover:-translate-y-2 transition group`}
              >

                <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center ${f.accent} shadow-md mb-5`}>
                  {f.icon}
                </div>

                <h3 className="text-xl font-extrabold text-blue-900 mb-3">
                  {f.title}
                </h3>

                <p className="text-gray-600 leading-7 text-sm">
                  {f.desc}
                </p>

              </motion.div>

            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CLINICAL TRAINING SECTION
      ===================================================== */}

      <section className="py-24 bg-blue-900 relative overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-800 rounded-full opacity-50" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-900 rounded-full opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <p className="text-green-400 font-bold uppercase tracking-widest">
                Clinical Training
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
                Real-World Hospital Exposure
              </h2>

              <p className="mt-6 text-blue-200 leading-8">
                Students gain real hospital exposure through clinical training
                and practical learning across multiple departments.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">

                {clinicalAreas.map((area) => (

                  <div
                    key={area.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3"
                  >

                    <span className="text-green-400 text-lg">
                      {area.icon}
                    </span>

                    <span className="text-white font-bold text-sm">
                      {area.label}
                    </span>

                  </div>

                ))}
              </div>

              <button
                onClick={openModal}
                className="mt-10 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
              >
                Apply Now <FaArrowRight />
              </button>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400/30 to-blue-400/30 rounded-[3rem] blur-2xl" />

              <div className="relative bg-white/10 backdrop-blur-sm rounded-[3rem] p-4 border border-white/20">
                <img
                  src={images.clinical}
                  alt="Clinical training"
                  className="rounded-[2.4rem] h-[420px] w-full object-cover"
                />

                <div className="absolute bottom-8 left-8 right-8 bg-blue-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
                  <h3 className="text-white font-extrabold text-lg">
                    Hospital Training Experience
                  </h3>

                  <p className="text-blue-300 text-sm mt-1">
                    Practical learning with real clinical exposure.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS SECTION
      ===================================================== */}

      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-green-600 font-bold uppercase tracking-widest">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3">
            What Our Students Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-8 shadow-xl border border-blue-50 hover:-translate-y-2 transition relative"
            >
              <FaQuoteLeft className="text-green-100 text-5xl absolute top-6 right-6" />

              <div className="flex gap-1 mb-5">
                {Array(t.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
              </div>

              <p className="text-gray-600 leading-8 text-sm relative z-10">
                "{t.text}"
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-green-500 flex items-center justify-center text-white font-black text-sm shadow-lg">
                  {t.avatar}
                </div>

                <div>
                  <h4 className="font-extrabold text-blue-900">
                    {t.name}
                  </h4>

                  <p className="text-green-600 text-xs font-bold">
                    {t.batch}
                  </p>

                  <p className="text-gray-400 text-xs mt-0.5">
                    {t.hospital}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="px-6 py-24">
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