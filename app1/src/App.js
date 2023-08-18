// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header, Content, Footer } from './func-components'
import {Calendar , Button} from './class-components';
import MsgBox from './class-props';
import MsgBox2 from './func-props';
import Banner from './banner';
import { Calculator , Calculator2 } from './calculator';
import { EventData1 } from './event-data';
import { Table } from './table';
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
      <h5>Random Banner</h5>
      <Banner />
      <hr />
      <h5>Button (How to use 'this' in Class Component)</h5>
      <Button />
      <hr />  
      <h5>Calculator (class)</h5>
      <Calculator />
      <hr />
      <h5>Calculator2 (function)</h5>
      <Calculator2 />
      <hr />
      <h5>Event Data Checker</h5>
      <EventData1 />
      <hr />
      <h5>Table</h5>
      <Table />
      <hr />
      <Footer />
    </>
  );
}

export default App;
