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
        name: 'tagslug',
        title: 'Tag Slug Used (Sanity is being gay and I really CBA)',
        type: 'slug',
      },
      {
        name: 'tags',
        title: 'Tag',
        type: 'tagref',
      },
      {
        name: 'date',
        title: "Publish Date (Schedule's Blog Post!)",
        type: "datetime",
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
          }
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