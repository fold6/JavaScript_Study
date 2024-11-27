import React from "react";
import "./header.css";

function Header({ children }) {
  return (
    <>
      <header className="header">
        {children}
        {/* <h1 className="logo">로고</h1>
        <ul className="nav">
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul> */}
      </header>
    </>
  );
}

export default Header;
