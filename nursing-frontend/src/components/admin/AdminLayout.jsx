import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {
  MdDashboard, MdPhotoLibrary, MdNotifications,
  MdWork, MdLogout, MdMenu, MdClose, MdPerson
} from 'react-icons/md'

const navItems = [
  { to: '/admin',             label: 'Dashboard',     icon: MdDashboard,     end: true },
  { to: '/admin/gallery',     label: 'Gallery',       icon: MdPhotoLibrary },
  { to: '/admin/notifications', label: 'Notifications', icon: MdNotifications },
  { to: '/admin/placements',  label: 'Placements',    icon: MdWork },
]

export default function AdminLayout() {
  const { admin, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => { logout(); navigate('/admin/login') }

  const Sidebar = () => (
    <aside className="flex flex-col h-full bg-primary-950 text-white w-64">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-primary-800">
        <h1 className="font-display text-xl font-bold text-white leading-tight">JRP Nursing</h1>
        <p className="text-primary-400 text-xs mt-0.5">Admin Panel</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to} to={to} end={end}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-300 hover:bg-primary-800 hover:text-white'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-primary-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
            <MdPerson size={16} />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{admin?.name}</p>
            <p className="text-xs text-primary-400">{admin?.username}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-primary-400 hover:text-red-400 transition-colors"
        >
          <MdLogout size={16} /> Logout
        </button>
      </div>
    </aside>
  )

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-50 flex flex-col h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar (mobile) */}
        <header className="md:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button onClick={() => setOpen(true)} className="text-gray-600">
            <MdMenu size={22} />
          </button>
          <span className="font-display font-semibold text-primary-800">JRP Nursing Admin</span>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
