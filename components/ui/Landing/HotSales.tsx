import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Raw Shea Butter',
    image: '/NEW _ product mock up 1.jpg'
  },
  {
    text:'White Shea Butter',
    image: '/NEW _ product mock up 2.jpg'
  },
  

]


const HotSales = () => {
  return (
    <div className= ' flex flex-col'>
      <div className=' text-2xl text-second text-center border-b border-2 border-primary py-2 bg-primary '> Explore Our Products</div>
      <div >

      <Categories item ={data} />

      </div>
    </div>
  )
}

export default HotSales