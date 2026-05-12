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
const HERO_FALLBACK = "/images/about.webp";

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
    text: "Swami Vivekanand Nursing College gave me the confidence and clinical skills I needed. The faculty always supported us, and the hospital training was truly world-class.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Anjali Patil",
    batch: "GNM Batch 2021",
    hospital: "Now working at Apollo Hospital, Pune",
    text: "The practical training here is exceptional. I stepped into my first job completely prepared. The labs, the mentors, and the overall environment made all the difference.",
    rating: 5,
    avatar: "AP",
  },
  {
    name: "Sunita Deshmukh",
    batch: "GNM Batch 2023",
    hospital: "Currently pursuing higher studies",
    text: "I am grateful for the strong foundation this college built for me. The teachers genuinely care about every student's growth. Best decision of my life!",
    rating: 5,
    avatar: "SD",
  },
];

const facilities = [
  {
    icon: <FaFlask className="text-2xl" />,
    title: "Modern Skill Labs",
    desc: "Fully equipped nursing labs with mannequins, IV trainers, and simulation equipment for hands-on practice.",
    color: "from-blue-100 to-blue-50",
    accent: "text-blue-700",
    border: "border-blue-100",
  },
  {
    icon: <FaBed className="text-2xl" />,
    title: "Hostel Facility",
    desc: "Safe, comfortable and disciplined hostel accommodation for outstation students with 24/7 security.",
    color: "from-green-100 to-green-50",
    accent: "text-green-700",
    border: "border-green-100",
  },
  {
    icon: <FaBook className="text-2xl" />,
    title: "Digital Library",
    desc: "A rich collection of nursing textbooks, journals, e-books and reference materials for academic excellence.",
    color: "from-purple-100 to-purple-50",
    accent: "text-purple-700",
    border: "border-purple-100",
  },
  {
    icon: <FaWifi className="text-2xl" />,
    title: "Smart Classrooms",
    desc: "Tech-enabled classrooms with projectors, audio-visual aids and interactive tools for effective learning.",
    color: "from-orange-100 to-orange-50",
    accent: "text-orange-700",
    border: "border-orange-100",
  },
  {
    icon: <FaHospital className="text-2xl" />,
    title: "Hospital Network",
    desc: "Partnerships with 6+ government and private hospitals providing real-world clinical training exposure.",
    color: "from-teal-100 to-teal-50",
    accent: "text-teal-700",
    border: "border-teal-100",
  },
  {
    icon: <FaLeaf className="text-2xl" />,
    title: "Green Campus",
    desc: "Peaceful, clean and nature-friendly campus environment that promotes focus, health and well-being.",
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };
  

  return (
    <div className="bg-[#f8fbff] overflow-hidden text-slate-800">

      {/* ══════════════════════════════════════════════
          HERO WITH VIDEO BACKGROUND  (unchanged)
      ══════════════════════════════════════════════ */}
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

            <h1 className="mt-2 text-2xl md:text-2xl font-extrabold leading-tight">
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

      {/* ══════════════════════════════════════════════
          FEATURES  (unchanged)
      ══════════════════════════════════════════════ */}
      {/* <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-6">
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
              <p className="mt-3 text-xl font-extrabold text-blue-900">{title}</p>
            </motion.div>
          ))}
        </div>
      </section> */}
      {/* 
      {/* ======================================================
    MODERN PREMIUM FEATURES SECTION
====================================================== */}

<section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">

  {/* TOP HEADING */}
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
      clinical exposure, and career-focused education to shape confident,
      skilled, and compassionate healthcare professionals.
    </p>
  </div>

  {/* FEATURE GRID */}
  <div className="grid lg:grid-cols-2 gap-7">

    {[
      {
        no: "01",
        title: "G.N.M. Focused Education",
        desc: "Professional nursing curriculum designed to build strong healthcare knowledge and practical confidence.",
        icon: <FaUserNurse />,
        gradient: "from-blue-700 to-cyan-500",
        bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      },

      {
        no: "02",
        title: "Advanced Clinical Training",
        desc: "Hands-on hospital training with real patient care experience and expert supervision.",
        icon: <FaHospital />,
        gradient: "from-green-600 to-emerald-500",
        bg: "bg-gradient-to-br from-green-50 to-emerald-50",
      },

      {
        no: "03",
        title: "Modern Nursing Laboratories",
        desc: "State-of-the-art skill labs with advanced nursing simulation and practical learning tools.",
        icon: <FaFlask />,
        gradient: "from-purple-600 to-pink-500",
        bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      },

      {
        no: "04",
        title: "Placement & Career Support",
        desc: "Career guidance, interview preparation, and placement opportunities after course completion.",
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

        {/* CARD */}
        <div className={`relative overflow-hidden rounded-[2.8rem] p-8 md:p-10 ${item.bg} border border-white shadow-[0_15px_50px_rgba(0,0,0,0.07)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2`}>

          {/* BACKGROUND SHAPE */}
          <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl`} />

          {/* TOP ROW */}
          <div className="relative z-10 flex items-start justify-between">

            {/* ICON */}
            <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition duration-500`}>
              {item.icon}
            </div>

            {/* NUMBER */}
            <h1 className="text-6xl md:text-7xl font-black text-slate-100 group-hover:scale-105 transition">
              {item.no}
            </h1>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mt-10">

            <h3 className="text-2xl md:text-3xl font-black text-blue-950 leading-tight">
              {item.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {item.desc}
            </p>

            {/* BUTTON */}
            <button className={`mt-8 inline-flex items-center gap-3 bg-gradient-to-r ${item.gradient} text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition`}>
              Explore More
              <FaArrowRight />
            </button>
          </div>

          {/* BORDER EFFECT */}
          <div className="absolute inset-0 rounded-[2.8rem] border border-white/50 pointer-events-none" />
        </div>
      </motion.div>
    ))}
  </div>
</section>
{/* ======================================================
    NOTES BOARD SECTION
====================================================== */}

<section className="py-24 relative overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50" />

  <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >

      <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-extrabold tracking-wide uppercase">
        Important Updates
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-black text-blue-950 leading-tight">
       Notice Board
      </h2>

      <p className="mt-5 text-gray-500 leading-8">
        Stay updated with admissions, exam schedules, nursing notes,
        announcements, and important college notifications.
      </p>
    </motion.div>

    {/* NOTES GRID */}
    <div className="grid lg:grid-cols-3 gap-8">

      {[
        {
          title: "GNM Nursing Notes",
          desc: "Download subject-wise nursing notes, PDFs, practical guides, and study materials.",
          tag: "Study Material",
          color: "from-blue-600 to-cyan-500",
        },

        {
          title: "2026 Admission Notice",
          desc: "Admissions for GNM Nursing 2026-27 are officially open. Limited seats available.",
          tag: "Admission Open",
          color: "from-green-600 to-emerald-500",
        },

        {
          title: "Clinical Training Schedule",
          desc: "Updated hospital posting schedules and practical training batches available now.",
          tag: "Hospital Training",
          color: "from-purple-600 to-pink-500",
        },

      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          className="group"
        >

          <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2">

            {/* TOP BAR */}
            <div className={`h-3 bg-gradient-to-r ${item.color}`} />

            {/* CONTENT */}
            <div className="p-8">

              {/* TAG */}
              <div className={`inline-flex bg-gradient-to-r ${item.color} text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg`}>
                {item.tag}
              </div>

              {/* TITLE */}
              <h3 className="mt-6 text-2xl font-black text-blue-950 leading-tight">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 text-gray-600 leading-8">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button className={`mt-8 inline-flex items-center gap-3 bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition`}>

                View Details
                <FaArrowRight />
              </button>
            </div>

            {/* CORNER DESIGN */}
            <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl`} />

          </div>
        </motion.div>
      ))}
    </div>

    {/* BOTTOM NOTICE BAR */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-16"
    >

      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-900 to-green-700 p-8 md:p-10 shadow-2xl">

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* ══════════════════════════════════════════════
          ABOUT COLLEGE SECTION  ← NEW
      ══════════════════════════════════════════════ */}
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
                alt="About Swami Vivekanand Nursing College"
                className="rounded-[2.4rem] h-[430px] w-full object-cover"
              />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 right-8 bg-blue-900 text-white rounded-2xl px-6 py-4 shadow-xl"
              >
                <p className="text-3xl font-black">33+</p>
                <p className="text-xs text-blue-200 font-semibold">Years of Excellence</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -top-6 left-8 bg-green-600 text-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <p className="text-2xl font-black">1200+</p>
                <p className="text-xs text-green-100 font-semibold">Nurses Trained</p>
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
              Swami Vivekanand <br /> Nursing College
            </h2>
            <p className="mt-6 text-gray-600 leading-8">
              Established in 1992, Swami Vivekanand Nursing College has been a
              beacon of nursing education in Maharashtra for over 33 years. We
              are proudly approved by the Indian Nursing Council (INC), New
              Delhi, and affiliated with Maharashtra University of Health
              Sciences (MUHS), Nashik.
            </p>
            <p className="mt-4 text-gray-600 leading-8">
              Our mission is to shape competent, compassionate and confident
              nurses who make a meaningful difference in healthcare and society
              — one patient at a time.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                "INC Approved, New Delhi",
                "MUHS Affiliated, Nashik",
                "Government Recognised",
                "100% Placement Support",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white p-4 rounded-2xl shadow-md border border-blue-50 flex gap-3 items-center"
                >
                  <FaCheckCircle className="text-green-600 shrink-0" />
                  <span className="font-bold text-blue-900 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
            >
              Learn More About Us <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GNM COURSE SECTION  (unchanged)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FACILITIES OVERVIEW  ← NEW
      ══════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
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
          <p className="mt-5 text-gray-500 leading-8">
            World-class infrastructure designed to support learning, clinical
            practice, and overall student development.
          </p>
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
              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center ${f.accent} shadow-md mb-5 group-hover:scale-110 transition`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-extrabold text-blue-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-7 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHY CHOOSE US  (unchanged)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 gap-4"
            >
              <img src={images.students} alt="Nursing students" className="rounded-[2rem] h-72 w-full object-cover shadow-xl" />
              <img src={images.hospital} alt="Hospital training" className="rounded-[2rem] h-52 w-full object-cover shadow-xl mt-14" />
              <img src={images.lab} alt="Nursing lab" className="rounded-[2rem] h-52 w-full object-cover shadow-xl" />
              <img src={HERO_FALLBACK} alt="Nursing college" className="rounded-[2rem] h-72 w-full object-cover shadow-xl -mt-6" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-green-600 font-bold uppercase tracking-widest">Why Choose Us</p>
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CLINICAL TRAINING SECTION  ← NEW
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        {/* decorative blobs */}
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
                Real-World Hospital <br /> Exposure
              </h2>
              <p className="mt-6 text-blue-200 leading-8">
                Our students train across 6+ affiliated hospitals — government
                and private — gaining hands-on experience in all major
                departments. Real patients. Real skills. Real confidence.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {clinicalAreas.map((area) => (
                  <div
                    key={area.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-white/20 transition"
                  >
                    <span className="text-green-400 text-lg">{area.icon}</span>
                    <span className="text-white font-bold text-sm">{area.label}</span>
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
                  alt="Clinical training at hospital"
                  className="rounded-[2.4rem] h-[420px] w-full object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-blue-900/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-extrabold text-lg">6+ Hospital Partners</h3>
                      <p className="text-blue-300 text-sm mt-1">Government & Private Hospitals</p>
                    </div>
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                      <FaHospital />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          JOURNEY  (unchanged)
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-green-600 font-bold uppercase tracking-widest">Student Journey</p>
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
                <h3 className="text-2xl font-extrabold text-blue-900">{title}</h3>
                <p className="text-gray-600 mt-3 leading-7">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS  ← NEW
      ══════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-green-600 font-bold uppercase tracking-widest">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mt-3">
            What Our Students Say
          </h2>
          <p className="mt-5 text-gray-500 leading-8">
            Hear from nurses whose lives were shaped within these walls.
          </p>
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
              {/* Quote icon */}
              <FaQuoteLeft className="text-green-100 text-5xl absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(t.rating).fill(0).map((_, i) => (
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
                  <h4 className="font-extrabold text-blue-900">{t.name}</h4>
                  <p className="text-green-600 text-xs font-bold">{t.batch}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.hospital}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          INQUIRY FORM  ← NEW
      ══════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-green-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-green-400 font-bold uppercase tracking-widest">Get In Touch</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 leading-tight">
                Have Questions? <br /> We're Here to Help.
              </h2>
              <p className="mt-6 text-blue-200 leading-8">
                Reach out to our admissions team for any queries about GNM
                Nursing, eligibility, fees, hostel, or the admission process.
                We respond quickly!
              </p>

              <div className="mt-10 space-y-5">
                {[
                  { icon: <FaPhoneAlt />, label: "Call Us", value: "+91 98765 43210" },
                  { icon: <FaEnvelope />, label: "Email Us", value: "admissions@svnc.edu.in" },
                  { icon: <FaMapMarkerAlt />, label: "Find Us", value: "Bhiwandi, Thane District, Maharashtra" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center text-green-400 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-extrabold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — inquiry form */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl">
                <h3 className="text-2xl font-extrabold text-blue-900 mb-6">
                  Send an Inquiry
                </h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <FaCheckCircle className="text-green-600 text-4xl" />
                    </div>
                    <h4 className="text-xl font-extrabold text-blue-900">Thank You!</h4>
                    <p className="text-gray-500 mt-2">
                      We've received your inquiry. Our team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-bold text-blue-900 mb-2 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        required
                        placeholder="Your full name"
                        className="w-full bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-blue-900 font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-bold text-blue-900 mb-2 block">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-blue-900 font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-bold text-blue-900 mb-2 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="your@email.com"
                          className="w-full bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-blue-900 font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-bold text-blue-900 mb-2 block">
                        Your Message / Query
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        rows={4}
                        placeholder="Tell us how we can help you..."
                        className="w-full bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-blue-900 font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-extrabold text-lg shadow-lg inline-flex items-center justify-center gap-2 transition"
                    >
                      Send Inquiry <FaArrowRight />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA  (unchanged)
      ══════════════════════════════════════════════ */}
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

      <ApplyModal open={openApplyModal} onClose={() => setOpenApplyModal(false)} />
    </div>
  );
}