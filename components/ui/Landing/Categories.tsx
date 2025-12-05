'use client'
import CircularGallery from '@/components/CircularGallery';
import React from 'react'
type Category = {
    image:string;
    text:string;
}
type Props = {
  item: Category[]
}

const Categories = ({item}: Props) => {
  return (
    <div style={{ height: '600px', position: 'relative' }} >
    <CircularGallery bend={0}   textColor='var(--color-sky-700)'  borderRadius={0.05} scrollEase={0.02} items={item}/>
    </div>
  )
}

export default Categories