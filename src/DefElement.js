import React from 'react';

function DefElement(args){
  return(
    <div class="element">
      <img src={args.image} width={762} height={432} alt='kesäSimulaattori'/>
      <h4 style={{color:"red"}}>{args.text}</h4>
      <a href="/#" onclick={args.link} class="btn btn-dark"> Link to {args.text} GitHub repo</a>
      <button onclick={args.link} id="myButton" class="btn btn-dark" >{args.text}</button>
    </div>
  );
}
export default DefElement;
