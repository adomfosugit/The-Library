import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Raw Shea Butter',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Yellow Shea Butter',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  

]


const HotSales = () => {
  return (
    <div className= ' flex flex-col'>
      <div className='font-bold text-2xl text-white text-center border-b border-2 border-sky-600 py-2 bg-sky-700 '> Shop by Category</div>
      <div >

      <Categories item ={data} />

      </div>
    </div>
  )
}

export default HotSales