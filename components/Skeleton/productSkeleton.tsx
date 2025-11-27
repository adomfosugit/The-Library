import { Skeleton } from "@/components/ui/skeleton"

export function ProductGridSkeleton() {
  return (
    <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
      {[...Array(8)].map((_, index) => (
        <div key={index} className="flex flex-col space-y-3 w-full max-w-[280px]">
          {/* Product Image Skeleton */}
          <Skeleton className="h-[280px] w-full rounded-xl" />
          
          {/* Product Info Skeleton */}
          <div className="space-y-2">
            {/* Product Name */}
            <Skeleton className="h-5 w-full" />
            
            {/* Product Category */}
            <Skeleton className="h-4 w-20" />
            
            {/* Product Price */}
            <Skeleton className="h-6 w-24" />
            
            {/* Action Button */}
            <Skeleton className="h-10 w-full rounded-lg mt-2" />
          </div>
        </div>
      ))}
    </div>
  )
}