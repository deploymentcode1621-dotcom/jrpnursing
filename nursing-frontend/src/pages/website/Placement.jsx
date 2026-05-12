import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "../../components/ApplyModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { value: "100%", label: "Placement Assistance", icon: "🎯" },
  { value: "500+", label: "Students Placed", icon: "👩‍⚕️" },
  { value: "50+", label: "Hospital Tie-ups", icon: "🏥" },
  { value: "5+", label: "States Covered", icon: "📍" },
];

const placedStudents = [
  {
    name: "Priya Deshmukh",
    course: "G.N.M. Nursing",
    hospital: "Apollo Hospitals, Pune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sunita Jadhav",
    course: "G.N.M. Nursing",
    hospital: "Ruby Hall Clinic, Pune",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Anjali Patil",
    course: "G.N.M. Nursing",
    hospital: "Sahyadri Hospital, Nashik",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Kavya More",
    course: "G.N.M. Nursing",
    hospital: "Manipal Hospitals, Bangalore",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
];

export default function Placement() {
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#f8fbfb] pt-20">

      {/* HERO */}
      <section className="px-4 py-20 bg-gradient-to-br from-[#e9fbf7] to-[#eef4ff]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl font-black text-[#12343b]">
              Nursing Placement Cell
            </h1>

            <p className="mt-4 text-gray-600">
              We help students get placed in top hospitals with full career support.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={openModal}
                className="bg-[#1fae96] text-white px-7 py-3 rounded-full font-bold"
              >
                Apply Now
              </button>

              <Link
                to="/contact"
                className="border px-7 py-3 rounded-full font-bold"
              >
                Contact
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl">{s.icon}</div>
            <h3 className="text-xl font-bold">{s.value}</h3>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* STUDENTS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Placed Students
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2000 }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {placedStudents.map((s) => (
            <SwiperSlide key={s.name}>
              <div className="bg-white p-5 rounded-xl shadow">
                <img src={s.image} className="rounded-lg" />

                <h3 className="mt-3 font-bold">{s.name}</h3>
                <p className="text-sm text-gray-500">{s.course}</p>
                <p className="text-green-600 text-sm mt-2">
                  {s.hospital}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto bg-green-600 text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold">
            Start Your Nursing Career Today
          </h2>

          <button
            onClick={openModal}
            className="mt-5 bg-white text-green-700 px-7 py-3 rounded-full font-bold"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* MODAL */}
      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />
    </div>
  );
}