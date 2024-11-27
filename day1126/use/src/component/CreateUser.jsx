import React from 'react';
    function CreateUser({username, email, onChange, onCreate}){
        return(
            <div>
                <input name="username" placeholder='이름 입력해주세요' onChange={onChange} value={username}/>
                <input name="email" placeholder='이메일 입력해주세요' onChange={onChange} value={email}/>
                <button onClick={onCreate}>등록</button>
            </div>
        );
    }
    
export default CreateUser;