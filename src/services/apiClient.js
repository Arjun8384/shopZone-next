const BASE_URL =
  process.env
    .NEXT_PUBLIC_BASE_URL

export async function apiClient(
  endpoint = '',
  options = {}
) {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      {
        cache: 'no-store',
        headers: {
          'Content-Type':
            'application/json',
        },
        ...options,
      }
    )

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status}`
      )
    }

    const data =
      await response.json()

    return data
  } catch (error) {
    console.error(
      'API CLIENT ERROR:',
      error
    )

    throw error
  }
}