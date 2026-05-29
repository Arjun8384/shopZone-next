import calculateCart from '@/lib/calculateCart'

export const selectCartItems = (
  state
) => state.cart.items

export const selectCartCount = (
  state
) =>
  state.cart.items.reduce(
    (total, item) =>
      total +
      Number(
        item?.quantity || 0
      ),
    0
  )

export const selectCartSubtotal =
  (state) =>
    calculateCart(
      state.cart.items
    ).subtotal

export const selectCartSummary =
  (state) =>
    calculateCart(
      state.cart.items
    )