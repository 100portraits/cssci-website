import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'becomePartnerPage',
  title: 'Become a Partner Page',
  type: 'document',
  fields: [
    defineField({
      name: 'masterChallengeEmbedUrl',
      title: 'MasterChallenge Embed URL',
      type: 'url',
      description:
        'Full iframe src from MasterChallenge (Embed → space_details). Leave empty to hide the embed.',
    }),
    defineField({
      name: 'masterChallengeEmbedHeight',
      title: 'Embed Height (px)',
      type: 'number',
      initialValue: 1500,
      validation: (Rule) => Rule.min(400).max(4000),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Become a Partner Page',
      }
    },
  },
})
