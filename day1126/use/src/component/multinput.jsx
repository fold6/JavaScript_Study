import React,{useState,useRef} from "react";
// 여러개의 상태를 관리

// const MultiInput = () =>{}

function MultiInput() {
    const [inputs, setInputs] = useState({userid:"",name:""})
    //const [배열명, setInputs] = useState(배열명=[]) 배열로 상태값 관리
    const {userid,name} = inputs;//{userid:"",name:""} 비구조 할당을 통해 값 전달
    const useridInput = useRef();//특정 DOM을 선택하기는 설정하고 
    //<input name="userid" ref={useridInput}/> 선택되는 DOM에 ref={useridInput} 선언함
    
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs, // ...spread 문법 (객체를 복사)
            [name]:value // name 키를 가진값을 value로 설정
        });
    }
    
    //이벤트가 발생할때
    const onReset = () => {
        setInputs({
            userid:"", name:""
        })
        useridInput.current.focus();
    }
    return(
        <>
        <p>
        <input name="userid" onChange={onChange} placeholder="아이디" value={userid} ref={useridInput} />&nbsp;

        <input name="name" onChange={onChange} placeholder="이름" value={name}/>&nbsp;&nbsp;
        <button onClick={onReset}>지우기</button>
        </p>
        
        <div>
            <b>아이디:{userid}</b>&nbsp; ,&nbsp;<b>이름:{name}</b>
        </div>
        
        </>
    )
}

export default MultiInput;