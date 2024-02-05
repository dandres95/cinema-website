import "./Banner.css";
import chevron from "./images/Chevron-Right.png";

function Releases() {
  return (
    <div className="releases">
      <h1>New releases</h1>
      <a href=""><img src={chevron} className="right" /></a>
    </div>
  );
}

export default Releases;
