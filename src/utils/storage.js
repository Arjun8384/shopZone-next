export function setToStorage(
  key,
  value
) {
  if (
    typeof window ===
    'undefined'
  ) {
    return
  }

  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    )
  } catch (error) {
    console.error(
      'STORAGE SET ERROR:',
      error
    )
  }
}

export function getFromStorage(
  key,
  fallback = null
) {
  if (
    typeof window ===
    'undefined'
  ) {
    return fallback
  }

  try {
    const item =
      localStorage.getItem(
        key
      )

    return item
      ? JSON.parse(item)
      : fallback
  } catch (error) {
    console.error(
      'STORAGE GET ERROR:',
      error
    )

    return fallback
  }
}

export function removeFromStorage(
  key
) {
  if (
    typeof window ===
    'undefined'
  ) {
    return
  }

  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(
      'STORAGE REMOVE ERROR:',
      error
    )
  }
}