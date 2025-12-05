import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Raw Shea Butter',
    image: '/box.jpg'
  },
  {
    text:'1kg Yellow Shea Butter',
    image: '/Box 1kg.jpg'
  },
  {
    text:'10Kg Shea Butter',
    image: '/box 10 kg.jpg'
  },
  {
    text:'50kg White Shea Butter',
    image: '/box 50 kg.jpg'
  },
  {
    text:'50kg Yellow Shea Butter',
    image: '/box 50 kg.jpg'
  },
   {
    text:'100kg Yellow Shea Butter',
    image: '/Paint Bucket Mockup.png'
  },
  

]


const HotSales = () => {
  return (
    <div className= 'flex flex-col'>
      <div className='pt-2 text-2xl text-second text-center border-b border-2 border-primary py-2 bg-primary '> Explore Our Products</div>
      <div >

      <Categories item ={data} />

      </div>
    </div>
  )
}

export default HotSales