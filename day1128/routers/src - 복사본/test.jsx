import React from "react";

const testData = {
    apple:{
        name:'김사과',
        description:'학생, 착해요'
    },
    banana:{
        name:'반하나',
        description:'회사원, 잘자요'
    },
    mango:{
        name:'망고',
        description:'회사원, 못자요'
    }
};

function Test({match}){
    const { username } = match.params;
    const profile = testData[username];
    return(
        <>
        <h1>파라미터 테스트</h1>
        <h2>
            {username}({profile.name})
        </h2>
        <p>{profile.description}</p>
        </>
    )
}

export default Test;