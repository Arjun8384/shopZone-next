'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] =
    useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(
        window.scrollY > 400
      )
    }

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      )
  }, [])

  if (!visible) return null

  return (
    <button
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg"
    >
      ↑
    </button>
  )
}