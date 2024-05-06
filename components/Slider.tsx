import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Slider } from '@/types';
import { Avatar, AvatarImage } from "@/components/ui/avatar"

  interface SliderProps{
    sliderList:Slider[];
  }


const Sliders = ({sliderList}:SliderProps) => {


  return (
    <Carousel >
        <CarouselContent className=''>
            {sliderList.map((slider,index)=>(
              <CarouselItem key={index} className="md:basis-28 lg:basis-1/8 items-center flex flex-col">
              <Avatar className='h-16 w-16 hover:border-orange-500 border-2 rounded-full'>
                <AvatarImage 
                  src={
                    process.env.NEXT_PUBLIC_BASE_URL+
                    slider?.attributes?.url.data.attributes.url
                } />
              </Avatar>
              <h1 className='text-xs font-semibold'>{slider?.attributes?.name}</h1>
            </CarouselItem>
            ))}
        </CarouselContent >
        <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
  )
}

export default Sliders