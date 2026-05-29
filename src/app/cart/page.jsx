'use client'

import { useSelector } from 'react-redux'

import CartList from '@/components/cart/CartList'
import CartSummary from '@/components/cart/CartSummary'
import EmptyState from '@/components/common/EmptyState'
import SectionTitle from '@/components/common/SectionTitle'

import {
  selectCartItems,
  selectCartSubtotal,
} from '@/redux/selectors/cartSelectors'

export default function CartPage() {
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
        title="Shopping Cart"
        subtitle="Manage your selected products"
      />

      <div className="grid lg:grid-cols-[1fr_350px] gap-8">
        <CartList items={items} />

        <CartSummary
          subtotal={subtotal}
        />
      </div>
    </section>
  )
}