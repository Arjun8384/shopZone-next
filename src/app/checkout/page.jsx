'use client'

import { useSelector } from 'react-redux'

import CheckoutForm from '@/components/cart/CheckoutForm'
import CartSummary from '@/components/cart/CartSummary'
import EmptyState from '@/components/common/EmptyState'
import SectionTitle from '@/components/common/SectionTitle'

import {
  selectCartItems,
  selectCartSubtotal,
} from '@/redux/selectors/cartSelectors'

export default function CheckoutPage() {
  const items = useSelector(
    selectCartItems
  )

  const subtotal = useSelector(
    selectCartSubtotal
  )

  if (!items.length) {
    return (
      <EmptyState title="Your cart is empty" />
    )
  }

  return (
    <section className="space-y-8">
      <SectionTitle
        title="Checkout"
        subtitle="Complete your order"
      />

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        <CheckoutForm />

        <CartSummary
          subtotal={subtotal}
          checkout
        />
      </div>
    </section>
  )
}