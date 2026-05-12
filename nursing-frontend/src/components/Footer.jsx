import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden pt-[95px]">
      {/* UNIQUE FOOTER CONNECTING SHAPE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-[105px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,85 C180,145 420,10 700,48 C1010,90 1180,150 1440,65 L1440,150 L0,150 Z"
            fill="#0c2445"
            opacity="0.75"
          />
          <path
            d="M0,105 C260,20 540,125 850,62 C1120,8 1280,95 1440,78 L1440,150 L0,150 Z"
            fill="#071b2f"
          />
        </svg>
      </div>

      <div className="relative bg-[#071b2f] px-6 md:px-12 lg:px-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Swami Vivekanand</h2>
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Nursing College
            </p>

            <p className="text-gray-300 text-sm leading-7">
              We provide quality nursing education with strong practical
              training to build skilled and compassionate healthcare
              professionals.
            </p>

            <div className="flex gap-4 mt-6">
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/placement">Placement</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="footer-heading">Academics</h3>
            <ul className="footer-list">
              <li><Link to="/courses">G.N.M Nursing</Link></li>
              <li><Link to="/facilities">Clinical Practice</Link></li>
              <li><Link to="/facilities">Nursing Labs</Link></li>
              <li><Link to="/placement">Internship Support</Link></li>
              <li><Link to="/placement">Placement Guidance</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-heading">Contact Info</h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-teal-300 mt-1" />
                <p>
                  Swami Vivekanand Nursing College,
                  <br />
                  Dharashiv, Maharashtra, India
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-teal-300" />
                <a href="tel:+917000000000" className="hover:text-teal-300">
                  +91 70000 00000
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-teal-300" />
                <a
                  href="mailto:info@college.com"
                  className="hover:text-teal-300 break-all"
                >
                  info@college.com
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaClock className="text-teal-300" />
                <p>Mon – Sat: 9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-teal-400 to-sky-400 text-[#071b2f]">
              <p className="font-bold text-sm">Admissions Open</p>
              <Link
                to="/contact"
                className="inline-block mt-2 text-sm font-semibold underline"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
          <p>
            © {new Date().getFullYear()} Swami Vivekanand Nursing College. All
            rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-teal-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-300 transition">
              Terms
            </a>
            <a href="#" className="hover:text-teal-300 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-heading {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .footer-heading::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 38px;
          height: 3px;
          border-radius: 50px;
          background: linear-gradient(90deg, #2dd4bf, #38bdf8);
        }

        .footer-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          color: #d1d5db;
        }

        .footer-list a {
          transition: all 0.3s ease;
        }

        .footer-list a:hover {
          color: #2dd4bf;
          padding-left: 6px;
        }

        .social-icon {
          height: 40px;
          width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 16px;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, #2dd4bf, #38bdf8);
          color: #071b2f;
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(45, 212, 191, 0.25);
        }
      `}</style>
    </footer>
  );
}