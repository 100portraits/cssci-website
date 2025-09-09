import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resources',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Quick Link', value: 'quick-link' },
          { title: 'Article', value: 'article' },
          { title: 'Academic', value: 'academic' },
          { title: 'Technical', value: 'technical' },
          { title: 'Career', value: 'career' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link URL',
      type: 'url',
    }),
    defineField({
      name: 'file',
      title: 'Or Upload File',
      type: 'file',
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
      title: 'title',
      subtitle: 'category',
    },
  },
})