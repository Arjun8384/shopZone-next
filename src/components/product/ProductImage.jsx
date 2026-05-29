import ImageWithFallback from '@/components/common/ImageWithFallback'

export default function ProductImage({
  product,
  details = false,
  priority = false,
}) {
    const image =
  Array.isArray(
    product?.images
  ) &&
  product.images.length > 0
    ? product.images[0]
    : '/fallback.png'


  const blockedHosts = [
  'placehold.co'
]

try {
  const url = new URL(image)

  if (
    blockedHosts.includes(
      url.hostname
    )
  ) {
    image = '/fallback.png'
  }
} catch {}


  return (
    <div
      className={`relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${
        details
          ? 'h-[500px] rounded-2xl'
          : 'aspect-[4/3]'
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
        className="object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
  )
}