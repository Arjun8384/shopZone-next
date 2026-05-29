'use client'

import Image from 'next/image'

import { memo } from 'react'

import { useDispatch } from 'react-redux'

import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '@/redux/slices/cartSlice'

import formatCurrency from '@/lib/formatCurrency'

import Button from '@/components/common/Button'

function CartItemComponent({
  item,
}) {
  const dispatch = useDispatch()

  const image =
    item?.images?.[0] ||
    '/fallback.png'

  const totalPrice =
    Number(item?.price || 0) *
    Number(item?.quantity || 0)

  return (
    <article className="flex flex-col md:flex-row gap-5 border border-gray-200 dark:border-zinc-800 rounded-2xl p-4 bg-white dark:bg-zinc-900">
      <div className="relative w-full md:w-40 h-40 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
        <Image
          src={image}
          alt={
            item?.title || 'Product'
          }
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold line-clamp-2">
            {item?.title}
          </h2>

          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {
              item?.category
                ?.name
            }
          </p>

          <p className="text-xl font-bold mt-3">
            {formatCurrency(
              item?.price
            )}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center border border-gray-200 dark:border-zinc-700 rounded-xl overflow-hidden">
            <button
              aria-label="Decrease quantity"
              onClick={() =>
                dispatch(
                  decrementQuantity(
                    item.id
                  )
                )
              }
              className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              −
            </button>

            <span className="px-4 py-2 font-medium">
              {item?.quantity}
            </span>

            <button
              aria-label="Increase quantity"
              onClick={() =>
                dispatch(
                  incrementQuantity(
                    item.id
                  )
                )
              }
              className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              +
            </button>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">
              {formatCurrency(
                totalPrice
              )}
            </p>

            <Button
              variant="danger"
              onClick={() =>
                dispatch(
                  removeFromCart(
                    item.id
                  )
                )
              }
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}

const CartItem = memo(
  CartItemComponent
)

export default CartItem