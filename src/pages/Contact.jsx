import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "When do admissions open?",              a: "Admissions for 2026 are currently open. We recommend applying early as seats are limited." },
  { q: "What documents are required?",          a: "10th & 12th marksheets, transfer certificate, medical fitness certificate, passport-size photos and Aadhaar card." },
  { q: "Is hostel facility available?",         a: "Yes, we provide safe and comfortable hostel facilities for girl students with 24/7 security." },
  { q: "Does the college offer scholarships?",  a: "Yes, merit-based and need-based scholarships are available for eligible students." },
  { q: "What is the placement rate?",           a: "We maintain a 100% placement record with students placed in top hospitals across India and abroad." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 pt-20">

      {/* ── Hero Banner ── */}
      <section className="bg-gradient-to-br from-[#0a2342] to-[#1a4b8c] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400 text-xs font-bold tracking-[0.25em] uppercase mb-3 flex items-center justify-center gap-2">
            <span className="w-6 h-px bg-green-400"/>Get In Touch<span className="w-6 h-px bg-green-400"/>
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-black mb-3">
            Contact <span className="text-[#4ade80]">Us</span>
          </h1>
          <p className="text-blue-200/70 text-sm max-w-lg mx-auto">
            Have questions? We're here to help. Reach out to us and our team will get back to you shortly.
          </p>
          <div className="flex items-center justify-center gap-2 mt-5 text-xs text-blue-300/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-8">
          {[
            { icon: "📍", title: "Visit Us",    value: "Dharashiv, Maharashtra, India",  sub: "Come see our campus", color: "bg-blue-50",   border: "border-blue-200" },
            { icon: "📞", title: "Call Us",     value: "+91 70000 00000",                sub: "Mon–Sat, 9AM–5PM",    color: "bg-green-50",  border: "border-green-200" },
            { icon: "✉️", title: "Email Us",   value: "info@svnursing.ac.in",           sub: "We reply within 24hrs",color: "bg-purple-50", border: "border-purple-200" },
            { icon: "🕒", title: "Working Hours",value: "Mon–Sat: 9AM – 5PM",            sub: "Sunday: Closed",      color: "bg-amber-50",  border: "border-amber-200" },
          ].map((c) => (
            <div key={c.title} className={`${c.color} border ${c.border} rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200`}>
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-[#0a2342] font-black text-sm mb-1">{c.title}</p>
              <p className="text-[#1a4b8c] font-semibold text-sm leading-tight">{c.value}</p>
              <p className="text-gray-500 text-xs mt-1">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-[#0a2342] text-2xl font-black mb-1">Send Us a Message</h2>
            <p className="text-gray-400 text-sm mb-7">Fill in the form and our counsellor will contact you shortly.</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-[#0a2342] text-xl font-black mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">Your enquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", course: "", message: "" }); }}
                  className="mt-6 bg-[#1a4b8c] text-white font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-[#1259b8] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#0a2342] text-xs font-bold block mb-1.5">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1a4b8c] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-[#0a2342] text-xs font-bold block mb-1.5">Phone Number *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1a4b8c] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[#0a2342] text-xs font-bold block mb-1.5">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1a4b8c] focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="text-[#0a2342] text-xs font-bold block mb-1.5">Course Interested In *</label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1a4b8c] focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                  >
                    <option value="">Select a course</option>
                    <option>B.Sc. Nursing (4 Years)</option>
                    <option>P.B. B.Sc. Nursing (2 Years)</option>
                    <option>M.Sc. Nursing (2 Years)</option>
                    <option>G.N.M. Nursing (3 Years)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#0a2342] text-xs font-bold block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any questions or specific requirements..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1a4b8c] focus:ring-2 focus:ring-blue-100 transition-all resize-none placeholder:text-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1a4b8c] to-[#1259b8] hover:from-[#1259b8] hover:to-[#1a4b8c] text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-blue-200 text-sm flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <p className="text-center text-gray-400 text-xs">📞 Or call us directly: <a href="tel:+917000000000" className="text-[#1a4b8c] font-semibold hover:underline">+91 70000 00000</a></p>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-xl h-72 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-5xl mb-3">📍</div>
                <p className="text-[#0a2342] font-black text-lg">Swami Vivekanand Nursing College</p>
                <p className="text-gray-500 text-sm mt-1">Dharashiv, Maharashtra, India</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-[#1a4b8c] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#1259b8] transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <h3 className="text-[#0a2342] font-black text-base mb-4">Quick Contact</h3>
              <div className="space-y-3">
                {[
                  { label: "Admission Enquiry", phone: "+91 70000 00000" },
                  { label: "Principal Office",  phone: "+91 70000 00001" },
                  { label: "Student Helpline",  phone: "+91 70000 00002" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-500 text-xs">{item.label}</span>
                    <a href={`tel:${item.phone.replace(/\s/g, "")}`} className="text-[#1a4b8c] font-bold text-xs hover:text-blue-700 transition-colors">
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-gradient-to-r from-[#0a2342] to-[#1a4b8c] rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-sm">Follow Us</p>
                <p className="text-blue-200/70 text-xs">Stay connected on social media</p>
              </div>
              <div className="flex gap-3">
                {["📘", "📸", "▶️", "💼"].map((icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-base transition-all duration-200 hover:-translate-y-0.5">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-4 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#16a34a] text-xs font-bold tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-[#16a34a]"/>FAQ<span className="w-6 h-px bg-[#16a34a]"/>
            </p>
            <h2 className="text-[#0a2342] text-3xl font-black">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-[#0a2342] font-bold text-sm">{faq.q}</span>
                  <span className={`text-[#1a4b8c] text-xl font-bold transition-transform duration-200 flex-shrink-0 ml-4 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-200 pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}