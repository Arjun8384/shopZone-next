'use client'

import ReduxProvider from '@/redux/provider'

import ThemeProvider from '@/components/common/ThemeProvider'

export default function Providers({
  children,
}) {
  return (
    <ReduxProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}