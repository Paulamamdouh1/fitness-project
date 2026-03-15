import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./Back.module.css";
import ground from "../assets/images/ground.jpg";
import img1 from "../assets/images/ back pulldown.gif";
import img2 from "../assets/images/Lat-Pulldown.gif";
import img3 from "../assets/images/back row3.gif";
import img4 from "../assets/images/Lever-T-bar-Row.gif";
import img5 from "../assets/images/back-Pulldown2.gif";
export default function Back() {

const exercises = [
  { id: 1, name: "Bench Press", image: img1 },
  { id: 2, name: "Chest Fly", image: img2 },
  { id: 3, name: "Biceps Curl", image: img3 },
  { id: 4, name: "Biceps Curl", image: img4 },
  { id: 5, name: "Biceps Curl", image: img5 },
  
];

  const [chestExercises, setbackExercises] = useState([])
async function getbackExercises(){ 
let {data} = await axios.get("https://api.api-ninjas.com/v1/exercises?muscle=middle_back",
  {
    headers: {
      "X-Api-Key":"D1C6xjyYcWag2zbbaqd9Y4JAizAHbXamGf2b0HqZ"
    }
    
  }
  
);
setbackExercises(data);  
}
useEffect(()=> {

getbackExercises();

} ,[])  

  
  return <>
         <div className="container-fluid ">
        <div className="row d-flex ">
          <div className={styles.ground}>
            <div className="text-center pt-5">
            <h1 className="font text-white">Back 

              <span className='text-danger font'>Workouts</span>
            </h1>
        <span className="text-white">HOME /</span> 
        <span className="text-danger ">Back </span>
          </div>
          </div>
        </div>
      </div>



{chestExercises.slice(0,5).map((Exercise, index) => (
  <div key={index} className="row align-items-center text-black"data-aos="fade-left">
           
           <div className='col-md-8'>
 <h4 className='font'> {Exercise.name}  </h4>
    <p className="fw-bolder">
      Equipment:
      <span className="text-black-50"> {Exercise.equipments}</span>
    </p>

  
      <span className="text-black"> {Exercise.type} </span>
       <span>,</span>
      <span className="text-danger"> {Exercise.muscle} </span>
<hr className='text-black'></hr>  


  

           </div>
   
    <div className='col-md-4 pt-4'>
      <img 
        className='w-50' 
        src={exercises[index]?.image} 
        alt={Exercise.name}
      />
    </div>

  </div>
))}
  
  </>
}
