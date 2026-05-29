export function validateCheckout(
  values = {}
) {
  const errors = {}

  if (
    !String(
      values?.fullName || ''
    ).trim()
  ) {
    errors.fullName =
      'Full name is required'
  }

  if (
    !String(
      values?.email || ''
    ).trim()
  ) {
    errors.email =
      'Email is required'
  }

  if (
    !String(
      values?.phone || ''
    ).trim()
  ) {
    errors.phone =
      'Phone number is required'
  }

  if (
    !String(
      values?.address || ''
    ).trim()
  ) {
    errors.address =
      'Address is required'
  }

  if (
    !String(
      values?.city || ''
    ).trim()
  ) {
    errors.city =
      'City is required'
  }

  if (
    !String(
      values?.zipCode || ''
    ).trim()
  ) {
    errors.zipCode =
      'Zip code is required'
  }

  return errors
}