export default function truncateText(
  text = '',
  maxLength = 50
) {
  const safeText = String(
    text || ''
  )

  if (
    safeText.length <= maxLength
  ) {
    return safeText
  }

  return `${safeText.slice(
    0,
    maxLength
  )}...`
}