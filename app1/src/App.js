// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components';
import MsgBox from './class-props';
import MsgBox2 from './func-props';
function App() {
  return (
    <>
      <Header />
      <p><center><Calendar /></center></p>
      <Content />
      <hr />
      <h5>MsgBox</h5>
      <MsgBox
        text='React & React Native'
        color='blue'
        bgcolor='#ccc'
        fontSize='18pt'
        border='1px solid black'
      />
      <h5>MsgBox2</h5>
      <MsgBox2
        text='การใช้ props ใน Function Component'
        color='red'
        bgColor='#ccc'
        fontSize='18pt'
        border='1px solid black'
      />
      <hr />
      <Footer />
    </>
  );
}

export default App;
