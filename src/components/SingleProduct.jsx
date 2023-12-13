import React, { useState, useEffect } from 'react';
import './singleProduct.scss'
import { useNavigate } from "react-router-dom";


export const SingleProduct = ({id,title,category,thumbnail}) => {
    const navigate=useNavigate()


  return (
          <div className='product-card' key={id}>
            <img src={thumbnail} alt={title} />
          <p>{title}</p>
          <p>{category}</p>
          <button type="details" className="btn btn-primary mb-0"
          onClick={()=>navigate('/products/'+id)}>Details</button>
    </div>
  );
};

