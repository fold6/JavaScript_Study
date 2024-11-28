import React from "react";
import {Link,Route} from "react-router-dom";


const Profiles = () => {
    return(
        <div>
            <h1>유저목록</h1>
            <ul>
                <li>
                    <Link to="/profiles/apple">apple</Link>
                </li>
                <li>
                    <Link to="/profiles/banana">banana</Link>
                </li>
            </ul>
        </div>
    );
};

export default Profiles;