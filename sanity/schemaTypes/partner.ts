import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Organization Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Government', value: 'Government' },
          { title: 'Non-Profit', value: 'Non-Profit' },
          { title: 'Technology', value: 'Technology' },
          { title: 'Consulting', value: 'Consulting' },
          { title: 'Finance', value: 'Finance' },
          { title: 'Environmental', value: 'Environmental' },
          { title: 'Education', value: 'Education' },
        ],
      },
    }),
    defineField({
      name: 'successStory',
      title: 'Success Story (optional)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Story Title', type: 'string' },
        { name: 'description', title: 'Story Description', type: 'text', rows: 4 },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'logo',
    },
  },
})