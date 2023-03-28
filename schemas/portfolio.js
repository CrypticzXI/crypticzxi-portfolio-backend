export default {
    name: 'portfolio',
    type: 'document',
    title: 'Portfolio Artwork',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'richText',
        title: 'Description'
      },
      {
        name: 'owninguser',
        title: 'Owning User',
        type: 'user',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 20,
        },
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'imageupload',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'imageupload' }],
      },
      {
        name: 'file',
        title: 'File Upload',
        type: 'fileupload',
      },

    ],
    preview: {
      select: {
        title: 'title',
        media: 'thumbnail.image',
      },
    },
  }