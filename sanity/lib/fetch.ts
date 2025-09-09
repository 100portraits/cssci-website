import { client } from './client'
import { QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers'
import { cache } from 'react'

/**
 * Used to fetch data in Server Components, it has built in support for Draft Mode and Caching.
 * 
 * For App Router usage, we wrap the client.fetch in React cache() for request deduplication
 */
export const sanityFetch = cache(async <QueryResponse>(
  query: string,
  params: QueryParams = {},
  tags: string[] = []
) => {
  const isDraftMode = (await draftMode()).isEnabled

  // If draft mode is enabled, we'll fetch unpublished content
  if (isDraftMode) {
    return client.fetch<QueryResponse>(query, params, {
      perspective: 'previewDrafts',
      // Disable cache in draft mode
      cache: 'no-store',
      next: { tags }
    })
  }

  // In production, use CDN and cache aggressively
  return client.fetch<QueryResponse>(query, params, {
    perspective: 'published',
    // Cache for 60 seconds, then revalidate
    next: { 
      revalidate: 60,
      tags 
    }
  })
})