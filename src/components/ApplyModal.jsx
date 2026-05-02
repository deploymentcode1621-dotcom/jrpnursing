import React, { useState } from "react";
import { FaTimes, FaUserNurse, FaPaperPlane } from "react-icons/fa";

const ApplyModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    qualification: "",
    course: "GNM Nursing",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    console.log(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-blue-950/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl animate-fadeIn">
        
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 h-10 w-10 rounded-full bg-white/90 text-blue-900 shadow-lg flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition"
        >
          <FaTimes />
        </button>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT DESIGN */}
          <div className="relative hidden lg:block bg-gradient-to-br from-blue-950 via-blue-900 to-green-700 p-10 text-white">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-green-300/20" />

            <div className="relative z-10">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-4xl">
                <FaUserNurse />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-200">
                Admissions Open
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight">
                Apply for <br /> G.N.M. Nursing
              </h2>

              <p className="mt-5 leading-8 text-blue-50">
                Fill this quick admission enquiry form. Our admission team will
                contact you soon.
              </p>

              <div className="mt-8 space-y-4 text-sm font-semibold">
                <p>✓ 3 Years Diploma Program</p>
                <p>✓ Practical Nursing Training</p>
                <p>✓ Hospital Exposure</p>
                <p>✓ Career Guidance</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="p-6 md:p-10">
            <p className="text-sm font-bold uppercase tracking-widest text-green-600">
              Quick Application
            </p>

            <h3 className="mt-2 text-3xl font-black text-blue-950">
              Admission Enquiry Form
            </h3>

            <p className="mt-2 text-gray-500">
              Enter your details below.
            </p>

            <div className="mt-7 grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Student Full Name"
                className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="Mobile Number"
                className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />

              <select
                name="qualification"
                value={form.qualification}
                onChange={handleChange}
                required
                className="rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              >
                <option value="">Previous Qualification</option>
                <option value="10th">10th</option>
                <option value="12th Science">12th Science</option>
                <option value="12th Arts">12th Arts</option>
                <option value="12th Commerce">12th Commerce</option>
                <option value="Graduate">Graduate</option>
              </select>

              <input
                type="text"
                name="course"
                value={form.course}
                readOnly
                className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 font-bold text-green-800 outline-none"
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message / Query"
                rows="4"
                className="md:col-span-2 rounded-2xl border border-blue-100 bg-slate-50 px-5 py-4 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100"
              />
            </div>

            <button
              type="submit"
              className="mt-7 w-full rounded-2xl bg-gradient-to-r from-green-600 to-blue-800 py-4 font-black text-white shadow-xl hover:scale-[1.01] transition flex items-center justify-center gap-3"
            >
              Submit Application <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;