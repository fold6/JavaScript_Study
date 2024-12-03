import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './about.jsx';
import Profiles from './profiles';
import HistorySample from './historySample';
import Test from './test.jsx';
import './App.css';


function App() {
  return (
    <> <heade>
      <div></div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/about?detail=true">소개2</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/historySample">history 예제</Link>
        </li>
        <li>
          <Link to="/tests/apple">파라미터 테스트1</Link>
        </li>
        <li>
          <Link to="/tests/banana">파라미터 테스트2</Link>
        </li>
        <li>
          <Link to="/tests/mongo">파라미터 테스트3</Link>
        </li>
        
      </ul>
      </heade>
      <section></section>

      <hr/>
       <div className='contents'>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/profiles" component={Profiles}/>
        <Route path="/historySample" component={HistorySample}/>
        <Route path="/tests/:username" component={Test}/>
      </div>
      <footer></footer>
    </>
  );
}

export default App;
