'use client'

import { useQuery } from "@tanstack/react-query"
import { getPosts } from "./posts.utils"
 
export default function Posts() {

  const { data: hydratedData } = useQuery({ queryKey: ['hydrated-posts'], queryFn: getPosts })

  return (
    <div>
      {hydratedData.results.map(({name}: any)=> <div key={name}>{name}</div>)}
    </div>
  )
}