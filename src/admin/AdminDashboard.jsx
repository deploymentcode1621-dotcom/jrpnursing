import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#F5FBFA]">
      <div className="bg-gradient-to-r from-[#062C30] via-[#0F766E] to-[#2563EB] text-white p-8">
        <h1 className="text-4xl font-black">Admin Dashboard</h1>
        <p className="text-white/80 mt-2">Manage JRP Nursing website content</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        <Link
          to="/admin/gallery"
          className="bg-white rounded-3xl p-8 shadow-xl border border-teal-100 hover:-translate-y-2 transition"
        >
          <h2 className="text-2xl font-black text-[#0F766E]">Manage Gallery</h2>
          <p className="text-slate-500 mt-2">Add and delete gallery images</p>
        </Link>

        <button
          onClick={logout}
          className="bg-white rounded-3xl p-8 shadow-xl border border-red-100 text-left hover:-translate-y-2 transition"
        >
          <h2 className="text-2xl font-black text-red-600">Logout</h2>
          <p className="text-slate-500 mt-2">Exit admin panel safely</p>
        </button>
      </div>
    </div>
  )
}