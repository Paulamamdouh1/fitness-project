import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./Products.module.css";
import img2 from "../assets/images/product-4-600x673.png";
import image1 from "../assets/images/product-1-600x673.png";
import  back from "../assets/images/back.jpg"
import { useNavigate } from 'react-router-dom';
export default function Products() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // هنا تعريف navigate
  async function getProducts() {
    let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products");
    setProducts(data.data)
  }


function addToCart(product){
  setCart([...cart, product])
}



  useEffect(() => {
    getProducts();
  }, [])

  return (

     <div className="container bg-black">
        <div className="row d-flex ">
          <div className={styles.back}>
            <div className="text-center pt-5">
            <h1 className="font text-white">Products 

              <span className='text-danger font'>Workouts</span>
            </h1>
        <span className="text-white">HOME /</span> 
        <span className="text-danger ">Products </span>
          </div>
          </div>
   


        <div className="col-lg-4 position-sticky top-0 mt-4 text-white p-3">

          <button className="bg-dark text-white w-100 mt-2">CATEGORIES</button>

          <div className="mt-4 ms-2 text-white">
            {["Bars", "Bottles", "Gainers", "Proteins", "Vitamins"].map(
              (category, index) => (
                <p key={index}>
                  {category}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi text-danger bi-arrow-right-short"
                    viewBox="0 0 16 10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                  
                </p>
              )
            )}
          </div>

          <button className="bg-dark btn btn-outline-danger text-white w-100 mt-3">FILTER BY PRICE</button>
          <p className="text-white text-center mt-2">Price: $10 — $170</p>

          <button className="bg-dark btn btn-outline-danger text-white w-75 mt-4">RATED PRODUCTS</button>

          <div className="d-flex justify-content-start mt-3">
            <img src={img2} className="w-25" alt="product" />
            <div className="mt-3 ms-3">
              <p>NUTRITIONAL BARS</p>
              <span>$16.90 – $38.90</span>
            </div>
          </div>

          <div className="d-flex justify-content-start mt-3">
            <img src={image1} className="w-25" alt="product" />
            <div className="mt-3 ms-3">
              <p>VEGA PROTEIN SMOOTHIE</p>
              <span>$26.00 – $37.00</span>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-lg-8">
          <div className="row mt-4">
            {products.slice(0,10).map((product, id) => (
              <div className="col-md-6 mb-4 d-flex justify-content-center" key={id}   data-aos="fade-up"   >
                <div className="products py-3 d-flex flex-column align-items-center text-center p-3 rounded">
                  <img
                    className="w-25 mb-3" src={product.image} 
                    alt={product.title}
                  />
                  <h4 className="h6 fw-bolder text-danger">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h4>
                  <span className="h6 text-white">{product.price} $</span>
                  <span className="h6 text-white">{product.description.slice(0, 60)}...</span>
                  <button onClick={() => navigate(`/products/${product.id}`, { state: { product } })} className="btn  btn-outline-danger w-75 mt-3 text-white bg-dark">
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}