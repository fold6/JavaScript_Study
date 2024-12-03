import React from "react";
import MainContentImg from "./MainContentImg";
import MainConts from "./MainContentConts";
import MainContentContsItem from "./MainContentContsItem";
function MainContents(){
    return(
    <>
    <MainContentImg/>

    <MainConts>
    <div className="contents">
    <MainContentContsItem/>
      <div className="gotoshop">
       <img src="./images/banner01.jpg" alt=""/>
       <img src="./images/banner02.jpg" alt=""/>
       <img src="./images/banner03.jpg" alt=""/>
      </div>

      <div className="movie">
       MOVIE
      </div>

      <div className="style">
        <div className="style_h">
          <h3>
            STYLE OF<br/>
            THE WEEK
          </h3>
          <ul>
            <li>MAN</li>
            <li>WOMAN</li>
            <li>CAPPING</li>
          </ul>
        </div>
        <div className="style_b">
          <div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="banner">
        <div className="group">
         <img src="./images/goto_shop01.png"/>
         <img src="./images/goto_shop02.png"/>
        </div>
       <img src="./images/goto_shop03.png"/>

      </div>

      <div className="info">
        <div className="info_top">
          <img src="./images/footer_top01.png" alt=""/>
          <img src="./images/footer_top02.png" alt=""/>
        </div>
        <div className="info_notice">
          <h4 className="title">NOTICE</h4>
          <p className="txt">[공지] 신정휴무 및 배송안내</p>
          <p className="date">2024-09-02</p>
        </div>
      </div>
    </div>
    </MainConts>

    </>
    )
}

export default MainContents;