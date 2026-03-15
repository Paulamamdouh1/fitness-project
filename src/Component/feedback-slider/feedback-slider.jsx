import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../assets/images/3cc97ced78e276c2e650dd8b374c79c6.jpg";
import Slider2 from "../assets/images/315b83b63690a086cdc14c6e7ea27af5.jpg";
import Slider3 from "../assets/images/bb74bae0879782206e5970e65efcfaa6.jpg";
import Slider4 from "../assets/images/istockphoto-1392783238-1024x1024.jpg";
import styles from "./feedback-slider.module.css";

import { useEffect, useState } from "react";
import axios from "axios";

export default function FeedbackSlider() {
  

const Slides = [Slider1,Slider2, Slider3 , Slider4]
  const [Comments, setComment] = useState([])
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplayspeed:2000
  };  
async function getfeedback() {


let {data}= await axios.get("https://dummyjson.com/comments")
 
setComment(data.comments);
}




useEffect(()=>{
getfeedback();

},[])

  return <>
  

<div className='row bg-black'>


  
  
 <Slider {...settings} interval={1000}>
  
{Comments.slice(0,4).map((item,index) => <div key={item.id} className="text-center text-white"  >
<div className=" d-flex justify-content-center align-items-center  py-4" >  
  <img src={Slides [index % Slides.length]}  className="w-25  rounded-5" />

  </div>  
<div className=" bg-danger p-1 w-25  mx-auto "></div>
<h6 className=" fw-bolder  pt-2"> {item.user.fullName}</h6>
    <span> {item.body} </span>


    

    
  
  
  
  
  
  
    </div> )}
    
    </Slider>
</div>





</>
}
