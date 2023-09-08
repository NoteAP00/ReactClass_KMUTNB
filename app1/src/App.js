
import './App.css';
import React from 'react';

import { userContext } from './context';
import Header from './context-header';
import  Content  from './context-content';

function App() {
  return (
      <userContext.Provider value={'Tom Jerry'}>
        <Header/>
        <Content/>
      </userContext.Provider>
  );
}

export default App;
