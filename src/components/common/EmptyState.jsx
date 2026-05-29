import Link from 'next/link'

import Button from './Button'

export default function EmptyState({
  title = 'Nothing here',
  description = 'No data available.',
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
        {description}
      </p>

      <Link href="/">
        <Button>
          Continue Shopping
        </Button>
      </Link>
    </div>
  )
}