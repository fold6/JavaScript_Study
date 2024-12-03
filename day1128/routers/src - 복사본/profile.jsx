import React from "react";

/* user data */
const profileData = {
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

const Profile = ({match}) => {
// 파라미터를 받을 땐 match 안에 들어있는 params 값을 참조합니다.
// match 객체에는 현재의 주소가 Route 컴포넌트에서 정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있습니다.
// path 규칙에는 "/profiles/:username" 이라고 넣어주면
// username에 해당하는 값을 파라미터로 넣어주어서 Profile 컴포넌트에서 match props를 통해 전달받을 수 있게 됩니다.

    const { username } = match.params;
    const profile = profileData[username];
    //지정한 객체에 속성과 속성값들을 profile에 담음

    return(
        <div>
            <h2>
                {username}({profile.name})
                </h2>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;