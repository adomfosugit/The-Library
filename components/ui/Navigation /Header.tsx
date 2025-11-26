'use client'

import React from 'react'
import { SignInButton, UserButton, useUser, ClerkLoaded } from '@clerk/nextjs'
import Link from 'next/link'
import Form from 'next/form'
import { PackageOpen, ShoppingCart } from 'lucide-react'
import { Button } from '../button'
import { Search } from 'lucide-react';
import Image from 'next/image'
import Cart from '@/components/Cart/Cart'


const Header = () => {
  const { user } = useUser()

  return (
<header className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-4 py-3 border-b bg-white shadow-sm">

      
      {/* Logo */}
      <Link
  href="/"
  className="group flex items-center gap-2 text-2xl font-bold text-green-400 hover:text-green-300 transition-all duration-300 cursor-pointer"
>
  <svg 
    className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path d="M12 2L12 12M12 12L17 7M12 12L7 7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12C12 12 8 14 8 18C8 20.2091 9.79086 22 12 22C14.2091 22 16 20.2091 16 18C16 14 12 12 12 12Z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
    Bloomforge
  </span>
</Link>

      {/* Search */}
      <Form
        action="/search"
        className="w-full sm:w-auto sm:flex-1 sm:mx-6 mt-3 sm:mt-0"
      >
        <div className="flex">
          <input
            name="query"
            placeholder="Search for Products"
            type="text"
            className="flex-1 bg-gray-100 px-4 py-2 rounded-l-md border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-400 text-white rounded-r-md hover:bg-green-400"
          >
            <Search />
          </button>
        </div>
      </Form>
      {/* Category Filters*/}


      {/* Right Actions */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        
        {/* Cart */}
     <Cart />

        {/* Orders + Auth */}
        <ClerkLoaded>
          {user && (
            <Link
              href="/orders"
              className="flex items-center space-x-2 bg-green-400 text-white 
                         font-medium py-2 px-4 rounded hover:bg-green-400"
            >
              <PackageOpen size={20} />
              <span>Orders</span>
            </Link>
          )}

          {user ? (
           <div className="flex items-center space-x-2">
           <UserButton />
           <p className="block sm:hidden">{user.firstName}</p>
         </div>
          ) : (
            <Button className="bg-green-400 hover:bg-green-400 px-4 py-2 rounded text-white">
              <SignInButton mode="modal" />
            </Button>
          )}
        </ClerkLoaded>

      </div>
    </header>
  )
}

export default Header
