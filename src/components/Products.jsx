import React, { useState, useEffect } from 'react';
import './products.scss'
import { SingleProduct } from './SingleProduct';

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/mkatay/json_products/main/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div className='products'>
      <h2 className=''>Our Products</h2>
      <div className='products-container'>
        {products.map(obj=><SingleProduct key={obj.id} {...obj}/>)}
      </div>
    </div>
  );
};

