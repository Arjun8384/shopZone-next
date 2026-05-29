export default function ProductBadge({
  children,
}) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black">
      {children}
    </span>
  )
}