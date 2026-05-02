import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "../components/ApplyModal";

const faqs = [
  {
    q: "What course is available?",
    a: "Currently, G.N.M. Nursing course is available.",
  },
  {
    q: "How can I apply?",
    a: "You can apply through the enquiry form or directly contact our admission office.",
  },
  {
    q: "Is hostel facility available?",
    a: "Yes, safe and comfortable hostel facility is available for girl students.",
  },
  {
    q: "Can parents visit the campus?",
    a: "Yes, parents and students can visit the campus during working hours.",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "G.N.M. Nursing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // ✅ MODAL STATE
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const openModal = () => setOpenApplyModal(true);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-[#f4f8ff] overflow-hidden">
      
      {/* HERO */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <p className="text-blue-700 font-bold uppercase text-xs">
              Contact & Admission
            </p>

            <h1 className="text-4xl font-black text-[#082f5f] mt-3">
              Get in Touch With <br />
              JRP Nursing College
            </h1>

            <p className="text-gray-600 mt-5">
              Contact us for admission guidance, hostel details and course
              information.
            </p>

            {/* APPLY BUTTON */}
            <button
              onClick={openModal}
              className="mt-6 bg-green-600 text-white px-7 py-3 rounded-xl font-bold hover:bg-green-700"
            >
              Apply Now
            </button>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-blue-900">
                  Thank You!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your enquiry has been submitted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="w-full border p-3 rounded-lg"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border p-3 rounded-lg"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message"
                  className="w-full border p-3 rounded-lg"
                />

                <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-black text-center text-[#082f5f] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left font-bold text-blue-900"
              >
                {faq.q}
              </button>

              {openFaq === i && (
                <p className="mt-3 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* APPLY MODAL */}
      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      />
    </div>
  );
}