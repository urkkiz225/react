import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./pages/UtilClasses/Header.js"
import DefElement from "./pages/UtilClasses/DefElement.js"
import KesaSimImg from "./pages/Images/kesasim.png"
import ChickenWareImg from "./pages/Images/chickenWareShowCase.png"
import FluidGrid from 'react-fluid-grid'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/MainPage";
import Blogs from "./pages/Blocky";
import Contact from "./pages/Contacts";
import NoPage from "./pages/NoPage";


const myPage = <div>
  <Header/>
  <Home/>

  <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
