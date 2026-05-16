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

  const location = useLocation();

  const isHome = location.pathname === "/";
  const transparentMode = isHome && !menuOpen;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparentMode
         ? "bg-gradient-to-b from-black/90 via-black/70 to-black/25 shadow-none border-none"
          : "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
      }`}
    >
      {/* TOP SHADOW OVERLAY */}
      {transparentMode && (
        <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/95 via-black/60 to-transparent" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/images/jrp_logo.jpeg"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="leading-tight">
              <div
                className={`font-bold text-lg leading-5 tracking-wide transition-colors duration-300 ${
                  transparentMode ? "text-white" : "text-[#1a3a6b]"
                }`}
              >
                Swami Vivekanand
              </div>

              <div className="text-[#22c55e] font-semibold text-[11px] tracking-[0.15em] uppercase">
                Institute Of Nursing
              </div>

              <div
                className={`font-normal text-[9px] tracking-[0.12em] uppercase hidden sm:block ${
                  transparentMode ? "text-white/60" : "text-gray-400"
                }`}
              >
                Compassion · Care · Commitment
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 group ${
                    transparentMode
                      ? isActive
                        ? "text-white bg-white/10"
                        : "text-white/85 hover:text-white hover:bg-white/5"
                      : isActive
                      ? "text-[#1a3a6b] bg-blue-50"
                      : "text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-50"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                      transparentMode
                        ? "bg-white/80"
                        : "bg-[#1a3a6b]"
                    } ${
                      isActive
                        ? "w-[70%]"
                        : "w-0 group-hover:w-[70%]"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* APPLY BUTTON */}
            <Link
              to="/apply"
              className="hidden lg:inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              Apply Now

              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                transparentMode
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-100"
              }`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">

                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">

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
            className="mt-3 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300 shadow-md"
          >
            Apply Now →
          </Link>
        </nav>
      </div>
    </header>
  );
}