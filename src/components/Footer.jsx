import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home",       path: "/" },
  { label: "About Us",   path: "/about" },
  { label: "Courses",    path: "/courses" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery",    path: "/gallery" },
  { label: "Placement",  path: "/placement" },
  { label: "Contact Us", path: "/contact" },
];

const courses = [
  { label: "B.Sc. Nursing (4 Years)",       path: "/courses" },
  { label: "P.B. B.Sc. Nursing (2 Years)",  path: "/courses" },
  { label: "M.Sc. Nursing (2 Years)",       path: "/courses" },
  { label: "G.N.M. Nursing (3 Years)",      path: "/courses" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1e3d] text-white">

      {/* ── Top Section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <path d="M8 30 Q4 24 8 18 Q10 26 14 28Z" fill="#4ade80" opacity="0.9"/>
                  <path d="M40 30 Q44 24 40 18 Q38 26 34 28Z" fill="#4ade80" opacity="0.9"/>
                  <rect x="13" y="26" width="22" height="14" rx="2" fill="#60a5fa"/>
                  <rect x="14" y="27" width="10" height="12" rx="1" fill="#93c5fd" opacity="0.7"/>
                  <line x1="24" y1="27" x2="24" y2="39" stroke="white" strokeWidth="1"/>
                  <path d="M24 6 C22 10 20 13 22 16 C23 18 25 18 26 16 C28 13 26 10 24 6Z" fill="#4ade80"/>
                  <path d="M24 18 C23 20 21 22 21 24 C21 26.2 22.3 27.5 24 27.5 C25.7 27.5 27 26.2 27 24 C27 22 25 20 24 18Z" fill="#38bdf8" opacity="0.9"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-5">Swami Vivekanand</div>
                <div className="text-green-400 font-semibold text-xs tracking-[0.15em] uppercase">Nursing College</div>
              </div>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-5">
              Dedicated to shaping compassionate, competent and confident nurses who make a difference in healthcare and society.
            </p>
            <div className="text-blue-200/60 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 flex-shrink-0">🏫</span>
                <span>Approved by INC, New Delhi &amp; Affiliated to MUHS, Nashik</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#16a34a] rounded-full flex items-center justify-center text-blue-200 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-green-400"/>Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-blue-200/70 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors duration-200 flex-shrink-0"/>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-green-400"/>Our Courses
            </h3>
            <ul className="space-y-2.5">
              {courses.map((c) => (
                <li key={c.label}>
                  <Link
                    to={c.path}
                    className="text-blue-200/70 hover:text-white text-sm flex items-center gap-2 group transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 group-hover:bg-green-400 transition-colors duration-200 flex-shrink-0"/>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-green-400"/>Contact Us
            </h3>
            <ul className="space-y-4 text-sm text-blue-200/70">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5 flex-shrink-0 text-base">📍</span>
                <span className="leading-relaxed">Swami Vivekanand Nursing College,<br/>Dharashiv, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0 text-base">📞</span>
                <a href="tel:+917000000000" className="hover:text-white transition-colors duration-200">+91 70000 00000</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0 text-base">✉️</span>
                <a href="mailto:info@svnursing.ac.in" className="hover:text-white transition-colors duration-200">info@svnursing.ac.in</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0 text-base">🕒</span>
                <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/10 max-w-7xl mx-auto"/>

      {/* ── Bottom Bar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-blue-200/50 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Swami Vivekanand Nursing College. All rights reserved.
        </p>
        <div className="flex gap-4">
          {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-200/50 hover:text-white text-xs transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}