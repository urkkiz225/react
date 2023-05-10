import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header.js"
import DefElement from "./UtilClasses/DefElement.js"
import KesaSimImg from "./Images/kesasim.png"
import ChickenWareImg from "./Images/chickenWareShowCase.png"
import JourneyShowcase from "./Images/JourneyShowcase.png"
import FluidGrid from 'react-fluid-grid'

const HomePage = () => {
  return(
<div>
  <div class="fluid_container">
   <FluidGrid>
      <DefElement image={KesaSimImg} text="kesäSimulaattori" link="https://github.com/urkkiz225/kesaSimulaattori"/>
      <DefElement image={ChickenWareImg} text="ChickenWare" link="https://github.com/urkkiz225/ChickenWare"/>
      <DefElement image={JourneyShowcase} text="Journey" link="https://github.com/urkkiz225/Journey"/>
     </FluidGrid>
   </div>
 </div>);
};
export default HomePage;
