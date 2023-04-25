import React from 'react';

function DefElement(args){
  return(
    <div class="element">
      <img src={args.image} width={762} height={432} alt='kesäSimulaattori'/>
      <h4 style={{color:"red"}}>{args.text}</h4>
      <a href="/#" onclick={args.link} class="btn btn-dark"> {args.text}</a>
    </div>
  );
}
export default DefElement;
