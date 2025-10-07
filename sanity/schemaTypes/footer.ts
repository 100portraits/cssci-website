import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'brandText',
      title: 'Brand Text',
      type: 'text',
      rows: 2,
      initialValue: 'Computational Social Science at the University of Amsterdam',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'addressLine1',
      title: 'Address Line 1',
      type: 'string',
      initialValue: 'University of Amsterdam',
    }),
    defineField({
      name: 'addressLine2',
      title: 'Address Line 2',
      type: 'string',
      initialValue: 'Valckenierstraat 65-67',
    }),
    defineField({
      name: 'addressLine3',
      title: 'Address Line 3',
      type: 'string',
      initialValue: '1018 XE Amsterdam',
    }),
    defineField({
      name: 'programLinks',
      title: 'Program Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: 'partnershipLinks',
      title: 'Partnership Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Link Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Content',
      }
    },
  },
})
