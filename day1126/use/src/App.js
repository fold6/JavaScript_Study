import React, { useState ,useRef } from 'react';
//import Counter from './component/counter';
//import Input from './component/input';
//import MultiInput from './component/multiinput';
//import UserList from './component/userlist';
import CreateUser from './component/CreateUser';
import UserList from './component/userlist2';
import './App.css';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const { username, email } = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '김사과',
      email: 'apple@apple.com'
    },
    {
      id: 2,
      username: '오렌지',
      email: 'orange@orange.com'
    },
    {
      id: 3,
      username: '반하나',
      email: 'banana@banana.com'
    },
    {
      id: 4,
      username: '이메론',
      email: 'melon@melon.com'
    },
    {
      id: 5,
      username: '배애리',
      email: 'berry@berry.com'
    }
  ])

  //[새 회원등록하기]
  // id 값을 저장하는 상수 (useRef는 선택하는것)
  const nextId = useRef(6);//객체를 추가할때 현재 6번째 객체의 번호를 지정
  // 회원 등록하는 부분 onCreate (새로 추가될 배열요소 구성)
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    
    setUsers(users.concat(user));
    //배열에 새 항목을 추가할때는 spread 연산자 or concat함수를 사용하여 배열 마지막(uers)에 user를 추가함

    //입력후 해당 입력요소를 빈공백으로 처리
    setInputs({
      username:'',
      email:''
    });

    nextId.current += 1; // 7
    // id값이 증가됨
  }

const onToggle = id => {
  setUsers(
    users.map( user => user.id === id ? {...user, active : !user.active}:user)
    // users.map((배열요소) => { 조건문 실행 })
    // user.id === id ? { ...user, active: !user.active } : user
    // ...user, 이벤트가 적용된 배열요소의 아이디값과 동일한 배열요소 지정
    // active: !user.active 현재 active의 상태의 반대로 설정

    // .map()의 역할
    // 배열 요소를 순회
    // 배열 안의 각 요소를 하나씩 가져와 작업을 수행.
    // 새로운 배열을 반환
    // 기존 배열을 수정하지 않고, 새로운 배열을 반환함.

    )
}
const onRemove = id => {
  setUsers(users.filter(user=> user.id !== id))
  // 1. users 배열의 각 요소(user)를 순회(5번)하면서 조건 검사
  // 2. user.id가 전달받은 id와 다르면 새 배열에 포함
  // 3. 조건에 맞는 새 배열을 setUsers로 업데이트
  // onRemove 함수는 특정 id와 일치하지 않는 사용자들만 남긴 새 배열로 상태를 업데이트함. 쉽게 말해 "해당 id 사용자를 삭제" 하는 역할임.
}


//props 매개변수 전달
//특정값을 전달, 함수전달, 배열전달


  return (
    <div>
     {/*
      <Counter/> 
      <Input/>
      <MultiInput/>
      <UserList/>
      */}
     <CreateUser 
         username={username} 
         email={email} 
         onChange={onChange} 
         onCreate ={onCreate}
     />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    </div>
  );
}

export default App;
