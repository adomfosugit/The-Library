// "use client";

// import { useLayoutEffect } from "react";
// import { gsap, ScrollTrigger} from "@/lib/gsap";


// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import Image from 'next/image';
// import React from 'react';


// type Props = {}

// const About = (props: Props) => {
//   const testimonials = [
//     {
//       name: "Priscila",
//       role: "Skincare Enthusiast",
//       content: "I've tried many shea butter products, but Bloom Forge Ventures truly delivers on quality. The purity and richness of their shea butter has transformed my skincare routine. My skin has never felt so nourished and healthy!",
//       rating: 5
//     },
//     {
//       name: "Davida",
//       role: "Natural Hair Advocate",
//       content: "As someone who values natural products for my hair care, Bloom Forge Ventures has been a game-changer. Their unrefined shea butter keeps my hair moisturized and strong. Plus, knowing they support local communities makes me feel even better about my purchase.",
//       rating: 5
//     },
//     {
//       name: "Emily ",
//       role: "Wellness Blogger",
//       content: "What sets Bloom Forge Ventures apart is their commitment to authenticity and sustainability. You can feel the difference in their products. It's rare to find a company that genuinely cares about both quality and ethical sourcing.",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white/10 overflow-hidden">
//         {/* Updated About and Mission */}
//           <section className="bg-muted/80 relative py-12 md:py-24 lg:py-32 overflow-hidden">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
//               {/* Text Content - Asymmetric positioning */}
//               <div className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8">
//                 <div className="space-y-3 md:space-y-4">
//                   <p className="text-second font-medium tracking-widest uppercase text-sm md:text-md">
//                     Our Story
//                   </p>
//                   <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground">
//                     From Tree
//                     <span className="block text-primary">to Treasure</span>
//                   </h1>
//                 </div>
//                   <p className="text-base md:text-lg text-muted-foreground max-w-prose">
//                   Bloom Forge Ventures is a dedicated company specializing 
//                   in the sourcing and distribution of raw and natural shea butter. 
//                   Committed to quality and authenticity, Bloom Forge Ventures ensures that every product is pure, 
//                   unrefined, and rich in the natural benefits of shea butter.
//                  </p>
//               </div>

//   <div className="lg:col-span-7 lg:col-start-6 relative flex justify-center lg:justify-end">
//   <div className="relative w-full max-w-[420px] lg:max-w-[520px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
//     <Image
//       src="/white.jpeg"
//       alt="Beautiful African savanna landscape with shea trees at golden hour"
//       fill
//       className="w-full h-full object-cover"
//     />
//       </div>
//       </div>
//         </div>
//         </div>
//         </section>

//  {/* Mission Section */}
//   <section className="bg-muted/40 relative py-12 md:py-24 lg:py-32 overflow-hidden">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
//       {/* Image Left */}
//       <div className="lg:col-span-7 lg:col-start-1 relative flex justify-center lg:justify-start order-2 lg:order-1">
//         <div className="relative w-full max-w-[420px] lg:max-w-[520px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
//           <Image
//             src="/NEW_product mock up.jpg"  
//             alt="Shea butter product mockup with natural elements"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>

//       {/* Text Right */}
//       <div className="lg:col-span-5 lg:col-start-8 space-y-4 order-1 lg:order-2">
//         <div className="space-y-3 md:space-y-4">
//           <p className="text-second font-medium tracking-widest uppercase text-sm md:text-md">
//             Our Mission
//           </p>
//           <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground">
//             Purpose &
//             <span className="block text-primary">Production</span>
//           </h1>
//         </div>

//         <p className="text-base md:text-lg text-muted-foreground max-w-prose">
//         Our mission is to provide customers with premium shea butter that supports healthy skin and hair,
//         while also empowering local communities involved in the shea butter production process. 
//         At Bloom Forge Ventures, we believe in sustainability, ethical sourcing, 
//         and delivering nature's best to our customers.
//         </p>
//       </div>

//     </div>
//   </div>
// </section>

//  {/* Banner Section */}
//    <section className="relative w-full overflow-hidden">
//       <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] md:aspect-[16/6] lg:aspect-[16/5]">
//         <Image
//           src="/banner 2.jpg"
//           alt="Shea banner image"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>
//     </section>


      
//       {/* Values Section */}
//       <div className="bg-gray-50 py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">Our Core Values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Quality & Authenticity</h3>
//               <p className="text-sm md:text-base text-gray-600">We guarantee pure, unrefined shea butter rich in natural benefits for your skin and hair.</p>
//             </div>

//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
//               <p className="text-sm md:text-base text-gray-600">We practice ethical sourcing and are committed to environmental responsibility in all our operations.</p>
//             </div>

//             <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                 <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Community Empowerment</h3>
//               <p className="text-sm md:text-base text-gray-600">We support and empower local communities involved in the shea butter production process.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12">What Our Customers Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
//               <div className="flex gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="text-sm md:text-base text-gray-700 mb-6 italic">"{testimonial.content}"</p>
//               <div className="border-t border-gray-100 pt-4">
//                 <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                 <p className="text-sm text-gray-500">{testimonial.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-primary py-12 md:py-16 border-b-1 border-second">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//             Experience Nature's Best
//           </h2>
//           <p className="text-lg md:text-xl text-green-50 mb-8">
//             Join thousands of satisfied customers who trust Bloom Forge Ventures for their natural shea butter needs.
//           </p>
//           <Link href={"/Products"}>


