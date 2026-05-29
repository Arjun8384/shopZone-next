import Link from 'next/link'

import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import AddToCartButton from './AddToCartButton'
import WishlistButton from './WishlistButton'

export default function ProductCard({
  product,
}) {
  return (
    <Link
      href={`/products/${product?.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
    >
      <ProductImage
        product={product}
      />

      <div className="flex flex-1 flex-col p-4">
        <ProductInfo
          product={product}
        />

        <div className="mt-auto pt-4">
          <div className="flex items-center gap-3">
            <AddToCartButton
              product={product}
            />

            <WishlistButton
              product={product}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}