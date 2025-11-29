import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Raw Shea Butter',
    image: '/product mockup 3.jpg'
  },
  {
    text:'White Shea Butter',
    image: '/product mock up 2.jpg'
  },
  

]


const HotSales = () => {
  return (
    <div className= ' flex flex-col'>
      <div className=' text-2xl text-white text-center border-b border-2 border-second py-2 bg-second '> Shop by Category</div>
      <div >

      <Categories item ={data} />

      </div>
    </div>
  )
}

export default HotSales