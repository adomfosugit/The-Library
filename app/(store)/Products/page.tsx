import ProductCard from '@/components/Product/Product'
import { generateBooks } from '@/lib/DummyData'
import React from 'react'

const page = () => {
    const books = generateBooks(70)
    console.log(books)
  return (
    <div className='p-5'>

    <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-items-center'>
        {books.map((item) => (
            <ProductCard Book= {item} key={item.id} />
        ))}
    </div>

    </div>

  )
}

export default page