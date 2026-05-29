'use client'

import ProductImage from './ProductImage'
import AddToCartButton from './AddToCartButton'
import WishlistButton from './WishlistButton'
import ProductTabs from './ProductTabs'

import formatCurrency from '@/lib/formatCurrency'

export default function ProductDetails({
  product,
}) {
  return (
    <section className="space-y-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <ProductImage
          product={product}
          details
          priority
        />

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {
                product
                  ?.category
                  ?.name
              }
            </p>

            <h1 className="text-4xl font-bold leading-tight">
              {
                product?.title
              }
            </h1>

            <p className="text-3xl font-bold">
              {formatCurrency(
                product?.price
              )}
            </p>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {
              product?.description
            }
          </p>

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

      <ProductTabs
        product={product}
      />
    </section>
  )
}