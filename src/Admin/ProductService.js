import React from 'react'
import axios from 'axios';

const ProductService = {
    getProducts: () => {
      // Dummy data for demonstration purposes
      return new Promise((resolve) => {
        const dummyProducts = [
          {
            id: '1',
            name: 'Product 1',
            image: 'product1.jpg',
            description: 'Description for Product 1',
            category: 'Electronics',
            price: 100,
            quantity: 10,
            rating: 4,
            inventoryStatus: 'INSTOCK',
          },
          {
            id: '2',
            name: 'Product 2',
            image: 'product2.jpg',
            description: 'Description for Product 2',
            category: 'Clothing',
            price: 50,
            quantity: 20,
            rating: 3,
            inventoryStatus: 'LOWSTOCK',
          },
          // Add more dummy products as needed
        ];
  
        resolve(dummyProducts);
      });
    },

    
  };
  
  export default ProductService;
