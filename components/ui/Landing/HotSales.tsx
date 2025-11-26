import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Raw Shea Butter',
    image: '/concept-skin-care-cosmetics-shea-butter-close-up.jpg'
  },
  {
    text:'Yellow Shea Butter',
    image: '/concept-skin-care-cosmetics-shea-butter-space-text.jpg'
  },
  

]


const HotSales = () => {
  return (
    <div className= ' flex flex-col'>
      <div className=' text-2xl text-black text-center border-b border-2 border-green-500 py-2 bg-green-500 '> Shop by Category</div>
      <div >

      <Categories item ={data} />

      </div>
    </div>
  )
}

export default HotSales