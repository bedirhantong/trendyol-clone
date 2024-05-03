import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
const NavbarBottom = () => {
  return (
    <div className='px-20 py-5 shadow-sm flex justify-start gap-10 text-sm'>
        <HoverCard>
                <HoverCardTrigger>
                    <h2 className='flex gap-1 items-center text-sm hover:text-orange-500'>
                        Kadın
                    </h2>
                </HoverCardTrigger>
                <HoverCardContent className='w-auto flex flex-col gap-2'>
                    <a href="*">Giyim</a>
                    <a href="*">Ayakkabı</a>
                    <a href="*">Çanta</a>
                    <a href="*">Kozmetik</a>
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

    </div>
  )
}

export default NavbarBottom