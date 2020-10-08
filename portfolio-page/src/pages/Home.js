import React from "react";
import mainImage from "img/main.jpg";

export default function Home() {
  const checkBrowser = () => {
    var browse = navigator.userAgent.toLowerCase();

    if (
      (navigator.appName == "Netscape" && browse.indexOf("trident") != -1) ||
      browse.indexOf("msie") != -1
    ) {
      alert("본 사이트는 IE를 지원하지 않습니다.");
    }
  };

  checkBrowser();

  return (
    <div className="home">
      <img src={mainImage} alt="home-img"></img>
      <div className="home-name">Chanyoung Park</div>
      <hr></hr>
      <div className="home-info">Front-End Developer</div>
    </div>
  );
}
