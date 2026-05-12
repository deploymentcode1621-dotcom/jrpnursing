import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "../../components/ApplyModal";

const categories = [
  "All",
  "Practical Training",
  "Campus Life",
  "Events",
  "Clinical Sessions",
  "Graduation",
  "Sports",
];

const galleryItems = [
  {
    id: 1,
    cat: "Practical Training",
    label: "Practical Training",
    sub: "Hands-on learning experience",
    desc: "Students develop nursing skills through practical demonstrations, supervised training and real healthcare practice.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80",
  },
  {
    id: 2,
    cat: "Campus Life",
    label: "Campus Life",
    sub: "Learning together, growing together",
    desc: "A peaceful and supportive campus environment where students learn discipline, teamwork and confidence.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
  },
  {
    id: 3,
    cat: "Events",
    label: "Events & Celebrations",
    sub: "Celebrating talent and culture",
    desc: "College events help students build confidence, communication skills and active participation beyond academics.",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
  },
  {
    id: 4,
    cat: "Clinical Sessions",
    label: "Clinical Sessions",
    sub: "Real-world hospital exposure",
    desc: "Clinical sessions prepare students for patient care, hospital discipline and professional nursing responsibilities.",
    img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80",
  },
  {
    id: 5,
    cat: "Graduation",
    label: "Graduation Day",
    sub: "Achievements that matter",
    desc: "A proud moment where students complete their nursing journey and step toward a healthcare career.",
    img: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=900&q=80",
  },
  {
    id: 6,
    cat: "Sports",
    label: "Sports Activities",
    sub: "Building strength and teamwork",
    desc: "Sports activities encourage fitness, leadership, teamwork and a healthy student lifestyle.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
  },
  {
    id: 7,
    cat: "Practical Training",
    label: "Lab Sessions",
    sub: "Skill development with practice",
    desc: "Nursing lab sessions give students confidence through repeated practice of essential clinical procedures.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80",
  },
  {
    id: 8,
    cat: "Campus Life",
    label: "Library Study",
    sub: "Knowledge with discipline",
    desc: "The library supports focused study, academic research and strong theoretical preparation.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80",
  },
  {
    id: 9,
    cat: "Events",
    label: "Annual Day",
    sub: "Celebration and achievements",
    desc: "Annual day celebrates student talent, academic success and the vibrant culture of the college.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
  },
  {
    id: 10,
    cat: "Clinical Sessions",
    label: "Hospital Training",
    sub: "Clinical excellence in action",
    desc: "Hospital training gives students exposure to real patient care, ward routines and clinical teamwork.",
    img: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=900&q=80",
  },
  {
    id: 11,
    cat: "Campus Life",
    label: "Campus Green",
    sub: "Peaceful learning environment",
    desc: "Green campus surroundings create a calm atmosphere for learning, growth and student well-being.",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80",
  },
  {
    id: 12,
    cat: "Sports",
    label: "Outdoor Sports",
    sub: "Fitness, energy and teamwork",
    desc: "Outdoor games help students stay active, energetic and connected through teamwork.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900&q=80",
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  const filtered =
    activeTab === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.cat === activeTab);

  return (
    <div className="min-h-screen bg-[#F5FBFA] pt-20 overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 py-24 bg-[#062C30] text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#062C30] via-[#0F766E] to-[#2563EB]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(204,251,241,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.35),transparent_35%)]" />

        <div className="absolute top-14 left-10 w-32 h-32 bg-[#CCFBF1]/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-14 right-10 w-44 h-44 bg-blue-300/25 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto animate-[fadeUp_0.8s_ease-out]">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-[#CCFBF1] px-5 py-2 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-[#CCFBF1]" />
            College Memories
          </div>

          <h1 className="text-white text-4xl sm:text-6xl font-black mb-5 leading-tight">
            Our Campus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFBF1] to-[#DBEAFE]">
              Gallery
            </span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            Explore professional nursing education through practical training,
            clinical learning, campus activities and student achievements.
          </p>

          <div className="flex items-center justify-center gap-2 mt-7 text-sm text-white/75">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <span>›</span>
            <span className="text-white font-semibold">Gallery</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative -mt-10 z-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["12+", "Gallery Moments"],
            ["6+", "Categories"],
            ["100+", "Student Activities"],
            ["24/7", "Learning Environment"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-xl border border-teal-100 hover:-translate-y-2 transition-all duration-300 animate-[fadeUp_0.8s_ease-out]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-2xl md:text-3xl font-black text-[#0F766E]">
                {item[0]}
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mt-1">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-[fadeUp_0.9s_ease-out]">
          <p className="text-[#0F766E] font-bold text-sm uppercase tracking-widest">
            Explore Moments
          </p>

          <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mt-2">
            Life at Nursing College
          </h2>

          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm leading-6">
            Select a category and explore our campus life, hospital training,
            student events and clinical learning environment.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 border border-teal-100 hover:border-[#0F766E] hover:text-[#0F766E] hover:-translate-y-1"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl border border-teal-100 cursor-pointer transition-all duration-500 hover:-translate-y-3 animate-[fadeUp_0.8s_ease-out]"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062C30]/95 via-[#0F766E]/30 to-transparent opacity-90" />

                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0F766E] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {item.cat}
                </span>

                <div className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center translate-x-14 group-hover:translate-x-0 transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-[#2563EB]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-xl font-black">
                    {item.label}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{item.sub}</p>
                </div>
              </div>

              <div className="p-5 bg-white">
                <p className="text-slate-600 text-sm leading-6 min-h-[72px]">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-teal-50">
                  <p className="text-slate-500 text-sm">Click to view image</p>
                  <span className="text-[#0F766E] font-bold text-sm group-hover:translate-x-1 transition-transform">
                    View →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-[zoomIn_0.35s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full font-bold text-xl"
            >
              ✕
            </button>

            <img
              src={lightbox.img}
              alt={lightbox.label}
              className="w-full max-h-[75vh] object-cover rounded-3xl shadow-2xl"
            />

            <div className="mt-5 text-center">
              <h3 className="text-white text-2xl font-black">
                {lightbox.label}
              </h3>
              <p className="text-white/70 text-sm mt-1">{lightbox.sub}</p>
              <p className="text-white/80 text-sm mt-3 max-w-2xl mx-auto leading-6">
                {lightbox.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#062C30] via-[#0F766E] to-[#2563EB] rounded-[32px] p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#CCFBF1]/20 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-[#CCFBF1] font-bold text-sm uppercase tracking-widest mb-3">
              Start Your Journey
            </p>

            <h2 className="text-white text-3xl md:text-4xl font-black mb-4">
              Be Part of Our Nursing Family
            </h2>

            <p className="text-white/85 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-7">
              Join our college and create inspiring memories through learning,
              discipline, care and service.
            </p>

            <button
              onClick={openModal}
              className="inline-flex items-center justify-center bg-white text-[#0F766E] hover:bg-[#CCFBF1] font-bold px-8 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Apply Now →
            </button>
          </div>
        </div>
      </section>

      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}