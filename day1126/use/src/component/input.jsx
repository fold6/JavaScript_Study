import React,{useState} from "react";

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