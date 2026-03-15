import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

export default function Auth() {
  const [rightPanel, setRightPanel] = useState(false);

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleRegisterChange = e => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  }

  const handleLoginChange = e => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }


  const registerSubmit = e => {
    e.preventDefault();
    console.log("Register clicked", registerData);
    alert("Register success (mock)!");
    setRightPanel(false);
  }

  const loginSubmit = e => {
    e.preventDefault();
    console.log("Login clicked", loginData);
    
    const fakeToken = "123456.mock.token";
    localStorage.setItem("usertoken", fakeToken);
    alert("Login success (mock)!");
    navigate("/"); // اذهب لأي صفحة
  }

  return (

    <div className="authimg">
    <div className={`${styles.container} ${rightPanel ? styles["right-panel-active"] : ""}`}>

      <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
        <form onSubmit={registerSubmit}>
          <h1>Create Account</h1>
          <input type="text" placeholder="Name" name="name" onChange={handleRegisterChange} />
          <input type="email" placeholder="Email" name="email" onChange={handleRegisterChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleRegisterChange} />
          <input type="password" placeholder="Confirm Password" name="rePassword" onChange={handleRegisterChange} />
          <input type="text" placeholder="Phone" name="phone" onChange={handleRegisterChange} />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      {/* Login */}
      <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
        <form onSubmit={loginSubmit}>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email" name="email" onChange={handleLoginChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleLoginChange} />
          <button type="submit">Sign In</button>
        </form>
      </div>

      {/* Overlay */}
      <div className={styles["overlay-container"]}>
        <div className={styles.overlay}>
          <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
          
            <button className="ghost" onClick={() => setRightPanel(false)}>Sign In</button>
          </div>
          <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}>
          
            <button className="ghost" onClick={() => setRightPanel(true)}>Sign Up</button>
          </div>
        </div>
      </div>
  </div>
</div>
  
  );
}