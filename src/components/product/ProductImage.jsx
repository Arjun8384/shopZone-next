'use client'

import ImageWithFallback from '@/components/common/ImageWithFallback'

export default function ProductImage({
  product,
  details = false,
  priority = false,
}) {
  const image =
    product?.images?.[0] &&
    typeof product.images[0] ===
      'string'
      ? product.images[0]
      : '/fallback.png'

  return (
    <div
      className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${
        details
          ? 'h-[500px] rounded-2xl'
          : 'h-64'
      }`}
    >
      <ImageWithFallback
        src={image}
        alt={
          product?.title ||
          'Product Image'
        }
        fill
        priority={priority}
        className="object-cover group-hover:scale-105 transition duration-300"
      />
    </div>
  )
}