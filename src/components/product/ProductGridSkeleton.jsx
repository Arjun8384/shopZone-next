import SkeletonCard from '@/components/common/SkeletonCard'

export default function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <SkeletonCard
          key={index}
        />
      ))}
    </div>
  )
}