import logo from './logo.svg';
import './App.css';
import './index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Component/Home/Home.jsx";
import News from "./Component/News/News.jsx";
import Abs from "./Component/Abs/Abs.jsx";
import Back from "./Component/Back/Back.jsx";
import Biceps from "./Component/Biceps/Biceps.jsx";
import Chest from "./Component/Chest/Chest.jsx";
import Legs from "./Component/legs/Legs.jsx";
import Products from "./Component/Products/Products.jsx";
import Layout from "./Component/Layout/Layout.jsx";
import Login from "./Component/Login/Login.jsx";
import Register from "./Component/Register/Register.jsx";
import Shoulder from "./Component/Shoulder/Shoulder.jsx";
import Traniners from "./Component/Traniners/Traniners.jsx";
import Triceps from "./Component/Triceps/Triceps.jsx";
import Navbar from './Component/Navbar/Navbar.jsx';
import Auth from './Component/Auth/Auth.jsx';
import Traniner1 from './Component/Traniner1/Traniner1.jsx';
import Traniner3 from './Component/Traniner3/Traniner3.jsx';
import Traniner2 from './Component/Traniner2/Traniner2.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter,  createHashRouter,  RouterProvider } from 'react-router-dom';
import ProductsProvider from './Component/Context/Context.jsx';
import { useEffect } from 'react';
import ProductDetails from './Component/ProductDetails/ProductDetails.jsx';

function App() {
  let router = createHashRouter ([
    {
      path: "/",element: <Layout />,children: [
        { index: true, element: <Home /> },
        { path: "biceps", element: <Biceps /> },
        { path: "triceps", element: <Triceps /> },
        { path: "chest", element: <Chest /> },
        { path: "legs", element: <Legs /> },
        { path: "shoulder", element: <Shoulder /> },
        { path: "abs", element: <Abs /> },
        { path: "back", element: <Back /> },
        { path: "trainers", element: <Traniners /> },
        { path: "news", element:<News/>},
        { path: "products", element: <Products/> },
        { path: "products/:id", element: <ProductDetails />},
        { path: "Traniner1", element: <Traniner1/> },
        { path: "Traniner2", element: <Traniner2/> },
        { path: "Traniner3", element: <Traniner3/> },
        {path:"Navbar", element:<Navbar/>},    
        { path: "login", element: <Auth/> },
        { path: "register", element: <Auth/>  }
      ]
    }
  ]);

useEffect(()=>{


   AOS.init({ duration: 1000, once: true }); 

}, [])



return <>
<ProductsProvider>
<RouterProvider router={router}></RouterProvider>
</ProductsProvider>

  </>




}

export default App;
