import "./UtilClasses/style.css"
import React from 'react';
import FluidGrid from 'react-fluid-grid'
import Photo from "./UtilClasses/photo.js"

function Header(){
  return(
  <div class="mt-4 p-5 desertSun rounded">
   <FluidGrid>
     <div>
       <h1>Portfolio</h1>
       <p>urkkiz</p>
     </div>

     <Photo/>

     </FluidGrid>
  </div>);
}

export default Header;
