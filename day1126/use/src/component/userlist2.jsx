import React from "react";

function User({user,onToggle,onRemove}){
   return(
      <div>
        <b style={{cursor:'Pointer',
                    color:user.active?'deeppink' : 'black'
                }}
                onClick={()=>onToggle(user.id)}
        >{user.username}</b>
        <span>{user.email}</span>&nbsp;&nbsp;
        <button onClick={()=>onRemove(user.id)}>지우기</button>
      </div>
   )
}


function UserList({users, onToggle, onRemove}){
  return(
    <div>
      {users.map((user)=>(
        <User user={user} key={user.id} onToggle={onToggle} onRemove={onRemove}/>
      ))
      }
    </div>
  )
}

export default UserList;