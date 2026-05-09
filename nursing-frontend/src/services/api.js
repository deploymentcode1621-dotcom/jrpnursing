import axios from 'axios'
import toast from 'react-hot-toast'

const api = axios.create({
  baseURL: '/api',
  timeout: 15000,
})

// Attach JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Global error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err.response?.data?.message || 'Something went wrong'
    if (err.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('admin')
      window.location.href = '/admin/login'
    } else {
      toast.error(msg)
    }
    return Promise.reject(err)
  }
)

// ── Auth ──────────────────────────────────────────────────────────────────────
export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  me: () => api.get('/auth/me'),
  changePassword: (data) => api.put('/auth/change-password', data),
}

// ── Gallery ───────────────────────────────────────────────────────────────────
export const galleryAPI = {
  getCategories: () => api.get('/gallery/categories'),
  addCategory: (data) => api.post('/gallery/categories', data),
  deleteCategory: (id) => api.delete(`/gallery/categories/${id}`),
  getGallery: (params) => api.get('/gallery', { params }),
  addGallery: (formData) => api.post('/gallery', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
  deleteGallery: (id) => api.delete(`/gallery/${id}`),
}

// ── Notifications ─────────────────────────────────────────────────────────────
export const notifAPI = {
  getAll: (params) => api.get('/notifications', { params }),
  add: (data) => api.post('/notifications', data),
  update: (id, data) => api.put(`/notifications/${id}`, data),
  delete: (id) => api.delete(`/notifications/${id}`),
}

// ── Placements ────────────────────────────────────────────────────────────────
export const placementAPI = {
  getAll: (params) => api.get('/placements', { params }),
  add: (formData) => api.post('/placements', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
  update: (id, formData) => api.put(`/placements/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
  delete: (id) => api.delete(`/placements/${id}`),
}

export default api
