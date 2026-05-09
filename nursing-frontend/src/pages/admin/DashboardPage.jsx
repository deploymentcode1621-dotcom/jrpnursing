import { useEffect, useState } from 'react'
import { galleryAPI, notifAPI, placementAPI } from '../../services/api'
import { MdPhotoLibrary, MdNotifications, MdWork, MdTrendingUp } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const StatCard = ({ icon: Icon, label, value, color, to }) => (
  <Link to={to} className="card hover:shadow-card-hover transition-shadow flex items-center gap-4 group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon size={22} className="text-white" />
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </Link>
)

export default function DashboardPage() {
  const { admin } = useAuth()
  const [stats, setStats] = useState({ gallery: 0, notifications: 0, placements: 0 })

  useEffect(() => {
    const fetch = async () => {
      try {
        const [g, n, p] = await Promise.all([
          galleryAPI.getGallery({ limit: 1 }),
          notifAPI.getAll({ all: 1 }),
          placementAPI.getAll({ limit: 1 }),
        ])
        setStats({
          gallery: g.data.data.pagination.total,
          notifications: n.data.data.length,
          placements: p.data.data.pagination.total,
        })
      } catch {}
    }
    fetch()
  }, [])

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-gray-800">
          Good morning, {admin?.name?.split(' ')[0]} 👋
        </h2>
        <p className="text-gray-500 text-sm mt-1">Here's what's happening on your site.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard icon={MdPhotoLibrary}    label="Gallery Images"  value={stats.gallery}        color="bg-blue-500"         to="/admin/gallery" />
        <StatCard icon={MdNotifications}   label="Notifications"   value={stats.notifications}  color="bg-amber-500"        to="/admin/notifications" />
        <StatCard icon={MdWork}            label="Placements"      value={stats.placements}      color="bg-primary-600"      to="/admin/placements" />
      </div>

      <div className="card">
        <h3 className="font-display text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <MdTrendingUp className="text-primary-600" /> Quick Links
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { label: 'Add Gallery Image', to: '/admin/gallery' },
            { label: 'Post Notification', to: '/admin/notifications' },
            { label: 'Add Placement',     to: '/admin/placements' },
          ].map(({ label, to }) => (
            <Link key={to} to={to}
              className="border border-primary-200 text-primary-700 hover:bg-primary-50 rounded-lg px-4 py-3 text-sm font-medium text-center transition-colors">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
