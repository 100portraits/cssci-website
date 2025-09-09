import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
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
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: [
          { title: 'Year 1', value: 'Year 1' },
          { title: 'Year 2', value: 'Year 2' },
          { title: 'Year 3', value: 'Year 3' },
          { title: 'Capstone', value: 'Capstone' },
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Climate Change', value: 'Climate Change' },
          { title: 'Digital Inclusion', value: 'Digital Inclusion' },
          { title: 'Social Innovation', value: 'Social Innovation' },
          { title: 'Digital Innovation', value: 'Digital Innovation' },
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage',
      type: 'boolean',
      initialValue: false,
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
      media: 'image',
      year: 'year',
    },
    prepare(selection) {
      const { title, year } = selection
      return {
        ...selection,
        subtitle: year,
      }
    },
  },
})