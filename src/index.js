import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header.js"
import DefElement from "./DefElement.js"
import KesaSimImg from "./kesasim.png"
import ChickenWareImg from "./chickenWareShowCase.png"
import FluidGrid from 'react-fluid-grid'


const myPage = <div>
<Header/>
<div class="fluid_container">
 <FluidGrid>
  <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
   <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
   <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
   <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
   <DefElement image={KesaSimImg} text="kesäSimulaattori" link="location.href = 'https://github.com/urkkiz225/kesaSimulaattori';"/>
   <DefElement image={ChickenWareImg} text="ChickenWare" link="location.href = 'https://github.com/urkkiz225/ChickenWare';"/>
   </FluidGrid>
 </div>
 </div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
