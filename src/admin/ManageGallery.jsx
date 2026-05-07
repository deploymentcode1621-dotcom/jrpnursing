import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import API, { IMAGE_URL } from '../services/api'

export default function ManageGallery() {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
  })

  const token = localStorage.getItem('token')

  const fetchGallery = async () => {
    const res = await API.get('/gallery')
    setGallery(res.data)
  }

  useEffect(() => {
    fetchGallery()
  }, [])

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData()
    data.append('title', formData.title)
    data.append('description', formData.description)
    data.append('image', formData.image)

    try {
      setLoading(true)

      await API.post('/gallery', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })

      setFormData({
        title: '',
        description: '',
        image: null,
      })

      e.target.reset()
      fetchGallery()
    } catch (error) {
      alert(error.response?.data?.message || 'Upload failed')
    } finally {
      setLoading(false)
    }
  }

  const deleteGallery = async (id) => {
    if (!window.confirm('Delete this gallery image?')) return

    try {
      await API.delete(`/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      fetchGallery()
    } catch (error) {
      alert(error.response?.data?.message || 'Delete failed')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5FBFA]">
      <div className="bg-gradient-to-r from-[#062C30] via-[#0F766E] to-[#2563EB] text-white p-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black">Manage Gallery</h1>
            <p className="text-white/80 mt-2">
              Add and manage website gallery images
            </p>
          </div>

          <Link
            to="/admin/dashboard"
            className="bg-white text-[#0F766E] px-5 py-2.5 rounded-full font-bold"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-1 bg-white rounded-3xl p-6 shadow-xl border border-teal-100 h-fit"
        >
          <h2 className="text-2xl font-black text-[#062C30] mb-5">
            Add New Image
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Image title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F766E]"
              required
            />

            <textarea
              name="description"
              placeholder="Image description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-[#0F766E] min-h-28"
              required
            />

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-xl px-4 py-3"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#0F766E] to-[#2563EB] text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition"
            >
              {loading ? 'Uploading...' : 'Add Gallery Image'}
            </button>
          </div>
        </form>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-teal-100"
            >
              <img
                src={`${IMAGE_URL}/${item.image}`}
                alt={item.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-black text-[#062C30]">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm mt-2 leading-6">
                  {item.description}
                </p>

                <button
                  onClick={() => deleteGallery(item.id)}
                  className="mt-5 bg-red-500 text-white px-5 py-2 rounded-full font-bold hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {gallery.length === 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-teal-100 text-center sm:col-span-2">
              <h3 className="text-2xl font-black text-[#062C30]">
                No Images Yet
              </h3>
              <p className="text-slate-500 mt-2">
                Add your first gallery image from the form.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}