import './App.css';
import logo from './img/windmill.png';
import React from 'react';
import './style.css'
function App() {
  /* const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'larger',
    padding: '3px'
  } */
  return (
  /*<div style={divStyle}>Hello React</div>*/
  <>
  <h2>Test External CSS</h2>
  <div className='title'>React & React Native</div>
  </>
  )

}
let color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'brown', 'gray', 'black', 'white']
let list = color.map((item, index) => <li key={index}>{item}</li>)
function main() {
  return (
    <div className="App">
      <nav className="App-nav">test.js</nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello World! <br /> สวัสดีชาวโลก </h3>
        <App />
      </header>
      <div className='App-body'>
        <h2>Test Map Color</h2>
        <ul>{list}</ul>
      </div>
      <footer className='App-footer'>
        © 2023 Apinun Umbao @KMUTNB:EnET-C
      </footer>
    </div>
  );
}

export default main;
