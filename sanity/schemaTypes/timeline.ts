import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'timeline',
  title: 'Project Timeline',
  type: 'document',
  fields: [
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: 'name',
      title: 'Semester Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge Type',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'length',
      title: 'Project Length',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'months',
      title: 'Months',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'phases',
      title: 'Timeline Phases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Phase Title', type: 'string' },
            { name: 'color', title: 'Color', type: 'string', options: {
              list: [
                { title: 'Primary', value: 'primary' },
                { title: 'Secondary', value: 'secondary' },
                { title: 'Accent', value: 'accent' },
              ],
            }},
            { name: 'items', title: 'Phase Items', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'challenge',
    },
  },
})