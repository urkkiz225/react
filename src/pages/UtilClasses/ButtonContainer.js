import style from "./style.css"
import React from 'react';

function ButtonContainer(args){
  return(
    <div class="button">
      <a to={args.link} class="btn btn-dark"> Link to {args.text} GitHub repo</a>
    </div>
  );
}
export default ButtonContainer;
