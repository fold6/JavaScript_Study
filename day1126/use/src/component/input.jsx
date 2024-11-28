import React,{useState} from "react";
// input 태그에 상태관리
// 이벤트 onChange를 주로 활용함
// 이벤트에 의해서 value를 사용하고 value가 상태값이 된다

function Input(){
  
  const [text, setText] = useState("")
  const onChange = (e) => {
    setText(e.target.value);
  }
  const onReset = () => {
    setText("");
  }

  return(
  <>
   <input onChange={onChange} value={text}/>&nbsp;
   <button onClick={onReset}>지우기</button>
   <div>
    <b>값 : {text}</b>
   </div>
  </>
  );

}
export default Input;