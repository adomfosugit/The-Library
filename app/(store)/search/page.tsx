import ProductCard from '@/components/Product/ProductCardSearch'
import { ProductGridSkeleton } from '@/components/Skeleton/productSkeleton'
import { searchProductsByField } from '@/lib/Api/api'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Searchpage = async({searchParams}:{ searchParams:{
    query: string,
  
}}) => {
    const { query } = await searchParams
    const searchProducts = await searchProductsByField('name', `${query}`)
    console.log(searchProducts)
    
  return (
     <Suspense fallback={<ProductGridSkeleton />}>
    <div className='max-w-8xl mx-auto px-4 py-8'>
      {searchProducts && searchProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
          {searchProducts.map((item) => (
            /* @ts-ignore */
            <ProductCard Product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
          <svg 
            className="w-24 h-24 text-gray-400 mb-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-3'>
            No Match Found
          </h2>
          <p className='text-gray-600 mb-6 max-w-md'>
            We couldn't find any products matching "{query}". Try searching with different keywords.
          </p>
          <Link 
            href="/"
            className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300'
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
    </Suspense>
  )
}

export default Searchpage