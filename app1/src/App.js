// import logo from './logo.svg';
import './App.css';
import React from 'react';
// eslint-disable-next-line
import { Header, Content, Footer } from './func-components'
// eslint-disable-next-line
// import {Calendar , Button} from './class-components';
// import MsgBox from './class-props';
// import MsgBox2 from './func-props';
// import Banner from './banner';
// import { Calculator , Calculator2 } from './calculator';
// import { EventData1 , EventData2 } from './event-data';
// import { Table } from './table';
import RefsClass from './refs-class';
import RefsFunc from './refs-func';
function App() {
  return (
    <>
      <Header />
      <div class='App'>
        {/* This is old work */}
      {/* <p><center><Calendar /></center></p>
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
      <hr />*/} 
      {/* <h5>Random Banner</h5>
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
      <h5>Event Data1 Checker</h5>
      <EventData1 />
      <hr />
      
      <h5>Event Data2 Checker</h5>
      <EventData2 />
      <hr />
      <h5>Table</h5>
      <Table />
      <hr /> 
      <br /><br /><br /> */}
      <h5>RefsClass</h5>
      <RefsClass />
      <hr/>
      <h5>RefsFunc</h5>
      <RefsFunc />
      </div>
      <Footer />
    </>
  );
}

export default App;
