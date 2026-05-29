'use client'

import Link from 'next/link'

import formatCurrency from '@/lib/formatCurrency'

import Button from '@/components/common/Button'

export default function CartSummary({
  subtotal = 0,
  checkout = false,
}) {
  const shipping =
    subtotal > 0 ? 20 : 0

  const tax = subtotal * 0.1

  const total =
    subtotal + shipping + tax

  return (
    <aside className="sticky top-24 h-fit border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 p-6">
      <h2 className="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-zinc-600 dark:text-zinc-400">
            Subtotal
          </span>

          <span>
            {formatCurrency(
              subtotal
            )}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-600 dark:text-zinc-400">
            Shipping
          </span>

          <span>
            {formatCurrency(
              shipping
            )}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-zinc-600 dark:text-zinc-400">
            Tax
          </span>

          <span>
            {formatCurrency(tax)}
          </span>
        </div>

        <div className="border-t border-gray-200 dark:border-zinc-800 pt-4 flex items-center justify-between">
          <span className="text-xl font-bold">
            Total
          </span>

          <span className="text-2xl font-bold">
            {formatCurrency(total)}
          </span>
        </div>
      </div>

      {checkout ? (
        <Button
          className="w-full mt-8"
          type="submit"
          form="checkout-form"
        >
          Place Order
        </Button>
      ) : (
        <Link href="/checkout">
          <Button className="w-full mt-8">
            Proceed To Checkout
          </Button>
        </Link>
      )}
    </aside>
  )
}