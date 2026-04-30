import React, { useState, useEffect } from "react";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                <path d="M8 30 Q4 24 8 18 Q10 26 14 28Z" fill="#16a34a" opacity="0.8"/>
                <path d="M40 30 Q44 24 40 18 Q38 26 34 28Z" fill="#16a34a" opacity="0.8"/>
                <path d="M6 26 Q3 20 7 15 Q9 22 13 24Z" fill="#16a34a" opacity="0.5"/>
                <path d="M42 26 Q45 20 41 15 Q39 22 35 24Z" fill="#16a34a" opacity="0.5"/>
                <rect x="13" y="26" width="22" height="14" rx="2" fill="#1a3a6b"/>
                <rect x="14" y="27" width="10" height="12" rx="1" fill="#2563eb" opacity="0.7"/>
                <rect x="24" y="27" width="10" height="12" rx="1" fill="#1a3a6b" opacity="0.9"/>
                <line x1="24" y1="27" x2="24" y2="39" stroke="white" strokeWidth="1"/>
                <path d="M24 6 C22 10 20 13 22 16 C23 18 25 18 26 16 C28 13 26 10 24 6Z" fill="#16a34a"/>
                <path d="M24 18 C23 20 21 22 21 24 C21 26.2 22.3 27.5 24 27.5 C25.7 27.5 27 26.2 27 24 C27 22 25 20 24 18Z" fill="#0ea5e9" opacity="0.9"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[#1a3a6b] font-bold text-lg leading-5 tracking-wide group-hover:text-blue-700 transition-colors duration-200">
                Swami Vivekanand
              </div>
              <div className="text-[#16a34a] font-semibold text-[11px] tracking-[0.15em] uppercase">
                Nursing College
              </div>
              <div className="text-gray-400 font-normal text-[9px] tracking-[0.12em] uppercase hidden sm:block">
                Compassion · Care · Commitment
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
                    isActive
                      ? "text-[#1a3a6b] bg-blue-50"
                      : "text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-[#1a3a6b] transition-all duration-300 ${
                      isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ── Apply Now + Hamburger ── */}
          <div className="flex items-center gap-3">
            <Link
              to="/apply"
              className="hidden lg:inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-green-200 hover:-translate-y-0.5"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}/>
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}/>
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out border-t border-gray-100 ${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-white px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-[#1a3a6b] font-semibold border-l-4 border-[#1a3a6b]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3a6b] hover:pl-6"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/apply"
            className="mt-3 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200 shadow-md"
          >
            Apply Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}