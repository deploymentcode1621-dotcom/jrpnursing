import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'

import ProtectedRoute from './components/admin/ProtectedRoute'
import AdminLayout from './components/admin/AdminLayout'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import LoginPage from './pages/admin/LoginPage'
import DashboardPage from './pages/admin/DashboardPage'
import GalleryPage from './pages/admin/GalleryPage'
import NotificationsPage from './pages/admin/NotificationsPage'
import PlacementsPage from './pages/admin/PlacementsPage'

// Website Pages
import Home from './pages/website/Home'
import About from './pages/website/About'
import Contact from './pages/website/Contact'
import Courses from './pages/website/Courses'

function WebsiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
            },
            success: {
              iconTheme: {
                primary: '#2e9468',
                secondary: '#fff',
              },
            },
          }}
        />

        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
          <Route path="/about" element={<WebsiteLayout><About /></WebsiteLayout>} />
          <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />
          <Route path="/courses" element={<WebsiteLayout><Courses /></WebsiteLayout>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="placements" element={<PlacementsPage />} />
          </Route>

          {/* Redirect Unknown Routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}