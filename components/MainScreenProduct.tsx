import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
  
export const MainScreenProduct = () => {
  return (
    <div className='flex flex-row gap-4 justify-between py-3'>
        <Card className=''>
            <CardHeader>
                <CardTitle className='flex justify-center'>
                    <img src="https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg" alt=""width="130"
                    height="90"
                    className='cursor-pointer' />
                    
                </CardTitle>
                <CardDescription className='text-left'>
                    Macbook Pro
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-ellipsis overflow-hidden text-balance '>Macbook Air M1 Çip 8gb 256gb Ssd Macos 13" Qhd Taşınabilir Bilgisayar Uzay Grisi</p>
            </CardContent>
            <CardFooter>
                <p>25.999</p>
            </CardFooter>
        </Card>
        <Card className=''>
            <CardHeader>
                <CardTitle className='flex justify-center'>
                    <img src="https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg" alt=""width="130"
                    height="90"
                    className='cursor-pointer' />
                    
                </CardTitle>
                <CardDescription className='text-left'>
                    Macbook Pro
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-ellipsis overflow-hidden text-balance '>Macbook Air M1 Çip 8gb 256gb Ssd Macos 13" Qhd Taşınabilir Bilgisayar Uzay Grisi</p>
            </CardContent>
            <CardFooter>
                <p>25.999</p>
            </CardFooter>
        </Card>
        <Card className=''>
            <CardHeader>
                <CardTitle className='flex justify-center'>
                    <img src="https://cdn.dsmcdn.com/ty1018/product/media/images/prod/SPM/PIM/20231019/13/899e8cb7-16a0-3617-bae0-555eacd2e713/1_org_zoom.jpg" alt=""width="130"
                    height="90"
                    className='cursor-pointer' />
                    
                </CardTitle>
                <CardDescription className='text-left'>
                    Macbook Pro
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='text-ellipsis overflow-hidden text-balance '>Macbook Air M1 Çip 8gb 256gb Ssd Macos 13" Qhd Taşınabilir Bilgisayar Uzay Grisi</p>
            </CardContent>
            <CardFooter>
                <p>25.999</p>
            </CardFooter>
        </Card>
    </div>

  )
}
