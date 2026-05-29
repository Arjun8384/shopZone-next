export default function SkeletonCard() {
  return (
    <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-64 bg-zinc-200 dark:bg-zinc-800" />

      <div className="p-4 space-y-4">
        <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded" />

        <div className="h-5 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />

        <div className="h-10 bg-zinc-200 dark:bg-zinc-800 rounded-xl" />
      </div>
    </div>
  )
}