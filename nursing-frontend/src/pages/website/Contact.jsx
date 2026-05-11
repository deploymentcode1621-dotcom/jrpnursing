import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/ui/Modal";

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

const supportCards = [
  {
    icon: "🎓",
    title: "Admission Guidance",
    text: "Our admission team guides students about eligibility, fees, documents, and the complete admission process.",
  },
  {
    icon: "🏥",
    title: "Campus & Lab Visit",
    text: "Visit our classrooms, nursing labs, library, hostel facilities, and practical learning environment.",
  },
  {
    icon: "👩‍⚕️",
    title: "Career Support",
    text: "We guide students for hospital training, practical learning, interviews, and future nursing opportunities.",
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
  const [openApplyModal, setOpenApplyModal] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-[#f4f8ff] overflow-hidden">
      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#e0f2fe,transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div className="animate-fadeUp">
            <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase mb-4">
              Contact & Admission
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#082f5f] leading-tight">
              Get in Touch With <br />
              <span className="text-[#0b5db8]">JRP Nursing College</span>
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl leading-7">
              We are here to help you begin your nursing journey with
              confidence. Contact us for admission details, course guidance,
              hostel information, campus visit, and counselling support.
            </p>

            <button
              onClick={() => setOpenApplyModal(true)}
              className="mt-7 bg-[#0b5db8] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#082f5f] transition-all hover:-translate-y-1 shadow-lg"
            >
              Apply Now
            </button>

            <div className="mt-8 space-y-4 max-w-lg">
              <div className="contact-card animate-fadeUp delay-1">
                <div className="icon-box">☎</div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+917620596036">+91 76205 96036</a>
                </div>
              </div>

              <div className="contact-card animate-fadeUp delay-2">
                <div className="icon-box">✉</div>
                <div>
                  <h3>Email</h3>
                  <p>info@jrpcollege.ac.in</p>
                </div>
              </div>

              <div className="contact-card animate-fadeUp delay-3">
                <div className="icon-box">📍</div>
                <div>
                  <h3>Address</h3>
                  <p>JRP Nursing College, Latur, Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="mt-7 text-sm text-gray-500">
              <Link to="/" className="hover:text-[#0b5db8] font-semibold">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-[28px] shadow-2xl p-6 sm:p-8 border border-blue-100 animate-slideLeft">
            <h2 className="text-2xl font-black text-[#082f5f]">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              Fill the form and our admission team will contact you shortly.
            </p>

            {submitted ? (
              <div className="text-center py-16 animate-fadeUp">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-[#082f5f]">
                  Thank You!
                </h3>
                <p className="text-gray-600 mt-2">
                  Your enquiry has been submitted successfully.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      course: "G.N.M. Nursing",
                      message: "",
                    });
                  }}
                  className="mt-7 bg-[#0b5db8] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#082f5f]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="input"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number"
                  className="input"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="input"
                />

                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  className="input bg-white"
                >
                  <option>G.N.M. Nursing</option>
                </select>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  className="input resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-[#0b5db8] text-white py-4 rounded-xl font-black hover:bg-[#082f5f] transition-all hover:-translate-y-1 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ADMISSION SUPPORT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {supportCards.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-[24px] shadow-lg border border-blue-100 hover:-translate-y-2 transition-all duration-300 animate-fadeUp"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-black text-[#082f5f]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeUp">
            <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase">
              Student Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082f5f] mt-3">
              We Are Always Ready To Guide You
            </h2>
            <p className="text-gray-600 mt-4 leading-7">
              Choosing a nursing college is an important decision for every
              student and parent. Our admission team helps you understand the
              G.N.M Nursing course, eligibility, fee details, hostel facility,
              practical training, hospital exposure and career opportunities.
            </p>
            <p className="text-gray-600 mt-4 leading-7">
              You can contact us for admission counselling, campus visit
              booking, document verification guidance and complete support until
              your admission process is completed.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Admission Counselling",
              "Course Eligibility Help",
              "Hostel Information",
              "Campus Visit Support",
              "Document Guidance",
              "Career Path Discussion",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 hover:-translate-y-2 transition-all animate-fadeUp"
              >
                <div className="text-3xl mb-3 text-[#0b5db8]">✓</div>
                <h3 className="font-black text-[#082f5f]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-[30px] shadow-xl border border-blue-100 p-8 sm:p-10 animate-fadeUp">
          <div className="text-center mb-10">
            <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase">
              Admission Steps
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#082f5f] mt-3">
              Simple Admission Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Send Enquiry",
                text: "Fill the contact form or call our admission helpline.",
              },
              {
                step: "02",
                title: "Get Counselling",
                text: "Our team explains course details, fees and eligibility.",
              },
              {
                step: "03",
                title: "Submit Documents",
                text: "Submit required documents for verification.",
              },
              {
                step: "04",
                title: "Confirm Admission",
                text: "Complete admission formalities and start your journey.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-[#f4f8ff] rounded-2xl p-6 border border-blue-100 hover:-translate-y-2 transition-all"
              >
                <div className="text-4xl font-black text-blue-100 absolute top-4 right-5">
                  {item.step}
                </div>
                <h3 className="text-xl font-black text-[#082f5f] mt-8">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-3 leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS REQUIRED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          <div className="bg-[#0b5db8] text-white rounded-[30px] p-8 sm:p-10 shadow-xl animate-fadeUp">
            <p className="text-blue-100 text-xs font-black tracking-[0.3em] uppercase">
              Required Documents
            </p>
            <h2 className="text-3xl font-black mt-3">
              Keep These Documents Ready
            </h2>
            <p className="text-blue-50 mt-4 leading-7">
              Students should keep original and Xerox copies of important
              documents ready during admission counselling and verification.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "10th Marksheet",
              "12th Marksheet",
              "Transfer Certificate",
              "Aadhaar Card",
              "Medical Fitness Certificate",
              "Passport Size Photos",
              "Caste Certificate if applicable",
              "Domicile Certificate if applicable",
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-lg border border-blue-100 flex items-center gap-4 hover:-translate-y-2 transition-all animate-fadeUp"
              >
                <div className="w-10 h-10 rounded-xl bg-[#dbeafe] text-[#0b5db8] flex items-center justify-center font-black">
                  {index + 1}
                </div>
                <p className="font-bold text-[#082f5f]">{doc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#082f5f] rounded-[30px] p-8 sm:p-10 lg:p-12 text-white grid lg:grid-cols-3 gap-8 items-center shadow-xl animate-fadeUp">
          <div>
            <p className="text-blue-200 text-xs font-black tracking-[0.3em] uppercase">
              Visit Campus
            </p>
            <h2 className="text-3xl font-black mt-3">
              Plan Your Visit With Us
            </h2>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-5">
            <div className="info-box">
              <h3>Office Time</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 5:00 PM</p>
            </div>

            <div className="info-box">
              <h3>Admission Help</h3>
              <p>Course counselling</p>
              <p>Document support</p>
            </div>

            <div className="info-box">
              <h3>Available Course</h3>
              <p>G.N.M. Nursing</p>
              <p>Professional training</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REACH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-10 animate-fadeUp">
          <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase">
            How To Reach
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#082f5f] mt-3">
            Easy Ways To Visit Our Campus
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚌",
              title: "By Bus",
              text: "Students can reach the campus through local and district bus transport facilities in Latur.",
            },
            {
              icon: "🚆",
              title: "By Railway",
              text: "Latur railway connectivity helps students and parents visit from nearby cities.",
            },
            {
              icon: "🚗",
              title: "By Road",
              text: "Campus is accessible by road for parents and students visiting for admission.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-7 shadow-lg border border-blue-100 text-center hover:-translate-y-2 transition-all animate-fadeUp"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-black text-[#082f5f]">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-[28px] shadow-xl overflow-hidden border border-blue-100 animate-fadeUp">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase">
                Campus Location
              </p>
              <h2 className="text-3xl font-black text-[#082f5f] mt-3">
                Visit JRP Nursing College
              </h2>
              <p className="text-gray-600 mt-4 leading-7">
                Students and parents can visit our campus in Latur for
                admission guidance, counselling, document verification and
                campus tour.
              </p>

              <a
                href="https://www.google.com/maps?q=Latur,Maharashtra"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-[#0b5db8] text-white px-7 py-3 rounded-xl font-bold hover:bg-[#082f5f] w-fit"
              >
                Open Google Maps
              </a>
            </div>

            <iframe
              src="https://www.google.com/maps?q=Latur,Maharashtra&output=embed"
              className="w-full h-[360px] border-0"
              loading="lazy"
              title="JRP Nursing College Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-10 animate-fadeUp">
          <p className="text-[#0b5db8] text-xs font-black tracking-[0.3em] uppercase">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#082f5f] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:-translate-y-2 transition-all duration-300 animate-fadeUp"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="font-black text-[#082f5f]">{faq.q}</span>
                <span
                  className={`text-2xl text-[#0b5db8] transition-transform ${
                    openFaq === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openFaq === i && (
                <p className="px-6 pb-5 text-gray-600 leading-7">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+917620596036"
          className="w-14 h-14 rounded-full bg-[#0b5db8] text-white flex items-center justify-center shadow-xl text-xl hover:scale-110 transition"
        >
          ☎
        </a>

        <a
          href="https://wa.me/917620596036"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl text-xl hover:scale-110 transition"
        >
          ✆
        </a>
      </div>

      <ApplyModal
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      /> <Modal
        title="Apply Now"
        open={openApplyModal}
        onClose={() => setOpenApplyModal(false)}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <button className="w-full bg-[#0b5db8] hover:bg-[#082f5f] text-white font-bold py-3 rounded-xl transition">
            Submit Application
          </button>
        </div>
      </Modal>

      <style>{`
        .contact-card {
          background: white;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: center;
          box-shadow: 0 15px 35px rgba(8, 47, 95, 0.08);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 45px rgba(8, 47, 95, 0.14);
        }

        .contact-card h3 {
          color: #082f5f;
          font-weight: 900;
          font-size: 14px;
        }

        .contact-card p,
        .contact-card a {
          color: #4b5563;
          font-size: 14px;
          margin-top: 3px;
        }

        .icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: #0b5db8;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .input {
          width: 100%;
          border: 1px solid #d6e4f5;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 14px;
          color: #082f5f;
          outline: none;
          transition: all 0.25s ease;
          background-color: white;
        }

        .input:focus {
          border-color: #0b5db8;
          box-shadow: 0 0 0 4px rgba(11, 93, 184, 0.12);
        }

        .input::placeholder {
          color: #9ca3af;
        }

        .info-box {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 22px;
        }

        .info-box h3 {
          font-weight: 900;
          margin-bottom: 8px;
          color: #dbeafe;
        }

        .info-box p {
          color: rgba(255, 255, 255, 0.78);
          font-size: 14px;
          line-height: 1.7;
        }

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

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(45px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeUp {
          opacity: 0;
          animation: fadeUp 0.8s ease forwards;
        }

        .animate-slideLeft {
          opacity: 0;
          animation: slideLeft 0.8s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.15s;
        }

        .delay-2 {
          animation-delay: 0.3s;
        }

        .delay-3 {
          animation-delay: 0.45s;
        }
      `}</style>
    </div>
  );
}