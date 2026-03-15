import React from 'react'
import Payment from "../Payment/Payment";
import tr2 from "../assets/images/Trainer-2@2x.webp"

export default function Traniner2() {
  return <>
  
  
  

  <div className="row mt-5 d-flex align-items-center ">
     <div className='col ms-3'>
<img className='w-75' src= {tr2} alt=''/>

</div>

    <div className="col">
      <h2 className="fw-bolder text-black">TYRONE LOWE</h2>
      <span className='text-danger'>Crossfit, Core</span>
    
<div>

  <i className="bi bi-instagram "></i>
     
  </div> 
      <p className='text-black h6'>Highly educated and skilled health sciences professional specializing in athletic health care. He works with coaches, doctors, and physical therapists. On a typical day, the roles and responsibilities of an athletic trainer include: Providing athletic training services.</p>
<Payment/>
    </div>
 

  </div>
  
  </>
}
