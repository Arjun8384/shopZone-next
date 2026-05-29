import Link from 'next/link'

import Button from '@/components/common/Button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold mb-4">
        404
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <Button>
          Back To Home
        </Button>
      </Link>
    </div>
  )
}