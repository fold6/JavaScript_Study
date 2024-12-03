import React from "react";

const testData = {
  apple: {
      name: '김사과',
      description: '학생, 착해요'
  },
  banana: {
      name: '반하나',
      description: '회사원, 잘자요'
  }, 
  mongo: {
    name: '망순이',
    description: '악당, 안되요'
}
};


function Test({match}){
  const { username } = match.params;
  const profile = testData[username];
  return(
   <>
   <h1>파라미터테스트</h1>   
   <h2>
      {username}({profile.name})
   </h2>
   <p>{profile.description}</p>
   </>
  )
}

export default Test;