import React from "react";
import "./InfoSection.css";
import beerGif from "../assets/beer-drip.gif";

function InfoSection() {
  return (
    <div className="infoSection">
      <div className="leftColumn">
        <h1 className="infoTitle">Info Section</h1>
        <p className="infoText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          architecto molestiae perferendis reprehenderit sint earum quis quasi
          sapiente ducimus tempore. Quidem dolore suscipit rerum porro aut.
          Possimus illum amet dolorem!
        </p>
      </div>
      <div className="rightColumn">
        <img className="beerGif" src={beerGif} alt="beer" />
      </div>
    </div>
  );
}

export default InfoSection;
