import { Image } from 'sanity'

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  fullDescription?: any[]
  image?: Image
  year?: string
  semester?: number
  category?: string
  tags?: string[]
  externalLink?: string
  partner?: Partner
  students?: Array<{ name: string; role: string }>
  outcomes?: string[]
  featured?: boolean
  publishedAt?: string
}

export interface Partner {
  _id: string
  name: string
  slug: { current: string }
  description: string
  logo?: Image
  website?: string
  category?: string
  partnershipType?: string[]
  joinedYear?: number
  successStory?: {
    title: string
    description: string
    impact: string
  }
  featured?: boolean
}

export interface Testimonial {
  _id: string
  quote: string
  name: string
  role: string
  organization?: string
  image?: Image
  category?: string
  featured?: boolean
  order?: number
}

export interface Homepage {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroCTA1Text: string
  heroCTA1Link: string
  heroCTA2Text: string
  heroCTA2Link: string
  differenceTitle: string
  differenceDescription: string
  differencePoints: Array<{
    title: string
    description: string
  }>
  stats: Array<{
    number: string
    label: string
    color: 'primary' | 'secondary' | 'accent'
  }>
  projectsSectionTitle: string
  projectsSectionDescription: string
  partnershipCTA1Title: string
  partnershipCTA1Description: string
  partnershipCTA2Title: string
  partnershipCTA2Description: string
  testimonialsSectionTitle: string
  testimonialsSectionDescription: string
}

export interface FAQ {
  _id: string
  question: string
  answer: string
  category?: string
  order?: number
}

export interface ImpactPage {
  title: string
  content: any[]
  impactCards: Array<{
    title: string
    description: string
    icon: string
    color: 'primary' | 'secondary' | 'accent'
  }>
  ctaText: string
}


export interface TeamMember {
  _id: string
  name: string
  role: string
  department?: string
  bio?: string
  image?: Image
  email?: string
  linkedin?: string
  order?: number
}

export interface SiteSettings {
  title: string
  description?: string
  keywords?: string[]
  logo?: Image
  contactEmail?: string
  contactPhone?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  socialMedia?: {
    facebook?: string
    twitter?: string
    linkedin?: string
    instagram?: string
    youtube?: string
  }
  footerText?: string
}

export interface Timeline {
  _id: string
  semester: number
  name: string
  challenge: string
  topic: string
  length: string
  months: string[]
  phases: Array<{
    title: string
    color: string
    items: string[]
  }>
}

export interface PageContent {
  page: string
  title: string
  subtitle?: string
  heroDescription?: string
  sections?: Array<{
    title: string
    content: any[]
    image?: Image
    backgroundColor?: string
  }>
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
}