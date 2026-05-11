import { MdClose } from 'react-icons/md'

export default function Modal({ title, open, onClose, children }) {

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-display text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <MdClose size={20} />
          </button>
        </div>

        <div className="px-6 py-5">
          {children}
        </div>

      </div>
    </div>
  )
}