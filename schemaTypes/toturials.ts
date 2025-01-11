export default {
    name: 'Toturials',
    type: 'document',
    title: 'toturials',
  
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
          name: 'views',
          type: 'string',
          title: 'Views',
        },
        {
          name: 'comments',
          type: 'number',
          title: 'Comments',
        },
        {
          name: "image",
          title: "image",
          type: "image",
          options: {
            hotspot: true, // Enable image cropping
          },
        },
    ],
  }
  