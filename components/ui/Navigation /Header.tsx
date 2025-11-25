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
        className="text-2xl font-bold text-sky-600 hover:opacity-80 cursor-pointer justify-center"
      >
        Bloomforge
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
                       focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-sky-600 text-white rounded-r-md hover:bg-sky-700"
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
              className="flex items-center space-x-2 bg-sky-600 text-white 
                         font-medium py-2 px-4 rounded hover:bg-sky-700"
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
            <Button className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded text-white">
              <SignInButton mode="modal" />
            </Button>
          )}
        </ClerkLoaded>

      </div>
    </header>
  )
}

export default Header
