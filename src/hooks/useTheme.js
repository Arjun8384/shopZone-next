'use client'

import { useEffect } from 'react'

import { useSelector } from 'react-redux'

export default function useTheme() {
  const theme = useSelector(
    (state) => state.theme.mode
  )

  useEffect(() => {
    document.documentElement.classList.remove(
      'light',
      'dark'
    )

    document.documentElement.classList.add(
      theme
    )
  }, [theme])

  return theme
}