import React from "react";
import profileImage from "img/profileImg.jpg";
import { Fragment } from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="back-paper right"></div>
      <div className="back-paper left"></div>
      <div className="profile">
        <div className="profile-top">
          <img src={profileImage} alt="profile-img"></img>
          <div className="profile-top-right">
            <div className="profile-title">Profile</div>
            <div className="profile-name-box">
              <div className="sub">이름</div>
              <div className="write">
                <div className="name-kr">박 찬 영</div>
                <div className="name-en">Chanyoung Park</div>
              </div>
            </div>
          </div>
        </div>
        <ul className="profile-bottom">
          <li className="profile-bottom-line">
            <div className="sub">생년월일</div>
            <div className="write">1998. 01. 03</div>
          </li>
          <li className="profile-bottom-line">
            <div className="sub">학력</div>
            <div className="write">
              인덕대학교 컴퓨터 소프트웨어학과 졸업 예정
            </div>
          </li>
          <li className="profile-bottom-line">
            <div className="sub">이메일</div>
            <div className="write">frontchan1003@gmail.com</div>
          </li>
          <li className="profile-bottom-line">
            <div className="sub">지원 분야</div>
            <div className="write">신입 프론트엔드 개발자</div>
          </li>
          <li className="profile-bottom-line">
            <div className="sub">Git</div>
            <div className="write">
              <a href="https://www.github.com/sancy1003">
                github.com/sancy1003
              </a>
            </div>
          </li>
          <li className="profile-bottom-line space">
            <div className="sub"></div>
            <div className="write"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
