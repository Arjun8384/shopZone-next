'use client'

import { useMemo } from 'react'

import { useSelector } from 'react-redux'

import { filterProducts } from '@/lib/filterProducts'

export default function useFilters(
  products = []
) {
  const filters = useSelector(
    (state) => state.filters
  )

  const filteredProducts =
    useMemo(() => {
      return filterProducts(
        products,
        filters
      )
    }, [products, filters])

  return {
    filters,
    filteredProducts,
  }
}