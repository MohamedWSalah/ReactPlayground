import React from 'react';
import './App.css';
import Counter from './components/counter';
import Items from './components/items'
function App() {
  return (
    <React.Fragment>
      <Items/>
      <Counter></Counter>
    </React.Fragment>
      
  );
}

export default App;
