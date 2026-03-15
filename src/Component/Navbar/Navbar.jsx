import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {

  const navigate = useNavigate();
  const token = localStorage.getItem("usertoken");

  function logout() {
    localStorage.removeItem("usertoken");
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            Fitness
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">

            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Fitness</h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>

            <div className="offcanvas-body">

              <ul className="navbar-nav flex-grow-1 pe-3">

                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/news">News</Link>
                </li>

              
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/trainers">Trainers</Link>
                </li>

                {/* Muscles dropdown */}
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    Muscles
                  </Link>

                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Chest">Chest</Link></li>
                    <li><Link className="dropdown-item" to="/Back">Back</Link></li>
                    <li><Link className="dropdown-item" to="/Shoulder">Shoulder</Link></li>
                    <li><Link className="dropdown-item" to="/Biceps">Biceps</Link></li>
                    <li><Link className="dropdown-item" to="/Triceps">Triceps</Link></li>
                    <li><Link className="dropdown-item" to="/Legs">Legs</Link></li>
                    <li><Link className="dropdown-item" to="/Abs">Abs</Link></li>
                  </ul>
                </li>

              </ul>


              {/* login register */}

              <ul className="navbar-nav">

                {token ? (
                  <li className="nav-item">
                    <span
                      className="nav-link"
                      style={{cursor:"pointer"}}
                      onClick={logout}
                    >
                      Logout
                    </span>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </>
                )}

              </ul>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}