import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./pages/Header.js"
import DefElement from "./pages/UtilClasses/DefElement.js"
import KesaSimImg from "./pages/Images/kesasim.png"
import ChickenWareImg from "./pages/Images/chickenWareShowCase.png"
import FluidGrid from 'react-fluid-grid'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/MainPage";
import CVpage from "./pages/CVpage";
import Contact from "./pages/Contacts";
import NoPage from "./pages/NoPage";
import BackgroundSand from "./pages/Images/backgroundSand.jpg"


const page = <div class="burntScienna">
  <BrowserRouter>
      <Routes>
      <Route path="/react" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/react/cv" element={<CVpage />} />
          <Route path="/react/contact" element={<Contact />} />
          <Route path="/react/*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page);
