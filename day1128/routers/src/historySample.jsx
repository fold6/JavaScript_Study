import React,{useEffect} from "react";


function HistorySample({history}){
  const goBack = ()=>{
    history.goBack();//이전의 컴포넌트로 이동
  }
  const goHome = ()=>{
    history.push('/');//첫번째 컴포넌트로 이동
  }

  useEffect(() => {//이탈방지
        console.log(history);
        const unblock = history.block('정말 떠나실건가요?');
        return () => {
            unblock();
        };
    }, [history]);

  return(
   <>
    <h1>History</h1>
    <button onClick={goBack}>뒤로가기</button>
    <button onClick={goHome}>홈으로</button>
   </>
  )
}

export default HistorySample;