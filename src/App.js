import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/counter';
import Items from './components/items'
function App() {
  const [isLoading,setisLoading] = useState(true);
 
  return (
    <React.Fragment>
      <Items/>
      <Counter></Counter>
    </React.Fragment>
  );
}

export default App;
