export default function ErrorMessage({
  message = 'Something went wrong',
}) {
  return (
    <div className="border border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400 rounded-2xl p-4">
      {message}
    </div>
  )
}