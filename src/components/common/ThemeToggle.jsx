'use client'

import { useDispatch, useSelector } from 'react-redux'

import {
  toggleTheme,
} from '@/redux/slices/themeSlice'

export default function ThemeToggle() {
  const dispatch = useDispatch()

  const theme = useSelector(
    (state) => state.theme.mode
  )

  return (
    <button
      aria-label="Toggle theme"
      onClick={() =>
        dispatch(toggleTheme())
      }
      className="border border-gray-300 dark:border-zinc-700 rounded-xl px-4 py-2"
    >
      {theme === 'dark'
        ? '☀️'
        : '🌙'}
    </button>
  )
}