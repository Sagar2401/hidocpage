import React from "react";
import { useApp } from "../hooks/useApp";
import menu from "../Assets/menu.svg";
import trophy from "../Assets/trophy.png";
const HeaderOne = () => {
  const { headerdata } = useApp();
  return (
    <header className="App-header">
      <img
        className="logo"
        src="https://hidocdr.com/static/media/img-main.8dd53ff3d39d4c24b3df.jpg"
        alt="no img"
      />
      <div className="nav-btns">
        {headerdata.map((item, index) => {
          return (
            <>
              <p key={index}>{item}</p> |
            </>
          );
        })}
      </div>
      <div className="profile-wrap">
        <img src={menu} alt="menu" />
        <div className="score">
          <img src={trophy} height={"20px"} alt="trophy" /> 252
        </div>
        <div className="profile">A</div>
      </div>
    </header>
  );
};

export default HeaderOne;
