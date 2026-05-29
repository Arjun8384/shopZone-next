'use client'

import { useSelector } from 'react-redux'

import WishlistGrid from '@/components/wishlist/WishlistGrid'

import EmptyState from '@/components/common/EmptyState'
import SectionTitle from '@/components/common/SectionTitle'

import { selectWishlistItems } from '@/redux/selectors/wishlistSelectors'

export default function WishlistPage() {
  const wishlistItems = useSelector(
    selectWishlistItems
  )

  if (!wishlistItems.length) {
    return (
      <EmptyState title="Your wishlist is empty" />
    )
  }

  return (
    <section className="space-y-8">
      <SectionTitle
        title="Wishlist"
        subtitle="Your favorite saved products"
      />

      <WishlistGrid
        products={wishlistItems}
      />
    </section>
  )
}