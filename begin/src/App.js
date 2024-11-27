import React from "react";
import "./App.css";
import Wrapper from "./wrapper";
import Header from "./header";
import MainImg from "./main";
import Content from "./contents";
import Footer from "./footer";
//import LogoArea from "./logo";
//import NavArea from "./navArea";
//import  컴포넌트명 from "경로"

function App() {
  return (
    <>
    <Wrapper>
      <Header>
        <h1 className="logo">로고</h1>
        <ul className="nav">
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul>
        {/* <LogoArea />
        <NavArea /> */}
      </Header>
      <MainImg />
      <MainImg />
      <Content />
      <Footer />
      </Wrapper>
    </>
  );
}

export default App;
