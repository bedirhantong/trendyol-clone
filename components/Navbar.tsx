import { Heart, LayoutGrid, Link, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { Button } from './ui/button'
const Navbar = () => {
  return (
    <div className='px-20 py-5 shadow-sm flex justify-between'>
        <div className='flex items-center gap-6'>
            <Image
                alt='logo'
                src="/logo.png"
                width="130"
                height="90"
                className='cursor-pointer' 
                />
        </div>
            <div className='md:flex w-1/2 hidden gap-2 items-center border rounded-full p-2 px-5'>
                    <input 
                    type='search'
                        className='outline-none w-full '
                        placeholder='Aradığınız ürün,kategori veya markayı'                    
                        />
                    <Search className='h-5 w-5 hover:text-orange-500 '/>
            </div>
        <div className='md:flex gap-4 items-center cursor-pointer'>
            
            <HoverCard>
                <HoverCardTrigger><h2 className='flex gap-1 items-center text-sm hover:text-orange-500'>
                    <User className='h-5 w-5 '/>
                    Giriş Yap
                </h2></HoverCardTrigger>
                <HoverCardContent className='w-auto flex flex-col gap-2'>
                    <Button className='bg-orange-500 hover:bg-orange-500 '>Login</Button>
                    <Button className='bg-orange-500 hover:bg-orange-500 '>Signup</Button>
                </HoverCardContent>
            </HoverCard>
            <h2 className='flex gap-1 items-center hover:text-orange-500 text-sm'>
                <Heart className='h-5 w-5 '/>
                Favorilerim
            </h2>
            <h2 className='flex gap-1 items-center  text-sm hover:text-orange-500'>
                <ShoppingCart className='h-5 w-5 '/>
                Sepetim
                <span className='bg-orange-600 text-white px-2 rounded-full'>2</span>
            </h2>
        </div>
    </div>
  )
}

export default Navbar