import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import Modal from "../../components/ui/Modal";

const faqs = [
  {
    q: "What course is available in the college?",
    a: "Currently we provide G.N.M. Nursing program with practical and clinical training.",
  },
  {
    q: "How can I apply for admission?",
    a: "You can apply directly through our Apply Now popup form or contact the admission office.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, separate and secure hostel facility is available for students.",
  },
  {
    q: "Do you provide placement assistance?",
    a: "Yes, we provide placement guidance and hospital internship support.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // APPLY MODAL
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [applyForm, setApplyForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleApplyChange = (e) => {
    setApplyForm({
      ...applyForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();

    alert("Application Submitted Successfully!");

    setApplyForm({
      name: "",
      phone: "",
      email: "",
      course: "",
    });

    setOpenApplyModal(false);
  };

  return (
    <div className="bg-[#f6fbff] pt-20 overflow-hidden">
      {/* HERO */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#062C30] via-[#0F766E] to-[#2563EB]" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-[#CCFBF1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Contact & Admission
          </div>

          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Let’s Start Your <br />
            Nursing Journey
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto mt-6 leading-7">
            Contact us for admission guidance, nursing course details,
            placements and hostel information.
          </p>

          <button
            onClick={() => setOpenApplyModal(true)}
            className="mt-8 bg-white text-[#0F766E] px-8 py-4 rounded-full font-bold hover:scale-105 transition shadow-2xl"
          >
            Apply Now →
          </button>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative -mt-12 z-10 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              value: "+91 70000 00000",
            },
            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "info@nursingcollege.com",
            },
            {
              icon: <FaMapMarkerAlt />,
              title: "Location",
              value: "Dharashiv, Maharashtra",
            },
            {
              icon: <FaClock />,
              title: "Working Hours",
              value: "Mon - Sat (9AM - 5PM)",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-7 shadow-xl border border-teal-100 hover:-translate-y-3 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CCFBF1] to-[#DBEAFE] flex items-center justify-center text-2xl text-[#0F766E] mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-black text-[#0F172A]">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-3 text-sm leading-6">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-10">
          {/* FORM */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-teal-100">
            <div className="mb-8">
              <p className="text-[#0F766E] font-bold uppercase tracking-widest text-sm">
                Send Message
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] mt-2">
                Contact Admission Office
              </h2>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                <h3 className="text-2xl font-black text-green-700">
                  Message Sent Successfully!
                </h3>

                <p className="text-green-600 mt-2">
                  Our admission team will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl"
                >
                  Send Message <FaPaperPlane />
                </button>
              </form>
            )}
          </div>

          {/* SIDE INFO */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#062C30] to-[#0F766E] rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full" />

              <div className="relative">
                <p className="uppercase tracking-widest text-sm text-[#CCFBF1] font-bold">
                  Nursing Admissions
                </p>

                <h3 className="text-3xl font-black mt-3 leading-tight">
                  Start Your Career In Healthcare
                </h3>

                <p className="text-white/80 mt-5 leading-7 text-sm">
                  Join our professional nursing college and build your future
                  through practical learning and healthcare education.
                </p>

                <button
                  onClick={() => setOpenApplyModal(true)}
                  className="mt-7 bg-white text-[#0F766E] px-7 py-3 rounded-full font-bold hover:scale-105 transition"
                >
                  Apply for Admission →
                </button>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-teal-100">
              <h3 className="text-2xl font-black text-[#0F172A]">
                Follow Us
              </h3>

              <div className="flex gap-4 mt-7">
                {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
                  (Icon, index) => (
                    <div
                      key={index}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#CCFBF1] to-[#DBEAFE] text-[#0F766E] flex items-center justify-center text-xl"
                    >
                      <Icon />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#0F766E] uppercase tracking-widest text-sm font-bold">
              FAQs
            </p>

            <h2 className="text-4xl font-black text-[#0F172A] mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-teal-100 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-bold text-[#0F172A]">
                    {faq.q}
                  </span>

                  <span className="text-[#0F766E] text-2xl font-bold">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-7">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY MODAL */}
      {openApplyModal && (
        <Modal
          title="Apply for Admission"
          onClose={() => setOpenApplyModal(false)}
        >
          <form onSubmit={handleApplySubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={applyForm.name}
              onChange={handleApplyChange}
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
            />

            <input
              type="tel"
              name="phone"
              value={applyForm.phone}
              onChange={handleApplyChange}
              required
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
            />

            <input
              type="email"
              name="email"
              value={applyForm.email}
              onChange={handleApplyChange}
              required
              placeholder="Email Address"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
            />

            <input
              type="text"
              name="course"
              value={applyForm.course}
              onChange={handleApplyChange}
              required
              placeholder="Interested Course"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:border-[#0F766E]"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white py-4 rounded-2xl font-bold shadow-xl"
            >
              Submit Application
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
}