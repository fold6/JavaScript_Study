import React from 'react';
import './App.css';
import Header from './header';
import MainImg from './main';
import Content from './contents';
import Footer from './footer';


function App() {
  return(
    <>
    <Header/>
    {/* 만약 header안에 또nav 컴포넌트를 넣고싶다면 아래와 같이 html처럼 Header를 열고닫음
    <Header>
      <Nav/>
    </Header>
     */}
    <MainImg/>
    <Content/>
    <Footer/>

    </>

);
}


export default App;
