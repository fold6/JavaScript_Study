import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Route} from 'react-router-dom';
import './App.css';
import MainContents from './component/MainContent';
import SubContents from './component/SubContent';

function App() {
  return (
    <>
    <Header/>
    <div>
      <Route path="/" exact={true} component={MainContents}></Route>
      <Route path="/component/SubContents" component={SubContents}></Route>
    </div>
    <Footer/>
    </>
  );
}

export default App;
