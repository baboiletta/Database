import React from 'react';
import './App.css';
import MainRouter from './config/router';
import MenuBar from './components/menubar/menu';

function Aaa() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <MainRouter></MainRouter>     
    </div>
  );
}

export default  Aaa;
