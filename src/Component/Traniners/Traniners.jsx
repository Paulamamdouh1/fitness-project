import program from "../assets/images/depositphotos-18028835-original.png";
import world from "../assets/images/Trainers-Hero@2x-scaled.webp";
import tr1 from "../assets/images/Trainer-1@2x.webp"
import tr2 from "../assets/images/Trainer-2@2x.webp"
import tr3 from "../assets/images/Trainer-3@2x.webp"
import styles from "./Traniners.module.css";
import { Link } from "react-router-dom";
import Traniner2 from "../Traniner2/Traniner2";
export default function Trainers() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex ">
          <div className={styles.program}>
            <div className="text-center pt-5">
              <h1 className=" fw-bolder text-black">
                PROGRAMS
                <span className="text-danger font">News</span>
              </h1>
              <span className="text-white">HOME /</span>
              <span className="text-danger ">PROGRAMS </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-4">
        <div className={styles.testimonialsection}>
          <h2 className={styles.fgtext}>PERSONAL TRAINING</h2>
        </div>

        <p>
          It does not matter if you want to lose weight, build lean muscle, or
          simply want to live a healthier life; a professional personal training
          program created specifically with you and your needs in mind will take
          you as far as you want to go
        </p>
      </div>

      <div className="container-fluid">
        <div className="row position-relative">
          <div className={styles.world}>
<div className="text-start ms-5 position-absolute top-50  text-white fw-bolder">
 <h1 className="fw-bolder">WORLD-CLASS</h1>
    <h1 className="fw-bolder">TRAINERS</h1>


</div>


          </div>
       
        </div>
      </div>



<div className="row bg-dark text-white ">

<div className="col-lg-4 ">
<Link to="/Traniner1" >
<img src={tr1} className="w-100" alt="fit"/>
<h4 className="mt-1">RAYMOND ATKINS</h4>
</Link>
</div>

<div className="col-lg-4">
  <Link to="/Traniner2">
  
<img src={tr2} className="w-100" alt="fit" />
<h4 className="mt-1">TYRONE LOWE</h4>  
  </Link>

</div>
<div className="col-lg-4">
<Link to="/Traniner3">

<img src={tr3} className="w-100" alt="fit"/>
<h4 className="mt-1">AZUL BALDWIN</h4>

</Link>
</div>


            <div class="text-center text-white-50 mt-5 ">

              <h1 class=" fw-bold fw-bold">WANT TO WORK WITH US?</h1>
              <h3 class="fw-bold">BECOME A TRAINER.</h3>
              
            <button >APPLY NOW</button>
            </div>




</div>











    </>
  );
}
