import ProductCard from '@/components/Product/Product'
import { generateBooks } from '@/lib/DummyData'
import React from 'react'

type Props = {}
const books = generateBooks(4)

const Trending = (props: Props) => {
  return (
    <div className= ' flex flex-col'>
    <div className='font-bold text-2xl text-white text-center border-b border-2 border-sky-600 py-2 bg-sky-700 '> Recently Added</div>
    <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-items-center mt-2'>
        {books.map((item) => (
            <ProductCard Book= {item} key={item.id} />
        ))}
    </div>
  </div>
  )
}

export default Trending