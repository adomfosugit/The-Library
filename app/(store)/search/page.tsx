
import { searchProductsByField } from '@/lib/Api/api'
import React from 'react'

const Searchpage = async({searchParams}:{ searchParams:{
    query: string,
  
}}) => {
    const { query } = await  searchParams
    const searchProducts = await searchProductsByField('name', `${query}`)
    
  return (
      <div className='max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  place-items-center'>
              {searchProducts.map((item) => (
                       /* @ts-ignore   */
                  <ProductCard Product= {item} key={item.id} />
              ))}
          </div>
  )
}

export default Searchpage