import React from 'react';
//배열 렌더링
// [map(함수)]
// 배열명.map((배열요소 및 인덱스)=>(
//  배열요소.메소드()
// ))

// 컴포넌트 2개를 생성... 1번 배열리스트.. 2번 배열요소를 구성하는 컴포넌트
//배열요소 컴포넌트 내부컴포넌트로 한다 배열리스트 컴포넌트위쪽에 선언함
// 배열명 =[{객체형1},{객체형2}] 객체를 추가할때 추가한 객체를 선택하기 위해 useRef()활용
// const nextId = useRef(새로 발생할 인덱스값을 지정)
// 배열값은 상위컴포넌트에는 전달 할 수 없다
// 그래서 대부분 사용한다면 app컴포넌트에 설정하고 하위에 있는 모든 컴포넌트에 사용할수있다
// (단점 메모리를 많이 잡아먹음)

function User({user}){
  return (
      <div>
          <b>{user.username}</b> <span>({user.email})</span>
      </div>
  );
}


function UserList(){
  const users = [
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
  ];
  return(
    <div>
      {/*
      <div>
      <User user={users[0]}/>
      </div>
      <div>
      <User user={users[1]}/>
      </div>
      <div>
      <User user={users[2]}/>
      </div>
      <div>
      <User user={users[3]}/>
      </div>
      <div>
      <User user={users[4]}/>
      </div>
       
      [map()함수]
      배열명.map((배열요소 및 인덱스)=>(
          배열요소.메소드()
      ))

       */}
      {users.map((user,index)=>(
        <User user={user} key={index}/>
      ))}
      
    </div>
  )
}

export default UserList;