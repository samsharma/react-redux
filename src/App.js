import React from 'react';
import {Provider} from 'react-redux';

//components

import BookContainer from './components/bookContainer';
import HookBookContainer from './components/HookBookContainer';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
   
      <BookContainer></BookContainer>
      <HookBookContainer></HookBookContainer>
    </div>
    </Provider>
  );
}

export default App;
