export default {
  name: 'Blog',
  type: 'document',
  title: 'Blog',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'discription',
      type: 'string',
      title: 'Discription',
    },

    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Date',
    },
    {
      title: 'Blog Discription',
      name: 'BlogDiscription',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
