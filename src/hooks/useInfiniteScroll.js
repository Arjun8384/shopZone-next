'use client'

import { useState } from 'react'

export default function useInfiniteScroll(
  items = [],
  itemsPerPage = 12
) {
  const [visibleCount, setVisibleCount] =
    useState(itemsPerPage)

  const visibleItems =
    items.slice(0, visibleCount)

  const hasMore =
    visibleCount < items.length

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(
        prev + itemsPerPage,
        items.length
      )
    )
  }

  return {
    visibleItems,
    hasMore,
    loadMore,
  }
}