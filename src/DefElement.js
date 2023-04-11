import style from "./style.css"

function DefElement(args){
  return(
    <div class="element">
      <img src={args.image} width={762} height={432} alt='kesäSimulaattori'/>
      <h4 style={{color:"red"}}>kesäSimulaattori</h4>
      <a href="#" onclick="location.href = 'www.youtube.com';" class="btn btn-dark"> kesäSimulaattori</a>
    </div>
  );
}
export default DefElement;
