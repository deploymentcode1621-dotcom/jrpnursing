import { useEffect, useState, useRef } from 'react'
import { galleryAPI } from '../../services/api'
import toast from 'react-hot-toast'
import Modal from '../../components/ui/Modal'
import ConfirmDialog from '../../components/ui/ConfirmDialog'
import Spinner from '../../components/ui/Spinner'
import { MdAdd, MdDelete, MdCategory } from 'react-icons/md'

const IMG_BASE = '/uploads/'

export default function GalleryPage() {
  const [categories, setCategories] = useState([])
  const [gallery, setGallery] = useState([])
  const [selectedCat, setSelectedCat] = useState('')
  const [loading, setLoading] = useState(true)
  const [showAddImage, setShowAddImage] = useState(false)
  const [showAddCat, setShowAddCat] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const [imageForm, setImageForm] = useState({ title: '', description: '', category_id: '' })
  const [imageFile, setImageFile] = useState(null)
  const [catForm, setCatForm] = useState({ name: '', description: '' })
  const fileRef = useRef()

  const loadCategories = async () => {
    const res = await galleryAPI.getCategories()
    setCategories(res.data.data)
  }

  const loadGallery = async () => {
    setLoading(true)
    try {
      const params = selectedCat ? { category_id: selectedCat, limit: 100 } : { limit: 100 }
      const res = await galleryAPI.getGallery(params)
      setGallery(res.data.data.items)
    } finally { setLoading(false) }
  }

  useEffect(() => { loadCategories() }, [])
  useEffect(() => { loadGallery() }, [selectedCat])

  const handleAddImage = async (e) => {
    e.preventDefault()
    if (!imageFile) return toast.error('Please select an image')
    setSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('image', imageFile)
      fd.append('title', imageForm.title)
      fd.append('description', imageForm.description)
      fd.append('category_id', imageForm.category_id)
      await galleryAPI.addGallery(fd)
      toast.success('Image added!')
      setShowAddImage(false)
      setImageForm({ title: '', description: '', category_id: '' })
      setImageFile(null)
      loadGallery()
    } finally { setSubmitting(false) }
  }

  const handleAddCategory = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await galleryAPI.addCategory(catForm)
      toast.success('Category created!')
      setShowAddCat(false)
      setCatForm({ name: '', description: '' })
      loadCategories()
    } finally { setSubmitting(false) }
  }

  const handleDelete = async () => {
    await galleryAPI.deleteGallery(deleteTarget)
    toast.success('Deleted!')
    setDeleteTarget(null)
    loadGallery()
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="font-display text-2xl font-bold text-gray-800">Gallery</h2>
        <div className="flex gap-2">
          <button onClick={() => setShowAddCat(true)} className="btn-secondary text-sm flex items-center gap-1.5">
            <MdCategory size={16} /> Add Category
          </button>
          <button onClick={() => setShowAddImage(true)} className="btn-primary text-sm flex items-center gap-1.5">
            <MdAdd size={16} /> Add Image
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setSelectedCat('')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!selectedCat ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
          All
        </button>
        {categories.map((c) => (
          <button key={c.id} onClick={() => setSelectedCat(c.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedCat == c.id ? 'bg-primary-600 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
            {c.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? <Spinner /> : gallery.length === 0 ? (
        <div className="text-center py-16 text-gray-400">No images found.</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {gallery.map((img) => (
            <div key={img.id} className="group relative rounded-xl overflow-hidden shadow-card aspect-square bg-gray-100">
              <img src={IMG_BASE + img.image} alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100">
                <p className="text-white text-xs font-semibold truncate">{img.title}</p>
                <span className="text-white/70 text-xs">{img.category_name}</span>
              </div>
              <button onClick={() => setDeleteTarget(img.id)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600">
                <MdDelete size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add Image Modal */}
      {showAddImage && (
        <Modal title="Add Gallery Image" onClose={() => setShowAddImage(false)}>
          <form onSubmit={handleAddImage} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input className="input" required value={imageForm.title}
                onChange={(e) => setImageForm({ ...imageForm, title: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select className="input" required value={imageForm.category_id}
                onChange={(e) => setImageForm({ ...imageForm, category_id: e.target.value })}>
                <option value="">Select category</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea rows={2} className="input resize-none" value={imageForm.description}
                onChange={(e) => setImageForm({ ...imageForm, description: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image *</label>
              <input ref={fileRef} type="file" accept="image/*" className="input py-1.5"
                onChange={(e) => setImageFile(e.target.files[0])} />
            </div>
            <div className="flex gap-3 justify-end pt-2">
              <button type="button" onClick={() => setShowAddImage(false)} className="btn-secondary text-sm">Cancel</button>
              <button type="submit" disabled={submitting} className="btn-primary text-sm">
                {submitting ? 'Uploading…' : 'Upload'}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* Add Category Modal */}
      {showAddCat && (
        <Modal title="Add Category" onClose={() => setShowAddCat(false)}>
          <form onSubmit={handleAddCategory} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input className="input" required value={catForm.name}
                onChange={(e) => setCatForm({ ...catForm, name: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input className="input" value={catForm.description}
                onChange={(e) => setCatForm({ ...catForm, description: e.target.value })} />
            </div>
            <div className="flex gap-3 justify-end pt-2">
              <button type="button" onClick={() => setShowAddCat(false)} className="btn-secondary text-sm">Cancel</button>
              <button type="submit" disabled={submitting} className="btn-primary text-sm">
                {submitting ? 'Saving…' : 'Save'}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {deleteTarget && (
        <ConfirmDialog
          message="Delete this image? This action cannot be undone."
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  )
}
