import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Placement", path: "/placement" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            {/* SVG Logo Icon */}
            <div className="w-12 h-12 flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Laurel wreath */}
                <ellipse cx="24" cy="38" rx="18" ry="5" fill="#1a3a6b" opacity="0.08" />
                <path d="M8 30 Q4 24 8 18 Q10 26 14 28Z" fill="#16a34a" opacity="0.7" />
                <path d="M40 30 Q44 24 40 18 Q38 26 34 28Z" fill="#16a34a" opacity="0.7" />
                <path d="M6 26 Q3 20 7 15 Q9 22 13 24Z" fill="#16a34a" opacity="0.5" />
                <path d="M42 26 Q45 20 41 15 Q39 22 35 24Z" fill="#16a34a" opacity="0.5" />
                {/* Book */}
                <rect x="13" y="26" width="22" height="14" rx="1" fill="#1a3a6b" />
                <rect x="14" y="27" width="10" height="12" rx="0.5" fill="#2563eb" opacity="0.6" />
                <rect x="24" y="27" width="10" height="12" rx="0.5" fill="#1a3a6b" opacity="0.8" />
                <line x1="24" y1="27" x2="24" y2="39" stroke="#fff" strokeWidth="0.8" />
                {/* Flame / torch */}
                <path d="M24 6 C22 10 20 13 22 16 C23 18 25 18 26 16 C28 13 26 10 24 6Z" fill="#16a34a" />
                <path d="M24 10 C23 12 22 14 23.5 15.5 C24.5 14 24.5 12 24 10Z" fill="#fff" opacity="0.5" />
                {/* Drop of water */}
                <path d="M24 18 C23 20 21 22 21 24 C21 26.2 22.3 27.5 24 27.5 C25.7 27.5 27 26.2 27 24 C27 22 25 20 24 18Z" fill="#0ea5e9" opacity="0.85" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[#1a3a6b] font-bold text-lg leading-5 tracking-wide">
                Swami Vivekanand
              </div>
              <div className="text-[#16a34a] font-semibold text-sm tracking-[0.12em] uppercase">
                Nursing College
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                    isActive
                      ? "text-[#1a3a6b]"
                      : "text-gray-600 hover:text-[#1a3a6b]"
                  }`}
                >
                  {link.label}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#1a3a6b] rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-200 shadow-sm"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-[#1a3a6b] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3a6b]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/apply"
            className="mt-2 flex items-center justify-center gap-2 bg-[#16a34a] text-white font-semibold text-sm px-5 py-2.5 rounded-md"
          >
            Apply Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}