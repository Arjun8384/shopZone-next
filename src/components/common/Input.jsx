export default function Input({
  label,
  error,
  className = '',
  ...props
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        className={`w-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white ${className}`}
        {...props}
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}