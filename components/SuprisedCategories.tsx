import { MostCategory } from '@/types'
import React from 'react'

interface SuprisedCategoriesProps{
  suprisedCategoryList : MostCategory[];
}

const SuprisedCategories = ({suprisedCategoryList}:SuprisedCategoriesProps) => {
  return (
    <div className="flex flex-row gap-0 justify-between py-3">
        {suprisedCategoryList.map((suprisedCategory,index)=>(
              <img key={index} src={
                process.env.NEXT_PUBLIC_BASE_URL+
                suprisedCategory?.attributes?.url.data.attributes.url
              }
              alt="Photo by Drew Beamer"
              className="rounded-md object-cover h-14"/>
            ))}
    </div>
    
  )
}

export default SuprisedCategories