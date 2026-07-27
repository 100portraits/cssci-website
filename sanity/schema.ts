import { type SchemaTypeDefinition } from 'sanity'

import homepage from './schemaTypes/homepage'
import project from './schemaTypes/project'
import partner from './schemaTypes/partner'
import testimonial from './schemaTypes/testimonial'
import aboutPage from './schemaTypes/aboutPage'
import impactPage from './schemaTypes/impactPage'
import becomePartnerPage from './schemaTypes/becomePartnerPage'
import faq from './schemaTypes/faq'
import footer from './schemaTypes/footer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    aboutPage,
    impactPage,
    becomePartnerPage,
    project,
    partner,
    testimonial,
    faq,
    footer,
  ],
}