import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./UtilClasses/Header.js"
import DefElement from "./UtilClasses/DefElement.js"
import KesaSimImg from "./Images/kesasim.png"
import ChickenWareImg from "./Images/chickenWareShowCase.png"
import FluidGrid from 'react-fluid-grid'

const HomePage = () => {
  return(

<div>
  <div class="fluid_container">
   <FluidGrid>
    <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
     <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
     <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
     <DefElement image={ChickenWareImg} text="Link to ChickenWare repo" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
     <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
     <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
     </FluidGrid>
   </div>
 </div>);
};
export default HomePage;
