'use client'
import React, { useState } from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { LayoutGrid } from 'lucide-react'
import { useCategoriesStore } from '@/hooks/useCategoriesStore'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import Image from 'next/image'
  




const NavbarBottom = () => {
    const {categories,fetchCategories} = useCategoriesStore((state)=> ({
        categories: state.categories,
        fetchCategories : state.fetchCategories,
    }))

    const [fetched,setFetched] = useState(false);
    if(!fetched){
        fetchCategories();
        setFetched(true);
    }
  return (
    <div className='px-20 py-5 shadow-sm flex justify-center gap-10 text-sm md:border-b-2 md:border-t-0
    font-medium cursor-pointer'>
        <HoverCard>
                <HoverCardTrigger>
                    <h2 className='flex gap-1 items-center text-sm hover:text-orange-500 hover:underline'>
                        Kadın
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent className='w-auto flex flex-row gap-20 '>
                    <div className='w-auto flex flex-col gap-2'>
                        <a href="*" className='font-bold'>Ayakkabı</a>
                        <a href="*" className='font-normal'>Çanta</a>
                        <a href="*" className='font-normal'>Kozmetik</a>
                    </div>
                    <div className='w-auto flex flex-col gap-2'>
                        <a href="*" className='font-bold'>Ayakkabı</a>
                        <a href="*" className='font-normal'>Çanta</a>
                        <a href="*" className='font-normal'>Kozmetik</a>
                    </div>
                </HoverCardContent>
        </HoverCard>
        <HoverCard>
                <HoverCardTrigger>
                    <h2 className='flex gap-1 items-center text-sm hover:text-orange-500'>
                        Erkek
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent className='w-auto flex flex-col gap-2'>
                    <a href="*">Giyim</a>
                    <a href="*">Ayakkabı</a>
                    <a href="*">Çanta</a>
                    <a href="*">Kişisel Bakım</a>
                </HoverCardContent>
        </HoverCard>

        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <h2 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 border-white cursor-pointer'>
                    <LayoutGrid className='h-5 w-5' /> Category
                </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                {categories.map((category,index)=>(
                    <Link key={index} href={'/product-category/'+category.name}>
                        <DropdownMenuItem className='flex gap-3 items-center cursor-pointer'>
                            <Image
                            alt='icon'
                            width={30}
                            height={30}
                            unoptimized={true}
                            src={
                                process.env.NEXT_PUBLIC_BASE_URL+
                                category?.icon?.data.attributes.formats.small.url
                            } 
                            />
                            <h2> 
                                {category?.name}
                            </h2>
                        </DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>


        

    </div>
  )
}

export default NavbarBottom