'use client'

import { useState } from 'react'

import ProductReviews from './ProductReviews'

export default function ProductTabs({
  product,
}) {
  const [activeTab, setActiveTab] =
    useState('description')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 border-b border-gray-200 dark:border-zinc-800">
        <button
          onClick={() =>
            setActiveTab(
              'description'
            )
          }
          className={`pb-3 font-medium ${
            activeTab ===
            'description'
              ? 'border-b-2 border-black dark:border-white'
              : ''
          }`}
        >
          Description
        </button>

        <button
          onClick={() =>
            setActiveTab(
              'reviews'
            )
          }
          className={`pb-3 font-medium ${
            activeTab ===
            'reviews'
              ? 'border-b-2 border-black dark:border-white'
              : ''
          }`}
        >
          Reviews
        </button>
      </div>

      {activeTab ===
      'description' ? (
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {
            product?.description
          }
        </p>
      ) : (
        <ProductReviews />
      )}
    </div>
  )
}