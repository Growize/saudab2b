export default {
  name: 'product',
  title: 'Abaya Products',
  type: 'document',
  fields: [
    { name: 'name', title: 'Product Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'images', title: 'Product Images', type: 'array', of: [{ type: 'image' }] },
    { name: 'description', title: 'Description', type: 'text' },
    
    // --- DESIGN HIGHLIGHTS SECTION ---
    {
      name: 'highlights',
      title: 'Design Highlights',
      type: 'array',
      description: 'Add the 4 main highlights (e.g., Exquisite Artistry: Heavy embroidery)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Highlight Title', type: 'string' },
            { name: 'detail', title: 'Highlight Detail', type: 'string' }
          ]
        }
      ]
    },

    // --- SPECIFICATION TABLE SECTION ---
    { name: 'color', title: 'Color (e.g. Deep Mauve)', type: 'string' },
    { name: 'material', title: 'Material (e.g. Korean Nida)', type: 'string' },
    { name: 'embroidery', title: 'Embroidery Type', type: 'string' },
    { name: 'included', title: 'Included Items', type: 'string' },
  ],
}