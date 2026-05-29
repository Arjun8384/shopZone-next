'use client'

import {
  useEffect,
  useMemo,
} from 'react'

import {
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  fetchProducts,
} from '@/redux/slices/productSlice'

export default function useProducts() {
  const dispatch = useDispatch()

  const products = useSelector(
    (state) =>
      state.products.items
  )

  const categories =
    useSelector(
      (state) =>
        state.products
          .categories
    )

  const loading = useSelector(
    (state) =>
      state.products.loading
  )

  const filters = useSelector(
    (state) => state.filters
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const safeProducts =
    useMemo(() => {
      return Array.isArray(
        products
      )
        ? products
        : []
    }, [products])


  return {
    products: safeProducts,
    categories,
    loading,
    filters,
  }
}