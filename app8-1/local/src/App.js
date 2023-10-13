import React from 'react';
import RestBasic from './rest-basic';
import FormGet from './form-get';
import FormPost from './form-post';
function App() {
  return (
    <div className="App">
      <RestBasic/>
      <hr/> 
      <FormGet/>
      <hr/>
      <FormPost/>
    </div>
  );
}

export default App;
