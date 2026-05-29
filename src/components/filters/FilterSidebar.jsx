'use client'

import {
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  clearFilters,
  setCategory,
  setPriceRange,
  setSortOption,
} from '@/redux/slices/filterSlice'

import PriceFilter from './PriceFilter'
import SortFilter from './SortFilter'
import SearchFilter from './SearchFilter'

export default function FilterSidebar({
  categories = [],
}) {
  const dispatch =
    useDispatch()

  const filters =
    useSelector(
      (state) =>
        state.filters
    )

  const cleanCategories =
    categories.filter(
      (category) => {
        const name =
          String(
            category?.name ||
              ''
          ).toLowerCase()

        return (
          !name.includes(
            'updated'
          ) &&
          !name.includes(
            'aaaa'
          ) &&
          !name.includes(
            'test'
          ) &&
          !name.includes(
            'string'
          )
        )
      }
    )

  return (
    <aside className="w-full lg:w-72 border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 p-5 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Filters
        </h2>

        <button
          onClick={() =>
            dispatch(
              clearFilters()
            )
          }
          className="text-sm text-red-500"
        >
          Reset
        </button>
      </div>

      <div className="space-y-8">
        <SearchFilter />

        <div>
          <h3 className="font-semibold mb-3">
            Categories
          </h3>

          <div className="space-y-2">
            {cleanCategories.map(
              (
                category
              ) => {
                const active =
                  filters.category ===
                  category.name

                return (
                  <button
                    key={
                      category.id
                    }
                    onClick={() =>
                      dispatch(
                        setCategory(
                          active
                            ? ''
                            : category.name
                        )
                      )
                    }
                    className={`w-full text-left px-4 py-2 rounded-xl border transition ${
                      active
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'border-gray-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {
                      category.name
                    }
                  </button>
                )
              }
            )}
          </div>
        </div>

        <PriceFilter
          value={
            filters.priceRange
          }
          onChange={(
            value
          ) =>
            dispatch(
              setPriceRange(
                value
              )
            )
          }
        />

        <SortFilter
          value={
            filters.sortOption
          }
          onChange={(
            value
          ) =>
            dispatch(
              setSortOption(
                value
              )
            )
          }
        />
      </div>
    </aside>
  )
}