import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       id: "home"       },
  { label: "About Us",   id: "about"      },
  { label: "Courses",    id: "courses"    },
  { label: "Facilities", id: "facilities" },
  { label: "Gallery",    id: "gallery"    },
  { label: "Placement",  id: "placement"  },
  { label: "Contact Us", id: "contact"    },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Auto-highlight active section while scrolling
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // Update URL hash without triggering a scroll jump
            window.history.replaceState(null, "", `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // On page load, scroll to hash if present in URL
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const valid = navLinks.find((l) => l.id === hash);
    if (valid) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
        setActiveId(hash);
      }, 150);
    }
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    setActiveId(id);
    // Update URL hash
    window.history.pushState(null, "", `#${id}`);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>

          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/images/jrp_logo.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
            </div>
            <div className="leading-tight text-left">
              <div className="text-[#1a3a6b] font-bold text-lg leading-5 tracking-wide group-hover:text-blue-700 transition-colors duration-200">
                Swami Vivekanand
              </div>
              <div className="text-[#16a34a] font-semibold text-[11px] tracking-[0.15em] uppercase">
                Institute Of Nursing
              </div>
              <div className="text-gray-400 font-normal text-[9px] tracking-[0.12em] uppercase hidden sm:block">
                Compassion · Care · Commitment
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
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
                </button>
              );
            })}
          </nav>

          {/* Apply Now + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-green-200 hover:-translate-y-0.5"
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#1a3a6b] hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out border-t border-gray-100 ${menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-white px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left w-full ${
                  isActive
                    ? "bg-blue-50 text-[#1a3a6b] font-semibold border-l-4 border-[#1a3a6b]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1a3a6b] hover:pl-6"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-3 flex items-center justify-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors duration-200 shadow-md"
          >
            Apply Now →
          </button>
        </nav>
      </div>
    </header>
  );
}