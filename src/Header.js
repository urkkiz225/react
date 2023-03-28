import Photo from "./photo.js"
import "./style.css"

function Header(){
  return(
  <div class="mt-4 p-5 headerColor rounded-left">
    <h1>Portfolio</h1>
    <p>urkkiz</p>
    <Photo/>
  </div>);
}

export default Header;
