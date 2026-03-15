import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./News.module.css";

import img from "../assets/images/back.jpg";
export default function News() {

const [News, setNews] = useState([])
async function getNews() {

 let {data}= await axios.get("https://newsapi.org/v2/everything?q=fitness&apiKey=b927110130914b57935a782dfcf39ea0");
 setNews(data.articles)
}


 useEffect(()=> {

getNews();

 },[])

  return <>
  
  <div className="container-fluid ">
        <div className="row d-flex ">
          <div className={styles.newsContainer}>
            <div className="text-center pt-5">
            <h1 className="font text-black">Fitness 

              <span className='text-danger font'>News</span>
            </h1>
        <span className="text-white">HOME /</span> 
        <span className="text-danger ">News </span>
          </div>
          </div>
        </div>
      </div>

  <div className="row">

{News.map((item)=> <div className="col-lg-3" key={News._id} data-aos="fade-up"> 
<div className="row news  py-3">
  
  <img className="w-75" src={item.urlToImage} alt="" />
  
    <span className=" text-black ">{item.author?.split(" ").slice(0,2).join(" ")}</span>
  <h4 className=" text-danger font h6"> 
{item.title?.split(" ").slice(0, 4).join(" ")}
     </h4>
<span className="text-black text-muted  text-decoration-underline">{item.description}</span>  
   </div>
</div>
     )}
    </div>
  




  </>
}

