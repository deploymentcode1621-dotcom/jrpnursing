import React from "react";
import { Link } from "react-router-dom";

const facilities = [
  {
    icon: "🏛️",
    title: "Modern Campus",
    desc: "A serene, green and secure campus with advanced infrastructure and a peaceful learning environment.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: "🔬",
    title: "Advanced Labs",
    desc: "Well-equipped laboratories for practical training and hands-on learning in all nursing disciplines.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: "📚",
    title: "Digital Library",
    desc: "A vast collection of books, journals and digital resources to support academic excellence and research.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    icon: "🛏️",
    title: "Comfortable Hostel",
    desc: "Safe, clean and comfortable hostel facilities for girls with 24/7 security and modern amenities.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: "🍽️",
    title: "Hygienic Canteen",
    desc: "Nutritious and hygienic food in a clean and spacious environment for students and staff.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    bg: "bg-red-50",
    color: "text-red-600",
  },
  {
    icon: "⚽",
    title: "Sports & Recreation",
    desc: "Indoor and outdoor sports facilities for physical fitness and overall well-being of every student.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    bg: "bg-teal-50",
    color: "text-teal-600",
  },
];

const extras = [
  { icon: "🛡️", title: "24/7 Security",       desc: "Round-the-clock security for a safe campus." },
  { icon: "📶", title: "Wi-Fi Campus",         desc: "High-speed Wi-Fi connectivity across the campus." },
  { icon: "🏥", title: "Health Care",          desc: "On-campus health center with medical support." },
  { icon: "🚌", title: "Transport Facility",   desc: "Safe and reliable transport facility for students." },
  { icon: "🎤", title: "Seminar Hall",         desc: "Spacious seminar halls for events and workshops." },
  { icon: "🖥️", title: "Computer Lab",        desc: "Modern computer lab with internet facilities." },
];

export default function Facilities() {
  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-green-400"/>Our Facilities
              </p>
              <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight mb-4">
                World-Class Facilities<br/>
                <span className="text-[#4ade80]">for Holistic Learning</span>
              </h1>
              <p className="text-blue-200/70 leading-relaxed text-sm max-w-lg">
                We provide state-of-the-art infrastructure and a supportive environment to ensure our students receive the best education, practical training and overall development.
              </p>
              <div className="flex items-center gap-2 mt-5 text-xs text-blue-300/60">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>›</span>
                <span className="text-white">Facilities</span>
              </div>
            </div>
            <div className="hidden lg:block rounded-3xl overflow-hidden shadow-2xl h-64">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80"
                alt="Facilities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Facilities Grid ── */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-[#16a34a]"/>Infrastructure<span className="w-6 h-px bg-[#16a34a]"/>
          </p>
          <h2 className="text-[#0a2342] text-3xl font-black">Our Key Facilities</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">Everything you need for a complete nursing education experience under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-11 h-11 ${f.bg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                    {f.icon}
                  </div>
                  <h3 className={`font-black text-lg ${f.color}`}>{f.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Extra Amenities ── */}
      <section className="py-4 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-[#0a2342] text-2xl font-black">Additional Amenities</h2>
            <p className="text-gray-500 text-sm mt-2">Supporting services that make campus life complete.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {extras.map((e) => (
              <div key={e.title} className="bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-default group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{e.icon}</div>
                <p className="text-[#1a4b8c] font-bold text-xs mb-1">{e.title}</p>
                <p className="text-gray-500 text-[10px] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-10 px-4 max-w-7xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-3xl p-10 text-center shadow-2xl">
          <h2 className="text-white text-3xl font-black mb-3">Experience It Yourself</h2>
          <p className="text-blue-200/70 text-sm mb-7 max-w-md mx-auto">Visit our campus and see our world-class facilities firsthand. Book a free campus tour today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-[#16a34a] hover:bg-[#15803d] text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm">
              Book Campus Tour →
            </Link>
            <Link to="/apply" className="bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-3 rounded-xl transition-all duration-200 text-sm border border-white/20">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}