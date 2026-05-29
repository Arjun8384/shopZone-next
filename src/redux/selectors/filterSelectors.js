export const selectFilters = (
  state
) => state.filters

export const selectCategory = (
  state
) => state.filters.category

export const selectSearchQuery =
  (state) =>
    state.filters
      .searchQuery

export const selectSortOption =
  (state) =>
    state.filters.sortOption

export const selectPriceRange =
  (state) =>
    state.filters.priceRange