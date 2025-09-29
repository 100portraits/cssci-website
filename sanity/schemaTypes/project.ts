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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewDescription',
      title: 'Preview Description',
      type: 'text',
      rows: 3,
      description: 'Short description shown in project cards and listings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle for the detailed project page',
    }),
    defineField({
      name: 'studentNames',
      title: 'Student Names',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names of students who worked on this project',
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
      description: 'e.g. Fall 2023, Spring 2024',
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
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Optional external link to project demo, repository, or related content',
    }),
    defineField({
      name: 'connectedPartner',
      title: 'Connected Partner',
      type: 'reference',
      to: [{ type: 'partner' }],
      description: 'Optional partner organization associated with this project',
    }),
    defineField({
      name: 'detailImage1',
      title: 'Detail Image 1',
      type: 'image',
      description: 'First image for the detailed project page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'detailParagraph1',
      title: 'Detail Paragraph 1',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'First detailed paragraph with rich text formatting',
    }),
    defineField({
      name: 'detailImage2',
      title: 'Detail Image 2',
      type: 'image',
      description: 'Second image for the detailed project page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'detailParagraph2',
      title: 'Detail Paragraph 2',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Second detailed paragraph with rich text formatting',
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