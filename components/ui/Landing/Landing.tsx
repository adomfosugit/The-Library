'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TextType from '@/components/TextType'
import { Button } from '../button'



const Landing = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/Banner.jpg',
      mobileImage: '/Media.jpg'
    },
    {
      image: '/Banner.jpg', 
      mobileImage: '/Media.jpg'
    },
    {
      image: '/Banner.jpg', 
      mobileImage: '/Media.jpg'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden h-screen">
      {/* Carousel Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Image */}
          <div
            className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

        {/* Tablet Image */}
          <div
            className="absolute inset-0 hidden md:block lg:hidden bg-cover bg-right bg-no-repeat h-full w-full"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Mobile/Tablet Image */}
          <div
            className="absolute inset-0 h-full min-h-screen md:hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.mobileImage})` }}
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 h-full flex items-center">
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-3xl tracking-tighter md:text-4xl lg:text-6xl font-bold text-white leading-tight">
            Naturally & Beautifully <br />
            <span className="text-second">made shea butter</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-md">
            <TextType 
              text={[
                "Premium Shea Butter, Delivered to the World.",
                "From Africa’s Heart to Global Markets.",
                "Pure Shea. Pure Quality. Pure Export.",
                "Sustainably Sourced, Globally Trusted.",
                "Exporting Nature’s Finest Shea Butter."
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
              <Link href="/Products" className="flex items-center">
                Shop Our Products Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Landing