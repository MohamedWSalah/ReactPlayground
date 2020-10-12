import React, { Component, useEffect, useState } from 'react';
import Button from './common/button'
function Counter()
{
    const [count,setCount]= useState(0);
    // const date = new Date();
    // const hours = date.getDate();
    const Inc = () => {setCount(count+1)};
    const Dec = () => {count >= 1?setCount(count-1):setCount(count)};
    useEffect(()=>
    {
        var titleHeader = "";
        count%2===0?titleHeader="Even":titleHeader="odd"
        document.title = `${titleHeader}`;
    });
    
    return(
            <div>
                <center className="m-2">
                <Button className="btn btn-primary"  text="Up" onClickFunc={Inc}/>
                <h1 style={count%2===0?{color:"red",fontSize:'150px'}:{color:"green",fontSize:'150px'}}>{count}</h1>
                <Button className="btn btn-primary"  text="Down" onClickFunc={Dec}/>
                </center>
            </div>
            
    )
}

export default Counter;