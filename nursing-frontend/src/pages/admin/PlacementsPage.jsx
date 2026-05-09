import { useEffect, useState, useRef } from 'react'
import { placementAPI } from '../../services/api'
import toast from 'react-hot-toast'
import Modal from '../../components/ui/Modal'
import ConfirmDialog from '../../components/ui/ConfirmDialog'
import Spinner from '../../components/ui/Spinner'
import { MdAdd, MdEdit, MdDelete, MdStar } from 'react-icons/md'

const IMG_BASE = '/uploads/images/'   // ← was 'http://localhost:5000/uploads/images/'

const emptyForm = {
  student_name: '',
  company_name: '',
  role: '',
  location: '',
  batch_year: '',
  package_lpa: '',
}


// FIXED INPUT COMPONENT
function Field({
  label,
  name,
  type = 'text',
  required,
  form,
  setForm,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && ' *'}
      </label>

      <input
        type={type}
        className="input"
        required={required}
        value={form[name]}
        onChange={(e) =>
          setForm({
            ...form,
            [name]:
              type === 'checkbox'
                ? e.target.checked
                : e.target.value,
          })
        }
      />
    </div>
  )
}

export default function PlacementsPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const [showModal, setShowModal] = useState(false)

  const [editing, setEditing] = useState(null)

  const [form, setForm] = useState(emptyForm)

  const [photoFile, setPhotoFile] = useState(null)

  const [deleteTarget, setDeleteTarget] = useState(null)

  const [submitting, setSubmitting] = useState(false)

  const fileRef = useRef()

  const load = async () => {
    setLoading(true)

    try {
      const res = await placementAPI.getAll({
        limit: 100,
      })

      setItems(res.data.data.items)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const openAdd = () => {
    setEditing(null)

    setForm(emptyForm)

    setPhotoFile(null)

    setShowModal(true)
  }

  const openEdit = (item) => {
  setEditing(item.id)
  setForm({
    student_name: item.student_name ?? '',
    company_name: item.company_name ?? '',
    role: item.role ?? '',
    location: item.location ?? '',
    batch_year: item.batch_year ?? '',
    package_lpa: item.package_lpa ?? '',
  })
  setPhotoFile(null)
  setShowModal(true)
}
  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitting(true)

    try {
      const fd = new FormData()

      Object.entries(form).forEach(([k, v]) => {
        fd.append(k, v)
      })

      if (photoFile) {
        fd.append('photo', photoFile)
      }

      if (editing) {
        await placementAPI.update(editing, fd)

        toast.success('Placement updated!')
      } else {
        await placementAPI.add(fd)

        toast.success('Placement added!')
      }

      setShowModal(false)

      load()
    } catch (err) {
      console.error(err)

      toast.error(
        err?.response?.data?.message ||
          'Something went wrong'
      )
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    await placementAPI.delete(deleteTarget)

    toast.success('Deleted!')

    setDeleteTarget(null)

    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-gray-800">
          Placements
        </h2>

        <button
          onClick={openAdd}
          className="btn-primary text-sm flex items-center gap-1.5"
        >
          <MdAdd size={16} />
          Add Placement
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          No placements yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="card group relative"
            >
              {item.is_featured && (
                <div className="absolute top-4 right-4">
                  <MdStar
                    className="text-amber-400"
                    size={20}
                  />
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                {item.photo ? (
                  <img
                    src={IMG_BASE + item.photo}
                    alt={item.student_name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                    {item.student_name[0]}
                  </div>
                )}

                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {item.student_name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.batch_year} batch
                  </p>
                </div>
              </div>

              <p className="text-sm font-medium text-primary-700">
                {item.hospital_name}
              </p>

              {item.designation && (
                <p className="text-xs text-gray-500">
                  {item.designation}
                </p>
              )}

              {item.location && (
                <p className="text-xs text-gray-400">
                  {item.location}
                </p>
              )}

              {item.package_lpa && (
                <p className="text-xs mt-1.5 font-medium text-green-600">
                  ₹ {item.package_lpa} LPA
                </p>
              )}

              <div className="flex gap-2 mt-4 pt-3 border-t border-gray-100">
                <button
                  onClick={() => openEdit(item)}
                  className="flex-1 btn-secondary text-xs py-1.5 flex items-center justify-center gap-1"
                >
                  <MdEdit size={14} />
                  Edit
                </button>

                <button
                  onClick={() =>
                    setDeleteTarget(item.id)
                  }
                  className="flex-1 btn-danger text-xs py-1.5 flex items-center justify-center gap-1"
                >
                  <MdDelete size={14} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <Modal
          title={
            editing
              ? 'Edit Placement'
              : 'Add Placement'
          }
          onClose={() => setShowModal(false)}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="Student Name"
                name="student_name"
                required
                form={form}
                setForm={setForm}
              />

              <Field
                label="Hospital Name"
                name="hospital_name"
                required
                form={form}
                setForm={setForm}
              />

              <Field
                label="Designation"
                name="designation"
                form={form}
                setForm={setForm}
              />

              <Field
                label="Location"
                name="location"
                form={form}
                setForm={setForm}
              />

              <Field
                label="Batch Year"
                name="batch_year"
                type="number"
                required
                form={form}
                setForm={setForm}
              />

              <Field
                label="Package (LPA)"
                name="package_lpa"
                type="number"
                form={form}
                setForm={setForm}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Testimonial
              </label>

              <textarea
                rows={2}
                className="input resize-none"
                value={form.testimonial}
                onChange={(e) =>
                  setForm({
                    ...form,
                    testimonial: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Photo
              </label>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="input py-1.5"
                onChange={(e) =>
                  setPhotoFile(e.target.files[0])
                }
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.is_featured}
                onChange={(e) =>
                  setForm({
                    ...form,
                    is_featured:
                      e.target.checked,
                  })
                }
                className="w-4 h-4 accent-primary-600"
              />

              <span className="text-sm text-gray-700">
                Featured placement
              </span>
            </label>

            <div className="flex gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={() =>
                  setShowModal(false)
                }
                className="btn-secondary text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary text-sm"
              >
                {submitting
                  ? 'Saving...'
                  : editing
                  ? 'Update'
                  : 'Add'}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {deleteTarget && (
        <ConfirmDialog
          message="Delete this placement record permanently?"
          onConfirm={handleDelete}
          onCancel={() =>
            setDeleteTarget(null)
          }
        />
      )}
    </div>
  )
}