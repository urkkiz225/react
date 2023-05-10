import "./UtilClasses/style.css"
import React from 'react';
import FluidGrid from 'react-fluid-grid'
import IconPng from "./Images/icon.png"

function Header(){
  return(
  <div class="mt-4 p-5 textDefault rounded">
   <FluidGrid>
     <div class="textDefault">
       <h1><span style={{color: '#ccaa6a'}}>Portfolio</span></h1>
       <p><span style={{color: '#ccaa6a'}}>urkkiz</span></p>
     </div>
     <img src={IconPng} width={64} height={64} alt='icon'/>

     </FluidGrid>
  </div>);
}

export default Header;
