import { notFound } from 'next/navigation'

import ProductDetails from '@/components/product/ProductDetails'

import { getProductById } from '@/services/productService'

export async function generateMetadata({
  params,
}) {
  const resolvedParams = await params

  const product =
    await getProductById(
      resolvedParams.id
    ).catch(() => null)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.title,
    description:
      product.description,
  }
}

export default async function ProductPage({
  params,
}) {
  const resolvedParams = await params

  const product =
    await getProductById(
      resolvedParams.id
    ).catch(() => null)

  if (!product?.id) {
    notFound()
  }

  return (
    <section>
      <ProductDetails
        product={product}
      />
    </section>
  )
}