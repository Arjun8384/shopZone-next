'use client'

import { useState } from 'react'

import toast from 'react-hot-toast'

import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

import { validateCheckout } from '@/lib/validateCheckout'

export default function CheckoutForm() {
  const [formData, setFormData] =
    useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
    })

  const [errors, setErrors] =
    useState({})

  const handleChange = (e) => {
    const { name, value } =
      e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors =
      validateCheckout(formData)

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors)

      toast.error(
        'Please fix the form errors'
      )

      return
    }

    setErrors({})

    toast.success(
      'Order placed successfully'
    )

    console.log(formData)
  }

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit}
      className="space-y-5 border border-gray-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 p-6"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Input
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={errors.city}
        />
      </div>

      <Input
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />

      <Input
        label="Zip Code"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        error={errors.zipCode}
      />

      <Button
        type="submit"
        className="w-full"
      >
        Complete Checkout
      </Button>
    </form>
  )
}