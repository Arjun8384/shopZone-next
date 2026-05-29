import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'

import { getProducts } from '@/services/productService'

export const fetchProducts =
  createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
      try {
        return await getProducts()
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.message
        )
      }
    }
  )

const initialState = {
  items: [],
  categories: [],
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (
    builder
  ) => {
    builder

      .addCase(
        fetchProducts.pending,
        (state) => {
          state.loading = true
          state.error = null
        }
      )

      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          action
        ) => {
          state.loading = false

          const products =
            Array.isArray(
              action.payload
            )
              ? action.payload
              : []

          const cleanedProducts =
            products.map(
              (product) => {
                let categoryName =
                  product?.category
                    ?.name || ''

                const lowerName =
                  categoryName.toLowerCase()

                if (
                  lowerName.includes(
                    'updated'
                  ) ||
                  lowerName.includes(
                    'aaaa'
                  ) ||
                  lowerName.includes(
                    'test'
                  ) ||
                  lowerName.includes(
                    'string'
                  )
                ) {
                  categoryName =
                    'Clothes'
                }

                return {
                  ...product,
                  category: {
                    ...product.category,
                    name: categoryName,
                  },
                }
              }
            )

          state.items =
            cleanedProducts

          state.categories =
            [
              ...new Map(
                cleanedProducts.map(
                  (
                    product
                  ) => [
                    product
                      ?.category
                      ?.id,
                    product
                      ?.category,
                  ]
                )
              ).values(),
            ]
        }
      )

      .addCase(
        fetchProducts.rejected,
        (
          state,
          action
        ) => {
          state.loading = false

          state.error =
            action.payload ||
            'Failed to fetch products'
        }
      )
  },
})

export default productSlice.reducer