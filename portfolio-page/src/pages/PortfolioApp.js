import React, { useState, Fragment } from "react";
import memoImg from "img/TodayMemoGI.jpg";
import iosImg from "img/ios.jpg";
import SelectedPortfolio from "component/SelectedPortfolio";

export default function PortfolioApp() {
  const [selectedPf, setselectedPf] = useState("none");
  let selectedView = "";
  const memo = {
    name: "memo",
    title: "Android 메모장 앱",
    info:
      "메모장 및 체크리스트 앱 제작 프로젝트로, 안드로이드 스튜디오를 이용해 제작하였으며 메모 CRUD, 디바이스에 정보 저장 기능을 구현하였습니다.",
    git: "https://github.com/sancy1003/android_memo",
    link: "https://play.google.com/store/apps/details?id=com.pcy.memo",
  };
  const ios = {
    name: "ios",
    title: "IOS 자기소개 앱",
    info:
      "자기소개 앱 제작 프로젝트로, Swift언어로 제작하였으며 PickerView, MapView, WebView 등의 기능을 이용하였습니다.",
    git: "",
    link: "https://youtu.be/grgTwHnaz2M",
  };
  const selectedViewClose = () => {
    setselectedPf("none");
  };
  const selectedViewHandler = () => {
    if (selectedPf === "memo") {
      selectedView = (
        <SelectedPortfolio sort={memo} close={selectedViewClose} />
      );
    } else if (selectedPf === "ios") {
      selectedView = <SelectedPortfolio sort={ios} close={selectedViewClose} />;
    }
  };

  selectedViewHandler();
  return (
    <Fragment>
      <ul className="selected-container">
        <li
          onClick={() => {
            setselectedPf("memo");
          }}
          className="selected-box"
        >
          <img src={memoImg} draggable="false" alt="portfolio img"></img>
          <div>Android 메모 앱</div>
        </li>
        <li
          onClick={() => {
            setselectedPf("ios");
          }}
          className="selected-box"
        >
          <img src={iosImg} draggable="false" alt="portfolio img"></img>
          <div>IOS 자기소개 앱</div>
        </li>
      </ul>
      {selectedView}
    </Fragment>
  );
}
