import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  
  const location = useLocation();
  const navigate = useNavigate();
   const product = location.state?.product;
if (!product) {
    navigate("/products");
    return null; 
  }
  return <>
  
 <div className='row align-items-center'>
  
  <div className='col-md-4'>

{ProductDetails.images.map((img)=> <img src={img} />)}
  </div>
  
<div className='col-md-8'>
<h3>{ProductDetails.title}</h3>
<p className='text-muted'>{ProductDetails.description}</p>
<span>{ProductDetails.price}</span>
<button>add to cart</button>
</div>
  </div> 
  
 
  
  
  
  </>
}
