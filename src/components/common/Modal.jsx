'use client'

export default function Modal({
  open,
  onClose,
  children,
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  )
}