import React from 'react';
import './App.css';
import MainRouter from './config/router';
import MenuBar from './components/menubar/menu';
import LoginPage from './pages/login/login';



function Aaa() {
  return (
    <div className="App">
      {/* <LoginPage></LoginPage> */}
      <MenuBar></MenuBar>
      <MainRouter></MainRouter>     
    </div>
  );
}

export default  Aaa;
