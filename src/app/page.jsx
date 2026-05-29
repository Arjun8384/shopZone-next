'use client'

import { useMemo } from 'react'

import ProductGrid from '@/components/product/ProductGrid'
import ProductGridSkeleton from '@/components/product/ProductGridSkeleton'

import FilterSidebar from '@/components/filters/FilterSidebar'
import FilterDrawer from '@/components/filters/FilterDrawer'

import EmptyState from '@/components/common/EmptyState'
import SearchBar from '@/components/common/SearchBar'

import useProducts from '@/hooks/useProducts'

import { filterProducts } from '@/lib/filterProducts'

import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function HomePage() {
  const {
    products,
    categories,
    loading,
    filters,
  } = useProducts()

  const filteredProducts = useMemo(() => {
    return filterProducts(
      products,
      filters
    )
  }, [products, filters])

  const {
    visibleItems,
    hasMore,
    loadMore,
  } = useInfiniteScroll(
    filteredProducts,
    12
  )

  return (
    <section className="space-y-6">
      <SearchBar />

      <div className="lg:hidden">
        <FilterDrawer
          categories={categories}
        />
      </div>

      <div className="flex gap-6">
        <div className="hidden lg:block">
          <FilterSidebar
            categories={categories}
          />
        </div>

        <div className="flex-1">
          {loading ? (
            <ProductGridSkeleton />
          ) : filteredProducts.length ? (
            <>
              <ProductGrid
                products={visibleItems}
              />

              {hasMore && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={loadMore}
                  className="rounded-xl bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
                >
                  Load More
                </button>
              </div>
            )}
            </>
          ) : (
            <EmptyState title="No products found" />
          )}
        </div>
      </div>
    </section>
  )
}