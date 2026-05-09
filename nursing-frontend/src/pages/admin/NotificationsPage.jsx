import { useEffect, useState } from 'react'
import { notifAPI } from '../../services/api'
import toast from 'react-hot-toast'
import Modal from '../../components/ui/Modal'
import ConfirmDialog from '../../components/ui/ConfirmDialog'
import Spinner from '../../components/ui/Spinner'
import {
  MdAdd,
  MdEdit,
  MdDelete,
  MdToggleOn,
  MdToggleOff,
} from 'react-icons/md'

const TYPES = ['info', 'warning', 'success', 'urgent']

const emptyForm = {
  title: '',
  message: '',
  type: 'info',
  link: '',
  pdf: null,
}

const BadgeType = ({ type }) => (
  <span className={`badge-${type}`}>
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </span>
)

export default function NotificationsPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const [showModal, setShowModal] = useState(false)

  const [editing, setEditing] = useState(null)

  const [form, setForm] = useState(emptyForm)

  const [deleteTarget, setDeleteTarget] = useState(null)

  const [submitting, setSubmitting] = useState(false)

  const load = async () => {
    setLoading(true)

    try {
      const res = await notifAPI.getAll({ all: 1 })

      setItems(res.data.data)
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

    setShowModal(true)
  }

  const openEdit = (item) => {
    setEditing(item.id)

    setForm({
      title: item.title,
      message: item.message,
      type: item.type,
      link: item.link || '',
      pdf: null,
    })

    setShowModal(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setSubmitting(true)

    try {
      const formData = new FormData()

      formData.append('title', form.title)
      formData.append('message', form.message)
      formData.append('type', form.type)

      if (form.link) {
        formData.append('link', form.link)
      }

      if (form.pdf) {
        formData.append('pdf', form.pdf)
      }

      if (editing) {
        await notifAPI.update(editing, formData)

        toast.success('Notification updated!')
      } else {
        await notifAPI.add(formData)

        toast.success('Notification added!')
      }

      setShowModal(false)

      load()
    } finally {
      setSubmitting(false)
    }
  }

  const toggleActive = async (item) => {
    await notifAPI.update(item.id, {
      is_active: item.is_active ? 0 : 1,
    })

    load()
  }

  const handleDelete = async () => {
    await notifAPI.delete(deleteTarget)

    toast.success('Deleted!')

    setDeleteTarget(null)

    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-gray-800">
          Notifications
        </h2>

        <button
          onClick={openAdd}
          className="btn-primary text-sm flex items-center gap-1.5"
        >
          <MdAdd size={16} />
          Add Notification
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          No notifications yet.
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`card flex items-start gap-4 ${
                !item.is_active ? 'opacity-60' : ''
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <BadgeType type={item.type} />

                  {!item.is_active && (
                    <span className="badge-warning">
                      Inactive
                    </span>
                  )}
                </div>

                <p className="font-semibold text-gray-800 text-sm">
                  {item.title}
                </p>

                <p className="text-gray-500 text-sm mt-0.5 line-clamp-2">
                  {item.message}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 text-xs hover:underline mt-1 block truncate"
                  >
                    {item.link}
                  </a>
                )}

                {item.pdf && (
                  <a
                    href={`http://localhost:5000/uploads/notifications/${item.pdf}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-red-600 text-xs hover:underline mt-1 block"
                  >
                    View PDF
                  </a>
                )}

                <p className="text-xs text-gray-400 mt-1">
                  {new Date(item.created_at).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => toggleActive(item)}
                  title="Toggle active"
                  className={`p-1.5 rounded-lg transition-colors ${
                    item.is_active
                      ? 'text-primary-600 hover:bg-primary-50'
                      : 'text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {item.is_active ? (
                    <MdToggleOn size={20} />
                  ) : (
                    <MdToggleOff size={20} />
                  )}
                </button>

                <button
                  onClick={() => openEdit(item)}
                  className="p-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <MdEdit size={16} />
                </button>

                <button
                  onClick={() => setDeleteTarget(item.id)}
                  className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
                >
                  <MdDelete size={16} />
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
              ? 'Edit Notification'
              : 'Add Notification'
          }
          onClose={() => setShowModal(false)}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title *
              </label>

              <input
                className="input"
                required
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>

              <textarea
                rows={3}
                className="input resize-none"
                required
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>

              <select
                className="input"
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value,
                  })
                }
              >
                {TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() +
                      t.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Link (optional)
              </label>

              <input
                className="input"
                type="url"
                placeholder="https://"
                value={form.link}
                onChange={(e) =>
                  setForm({
                    ...form,
                    link: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PDF File (optional)
              </label>

              <input
                type="file"
                accept=".pdf"
                className="input"
                onChange={(e) =>
                  setForm({
                    ...form,
                    pdf: e.target.files[0],
                  })
                }
              />
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
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
          message="Delete this notification permanently?"
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  )
}