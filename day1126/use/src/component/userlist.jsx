import React from 'react';
function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList(){
    const users = [
    {
        id:1,
        username:'김사과',
        email:'apple@apple.com'
    },
    {
        id:2,
        username:'오렌지',
        email:'orange@orange.com'
    },
    {
        id:3,
        username:'반하나',
        email:'banana@banana.com'
    },
    {
        id:4,
        username:'이메론',
        email:'melon@melon.com'
    },
    {
        id:5,
        username:'배애리',
        email:'berry@berry.com'
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
        </div> */}

        {
        /* 유저가 많을때 복붙할수없으니까 map함수를씀 

        [map(함수)]
        {배열명.map((배열요소 및 인덱스)=>(
            배열요소.메소드()
        ))}
                
        */}
        {users.map((user,index)=>(
            <User user={user} key={index}/>
        ))}
            

    </div>
    )    
}
export default UserList;