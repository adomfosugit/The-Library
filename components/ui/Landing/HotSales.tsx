import React from 'react'
import Categories from './Categories'

const data = [
  {
    text:'Stationery',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Computer and Technology',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'For Kids',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Junior High School books',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Primary School Books',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Law, Politics and Social Science',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Literature Books',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'Home Economics',
    image: '/NewBookImages-2024-01-03T121544.742.png'
  },
  {
    text:'General Science Books',
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