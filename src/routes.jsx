import React from 'react'
import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Gallery from './pages/Gallery'
import Placement from './pages/Placement'
import Contact from './pages/Contact'
import Courses from './pages/Courses'

import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import ManageGallery from './admin/ManageGallery'
import ProtectedRoute from './components/ProtectedRoute'

export default function AppRoutes() {
  return (
    <Routes>

      {/* WEBSITE PAGES */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
      </Route>

      {/* ADMIN PAGES */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
  path="/admin/dashboard"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/gallery"
  element={
    <ProtectedRoute>
      <ManageGallery />
    </ProtectedRoute>
  }
/>

    </Routes>
  )
}