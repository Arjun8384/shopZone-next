import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: '',
  searchQuery: '',
  sortOption: '',
  priceRange: 1000,
}

const filterSlice =
  createSlice({
    name: 'filters',

    initialState,

    reducers: {
      setCategory: (
        state,
        action
      ) => {
        if (
          state.category ===
          action.payload
        ) {
          state.category = ''
        } else {
          state.category =
            action.payload
        }
      },

      setSearchQuery: (
        state,
        action
      ) => {
        state.searchQuery =
          action.payload
      },

      setSortOption: (
        state,
        action
      ) => {
        state.sortOption =
          action.payload
      },

      setPriceRange: (
        state,
        action
      ) => {
        state.priceRange =
          action.payload
      },

      clearFilters: (
        state
      ) => {
        state.category = ''
        state.searchQuery =
          ''
        state.sortOption = ''
        state.priceRange = 1000
      },
    },
  })

export const {
  setCategory,
  setSearchQuery,
  setSortOption,
  setPriceRange,
  clearFilters,
} = filterSlice.actions

export default filterSlice.reducer