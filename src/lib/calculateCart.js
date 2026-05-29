export default function calculateCart(
  items = []
) {
  if (!Array.isArray(items)) {
    return {
      subtotal: 0,
      totalItems: 0,
      shipping: 0,
      tax: 0,
      total: 0,
    }
  }

  const subtotal = items.reduce(
    (total, item) => {
      const price = Number(
        item?.price || 0
      )

      const quantity = Number(
        item?.quantity || 0
      )

      return (
        total +
        price * quantity
      )
    },
    0
  )

  const totalItems = items.reduce(
    (total, item) => {
      return (
        total +
        Number(
          item?.quantity || 0
        )
      )
    },
    0
  )

  const shipping =
    subtotal > 0 ? 20 : 0

  const tax = subtotal * 0.1

  const total =
    subtotal + shipping + tax

  return {
    subtotal,
    totalItems,
    shipping,
    tax,
    total,
  }
}