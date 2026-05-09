export default function Spinner({ size = 'md' }) {
  const s = { sm: 'h-4 w-4', md: 'h-8 w-8', lg: 'h-12 w-12' }[size]
  return (
    <div className="flex justify-center items-center py-10">
      <div className={`${s} animate-spin rounded-full border-3 border-gray-200 border-t-primary-600`}
        style={{ borderWidth: 3 }} />
    </div>
  )
}