//           <Button  className="bg-second/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-lg cursor-pointer">
//             Shop Now
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

type Props = {}

const About = (props: Props) => {


  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // ensure plugin registered (if not registered inside your lib)
    if (typeof window !== "undefined" && gsap && ScrollTrigger) {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        // already registered — ignore
      }
    }

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>(".animate-fade-up");

      elements.forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 88%", // play when element hits 88% of viewport height
            toggleActions: "play none none none",
            // markers: true, // enable for debug
          },
        });
      });

      // a subtle continuous tiny scale/float for the banner (non-janky)
      gsap.to(".banner-float", {
        y: -6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6,
      });
    }, containerRef);

    return () => ctx && ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "Priscila",
      role: "Skincare Enthusiast",
      content: "I've tried many shea butter products, but Bloom Forge Ventures truly delivers on quality. The purity and richness of their shea butter has transformed my skincare routine. My skin has never felt so nourished and healthy!",
      rating: 5
    },
    {
      name: "Davida",
      role: "Natural Hair Advocate",
      content: "As someone who values natural products for my hair care, Bloom Forge Ventures has been a game-changer. Their unrefined shea butter keeps my hair moisturized and strong. Plus, knowing they support local communities makes me feel even better about my purchase.",
      rating: 5
    },
    {
      name: "Emily ",
      role: "Wellness Blogger",
      content: "What sets Bloom Forge Ventures apart is their commitment to authenticity and sustainability. You can feel the difference in their products. It's rare to find a company that genuinely cares about both quality and ethical sourcing.",
      rating: 5
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white/10 overflow-hidden">
        {/* Updated About and Mission */}
          <section className="bg-muted/80 relative py-12 md:py-24 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
              {/* Text Content - Asymmetric positioning */}
              <div className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8 animate-fade-up">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-second font-medium tracking-widest uppercase text-sm md:text-md">
                    Our Story
                  </p>
                  <h1 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground">
                    From Tree
                    <span className="block text-primary">to Treasure</span>
                  </h1>
                </div>
                  <p className="text-base md:text-lg text-muted-foreground max-w-prose">
                  Bloom Forge Ventures is a dedicated company specializing 
                  in the sourcing and distribution of raw and natural shea butter. 
                  Committed to quality and authenticity, Bloom Forge Ventures ensures that every product is pure, 
                  unrefined, and rich in the natural benefits of shea butter.
                 </p>
              </div>

  <div className="lg:col-span-7 lg:col-start-6 relative flex justify-center lg:justify-end animate-fade-up">
  <div className="relative w-full max-w-[420px] lg:max-w-[520px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
    <Image
      src="/white.jpeg"
      alt="Beautiful African savanna landscape with shea trees at golden hour"
      fill
      className="w-full h-full object-cover"
    />
      </div>
      </div>
        </div>
        </div>
        </section>

 {/* Mission Section */}
  <section className="bg-muted/40 relative py-12 md:py-24 lg:py-32 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
      {/* Image Left */}
      <div className="lg:col-span-7 lg:col-start-1 relative flex justify-center lg:justify-start order-2 lg:order-1 animate-fade-up">
        <div className="relative w-full max-w-[420px] lg:max-w-[520px] aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/yellow.jpeg"  
            alt="Shea butter product mockup with natural elements"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Right */}
      <div className="lg:col-span-5 lg:col-start-8 space-y-4 order-1 lg:order-2 animate-fade-up">
        <div className="space-y-3 md:space-y-4">
          <p className="text-second font-medium tracking-tight uppercase text-sm md:text-md">
            Our Mission
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-foreground">
            Purpose &amp;
            <span className="block text-primary">Production</span>
          </h1>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-prose">
        Our mission is to provide customers with premium shea butter that supports healthy skin and hair,
        while also empowering local communities involved in the shea butter production process. 
        At Bloom Forge Ventures, we believe in sustainability, ethical sourcing, 
        and delivering nature's best to our customers.
        </p>
      </div>

    </div>
  </div>
</section>

 {/* Banner Section */}
   <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] md:aspect-[16/6] lg:aspect-[16/5] banner-float animate-fade-up">
        <Image
          src="/banner 2.jpg"
          alt="Shea banner image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>


      
      {/* Values Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12 animate-fade-up">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-up subtle-zoom">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Quality & Authenticity</h3>
              <p className="text-sm md:text-base text-gray-600">We guarantee pure, unrefined shea butter rich in natural benefits for your skin and hair.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-up subtle-zoom">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-sm md:text-base text-gray-600">We practice ethical sourcing and are committed to environmental responsibility in all our operations.</p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-up subtle-zoom">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Community Empowerment</h3>
              <p className="text-sm md:text-base text-gray-600">We support and empower local communities involved in the shea butter production process.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-12 animate-fade-up">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow animate-fade-up subtle-zoom">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-12 md:py-16 border-b-1 border-second animate-fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience Nature's Best
          </h2>
          <p className="text-lg md:text-xl text-green-50 mb-8">
            Join thousands of satisfied customers who trust Bloom Forge Ventures for their natural shea butter needs.
          </p>
          <Link href={"/Products"}>
            <Button  className="bg-second/80 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-lg cursor-pointer subtle-zoom">
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
