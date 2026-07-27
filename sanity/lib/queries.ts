import { groq } from 'next-sanity'

// Homepage
export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  heroSubtitle,
  heroDescription,
  carouselImages[]{
    image,
    alt,
    caption
  }
}`

// Featured projects for homepage
export const FEATURED_PROJECTS_QUERY = groq`*[_type == "project" && featured == true] | order(order asc, _createdAt desc) [0...3]{
  _id,
  title,
  previewDescription,
  slug,
  hasDetailPage,
  image,
  semester,
  tags,
  externalLink,
  order,
  connectedPartner->{
    name,
    category,
    slug
  }
}`

// Featured testimonials for homepage
export const FEATURED_TESTIMONIALS_QUERY = groq`*[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc) [0...3]{
  _id,
  quote,
  name,
  role,
  organization,
  image
}`

// About page
export const ABOUT_PAGE_QUERY = groq`*[_type == "aboutPage"][0]{
  title,
  content,
  heroImage,
  sections
}`

// Impact page
export const IMPACT_PAGE_QUERY = groq`*[_type == "impactPage"][0]{
  title,
  content,
  heroImage,
  impactCards,
  ctaText
}`

// Become a Partner page
export const BECOME_PARTNER_PAGE_QUERY = groq`*[_type == "becomePartnerPage"][0]{
  masterChallengeEmbedUrl,
  masterChallengeEmbedHeight
}`

// All projects
export const PROJECTS_QUERY = groq`*[_type == "project"] | order(order asc, _createdAt desc){
  _id,
  title,
  previewDescription,
  slug,
  hasDetailPage,
  image,
  semester,
  tags,
  externalLink,
  order,
  connectedPartner->{
    name,
    category,
    slug
  }
}`

// All partners
export const PARTNERS_QUERY = groq`*[_type == "partner"] | order(order asc, name asc){
  _id,
  name,
  slug,
  description,
  logo,
  website,
  category
}`


// All FAQs
export const FAQS_QUERY = groq`*[_type == "faq"] | order(order asc, _createdAt desc){
  _id,
  question,
  answer
}`

// Footer
export const FOOTER_QUERY = groq`*[_type == "footer"][0]{
  brandText,
  contactEmail,
  addressLine1,
  addressLine2,
  addressLine3,
  programLinks,
  partnershipLinks
}`