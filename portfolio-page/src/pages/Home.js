import React from "react";
import mainImage from "img/main.jpg";

export default function Home() {
  return (
    <div className="home">
      <img src={mainImage} alt="home-img"></img>
      <div className="home-name">Chanyoung Park</div>
      <hr></hr>
      <div className="home-info">Front-End Developer</div>
    </div>
  );
}
