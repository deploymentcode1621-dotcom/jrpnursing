import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const aboutDropdown = [
  { label: "Who We Are", hash: "who-we-are" },
  { label: "Principal Message", hash: "principal" },
  { label: "Why Choose Us", hash: "why-us" },
  { label: "Our Journey", hash: "journey" },
  { label: "Clinical Training", hash: "clinical" },
  { label: "Vision & Mission", hash: "vision" },
  { label: "Our Faculty", hash: "faculty" },
];

const navLinks = [
  { label: "Home", path: "/" },
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${scrolled ? "h-16" : "h-20"}`}>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/jrp_logo.jpeg"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />

            <div className="leading-tight">
              <div className="text-[#1a3a6b] font-bold text-lg">
                Swami Vivekanand
              </div>
              <div className="text-[#16a34a] font-semibold text-[11px] tracking-[0.15em] uppercase">
                Institute Of Nursing
              </div>
              <div className="text-gray-400 text-[9px] tracking-[0.12em] uppercase hidden sm:block">
                Compassion · Care · Commitment
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-md ${
                location.pathname === "/"
                  ? "text-[#1a3a6b] bg-blue-50"
                  : "text-gray-600 hover:text-[#1a3a6b]"
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/about"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md ${
                  location.pathname === "/about"
                    ? "text-[#1a3a6b] bg-blue-50"
                    : "text-gray-600 hover:text-[#1a3a6b]"
                }`}
              >
                About Us
                <span className="text-xs">▼</span>
              </Link>

              <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#dff3ee] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] overflow-hidden">
                <div className="bg-gradient-to-r from-[#102a43] to-[#0f4c6a] px-4 py-3">
                  <p className="text-[#7dd3c7] text-[10px] font-black tracking-[0.2em] uppercase">
                    About Our College
                  </p>
                  <p className="text-white text-sm font-black mt-1">
                    Swami Vivekanand Nursing College
                  </p>
                </div>

                <div className="p-2">
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.hash}
                      to={`/about#${item.hash}`}
                      className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#102a43] hover:bg-[#eef9f7] hover:text-[#0f9f8f] transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium rounded-md ${
                  location.pathname === link.path
                    ? "text-[#1a3a6b] bg-blue-50"
                    : "text-gray-600 hover:text-[#1a3a6b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/apply"
            className="hidden lg:inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md"
          >
            Apply Now →
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#1a3a6b] text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-white px-4 py-4 border-t flex flex-col gap-2">
          <Link to="/" className="px-4 py-3 font-semibold">Home</Link>
          <Link to="/about" className="px-4 py-3 font-semibold">About Us</Link>

          {aboutDropdown.map((item) => (
            <Link
              key={item.hash}
              to={`/about#${item.hash}`}
              className="px-8 py-2 text-sm font-semibold text-gray-600"
            >
              {item.label}
            </Link>
          ))}

          {navLinks.slice(1).map((link) => (
            <Link key={link.path} to={link.path} className="px-4 py-3 font-semibold">
              {link.label}
            </Link>
          ))}

          <Link
            to="/apply"
            className="bg-[#16a34a] text-white text-center py-3 rounded-xl font-bold"
          >
            Apply Now →
          </Link>
        </nav>
      )}
    </header>
  );
}