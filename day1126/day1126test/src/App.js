import React from "react";
import Wrapper from "./component/Wrapper";
import Hello from "./component/Hello";
import "./App.css";

function App() {
  /* 객체형으로 현재 컴포넌트에서 스타일을 선언하는 방법 */
  const style = {
    backgroundColor: "skyblue",
    color: "white",
    fontSize: 40,
    padding: "1rem",
  };

  const name = "hello2";
  return (
    <>
      {/* css를 적용하는 방법 : className 속성에 적용 */}
      {/* 
       컴포넌트안에 태그를 추가 할 수 없다 그래도 할수 있다
       방법은 매개변수 컴포넌트안에 { children } 객체를 매개변수 전달하고
       return 안쪽에 { children } 를 선언하면 
       컴포넌트 안에 이동 안해도 태그를 입력할 수 있다
      */}
      <Wrapper />
      <Wrapper>
        <div className="deeppink">hello1</div>
        <div style={style}>{name}</div>
        <h3 className="not_copo">나는 children이라서 나타남</h3>
        <Hello name="apple" color="gold" isSpecial={true} />
        <Hello name="banana" color="yellowgreen" />
        <Hello/>
        <Hello/>
        {/* <Hello/>에 기본상태값 대로 나오게 됨    */}
      </Wrapper>
    </>
  );
}

export default App;
