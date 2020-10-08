import React, { useState, Fragment } from "react";
import escapeImg from "img/VR ESCAPE.jpg";
import vrmapImg from "img/vrmap.JPG";
import raidImg from "img/raid.JPG";
import SelectedPortfolio from "component/SelectedPortfolio";

export default function PortfolioProject() {
  const [selectedPf, setselectedPf] = useState("none");
  let selectedView = "";
  const vrmap = {
    name: "vrmap",
    title: "VR Map",
    info:
      "Unity 엔진에서 Google VR SDK를 이용하여 제작한 앱으로 360˚카메라로 사진과 동영상을 촬영하였기 때문에 일반 사진보다 자세하게 대학 캠퍼스를 둘러볼 수 있습니다.",
    git: "",
    link: "https://youtu.be/Rq0QegeaDlM",
  };
  const escape = {
    name: "escape",
    title: "VR 방탈출",
    info:
      "Unity 엔진에서 Google VR SDK를 이용하여 제작한 앱으로 vr환경에서 실감나게 방탈출을 즐길 수 있는 게임성 앱입니다.",
    git: "",
    link: "https://youtu.be/IxO-jmHVhms",
  };
  const raid = {
    name: "raid",
    title: "Boss Raid",
    info:
      "Unity 엔진으로 제작한 단계별로 보스를 공략해나가는 PC 플렛폼 게임입니다.",
    git: "",
    link: "https://youtu.be/zkNi0RZ27HA",
  };
  const selectedViewClose = () => {
    setselectedPf("none");
  };
  const selectedViewHandler = () => {
    if (selectedPf === "vrmap") {
      selectedView = (
        <SelectedPortfolio sort={vrmap} close={selectedViewClose} />
      );
    } else if (selectedPf === "escape") {
      selectedView = (
        <SelectedPortfolio sort={escape} close={selectedViewClose} />
      );
    } else if (selectedPf === "raid") {
      selectedView = (
        <SelectedPortfolio sort={raid} close={selectedViewClose} />
      );
    }
  };

  selectedViewHandler();

  return (
    <Fragment>
      <ul className="selected-container">
        <li
          onClick={() => {
            setselectedPf("vrmap");
          }}
          className="selected-box"
        >
          <img src={vrmapImg} draggable="false" alt="portfolio img"></img>
          <div>VR Map</div>
        </li>
        <li
          onClick={() => {
            setselectedPf("escape");
          }}
          className="selected-box"
        >
          <img src={escapeImg} draggable="false" alt="portfolio img"></img>
          <div>VR 방탈출</div>
        </li>
        <li
          onClick={() => {
            setselectedPf("raid");
          }}
          className="selected-box"
        >
          <img src={raidImg} draggable="false" alt="portfolio img"></img>
          <div>Boss Raid</div>
        </li>
      </ul>
      {selectedView}
    </Fragment>
  );
}
