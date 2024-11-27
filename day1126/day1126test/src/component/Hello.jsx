import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <>
      {/* <div style={{ color }}>안녕하세요{name}</div> */}
      <div style={{ color }}>
        {isSpecial ? <b>★</b> :  <b>☆</b>}안녕하세요{name}
   {/* 참이면 색칠된 별, 아니면 빈 별 */}
      </div>
    </>
  );
}

Hello.defaultProps = {
  color: "pink",
  name: " 기본 속성값",
};
/*App.js <Hello/>에 기본으로 보여주게 될 값을 위와같이 지정 */
export default Hello;
