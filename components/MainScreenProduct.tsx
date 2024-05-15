import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { MainScreenProduct } from '@/types';

interface MainScreenProductProps {
    mainScreenProductList : MainScreenProduct[];
}
export const MainScreenProductList = ({mainScreenProductList}:MainScreenProductProps) => {
  return (
    <Carousel className='pb-10'>
        <CarouselContent className='px-2'>
            {mainScreenProductList.map((mainScreenProduct,index)=>(
              <CarouselItem key={index} className="md:basis-48 lg:basis-1/5 items-center flex flex-col ">
                <Card className='hover:border-orange-500'>
                    <CardHeader>
                        <CardTitle className='flex justify-center'>
                        <img key={index} 
                            src={
                                process.env.NEXT_PUBLIC_BASE_URL+
                                mainScreenProduct?.attributes?.url.data[0].attributes.url
                            }
                            alt=""width="130"
                            height="90"
                            className='cursor-pointer' />
                        </CardTitle>
                            <CardDescription className='text-left'>
                                {mainScreenProduct.attributes?.name}
                            </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='line-clamp-4'>{mainScreenProduct.attributes?.description}</p>
                    </CardContent>
                    <CardFooter>
                     <p className='text-orange-500'>{mainScreenProduct.attributes?.price} TL</p>
                    </CardFooter>
                </Card>
            </CarouselItem>
            ))}
        </CarouselContent >
        <CarouselPrevious/>
        <CarouselNext />
    </Carousel>

  )
}
