'use client'

import Link from 'next/link'

import { useState } from 'react'

import { useSelector } from 'react-redux'

import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

import {
  selectCartCount,
} from '@/redux/selectors/cartSelectors'

import {
  selectWishlistCount,
} from '@/redux/selectors/wishlistSelectors'

export default function Navbar() {
  const [open, setOpen] =
    useState(false)

  const cartCount = useSelector(
    selectCartCount
  )

  const wishlistCount =
    useSelector(
      selectWishlistCount
    )

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/">
              Home
            </Link>

            <Link href="/wishlist">
              Wishlist (
              {wishlistCount})
            </Link>

            <Link href="/cart">
              Cart ({cartCount})
            </Link>

            <ThemeToggle />
          </nav>

          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() =>
                setOpen(true)
              }
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  )
}