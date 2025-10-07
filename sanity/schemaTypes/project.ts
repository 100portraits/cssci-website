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
      name: 'hasDetailPage',
      title: 'Create Project Detail Page?',
      type: 'boolean',
      description: 'Enable this to create a detailed project page with additional content',
      initialValue: false,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      hidden: ({ document }) => !document?.hasDetailPage,
      validation: (Rule) =>
        Rule.custom((slug, { document }) => {
          if (document?.hasDetailPage && !slug?.current) {
            return 'Slug is required when detail page is enabled'
          }
          return true
        }),
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
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
    }),
    defineField({
      name: 'studentNames',
      title: 'Student Names',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names of students who worked on this project',
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
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
      name: 'semester',
      title: 'Semester',
      type: 'string',
      options: {
        list: [
          { title: 'Infographic', value: 'Infographic' },
          { title: 'Prototype for Change', value: 'Prototype for Change' },
          { title: 'System Change / Data Analysis', value: 'System Change / Data Analysis' },
          { title: 'Graduation Project', value: 'Graduation Project' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      name: 'externalLinks',
      title: 'External Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Optional label for the link (e.g., "GitHub", "Live Demo")',
            },
          ],
          preview: {
            select: {
              url: 'url',
              label: 'label',
            },
            prepare({ url, label }) {
              return {
                title: label || url,
                subtitle: url,
              }
            },
          },
        },
      ],
      description: 'External links to project demos, repositories, or related content',
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
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
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
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
    }),
    defineField({
      name: 'detailImage2',
      title: 'Detail Image 2',
      type: 'image',
      description: 'Second image for the detailed project page',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
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
      hidden: ({ document }) => !document?.hasDetailPage,
      readOnly: ({ document }) => !document?.hasDetailPage,
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
      semester: 'semester',
    },
    prepare(selection) {
      const { title, semester } = selection
      return {
        ...selection,
        subtitle: semester,
      }
    },
  },
})