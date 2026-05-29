'use client'

import { useEffect } from 'react'

import Button from '@/components/common/Button'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        Something went wrong
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-6">
        An unexpected error occurred while loading the page.
      </p>

      <Button onClick={reset}>
        Try Again
      </Button>
    </div>
  )
}