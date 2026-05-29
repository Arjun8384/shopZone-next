export function filterProducts(
  products = [],
  filters = {}
) {
  if (!Array.isArray(products)) {
    return []
  }

  const {
    category = '',
    searchQuery = '',
    sortOption = '',
    priceRange = 1000,
  } = filters

  let filteredProducts =
    [...products]

  // CATEGORY FILTER
  if (
    String(category)
      .trim()
      .length > 0
  ) {
    filteredProducts =
      filteredProducts.filter(
        (product) => {
          const productCategory =
            String(
              product?.category
                ?.name || ''
            )
              .toLowerCase()
              .trim()

          return (
            productCategory ===
            String(category)
              .toLowerCase()
              .trim()
          )
        }
      )
  }

  // SEARCH FILTER
  if (
    String(searchQuery)
      .trim()
      .length > 0
  ) {
    filteredProducts =
      filteredProducts.filter(
        (product) => {
          const title =
            String(
              product?.title ||
                ''
            )
              .toLowerCase()
              .trim()

          return title.includes(
            String(searchQuery)
              .toLowerCase()
              .trim()
          )
        }
      )
  }

  // PRICE FILTER
  filteredProducts =
    filteredProducts.filter(
      (product) => {
        const price = Number(
          product?.price || 0
        )

        return (
          price <=
          Number(priceRange)
        )
      }
    )

  // SORTING
  switch (sortOption) {
    case 'low-high':
      filteredProducts.sort(
        (a, b) =>
          Number(
            a?.price || 0
          ) -
          Number(
            b?.price || 0
          )
      )
      break

    case 'high-low':
      filteredProducts.sort(
        (a, b) =>
          Number(
            b?.price || 0
          ) -
          Number(
            a?.price || 0
          )
      )
      break

    case 'a-z':
      filteredProducts.sort(
        (a, b) =>
          String(
            a?.title || ''
          ).localeCompare(
            String(
              b?.title || ''
            )
          )
      )
      break

    case 'z-a':
      filteredProducts.sort(
        (a, b) =>
          String(
            b?.title || ''
          ).localeCompare(
            String(
              a?.title || ''
            )
          )
      )
      break

    default:
      break
  }

  return filteredProducts
}