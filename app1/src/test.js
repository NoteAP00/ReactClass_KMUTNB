import './App.css';
import logo from './img/windmill.png';
import React from 'react';

function main() {
  return (
    <div className="App">
      <nav className="App-nav">test.js</nav>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello World! <br/> สวัสดีชาวโลก </h3>
      </header>
      <footer className='App-footer'>
        © 2023 Apinun Umbao @KMUTNB:EnET-C
      </footer>
    </div>
  );
}

export default main;
