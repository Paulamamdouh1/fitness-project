import styles from "./Home.module.css";
import imghome from "../assets/images/Image.jpeg";
import personal from "../assets/images/personal.webp";
import flex from "../assets/images/flex.jpg";
import fle from "../assets/images/flex1.jpg";
import FeedbackSlider from "../feedback-slider/feedback-slider";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";




export default function Home() {

const [calories, setCalories] = useState(null);

const formik = useFormik({

  initialValues:{
    activity:"",
    weight:"",
    duration:""
  },

  onSubmit: async function(values){

    let {data}= await axios.get(
      "https://api.api-ninjas.com/v1/caloriesburned?activity=" 
      + values.activity +
      "&weight=" + values.weight +
      "&duration=" + values.duration,
      {
        headers:{
          "X-Api-Key":"D1C6xjyYcWag2zbbaqd9Y4JAizAHbXamGf2b0HqZ"
        }
      }
    )

    setCalories(data[0].total_calories)

  }

})
  return <>
  
  <div className=" container-fluid">

    <div className='row position-relative'>

<div className={styles.imghome}>
        <div className=' position-absolute  ps-5   bottom-50'>
          <h1 className=" text-white">SHAPE YOUR </h1>
          <h1 className=" text-white">PERFECT BODY</h1> 
          <p className=" h6 text-white">A small river named Duden flows by their place and supplies</p>
            <p className=" text-white">it with the necessary regelialia.</p>
          <button className='btn bg-danger w-50 mt-3  rounded-3 text-center text-white '>TAKE A TOUR NOW </button>
        </div>
        
    </div>

     </div>
  
  
  </div>




  <div className="row mt-5 d-flex align-items-center ">
    <div className="col  ms-5">
      <h1 className="fw-bolder text-black">YOUR PERSONAL</h1>
      <h1 className="fw-bolder text-black ">GYM COACH</h1>
      <span className='text-danger'>ALWAYS AT YOUR SIDE</span>
      <p className='text-black h6'>Your weekly training plan, based on your fitness level and adapted to your individual goals and needs. Experience maximum motivation, new challenges and consistently increased performance and progress.</p>
      <span className='text-danger'>WEIGHT</span>

    </div>
  <div className='col'>
<img className='w-75' src= {personal} alt=''/>

</div>

  </div>

  

  <section>
  
  <div>
  
  <h1 className="text-center text-white fw-bolder pt-4">FRESH AND FUN WORKOUTS</h1>
  
  
  </div>
  
  <div>
  

<div className=' d-flex  bg-black text-center  text-white-50'>
<div className='col'>
   <img src={flex} className="w-100"/>
    <span className=' bg-danger text-white ps-5 pe-5 pt-1 text-center rounded-1'>workout</span>
    <h2 className=''>HIGHLY MOTIVATING </h2>
    <p>start your healthy lifestyle today</p>
   
</div>

  <div className='col'>
     <img src={fle} className="w-100"/> 
       <span className=' bg-danger text-white ps-5 pe-5 pt-1 text-center rounded-1'>workout</span>

    <h2 className='' >NEW GYM EXPERIENCE </h2>   
    <p>try your first tarning for free</p>
  
  </div>
  


</div>

  
  </div>



 
 


</section>


 
<div className= {styles.testimonialsection} >
    <h3 className= {styles.bgtext}>testimonial</h3>
    <h2 className= {styles.fgtext}>t e s t i m o n i a l</h2>
</div>
 


<FeedbackSlider/>

<section >

<div className=" container-fluid bg-black text-center pt-5 ">

<div className="row">

  <h5 className="text-danger">get your body max index</h5>
    <h1 className="text-white">what is your
      <span className="text-danger ms-1">BMI</span>
    </h1>

{/* 
<form onSubmit={handleSubmit}>
<div className=" d-flex justify-content-center m-4 ">
    <input placeholder="Activity" value={activity} onChange={e=>setActivity(e.target.value)} className="me-3 w-25 bg-black text-white"/>
      <input placeholder="Weight (lbs)" value={weight} onChange={e=>setWeight(e.target.value)} type="number" className="w-25 bg-black text-white"/>
</div>
<div>

    <input placeholder="Duration (min)" value={duration} onChange={e=>setDuration(e.target.value)} type="number" className="bg-black w-25 text-white"/>
    
</div>

    <button className="btn mt-5 w-50 btn-outline-danger text-white " type="submit">Calculate</button>
{calories && (
  <h3 className="text-white border-danger border w-50 mt-4  ms-auto rounded-5 d-flex justify-content-center" >
    Calories Burned: {calories}
  </h3>
)}



 </form> */}






<form onSubmit={formik.handleSubmit}>
<div className=" d-flex justify-content-center m-4">


<input name="activity" onChange={formik.handleChange} value={formik.values.activity} placeholder="Activity" className="me-3 w-25 bg-dark rounded-4 text-white " required/>

<input name="weight" type="number" onChange={formik.handleChange} value={formik.values.weight} placeholder="Weight"  className="w-25 bg-dark rounded-4 text-white"  required />
</div>
<div>
  {calories && (
  <h3 className="text-white font border-danger  border w-25 mt-4 ms-auto rounded-5 d-flex justify-content-center" >
    Calories Burned: {calories}
  </h3>

)}
  <input name="duration" type="number" onChange={formik.handleChange} value={formik.values.duration} placeholder="Duration"  className="bg-dark rounded-4 w-25 text-white" required  />

</div>

    <button className="btn mt-5 ms-5 w-50 btn-outline-danger text-white " type="submit">Calculate</button>



</form>



</div>
















</div>









</section>

  </>
}
