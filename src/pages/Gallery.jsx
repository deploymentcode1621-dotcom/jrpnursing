import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = ["All", "Practical Training", "Campus Life", "Events", "Clinical Sessions", "Graduation", "Sports"];

const galleryItems = [
  { id: 1, cat: "Practical Training",  label: "Practical Training",   sub: "Hands-on learning",            img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80" },
  { id: 2, cat: "Campus Life",         label: "Campus Life",          sub: "Learning together, growing together", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" },
  { id: 3, cat: "Events",              label: "Events & Celebrations", sub: "Celebrating talent & culture", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
  { id: 4, cat: "Clinical Sessions",   label: "Clinical Sessions",    sub: "Real-world clinical exposure",  img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80" },
  { id: 5, cat: "Graduation",          label: "Graduation Day",       sub: "Achievements that matter",      img: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=600&q=80" },
  { id: 6, cat: "Sports",              label: "Sports Activities",    sub: "Building strength & teamwork",  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" },
  { id: 7, cat: "Practical Training",  label: "Lab Sessions",         sub: "Skill development",             img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80" },
  { id: 8, cat: "Campus Life",         label: "Library Study",        sub: "Knowledge is power",            img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80" },
  { id: 9, cat: "Events",              label: "Annual Day",           sub: "Celebration & achievements",    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
  { id: 10, cat: "Clinical Sessions",  label: "Hospital Training",    sub: "Clinical excellence",           img: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80" },
  { id: 11, cat: "Campus Life",        label: "Campus Green",         sub: "Peaceful learning environment", img: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" },
  { id: 12, cat: "Sports",             label: "Outdoor Sports",       sub: "Fitness and teamwork",          img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80" },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeTab === "All" ? galleryItems : galleryItems.filter((g) => g.cat === activeTab);

  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-green-400"/>Gallery<span className="w-6 h-px bg-green-400"/>
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-3">Our Campus <span className="text-[#4ade80]">Gallery</span></h1>
          <p className="text-blue-200/70 text-sm max-w-lg mx-auto">Moments that inspire, experiences that shape our journey.</p>
          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-blue-300/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat
                  ? "bg-[#1a4b8c] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a4b8c] hover:text-[#1a4b8c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-white font-bold text-sm">{item.label}</p>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                    </svg>
                    {item.sub}
                  </p>
                </div>
              </div>
              {/* Camera icon */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-[#1a4b8c]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <circle cx="12" cy="13" r="3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white font-bold text-2xl"
            >✕</button>
            <img src={lightbox.img} alt={lightbox.label} className="w-full rounded-2xl shadow-2xl"/>
            <div className="mt-3 text-center">
              <p className="text-white font-bold">{lightbox.label}</p>
              <p className="text-white/60 text-sm">{lightbox.sub}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-10 px-4 max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-white text-3xl font-black mb-3">Be Part of Our Story</h2>
          <p className="text-blue-200/70 text-sm mb-7 max-w-md mx-auto">Join Swami Vivekanand Nursing College and create your own unforgettable memories.</p>
          <Link to="/apply" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm">
            Apply Now →
          </Link>
        </div>
      </section>
    </div>
  );
}