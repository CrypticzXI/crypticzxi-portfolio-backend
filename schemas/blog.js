export default {
    name: 'blog',
    title: 'Blog Posts',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image, 500x500 Recommended',
        type: 'image',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 100,
        },
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
        title: "Owning User",
        type: "user"
      },
      {
        name: 'post',
        title: 'Post',
        type: 'richText',
      },
      {
        name: 'file',
        title: 'File Attachment',
        type: 'file'
      },
      {
        name: 'portfolio',
        title: 'Portfolio Artwork Attachment',
        type: 'portfolioref'
      },
      {
        name: "images",
        title: "Images",
        type: 'array',
        of: [{ type: 'image' }],
      }
    ],
  }