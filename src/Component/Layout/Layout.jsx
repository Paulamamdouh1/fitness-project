import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "./Layout.module.css"
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <>
  <Navbar/>
<div  style={{ position: "relative", zIndex: 10 }}>
  <Outlet />
</div>
  
  </>

}
