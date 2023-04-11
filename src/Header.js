import "./style.css"
import React from 'react';
import FluidGrid from 'react-fluid-grid'
import Photo from "./photo.js"

function Header(){
  return(
  <div class="mt-4 p-5 headerColor rounded-left">
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
