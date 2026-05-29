'use client'

import { useState } from 'react'

import FilterSidebar from './FilterSidebar'

export default function FilterDrawer({
  categories = [],
}) {
  const [open, setOpen] =
    useState(false)

  return (
    <>
      <button
        onClick={() =>
          setOpen(true)
        }
        className="w-full border border-gray-200 dark:border-zinc-800 rounded-2xl px-5 py-4 bg-white dark:bg-zinc-900 font-medium"
      >
        Open Filters
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 lg:hidden">
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] bg-white dark:bg-zinc-950 p-5 overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold">
                Filters
              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="text-sm"
              >
                Close
              </button>
            </div>

            <FilterSidebar
              categories={
                categories
              }
            />
          </div>
        </div>
      )}
    </>
  )
}