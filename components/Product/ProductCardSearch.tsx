'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Product } from '@/lib/DummyData'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/public/Context/StateContext'
import Link from 'next/link'
import Image from 'next/image'


type Props = {
    Product : Product
}
const ProductCard = ({Product}:Props) => {
    const addToCart = useCartStore((s) => s.onAdd);
    const qty = useCartStore((s) => s.qty);
    const incQty = useCartStore((s) => s.incQty);
    const decQty = useCartStore((s) => s.decQty);
  return (
    <Card className="w-full max-w-sm rounded-xl shadow-sm hover:shadow-md transition-all m-4 mx-auto">
    <Link href={`/Products/${Product.slug}`}>
    <div className="w-full h-64 overflow-hidden rounded-t-xl">
      <Image
        src={Product.image[0].url}
        alt={Product.name}
        className="w-full h-full object-fit"
        width={100}
        height={150}
      />
    </div>

    <CardHeader>
      <CardTitle className="text-lg font-semibold">
        {Product.name}
      </CardTitle>
      <CardDescription className="line-clamp-2 text-sm text-gray-600">
        {Product.description}
      </CardDescription>
    </CardHeader>

    <CardContent className= 'flex justify-between items-center '>
      <p className="text-xl font-bold"> ${Product.price}</p>
      <Button className="1/4 rounded-lg bg-primary hover:bg-primary" onClick={() => addToCart(Product, qty)}>
      <ShoppingCart />
      </Button>
    </CardContent>

    
     
    </Link>
  </Card>
  )
}

export default ProductCard