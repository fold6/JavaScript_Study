import React, { useState } from 'react'; // React와 useState import
import CreateUser from './component/CreateUser'; // CreateUser 컴포넌트 import
import './App.css'; // 스타일 파일 import

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    }); // 입력 필드 상태 선언

    const { username, email } = inputs; // 비구조화 할당으로 상태 추출

    const onChange = (e) => {
        const { name, value } = e.target; // 이벤트 객체에서 name, value 추출
        setInputs({
            ...inputs,
            [name]: value // 입력값 업데이트
        });
    };

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
    ]); // 유저 리스트 상태 선언

    const onCreate = () => {
        const user = {
            id: users.length + 1, // 새 유저 id 생성
            username,
            email
        };

        setUsers([...users, user]); // 기존 users에 새 유저 추가
        setInputs({ username: '', email: '' }); // 입력 필드 초기화
    };

    return (
        <div>
            {/* CreateUser 컴포넌트에 props 전달 */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
        </div>
    );
}

export default App;
