import { apiClient } from './apiClient'

export async function getProducts() {
  try {
    const products =
      await apiClient(
        '/products'
      )

    if (
      !Array.isArray(products)
    ) {
      return []
    }

    return products
  } catch (error) {
    console.error(
      'PRODUCT SERVICE ERROR:',
      error
    )

    return []
  }
}

export async function getProductById(
  id
) {
  try {
    if (!id) {
      return null
    }

    const product =
      await apiClient(
        `/products/${id}`
      )

    return product
  } catch (error) {
    console.error(
      'SINGLE PRODUCT ERROR:',
      error
    )

    return null
  }
}