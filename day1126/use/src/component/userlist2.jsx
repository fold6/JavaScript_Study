import React from 'react';

function User({user}){
    return(
        <div>
            <b>{user.username}</b><span>{user.useremail}</span>&nbsp;&nbsp;
            <button>지우기</button>
        </div>
    )
}

function UserList({users}){
    return(
        <div>
            {users.map((user)=>(
                <User user={user} key={user.id}/>
            ))
            }
        </div>
    )
}

export default UserList;