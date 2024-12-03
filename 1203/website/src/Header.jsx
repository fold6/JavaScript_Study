import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
    <>
    <div className="wrap">
    <div className="header">
      <div className="header_top">
        <div className="header_top_in">
          <h1 className="logo"><img src="/images/logo.jpg" alt=""/></h1>

          <ul className="info_mn">
            <li>join</li>
            <li>login</li>
            <li>mymage</li>
            <li>cart(0)</li>
            <li>즐겨찾기</li>
          </ul>

          <div className="group">
            <ul className="q_menu">
              <li>NEW</li>
              <li>BEST</li>
              <li className="last">EVENT</li>
            </ul> 
            <div className="input_box">
              <span>검색어를 입력해주세요</span>
              <img src="/images/search.jpg" alt=""/>
            </div>
          </div>

        </div>
      </div>
      <div className="header_nav">
        <ul>
          <li><Link to="/"><img src="/images/nav_01.jpg" alt=""/></Link></li>
          <li><Link to="/component/Subcontent"><img src="/images/nav_02.jpg" alt=""/></Link></li>
          <li><img src="/images/nav_03.jpg" alt=""/></li>
          <li><img src="/images/nav_04.jpg" alt=""/></li>
          <li><img src="/images/nav_05.jpg" alt=""/></li>
          <li><img src="/images/nav_06.jpg" alt=""/></li>
          <li><img src="/images/nav_07.jpg" alt=""/></li>
          <li><img src="/images/nav_08.jpg" alt=""/></li>
          <li><img src="/images/nav_09.jpg" alt=""/></li>
        </ul>
      </div>
    </div>
    </div>
    </>
    )
}

export default Header;