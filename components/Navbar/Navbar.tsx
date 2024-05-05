import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <div className=' px-20 shadow-sm flex justify-center items-center gap-10'>
        <Image
                alt='logo'  
                src="/logo.png"
                width="130"
                height="90"
                className='cursor-pointer' 
                />
            <div className='md:flex h-10 bg-[#F3F3F3] w-1/2 hidden gap-2 items-center border rounded-md px-5'>
                    <input 
                    type='search'
                        className='outline-none w-full bg-[#F3F3F3] font-light'
                        placeholder='Aradığınız ürün,kategori veya markayı yazınız'                    
                        />
                    <Search className='h-5 w-5 text-orange-500 '/>
            </div>
        <div className='md:flex gap-10 items-center cursor-pointer'>
            
            <HoverCard>
                <HoverCardTrigger>
                    <h2 className='flex gap-1 items-center text-xs font-medium  hover:text-orange-500 '>
                        <User className='h-4 w-4 '/>
                        Giriş Yap
                    </h2></HoverCardTrigger>
                <HoverCardContent className='flex flex-col gap-2'>
                    <Button className='bg-orange-500 hover:bg-orange-500 '>Giriş Yap</Button>
                    <Button  variant="outline" className=''>Üye Ol</Button>
                </HoverCardContent>
            </HoverCard>
            <h2 className='flex gap-1 items-center hover:text-orange-500 font-medium text-xs'>
                <Heart className='h-4 w-4 '/>
                Favorilerim
            </h2>
            <h2 className='flex gap-1 items-center  text-xs font-medium hover:text-orange-500'>
                <ShoppingCart className='h-4 w-4 '/>
                Sepetim
                <span className='bg-orange-600 text-white px-2 rounded-full'>2</span>
            </h2>
        </div>
    </div>
  )
}

export default Navbar