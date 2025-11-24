'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Book } from '@/lib/DummyData'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/public/Context/StateContext'
type Props = {
    Book : Book
}
const ProductCard = ({Book}:Props) => {
    const addToCart = useCartStore((s) => s.onAdd);
    const qty = useCartStore((s) => s.qty);
    const incQty = useCartStore((s) => s.incQty);
    const decQty = useCartStore((s) => s.decQty);
  return (
    <Card className="w-full max-w-sm rounded-xl shadow-sm hover:shadow-md transition-all">
    {/* Book Image */}
    <div className="w-full h-64 overflow-hidden rounded-t-xl">
      <img
        src={'/NewBookImages-2024-01-03T121544.742.png'}
        alt={Book.title}
        className="w-full h-full object-fit"
      />
    </div>

    <CardHeader>
      <CardTitle className="text-lg font-semibold">
        {Book.title}
      </CardTitle>
      <CardDescription className="line-clamp-2 text-sm text-gray-600">
        {Book.description}
      </CardDescription>
    </CardHeader>

    <CardContent className= 'flex justify-between items-center '>
      <p className="text-xl font-bold">GHS {Book.price}</p>
      <Button className="1/4 rounded-lg bg-sky-600 hover:bg-sky-700" onClick={() => addToCart(Book, qty)}>
      <ShoppingCart />
      </Button>
    </CardContent>

    
     

  </Card>
  )
}

export default ProductCard