import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/counter';
import Items from './components/items';
import Loading from './components/loading';

function App() {
  const [isLoading,setisLoading] = useState(true);

  setTimeout(()=>
    {
     setisLoading(false);
    },2000);

    if(isLoading){
      return (
        <div>     
           <Loading isLoading={isLoading}/>
        </div>
      );
    }
    else
    {
      return(
        <React.Fragment>
          <Items/>
          <Counter/>
        </React.Fragment>
      )
    }
    
  }


export default App;
