const sweetsSchema={
    name: 'sweet',
    type: 'document',
    title: 'Sweet',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Sweet Name',
      },
      {
        name: 'id',
        type: 'number',
        title: 'ID',
      },
      {
        name: 'quantity',
        type: 'number',
        title :'Quantity',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., gulab jamun halwa, talakand, etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Current Price',
      },
     
      {
        name: 'tag',
        type: 'string', 
        title: 'Tag',
        options: {
          list: ['Best Seller', 'Popular', 'New', 'Hot Selling', 'most favourite','trending', 'special favourite','premium'], 
        },
        validation: (Rule: import('@sanity/types').Rule) => Rule.custom((tag: string | undefined) => {
            if (typeof tag === 'string' || tag === undefined) {
              return true; // Allow string or undefined (optional)
            }
            return 'Tag must be a string';}),
      },
      {
        name: 'image',
        type: 'image',
        title: 'sweet Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the sweet item',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
    ],
  };

  export default sweetsSchema;