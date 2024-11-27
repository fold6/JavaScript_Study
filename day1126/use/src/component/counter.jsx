import React,{useState} from "react";
// 리액트 패키지에서 useState라는 hooks를 불러옴


function Counter(){
  const[number,setNumber] = useState(0);
  //number은 초기값 0이 할당
  //number에 값을 바꾼다 상태값 변화는 setNumber는 함수로 변화를 줌
  
  const plus = () => {
    setNumber(number + 1);
    console.log('1 더했어요');
  }
  const minus = () => {
    setNumber(number - 1);
    console.log('1 뺐어요');
  }

  return(
   <>
    <h2>{number}</h2>
    <button onClick={plus}>더하기</button>&nbsp;
    <button onClick={minus}>빼기</button>
   </> 
  );
}

export default Counter;