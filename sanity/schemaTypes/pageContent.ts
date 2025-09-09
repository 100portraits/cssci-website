import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'About', value: 'about' },
          { title: 'Become a Partner', value: 'become-partner' },
          { title: 'Partners', value: 'partners' },
          { title: 'Projects', value: 'projects' },
          { title: 'Resources', value: 'resources' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'section',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'backgroundColor', title: 'Background Color', type: 'string', options: {
              list: [
                { title: 'White', value: 'white' },
                { title: 'Light Gray', value: 'muted' },
                { title: 'Primary Light', value: 'primary-light' },
                { title: 'Secondary Light', value: 'secondary-light' },
              ],
            }},
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text' },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'page',
    },
  },
})