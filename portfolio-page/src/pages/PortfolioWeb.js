import React, { useState, Fragment } from "react";
import movieImg from "img/movie.png";
import sjImg from "img/sj.JPG";
import gammuImg from "img/gammu.JPG";
import SelectedPortfolio from "component/SelectedPortfolio";

export default function PortfolioWeb() {
  const [selectedPf, setselectedPf] = useState("none");
  let selectedView = "";
  const sj = {
    name: "sj",
    title: "커뮤니티 사이트",
    info:
      "유명 커뮤니티를 클론코딩하는 단체 프로젝트였으며, PHP(라라벨) 백엔드 환경에서 프론트엔드 부분을 맡아 진행하였습니다.",
    git: "https://github.com/bumpy1800/free-board",
    link: "http://doerksk2.dothome.co.kr/",
  };
  const gammu = {
    name: "gammu",
    title: "게임 커뮤니티 사이트",
    info:
      "php 기반의 백엔드와 BootStrap을 활용한 개인 프로젝트로 회원ㆍ게시판ㆍ게시글 CRUD, 로그인 기능을 구현하였습니다.",
    git: "",
    link: "",
  };
  const movie = {
    name: "movie",
    title: "영화 예매 사이트",
    info:
      "영화 예매 사이트를 제작하는 단체 프로젝트였으며, php 백엔드 환경에서 영화관 템플릿을 기반으로 일부 백엔드, 전체 프론트엔드 부분을 맡아 진행하였습니다. ",
    git: "",
    link: "",
  };
  const selectedViewClose = () => {
    setselectedPf("none");
  };
  const selectedViewHandler = () => {
    if (selectedPf === "sj") {
      selectedView = <SelectedPortfolio sort={sj} close={selectedViewClose} />;
    } else if (selectedPf === "gammu") {
      selectedView = (
        <SelectedPortfolio sort={gammu} close={selectedViewClose} />
      );
    } else if (selectedPf === "movie") {
      selectedView = (
        <SelectedPortfolio sort={movie} close={selectedViewClose} />
      );
    }
  };

  selectedViewHandler();

  return (
    <Fragment>
      <ul className="selected-container">
        <li
          onClick={() => {
            setselectedPf("sj");
          }}
          className="selected-box"
        >
          <img src={sjImg} draggable="false" alt="portfolio img"></img>
          <div>커뮤니티 사이트</div>
        </li>
        <li className="selected-box">
          <img
            onClick={() => {
              setselectedPf("gammu");
            }}
            src={gammuImg}
            draggable="false"
            alt="portfolio img"
          ></img>
          <div>게임 커뮤니티 사이트</div>
        </li>
        <li className="selected-box">
          <img
            onClick={() => {
              setselectedPf("movie");
            }}
            src={movieImg}
            draggable="false"
            alt="portfolio img"
          ></img>
          <div>영화 예매 사이트</div>
        </li>
      </ul>
      {selectedView}
    </Fragment>
  );
}
