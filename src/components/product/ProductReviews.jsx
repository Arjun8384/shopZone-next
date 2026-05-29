export default function ProductReviews() {
  const reviews = [
    {
      id: 1,
      name: 'Aman',
      comment:
        'Excellent product quality and fast delivery.',
    },
    {
      id: 2,
      name: 'Riya',
      comment:
        'Worth the price. Packaging was great.',
    },
  ]

  return (
    <div className="space-y-5">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-5"
        >
          <h4 className="font-semibold mb-2">
            {review.name}
          </h4>

          <p className="text-zinc-600 dark:text-zinc-400">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  )
}