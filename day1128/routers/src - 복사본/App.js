import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about.jsx';
import Profiles from './profiles';
import HistorySample from './historySample.jsx';
import Test from './test.jsx';
import './App.css'

function App() {
  return (
    <>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <li>
        <Link to="/profiles">프로필 목록</Link>
      </li>
      <li>
        <Link to="/historySample">history 예제</Link>
      </li>
      <li>
        <Link to="/tests/apple">파라미터 Test</Link>
      </li>
      <li>
        <Link to="/tests/banana">파라미터 Test2</Link>
      </li>
      <li>
        <Link to="/tests/mango">파라미터 Test3</Link>
      </li>
    </ul>
    <hr></hr>
    <div>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profiles" component={Profiles}/>
      <Route path="/historySample" component={HistorySample}/>
      <Route path="/tests/:username" component={Test}/>
    </div>
    </>
  );
}

export default App;
