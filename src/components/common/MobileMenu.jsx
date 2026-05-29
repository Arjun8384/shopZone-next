'use client'

import Link from 'next/link'

export default function MobileMenu({
  open,
  onClose,
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
      <div className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-zinc-950 p-6 shadow-2xl">
        <button
          onClick={onClose}
          className="mb-8 text-sm"
        >
          Close
        </button>

        <nav className="flex flex-col gap-5 text-lg">
          <Link
            href="/"
            onClick={onClose}
          >
            Home
          </Link>

          <Link
            href="/wishlist"
            onClick={onClose}
          >
            Wishlist
          </Link>

          <Link
            href="/cart"
            onClick={onClose}
          >
            Cart
          </Link>
        </nav>
      </div>
    </div>
  )
}