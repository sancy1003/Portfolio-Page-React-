import React, { useState, Component, Fragment } from "react";
import { PortfolioWeb, PortfolioApp, PortfolioProject } from "pages";

export default function Portfolio() {
  const [sort, setSort] = useState("none");
  let view = "";
  let menuClass = "portfolio-menu";
  let backClass = "fas fa-chevron-circle-left btn-back disable";

  console.log(sort);

  const viewHandler = () => {
    if (sort !== "none") {
      menuClass = "portfolio-menu disable";
      backClass = "fas fa-chevron-circle-left btn-back";
    }
    if (sort === "web") {
      view = <PortfolioWeb />;
    } else if (sort === "app") {
      view = <PortfolioApp />;
    } else if (sort === "project") {
      view = <PortfolioProject />;
    }
  };

  viewHandler();

  return (
    <Fragment>
      <div className="portfolio-container">
        <ul className={menuClass}>
          <li
            onClick={() => {
              setSort("web");
            }}
            className="portfolio-item"
          >
            <div className="round">
              <i className="fas fa-desktop"></i>
            </div>
            <div className="sort">Web</div>
          </li>
          <li
            onClick={() => {
              setSort("app");
            }}
            className="portfolio-item"
          >
            <div className="round">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="sort">App</div>
          </li>
          <li
            onClick={() => {
              setSort("project");
            }}
            className="portfolio-item"
          >
            <div className="round">
              <i className="far fa-folder-open"></i>
            </div>
            <div className="sort">project</div>
          </li>
        </ul>
        {view}
        <i
          onClick={() => {
            setSort("none");
          }}
          className={backClass}
        ></i>
      </div>
      <div className="warn">
        <span>Portfolio 페이지는 넓은 화면에서 확인해주세요.</span>
      </div>
    </Fragment>
  );
}
