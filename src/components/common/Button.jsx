'use client'

import clsx from 'clsx'

export default function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const variants = {
    primary:
      'bg-black text-white hover:opacity-90 dark:bg-white dark:text-black',
    secondary:
      'border border-gray-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800',
    danger:
      'bg-red-500 text-white hover:bg-red-600',
  }

  return (
    <button
      type={type}
      className={clsx(
        'px-5 py-3 rounded-xl font-medium transition duration-200 disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}