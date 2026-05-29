'use client'

import { useEffect, useMemo, useState } from 'react'

import debounce from 'lodash.debounce'

import { useDispatch, useSelector } from 'react-redux'

import {
  setSearchQuery,
} from '@/redux/slices/filterSlice'

export default function SearchFilter() {
  const dispatch = useDispatch()

  const searchQuery =
    useSelector(
      (state) =>
        state.filters
          .searchQuery
    )

  const [value, setValue] =
    useState(searchQuery)

  const debouncedSearch =
    useMemo(
      () =>
        debounce(
          (query) => {
            dispatch(
              setSearchQuery(
                query
              )
            )
          },
          500
        ),
      [dispatch]
    )

  useEffect(() => {
    debouncedSearch(value)

    return () => {
      debouncedSearch.cancel()
    }
  }, [value, debouncedSearch])

  return (
    <div>
      <h3 className="font-semibold mb-3">
        Search
      </h3>

      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        className="w-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      />
    </div>
  )
}