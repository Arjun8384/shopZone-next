import ProductBadge from './ProductBadge'

import formatCurrency from '@/lib/formatCurrency'
import truncateText from '@/lib/truncateText'

export default function ProductInfo({
  product,
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <ProductBadge>
          {
            product
              ?.category
              ?.name
          }
        </ProductBadge>

        <span className="text-xl font-bold">
          {formatCurrency(
            product?.price
          )}
        </span>
      </div>

      <h2 className="min-h-[56px] text-lg font-semibold leading-snug">
      {truncateText(
          product?.title,
          55
        )}
      </h2>
    </div>
  )
}