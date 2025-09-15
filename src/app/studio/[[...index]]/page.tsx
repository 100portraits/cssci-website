/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under `/studio` are handled by this file using Next.js's catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { Studio } from './Studio'

// Studio needs to be dynamic for authentication and real-time updates
export const dynamic = 'force-dynamic'

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <Studio />
}