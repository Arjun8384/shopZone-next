import { apiClient } from './apiClient'

export async function getCategories() {
  try {
    const categories =
      await apiClient(
        '/categories'
      )

    if (
      !Array.isArray(
        categories
      )
    ) {
      return []
    }

    const blockedNames = [
      'string',
      'test',
      'category_b',
      'new category',
      'updated category name',
      'catupd1',
    ]

    return categories.filter(
      (category) => {
        const name =
          category?.name
            ?.trim()
            ?.toLowerCase()

        return (
          name &&
          name.length > 2 &&
          !blockedNames.some(
            (blocked) =>
              name.includes(
                blocked
              )
          )
        )
      }
    )
  } catch (error) {
    console.error(
      'CATEGORY SERVICE ERROR:',
      error
    )

    return []
  }
}