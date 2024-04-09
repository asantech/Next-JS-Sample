import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import Posts from './posts/posts'
import Products from './products/products'
import { getPosts } from './posts/posts.utils';
import { getProducts } from './products/products.utils';

export default async function HydrationMultiComponentsPage() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['hydrated-posts'],
    queryFn: getPosts,
  })

  await queryClient.prefetchQuery({
    queryKey: ['hydrated-products'],
    queryFn: getProducts,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products/>
      <Posts/>
    </HydrationBoundary>
  )
}