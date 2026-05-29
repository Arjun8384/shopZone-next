export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      {subtitle && (
        <p className="text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  )
}