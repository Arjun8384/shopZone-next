'use client'

import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import debounce from 'lodash.debounce'

import { useDispatch } from 'react-redux'

import {
  setSearchQuery,
} from '@/redux/slices/filterSlice'

export default function SearchBar() {
  const dispatch = useDispatch()

  const [query, setQuery] =
    useState('')

  const debouncedSearch =
    useMemo(
      () =>
        debounce(
          (value) => {
            dispatch(
              setSearchQuery(
                value
              )
            )
          },
          500
        ),
      [dispatch]
    )

  useEffect(() => {
    debouncedSearch(query)

    return () => {
      debouncedSearch.cancel()
    }
  }, [query, debouncedSearch])

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) =>
          setQuery(
            e.target.value
          )
        }
        className="w-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      />
    </div>
  )
}