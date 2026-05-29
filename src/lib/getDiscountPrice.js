export default function getDiscountPrice(
  price = 0,
  discount = 0
) {
  const safePrice = Number(
    price || 0
  )

  const safeDiscount =
    Number(discount || 0)

  if (safeDiscount <= 0) {
    return safePrice
  }

  return Math.round(
    safePrice -
      (safePrice *
        safeDiscount) /
        100
  )
}