import ProductCard from '@/components/Product/Product'
import { ProductGridSkeleton } from '@/components/Skeleton/productSkeleton'
import { fetchProducts } from '@/lib/Api/api'
import React, { Suspense } from 'react'

const page = async() => {
    const products = await fetchProducts()
    console.log(products)
  return (
    <Suspense fallback={<ProductGridSkeleton />}>

    <div className='p-5'>

    <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-items-center'>
        {products.map((item) => (
                 /* @ts-ignore   */
            <ProductCard Product= {item} key={item.id} />
        ))}
    </div>

    </div>
    </Suspense>


  )
}

export default page