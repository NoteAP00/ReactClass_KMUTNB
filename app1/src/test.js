import './App.css';
import logo from './img/windmill.png';
import React from 'react';
import './style.css'
import ThaiDate from './ThaiDate.js'
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
const thdate = new ThaiDate(11, 8, 2023);
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
      <div className='App-body'>
        <h2>Date and Time</h2>
        <p>{thdate.getLongDate()}</p>
        <p>{thdate.getShortDate()}</p>
        <p>{thdate.isLeapYear() ? 'ปีนี้เป็นปีอธิกสุรทิน' : 'ปีนี้ไม่ใช่ปีอธิกสุรทิน'}</p>
      </div>
      <footer className='App-footer'>
        © 2023 Apinun Umbao @KMUTNB:EnET-C
      </footer>
    </div>
  );
}

export default main;
