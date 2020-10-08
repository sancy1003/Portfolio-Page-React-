import React from "react";
import pfGammu from "img/pf/pf-gammu.png";
import pfMovie from "img/pf/pf-movie.png";
import pfMemo from "img/pf/pf-memo.png";
import pfVrmap from "img/pf/pf-vrmap.png";
import pfEscape from "img/pf/pf-escape.png";
import pfraid from "img/pf/pf-raid.png";
import pfJs from "img/pf/pf-js.jpg";
import pfios from "img/pf/pf-ios.jpg";
import pfchantube from "img/pf/pf-chantube.jpg";

export default function SelectedPortfolio({ sort, close }) {
  let image = "";
  let iconClass = "work-icon";
  let linkClass = "fas fa-link";
  let gitClass = "fab fa-github-square";
  const imageHandler = () => {
    switch (sort.name) {
      case "sj":
        image = pfJs;
        break;
      case "gammu":
        image = pfGammu;
        break;
      case "movie":
        image = pfMovie;
        break;
      case "memo":
        image = pfMemo;
        break;
      case "vrmap":
        image = pfVrmap;
        break;
      case "escape":
        image = pfEscape;
        break;
      case "raid":
        image = pfraid;
        break;
      case "ios":
        image = pfios;
        break;
      case "chantube":
        image = pfchantube;
        break;
    }
  };
  const iconHandler = () => {
    if (sort.link === "" && sort.git === "") {
      iconClass = "work-icon disable";
    } else if (sort.link === "") {
      linkClass = "fas fa-link disable";
    } else if (sort.git === "") {
      gitClass = "fab fa-github-square disable";
    }
  };
  iconHandler();
  imageHandler();
  return (
    <div className="work-box">
      <img src={image} alt="work img"></img>
      <div className="work-info">
        <div className="work-title">{sort.title}</div>
        <div className="work-intro">{sort.info}</div>
        <div className={iconClass}>
          <a href={sort.link}>
            <i className={linkClass}></i>
          </a>
          <a href={sort.git}>
            <i className={gitClass}></i>
          </a>
        </div>
      </div>
      <i onClick={close} className="btn-close fas fa-times"></i>
    </div>
  );
}
