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
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
  <div className="container relative z-10 mx-auto px-4">
<div className="space-y-8 items-center">
<Badge
  
  className="bg-blue-700/40 border-sky-700 px-4 py-2 rounded-4xl text-white text-sm font-medium"
>

</Badge>
<h1
  className="text-3xl md:text-4xl lg:text-5xl font-secondary font-bold text-white leading-tight"
>
  Discover New Worlds, <br />
  <span className="inter text-sky-700">One Page at a Time</span>
</h1>
<p

className="text-white/80 text-lg md:text-xl max-w-md">
  <TextType 
                text={[
                    "Discover Stories That Stay With You.",
                    "Every Book Opens a New World.",
                    "Read More. Learn More. Be More.",
                    "Your Next Favorite Book Awaits.",
                    "Where Every Page Sparks Imagination."
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
    className="bg-sky-700 text-white hover:bg-sky-600/80"
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