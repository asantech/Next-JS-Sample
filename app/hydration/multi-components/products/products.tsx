'use client'

import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "./products.utils"

export default function Products() {

  const { data: hydratedData } = useQuery({ queryKey: ['hydrated-products'], queryFn: getProducts })
  return (
    <div className='flex flex-wrap'>
      {hydratedData.map((d: any ) => <Image key={d?.id} src={d?.image} alt='Product' width={100} height={100}/> )}
    </div>
  )
}