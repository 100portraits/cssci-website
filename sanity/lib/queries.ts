import { groq } from 'next-sanity'

// Homepage
export const HOMEPAGE_QUERY = groq`*[_type == "homepage"][0]{
  heroTitle,
  heroSubtitle,
  heroDescription
}`

// Featured projects for homepage
export const FEATURED_PROJECTS_QUERY = groq`*[_type == "project" && featured == true] | order(order asc, _createdAt desc) [0...3]{
  _id,
  title,
  description,
  image,
  year,
  category,
  tags
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
  sections
}`

// All projects
export const PROJECTS_QUERY = groq`*[_type == "project"] | order(order asc, _createdAt desc){
  _id,
  title,
  description,
  image,
  year,
  category,
  tags
}`

// All partners
export const PARTNERS_QUERY = groq`*[_type == "partner"] | order(order asc, name asc){
  _id,
  name,
  description,
  logo,
  website,
  category,
  successStory
}`

// All resources
export const RESOURCES_QUERY = groq`*[_type == "resource"] | order(order asc, _createdAt desc){
  _id,
  title,
  description,
  category,
  url,
  file
}`

// All FAQs
export const FAQS_QUERY = groq`*[_type == "faq"] | order(order asc, _createdAt desc){
  _id,
  question,
  answer
}`