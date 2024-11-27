import React,{useState,useRef} from "react";

// const MultiInput = () =>{}

function MultiInput() {
    const [inputs, setInputs] = useState({userid:"",name:""})
    const {userid,name} = inputs;//{userid:"",name:""} 비구조 할당을 통해 값 전달
    const useridInput = useRef();
    
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