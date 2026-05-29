'use client'

import { useDispatch, useSelector } from 'react-redux'

import toast from 'react-hot-toast'

import { toggleWishlist } from '@/redux/slices/wishlistSlice'

export default function WishlistButton({
  product,
}) {
  const dispatch = useDispatch()

  const wishlistItems =
    useSelector(
      (state) =>
        state.wishlist.items
    )

  const isWishlisted =
    wishlistItems.some(
      (item) =>
        item.id === product.id
    )

  const handleWishlist = (
    e
  ) => {
    e.preventDefault()

    dispatch(
      toggleWishlist(product)
    )

    if (isWishlisted) {
      toast.success(
        'Removed from wishlist'
      )
    } else {
      toast.success(
        'Added to wishlist'
      )
    }
  }

  return (
    <button
      aria-label="Toggle wishlist"
      onClick={handleWishlist}
      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition ${
        isWishlisted
          ? 'bg-red-500 text-white border-red-500'
          : 'border-gray-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800'
      }`}
    >
      ♥
    </button>
  )
}