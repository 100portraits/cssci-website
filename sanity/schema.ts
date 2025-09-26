import { type SchemaTypeDefinition } from 'sanity'

import homepage from './schemaTypes/homepage'
import project from './schemaTypes/project'
import partner from './schemaTypes/partner'
import testimonial from './schemaTypes/testimonial'
import aboutPage from './schemaTypes/aboutPage'
import impactPage from './schemaTypes/impactPage'
import faq from './schemaTypes/faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    aboutPage,
    impactPage,
    project,
    partner,
    testimonial,
    faq,
  ],
}