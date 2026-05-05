import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import Facilities from '../pages/Facilities'
import Gallery from '../pages/Gallery'
import Placement from '../pages/Placement'
import Contact from '../pages/Contact'

export default function MainLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="courses"><Courses /></section>
        <section id="facilities"><Facilities /></section>
        <section id="gallery"><Gallery /></section>
        <section id="placement"><Placement /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/917620596036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L.057 23.215a.75.75 0 00.923.923l5.36-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.355l-.355-.212-3.686 1.01 1.01-3.686-.212-.355A9.725 9.725 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="absolute right-16 bg-[#25D366] text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">WhatsApp</span>
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:7620596036"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
        </svg>
        <span className="absolute right-16 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition">Call Now</span>
      </a>
    </div>
  )
}