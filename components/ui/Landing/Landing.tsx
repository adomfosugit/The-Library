'use client'
import React from 'react'


import Link from 'next/link'
import { ArrowRight, Badge } from 'lucide-react'


import { AboutCardContent } from '@/Constants'
import TextType from '@/components/TextType'
import { Button } from '../button'
import StatusCard from './StatusCard'

type Props = {}

const Landing = (props: Props) => {
  return (
    <section className="relative hero overflow-hidden py-32 h-full">
    {/* Gradient overlay */}
<div className="absolute inset-0"></div>
  <div className="container relative z-10 mx-auto px-4">
<div className="space-y-8 items-center">

<h1
  className="text-3xl md:text-4xl lg:text-5xl font-secondary font-bold text-white leading-tight"
>
  Nourish Your Skin, <br />
  <span className="inter text-second">Naturally & Beautifully</span>
</h1>

<p

className="text-white/80 text-lg md:text-xl max-w-md">
  <TextType 
                text={[
                  "Natural Beauty Starts With Nature.",
                  "Pure Shea Butter. Pure Radiance.",
                  "Nourish Your Skin, Naturally.",
                  "Where Nature Meets Skincare.",
                  "Glow From Within, Shine Without."
                ]}
                typingSpeed={60} 
                pauseDuration={1500} 
                showCursor={true} 
                cursorCharacter="|"  
                textColors={['white']}
              />
</p>
<div className="flex flex-col sm:flex-row gap-4">
  <Button
    asChild
    size="lg"
    className="bg-second text-white hover:bg-second/80"
  >
    
    <Link href="/Products">
    Shop Now  <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>

</div>
</div>

                          
                

</div>
</section>
  )
}

export default Landing