'use client'

export default function SortFilter({
  value,
  onChange,
}) {
  return (
    <div>
      <h3 className="font-semibold mb-3">
        Sort By
      </h3>

      <select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        className="w-full border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
      >
        <option value="">
          Default
        </option>

        <option value="low-high">
          Price: Low to High
        </option>

        <option value="high-low">
          Price: High to Low
        </option>

        <option value="a-z">
          Name: A-Z
        </option>

        <option value="z-a">
          Name: Z-A
        </option>
      </select>
    </div>
  )
}