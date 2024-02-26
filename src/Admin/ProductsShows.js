import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function ProductsShows() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchData = async (e) => {
            try {
                const response = await axios.get('http://localhost:7000/productImages');
                console.log(response.data)
                const fetchedProducts = response.data.productsDetails.map((product, index) => ({
                    ...product,
                    serialNumber: index + 1, 
                }));
                setProducts(fetchedProducts);
            }  catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);
  return (
    <div>productsShows</div>
  )
}
