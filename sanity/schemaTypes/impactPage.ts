import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Real Impact: Measurable Change Through CSSci',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Main Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
      ],
    }),
    defineField({
      name: 'impactCards',
      title: 'Impact Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Card Description', type: 'text', rows: 3 },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Name of the icon to display' },
            { name: 'color', title: 'Color Scheme', type: 'string', options: {
              list: [
                { title: 'Primary', value: 'primary' },
                { title: 'Secondary', value: 'secondary' },
                { title: 'Accent', value: 'accent' }
              ]
            }},
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'text',
      rows: 2,
      initialValue: 'Ready to create meaningful impact together?',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Impact Page Content',
      }
    },
  },
})