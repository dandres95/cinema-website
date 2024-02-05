import "./Banner.css";
import chevron from "./images/Chevron-Right.png";

function Featured(){
  return (
    
    <div class="featured">
      <h1>Featured TV shows</h1>
      <a href=""><img src={chevron} className="right" /></a>
    </div>
  )
}

export default Featured;