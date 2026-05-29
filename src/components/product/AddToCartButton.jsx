'use client'

import { useDispatch } from 'react-redux'

import toast from 'react-hot-toast'

import { addToCart } from '@/redux/slices/cartSlice'

export default function AddToCartButton({
  product,
  className = '',
}) {
  const dispatch = useDispatch()

  const handleAddToCart = (
    e
  ) => {
    if (e) {
      e.preventDefault()
    }

    dispatch(addToCart(product))

    toast.success(
      'Added to cart'
    )
  }

  return (
    <button
      aria-label="Add to cart"
      onClick={handleAddToCart}
      className={`flex-1 bg-black dark:bg-white dark:text-black text-white py-3 rounded-xl font-medium hover:opacity-90 transition ${className}`}
    >
      Add To Cart
    </button>
  )
}