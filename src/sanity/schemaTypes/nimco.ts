const nimcoSchema= {
    name: 'nimco',
    type: 'document',
    title: 'Nimco',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: ' Name',
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
          'Category of the food item (e.g, biscuits etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title :  ' Price',
      },
     
      {
        name: 'tag',
        type: 'string', 
        title: 'Tag',
        options: {
          list: ['Best Seller', 'Popular', 'New', 'Hot Selling'], 
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
        title: ' Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the products',
      },
      {
        name: 'available',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
    ],
  };

  export default nimcoSchema;