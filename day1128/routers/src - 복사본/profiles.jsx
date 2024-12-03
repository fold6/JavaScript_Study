import React from "react";
import {Link,Route} from "react-router-dom";
import Profile from './profile';

const Profiles = () => {
    return(
        <div>
            <h1>유저목록</h1>
            {/* 파라미터 : /profile/apple  */}
            <ul>
                <li>
                    <Link to="/profiles/apple">apple</Link>
                </li>
                <li>
                    <Link to="/profiles/banana">banana</Link>
                </li>
                <li>
                    <Link to="/profiles/mango">mango</Link>
                </li>
            </ul>
        <Route path="/profiles" exact render={() => <div>유저를 선택하세요</div>}/>
        <Route path="/profiles/:username" component={Profile}/>


        </div>
    );
};

export default Profiles;