'use client'

export default function PriceFilter({
  value,
  onChange,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">
          Max Price
        </h3>

        <span className="text-sm text-zinc-500">
          ₹{value}
        </span>
      </div>

      <input
        type="range"
        min="1"
        max="1000"
        step="10"
        value={value}
        onChange={(e) =>
          onChange(
            Number(
              e.target.value
            )
          )
        }
        className="w-full"
      />
    </div>
  )
}