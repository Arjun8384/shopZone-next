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

          state.items =
            products

          const categories =
            [
              ...new Map(
                products
                  .filter(
                    (
                      product
                    ) =>
                      product
                        ?.category
                        ?.id &&
                      product
                        ?.category
                        ?.name
                  )
                  .map(
                    (
                      product
                    ) => [
                      product
                        .category.id,
                      product
                        .category,
                    ]
                  )
              ).values(),
            ]

          state.categories =
            categories.filter(
              (
                category
              ) => {
                const name =
                  String(
                    category.name
                  )
                    .trim()
                    .toLowerCase()

                return (
                  name &&
                  !name.includes(
                    'updated'
                  ) &&
                  !name.includes(
                    'aaaa'
                  ) &&
                  !name.includes(
                    'test'
                  ) &&
                  !name.includes(
                    'string'
                  )
                )
              }
            )
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