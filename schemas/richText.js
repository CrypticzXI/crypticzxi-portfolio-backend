export default {
  name: 'richText',
  title: 'richText',
  type: 'array',
  of: [
    {
      type: 'block'
    },
    {
      type: 'image',
      fields: [
        {
          type: 'text',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
          options: {
            isHighlighted: true
          }
        },
      ]
    },
    {
      type: 'object',
      name: 'rawHTML',
      fields: [
        {
          type: 'text',
          name: 'html',
          title: 'HTML',
          description: 'Enter raw HTML code',
          validation: Rule => Rule.required(),
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      type: 'object',
      name: 'fileUpload',
      title: 'File Upload',
      fields: [
        {
          type: 'file',
          name: 'file',
          title: 'File',
          description: 'Upload a file',
          validation: Rule => Rule.required(),
          options: {
            isHighlighted: true
          }
        }
      ]
    }
  ]
};